import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, FORM_DIRECTIVES, FORM_BINDINGS } from '@angular/common'
import { Router } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-add-room',
    templateUrl: 'html/add_room.component.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})
export class AddRoomComponent {
    addRoomForm: ControlGroup;
    http: Http;
    router: Router;
    isAuth: boolean;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.addRoomForm = builder.group({
            name: [""],
            beds: [""],
            size: [""]
        });
        this.isAuth = localStorage.getItem('token') != null;
    }

    onAdd(): void {
        var postdata = "name=" + this.addRoomForm.value.name + "&beds=" + this.addRoomForm.value.beds + "&size=" + this.addRoomForm.value.size;
        console.log(postdata);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data;
        this.http.post('http://localhost/MetHotels/php/add_room_service.php', postdata, { headers: headers })
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
                    document.getElementById("alert").innerHTML = "Soba dodata:<br>[" + obj.id + "] " + obj.name + " (" + obj.beds + ", " + obj.size + " m2)";
                }
            );
    }
}