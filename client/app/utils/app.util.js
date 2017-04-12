"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var app_constants_1 = require("../config/app.constants");
var AppUtil = (function () {
    function AppUtil() {
    }
    AppUtil.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(app_constants_1.APPCONSTANT.serviceErr);
    };
    return AppUtil;
}());
exports.AppUtil = AppUtil;
//# sourceMappingURL=app.util.js.map