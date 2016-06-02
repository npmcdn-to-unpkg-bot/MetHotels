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
    postResponse: String;
    rooms: Object[];

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    ngOnInit(): void {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/get_rooms_service.php', "", { headers: headers })
            .map(res => res)
            .subscribe(data => this.postResponse = data,
                err => {
                    var obj = JSON.parse(err._body);
                    console.log(obj);
                    document.getElementById("alert").innerHTML = obj;
                },
                () => {
                    console.log(this.postResponse);
                    this.rooms = JSON.parse(this.postResponse._body);
                }
            );
    }
}