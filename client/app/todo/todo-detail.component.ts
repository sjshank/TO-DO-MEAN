import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'todo-detail',
    templateUrl: 'app/todo/todo-detail.component.html',
    styleUrls: ['app/todo/todo.component.css']
})
export class TodoDetailComponent implements OnInit {

    @Input() item: any;
    @Output() onDeleteItem = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    deleteItem(item: any): void {
        this.onDeleteItem.emit(item);
    }

}