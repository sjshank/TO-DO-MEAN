"use strict"

var User = require("../models/user");
var jwt = require('jsonwebtoken'),
    log4js = require('log4js'),
    errorService = require('../middlewares/error.service'),
    log = log4js.getLogger('login');
const JWTCONFIG = require("../config/jwt.config"),
    APPCONSTANT = require("../config/app.constants");

var errorMsg = '';


/*
    Authenticating user against mongoDB and returing JWT token
*/

exports.authenticateUser = function (req, res) {
    log.info("authenticateUser method---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        User.findOne(req.body)
            .select('id userName')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'Invalid Username or Password.'
                    });
                } else {
                    var token = jwt.sign(result, JWTCONFIG.secret_key);
                    res.json({
                        user: {
                            userName: result.userName,
                            isAuthenticated: true,
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
        log.error("authenticateUser method---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};