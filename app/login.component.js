"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var LoginComponent = (function () {
    function LoginComponent(builder, http, router) {
        this.http = http;
        this.router = router;
        this.loginForm = builder.group({
            username: [""],
            password: [""]
        });
        if (localStorage.getItem('token') != null) {
            this.router.parent.navigate(['./Home']);
        }
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var postdata = "username=" + this.loginForm.value.username + "&password=" + this.loginForm.value.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data;
        this.http.post('http://localhost/MetHotels/php/login_service.php', postdata, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (x) { return data = x; }, function (err) {
            var obj = JSON.parse(err._body);
            console.log(obj);
            document.getElementById("alert").innerHTML = obj;
        }, function () {
            console.log(data);
            var obj = JSON.parse(data._body);
            localStorage.setItem('token', obj.username);
            _this.router.parent.navigate(['./Home']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'html/login.component.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map