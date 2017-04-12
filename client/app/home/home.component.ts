import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
    }

    login(): void {
        this._router.navigate(['/login']);
    };

    register(): void {
        this._router.navigate(['/register']);
    }

}