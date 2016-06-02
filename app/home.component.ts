import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-home',
    templateUrl: 'html/home.component.html'
})
export class HomeComponent {
    constructor(
        private router: Router) {
    }
}