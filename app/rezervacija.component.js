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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var RezervacijaComponent = (function () {
    function RezervacijaComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    RezervacijaComponent.prototype.ngOnInit = function () {
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
            _this.rooms = JSON.parse(data._body);
        });
    };
    RezervacijaComponent.prototype.editRoom = function (id) {
        var link = ['EditRoom', { id: id }];
        this.router.navigate(link);
    };
    RezervacijaComponent = __decorate([
        core_1.Component({
            selector: 'my-rezervacija',
            templateUrl: 'html/rezervacija.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router])
    ], RezervacijaComponent);
    return RezervacijaComponent;
}());
exports.RezervacijaComponent = RezervacijaComponent;
//# sourceMappingURL=rezervacija.component.js.map