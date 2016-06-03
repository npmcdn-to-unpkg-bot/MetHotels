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
var home_component_1 = require('./home.component');
var rezervacija_component_1 = require('./rezervacija.component');
var register_component_1 = require("./register.component");
var login_component_1 = require("./login.component");
var add_room_component_1 = require("./add_room.component");
var edit_room_component_1 = require("./edit_room.component");
var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        router.subscribe(function (val) {
            console.log(localStorage.getItem('token'));
            _this.token = localStorage.getItem('token');
            _this.isAuth = _this.token != null;
        });
    }
    AppComponent.prototype.onLogout = function () {
        this.token = null;
        localStorage.removeItem('token');
        this.router.parent.navigate(['./Home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'html/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/rezervacija',
                name: 'Rezervacija',
                component: rezervacija_component_1.RezervacijaComponent
            },
            {
                path: '/register',
                name: 'Register',
                component: register_component_1.RegisterComponent
            },
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent
            },
            {
                path: '/add_room',
                name: 'AddRoom',
                component: add_room_component_1.AddRoomComponent
            },
            {
                path: '/edit_room/:id',
                name: 'EditRoom',
                component: edit_room_component_1.EditRoomComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map