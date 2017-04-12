"use strict"

const APPCONSTANT = require("../config/app.constants");

/*
         utility method for checking mongo errors
*/
exports.checkMongoError = function (err, errorMsg) {
    if (err.name === 'MongoError') {
        switch (err.code) {
            case 11000:
                errorMsg = "User already exists";
                break;
            default:
                errorMsg = APPCONSTANT.serviceErr
        }
    }
    if (err.name === 'ValidationError') {
        errorMsg = err.toString();
    }
};