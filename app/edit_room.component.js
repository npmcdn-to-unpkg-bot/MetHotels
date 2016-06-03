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
var EditRoomComponent = (function () {
    function EditRoomComponent(builder, http, router, routeParams) {
        this.routeParams = routeParams;
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
    EditRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data;
        this.http.post('http://localhost/MetHotels/php/get_rooms_service.php', "", { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (x) { return data = x; }, function (err) {
            var obj = JSON.parse(err._body);
            document.getElementById("alert").innerHTML = obj;
        }, function () {
            var obj = JSON.parse(data._body).filter(function (room) { return room.id == _this.roomId; })[0];
            _this.addRoomForm.controls.name.updateValue(obj.name);
            _this.addRoomForm.controls.beds.updateValue(obj.beds);
            _this.addRoomForm.controls.size.updateValue(obj.size);
        });
    };
    EditRoomComponent.prototype.onEdit = function () {
        var data;
        var postdata = "id=" + this.roomId + "&name=" + this.addRoomForm.value.name + "&beds=" + this.addRoomForm.value.beds + "&size=" + this.addRoomForm.value.size;
        console.log(postdata);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/MetHotels/php/edit_room_service.php', postdata, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (x) { return data = x; }, function (err) {
            var obj = JSON.parse(err._body);
            console.log(obj);
            document.getElementById("alert").innerHTML = "Error " + err._code + "<br>" + obj;
        }, function () {
            console.log(data);
            var obj = JSON.parse(data._body);
            document.getElementById("alert").innerHTML = "Soba izmenjena:<br>[" + obj.id + "] " + obj.name + " (" + obj.beds + ", " + obj.size + " m2)";
        });
    };
    EditRoomComponent = __decorate([
        core_1.Component({
            selector: 'my-edit-room',
            templateUrl: 'html/edit_room.component.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], EditRoomComponent);
    return EditRoomComponent;
}());
exports.EditRoomComponent = EditRoomComponent;
//# sourceMappingURL=edit_room.component.js.map