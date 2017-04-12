import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header//header.component.css']
})
export class HeaderComponent implements OnInit {

    title: string = "TO-DO Web Portal";
    isLoggedIn : boolean = false;
    user: any;
    constructor() {
    }

    ngOnInit() {
        if(localStorage.getItem('currentUser')){
            this.user  = JSON.parse(localStorage.getItem('currentUser'))
            this.isLoggedIn = true;
        }
    }


}