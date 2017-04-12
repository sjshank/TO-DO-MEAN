"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/finally");
var AppHttpService = (function (_super) {
    __extends(AppHttpService, _super);
    function AppHttpService(backend, options, _router) {
        var _this = _super.call(this, backend, options) || this;
        _this._router = _router;
        var user = JSON.parse(localStorage.getItem('currentUser'));
        options.headers.set('Authorization', "Bearer " + user['token']);
        return _this;
    }
    AppHttpService.prototype.request = function (url, options) {
        return this._intercept(_super.prototype.request.call(this, url, options));
    };
    AppHttpService.prototype.options = function (url, options) {
        return this._intercept(_super.prototype.options.call(this, url, options));
    };
    AppHttpService.prototype.getRequestOptionArgs = function (options) {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (options === null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers === null) {
            options.headers = new http_1.Headers();
        }
        options.headers.append('Accept', 'text/html');
        options.headers.set('Authorization', "Bearer " + user['token']);
        return options;
    };
    AppHttpService.prototype._intercept = function (observable) {
        return observable.catch(this._catchAuthError(this));
    };
    AppHttpService.prototype._catchAuthError = function (self) {
        var _this = this;
        // we have to pass HttpService's own instance here as `self`
        return function (err) {
            console.log(err);
            if (err.status === 401 || err.status === 403) {
                _this._router.navigate(['/login']);
                return Observable_1.Observable.toString();
            }
            return Observable_1.Observable.throw(err);
        };
    };
    return AppHttpService;
}(http_1.Http));
AppHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions, router_1.Router])
], AppHttpService);
exports.AppHttpService = AppHttpService;
//# sourceMappingURL=http.service.js.map