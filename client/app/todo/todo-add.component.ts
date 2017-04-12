import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { ToDOService } from './todo.service';

@Component({
    selector: 'todo-add',
    templateUrl: 'app/todo/todo-add.component.html',
    styleUrls: ['app/todo/todo.component.css']
})
export class TodoAddComponent implements OnInit {

    title: string = "Add TO-DO Item";
    iForm: FormGroup;
    constructor(private _fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute,
        private _todoService: ToDOService) { }

    ngOnInit() {
        this.iForm = this._fb.group({
            'iName': ['', Validators.required],
            'iComment': ['', Validators.required]
        });
    }

    saveItem(model: any): void {
        console.log(model);
        this._todoService.addItem(model)
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
    }

}