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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var app_constants_1 = require("../config/app.constants");
var RegisterService = (function () {
    function RegisterService(_http) {
        this._http = _http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userObject = currentUser && currentUser.token;
    }
    RegisterService.prototype.registerUser = function (user) {
        var _this = this;
        return this._http.post("" + app_constants_1.APPCONSTANT.registerUrl, user)
            .map(function (response) {
            var user = response.json() && response.json().user;
            if (user) {
                _this.userObject = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(this.handleError);
    };
    ;
    RegisterService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(app_constants_1.APPCONSTANT.serviceErr);
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map