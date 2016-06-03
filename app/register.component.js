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
var RegisterComponent = (function () {
    function RegisterComponent(builder, http, router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            username: [""],
            email: [""],
            password: [""]
        });
        if (localStorage.getItem('token') != null) {
            this.router.parent.navigate(['./Home']);
        }
    }
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var data;
        var postdata = "username=" + this.registerForm.value.username + "&email=" + this.registerForm.value.email + "&password=" + this.registerForm.value.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/register_service.php', postdata, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (x) { return data = x; }, function (err) {
            var obj = JSON.parse(err._body);
            document.getElementById("alert").innerHTML = obj;
        }, function () {
            var obj = JSON.parse(data._body);
            localStorage.setItem('token', obj.username);
            _this.router.parent.navigate(['./Home']);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-register',
            templateUrl: 'html/register.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map