import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, FORM_DIRECTIVES, FORM_BINDINGS } from '@angular/common'
import { Router } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-login',
    templateUrl: 'html/login.component.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})
export class LoginComponent {
    loginForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.loginForm = builder.group({
            username: [""],
            password: [""]
        });

        if(localStorage.getItem('token') != null){
            this.router.parent.navigate(['./Home']);
        }
    }

    onLogin(): void {
        var data = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/login_service.php', data, { headers: headers })
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