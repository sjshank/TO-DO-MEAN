import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    public pTitle: string = 'TO-DO Items';
    constructor() { }
}