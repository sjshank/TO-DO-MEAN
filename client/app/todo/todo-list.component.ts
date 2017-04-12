import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToDOService } from './todo.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/todo-list.component.html',
    styleUrls: ['app/todo/todo.component.css']
})
export class TodoListComponent implements OnInit {
    title: string = "TO-DO Items";

    items: any = [];
    constructor(private _todoService: ToDOService) { }

    ngOnInit() {
        this._getTodoList();
    }

    private _getTodoList() {
        this._todoService.list()
            .subscribe(data => {
                this.items = data.list;
            },
            error => {
                console.log(error);
            })
    }

    deleteItem(event: any): void {
        this._todoService.deleteItem(event.id)
            .subscribe(data => {
                if (data) {
                    this._getTodoList();
                }
            },
            error => {
                console.log(error);
            });
    }
}