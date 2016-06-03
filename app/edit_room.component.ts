import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS } from '@angular/common'
import { Router, RouteParams } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-edit-room',
    templateUrl: 'html/edit_room.component.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})
export class EditRoomComponent implements OnInit {
    addRoomForm: ControlGroup;
    http: Http;
    router: Router;
    isAuth: boolean;
    roomId: Number;

    constructor(builder: FormBuilder, http: Http, router: Router,
                private routeParams: RouteParams) {
        this.http = http;
        this.router = router;
        this.addRoomForm = builder.group({
            name: [""],
            beds: [""],
            size: [""]
        });
        this.isAuth = localStorage.getItem('token') != null;
        this.roomId = parseInt(this.routeParams.get('id'));
    }

    ngOnInit() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data;
        this.http.post('http://localhost/MetHotels/php/get_rooms_service.php', "", { headers: headers })
            .map(res => res)
            .subscribe(x => data = x,
                err => {
                    var obj = JSON.parse(err._body);
                    document.getElementById("alert").innerHTML = obj;
                },
                () => {
                    var obj = JSON.parse(data._body).filter(room => room.id == this.roomId)[0];
                    this.addRoomForm.controls.name.updateValue(obj.name);
                    this.addRoomForm.controls.beds.updateValue(obj.beds);
                    this.addRoomForm.controls.size.updateValue(obj.size);
                }
            );
    }

    onEdit(): void {
        var data;
        var postdata = "id=" + this.roomId + "&name=" + this.addRoomForm.value.name + "&beds=" + this.addRoomForm.value.beds + "&size=" + this.addRoomForm.value.size;
        console.log(postdata);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/edit_room_service.php', postdata, { headers: headers })
            .map(res => res)
            .subscribe(x => data = x,
                err => {
                    var obj = JSON.parse(err._body);
                    console.log(obj);
                    document.getElementById("alert").innerHTML = "Error " + err._code + "<br>" + obj;
                },
                () => {
                    console.log(data);
                    var obj = JSON.parse(data._body);
                    document.getElementById("alert").innerHTML = "Soba izmenjena:<br>[" + obj.id + "] " + obj.name + " (" + obj.beds + ", " + obj.size + " m2)";
                }
            );
    }
}