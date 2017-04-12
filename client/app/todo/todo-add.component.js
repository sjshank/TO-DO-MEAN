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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var todo_service_1 = require("./todo.service");
var TodoAddComponent = (function () {
    function TodoAddComponent(_fb, _router, _activatedRoute, _todoService) {
        this._fb = _fb;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._todoService = _todoService;
        this.title = "Add TO-DO Item";
    }
    TodoAddComponent.prototype.ngOnInit = function () {
        this.iForm = this._fb.group({
            'iName': ['', forms_1.Validators.required],
            'iComment': ['', forms_1.Validators.required]
        });
    };
    TodoAddComponent.prototype.saveItem = function (model) {
        var _this = this;
        console.log(model);
        this._todoService.addItem(model)
            .subscribe(function (data) {
            if (data) {
                _this._router.navigate(['/list']);
            }
        }, function (error) {
            console.log("error", error);
        });
    };
    return TodoAddComponent;
}());
TodoAddComponent = __decorate([
    core_1.Component({
        selector: 'todo-add',
        templateUrl: 'app/todo/todo-add.component.html',
        styleUrls: ['app/todo/todo.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute,
        todo_service_1.ToDOService])
], TodoAddComponent);
exports.TodoAddComponent = TodoAddComponent;
//# sourceMappingURL=todo-add.component.js.map