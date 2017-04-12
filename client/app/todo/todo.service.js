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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var app_constants_1 = require("../config/app.constants");
var http_service_1 = require("../utils/http.service");
var ToDOService = (function () {
    function ToDOService(_httpService) {
        this._httpService = _httpService;
        this.material = null;
    }
    ToDOService.prototype.addItem = function (item) {
        return this._httpService.post("" + app_constants_1.APPCONSTANT.addTodoUrl, item)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ToDOService.prototype.retrieveItem = function (id) {
        return this._httpService.get("" + app_constants_1.APPCONSTANT.getTodoUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ToDOService.prototype.list = function () {
        return this._httpService.get("" + app_constants_1.APPCONSTANT.getTodoListUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ToDOService.prototype.deleteItem = function (id) {
        return this._httpService.get("" + app_constants_1.APPCONSTANT.deleteTodoUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ToDOService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(app_constants_1.APPCONSTANT.serviceErr);
    };
    return ToDOService;
}());
ToDOService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.AppHttpService])
], ToDOService);
exports.ToDOService = ToDOService;
//# sourceMappingURL=todo.service.js.map