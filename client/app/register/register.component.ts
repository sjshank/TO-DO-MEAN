import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegisterService } from './register.service';

import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-register',
  templateUrl: 'app/register/register.component.html',
  styleUrls: ['app/register/register.component.css']
})
export class RegisterComponent implements OnInit {
  title: string = 'Register New User';
  rForm: FormGroup;
  data: string = '';
  private _alive: boolean = true;

  constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
    private _registerService: RegisterService) { }

  ngOnInit() {
    this.rForm = this._fb.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  doRegistration(model: any): void {
    this._registerService.registerUser(model)
      .takeWhile(() => this._alive)
      .subscribe(
      data => {
        if(data){
          this._router.navigate(['/list']);
        }
      },
      error => {
        console.log("error", error);
      }
      )
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._alive = false;
  }

}