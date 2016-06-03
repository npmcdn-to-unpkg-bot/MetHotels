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
var AddRoomComponent = (function () {
    function AddRoomComponent(builder, http, router) {
        this.http = http;
        this.router = router;
        this.addRoomForm = builder.group({
            name: [""],
            beds: [""],
            size: [""]
        });
        this.isAuth = localStorage.getItem('token') != null;
    }
    AddRoomComponent.prototype.onAdd = function () {
        var postdata = "name=" + this.addRoomForm.value.name + "&beds=" + this.addRoomForm.value.beds + "&size=" + this.addRoomForm.value.size;
        console.log(postdata);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data;
        this.http.post('http://localhost/MetHotels/php/add_room_service.php', postdata, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (x) { return data = x; }, function (err) {
            var obj = JSON.parse(err._body);
            console.log(obj);
            document.getElementById("alert").innerHTML = "Error " + err._code + "<br>" + obj;
        }, function () {
            console.log(data);
            var obj = JSON.parse(data._body);
            document.getElementById("alert").innerHTML = "Soba dodata:<br>[" + obj.id + "] " + obj.name + " (" + obj.rooms + ", " + obj.size + " m2)";
        });
    };
    AddRoomComponent = __decorate([
        core_1.Component({
            selector: 'my-add-room',
            templateUrl: 'html/add_room.component.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router])
    ], AddRoomComponent);
    return AddRoomComponent;
}());
exports.AddRoomComponent = AddRoomComponent;
//# sourceMappingURL=add_room.component.js.map