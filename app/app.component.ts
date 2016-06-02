import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HomeComponent} from './home.component';
import {RezervacijaComponent} from './rezervacija.component';
import {RegisterComponent} from "./register.component";
import {LoginComponent} from "./login.component";
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    },
    {
        path: '/rezervacija',
        name: 'Rezervacija',
        component: RezervacijaComponent
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    isAuth: boolean;
    token: String;
    constructor(private router:Router) {
        router.subscribe((val) => {
            console.log(localStorage.getItem('token'));
            this.token = localStorage.getItem('token');
            this.isAuth = this.token != null;
        });
    }

    onLogout(): void {
        this.token = null;
        localStorage.removeItem('token');
        this.router.parent.navigate(['./Home']);
    }
}