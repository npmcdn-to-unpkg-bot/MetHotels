import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-rezervacija',
    templateUrl: 'html/rezervacija.component.html'
})
export class RezervacijaComponent {
    constructor(
        private router: Router) {
    }
}