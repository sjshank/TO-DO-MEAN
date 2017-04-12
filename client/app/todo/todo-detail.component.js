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
var TodoDetailComponent = (function () {
    function TodoDetailComponent() {
        this.onDeleteItem = new core_1.EventEmitter();
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
    };
    TodoDetailComponent.prototype.deleteItem = function (item) {
        this.onDeleteItem.emit(item);
    };
    return TodoDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TodoDetailComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoDetailComponent.prototype, "onDeleteItem", void 0);
TodoDetailComponent = __decorate([
    core_1.Component({
        selector: 'todo-detail',
        templateUrl: 'app/todo/todo-detail.component.html',
        styleUrls: ['app/todo/todo.component.css']
    }),
    __metadata("design:paramtypes", [])
], TodoDetailComponent);
exports.TodoDetailComponent = TodoDetailComponent;
//# sourceMappingURL=todo-detail.component.js.map