"use strict"

var User = require("../models/user");
var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    errorService = require('../middlewares/error.service'),
    log = log4js.getLogger('register');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constants");

var errorMsg = '';


/*
    Registering new user in mongoDB and returing JWT token
*/

exports.registerUser = function (req, res) {
    log.info("registerUser method---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        var user = new User(req.body);

        user.save()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: APPCONSTANT.serviceErr
                    });
                } else {
                    var token = jwt.sign(result, JWTCONFIG.secret_key);
                    res.json({
                        success: "true",
                        user: {
                            userName: result.userName,
                            token: token
                        }
                    });
                }
            })
            .catch(function (err) {
                errorService.checkMongoError(err, errorMsg);
                res.json({ errMsg: errorMsg });
            });
    } catch (e) {
        log.error("registerUser method---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};