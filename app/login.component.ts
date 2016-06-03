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
        var data;
        var postdata = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/login_service.php', postdata, { headers: headers })
            .map(res => res)
            .subscribe(x => data = x,
                err => {
                    var obj = JSON.parse(err._body);
                    document.getElementById("alert").innerHTML = obj;
                },
                () => {
                    var obj = JSON.parse(data._body);
                    localStorage.setItem('token', obj.username);
                    this.router.parent.navigate(['./Home']);
                }
            );
    }
}