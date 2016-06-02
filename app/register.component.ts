import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, FORM_DIRECTIVES, FORM_BINDINGS } from '@angular/common'
import { Router } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-register',
    templateUrl: 'html/register.component.html'
})
export class RegisterComponent {
    registerForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            username: [""],
            email: [""],
            password: [""]
        });

        if(localStorage.getItem('token') != null){
            this.router.parent.navigate(['./Home']);
        }
    }

    onRegister(): void {
        var data = "username=" + this.registerForm.value.username + "&email=" + this.registerForm.value.email + "&password=" + this.registerForm.value.password;
        console.log(data);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/register_service.php', data, { headers: headers })
            .map(res => res)
            .subscribe(data => this.postResponse = data,
                err => {
                    var obj = JSON.parse(err._body);
                    console.log(obj);
                    document.getElementById("alert").innerHTML = obj;
                },
                () => {
                    console.log(this.postResponse);
                    var obj = JSON.parse(this.postResponse._body);
                    localStorage.setItem('token', obj.username);
                    this.router.parent.navigate(['./Home']);
                }
            );
    }
}