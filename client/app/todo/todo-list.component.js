"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var TodoListComponent = (function () {
    function TodoListComponent(_todoService) {
        this._todoService = _todoService;
        this.title = "TO-DO Items";
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this._getTodoList();
    };
    TodoListComponent.prototype._getTodoList = function () {
        var _this = this;
        this._todoService.list()
            .subscribe(function (data) {
            _this.items = data.list;
        }, function (error) {
            console.log(error);
        });
    };
    TodoListComponent.prototype.deleteItem = function (event) {
        var _this = this;
        this._todoService.deleteItem(event.id)
            .subscribe(function (data) {
            if (data) {
                _this._getTodoList();
            }
        }, function (error) {
            console.log(error);
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: 'app/todo/todo-list.component.html',
        styleUrls: ['app/todo/todo.component.css']
    }),
    __metadata("design:paramtypes", [todo_service_1.ToDOService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map