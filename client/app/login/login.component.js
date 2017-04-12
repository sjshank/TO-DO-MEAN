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
var login_service_1 = require("./login.service");
require("rxjs/add/operator/takeWhile");
var LoginComponent = (function () {
    function LoginComponent(_fb, _router, _activatedRoute, _loginService) {
        this._fb = _fb;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._loginService = _loginService;
        this._alive = true;
        this.title = 'Login';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._loginService.logoutUser();
        this.lForm = this._fb.group({
            'userName': ['', forms_1.Validators.required],
            'password': ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.doLogin = function (model) {
        var _this = this;
        this._loginService.loginUser(model)
            .takeWhile(function () { return _this._alive; })
            .subscribe(function (data) {
            if (data) {
                _this._router.navigate(['/list']);
            }
        }, function (error) {
            console.log("error", error);
        });
    };
    ;
    LoginComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this._alive = false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: 'app/login/login.component.html',
        styleUrls: ['app/login/login.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute,
        login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map