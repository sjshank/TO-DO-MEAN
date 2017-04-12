import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';
import "rxjs/add/operator/takeWhile";

@Component({
    selector: 'app-login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
})
export class LoginComponent implements OnInit {
    private _alive = true;
    title: string = 'Login';
    lForm: FormGroup;
    constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
        private _loginService: LoginService) { }

    ngOnInit() {
        this._loginService.logoutUser();
        this.lForm = this._fb.group({
            'userName': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    doLogin(model: any): void {
        this._loginService.loginUser(model)
            .takeWhile(() => this._alive)
            .subscribe(
            data => {
                if (data) {
                    this._router.navigate(['/list']);
                }
            },
            error => {
                console.log("error", error);
            }
            )
    };

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this._alive = false;
    }

}