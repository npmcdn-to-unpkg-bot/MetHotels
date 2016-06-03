import { Component, OnInit } from '@angular/core';
import { FormBuilder, ControlGroup, FORM_DIRECTIVES, FORM_BINDINGS } from '@angular/common'
import { Router } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-rezervacija',
    templateUrl: 'html/rezervacija.component.html'
})
export class RezervacijaComponent implements OnInit {
    http: Http;
    router: Router;
    rooms: Object[];

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    ngOnInit(): void {
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
                    this.rooms = JSON.parse(data._body);
                }
            );
    }

    editRoom(id: Number) {
        let link = ['EditRoom', { id: id }];
        this.router.navigate(link);
    }
}