"use strict"

var router = require("../middlewares/route-init"),
    loginController = require("./login.controller"),
    registerController = require("./register.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('user-router');

router.route('/login')
    .post(function (req, res) {
        log.info("login route-----------");
        loginController.authenticateUser(req, res);
    });

router.route('/register')
    .post(function (req, res) {
        log.info("register route-----------");
        registerController.registerUser(req, res);
    });

module.exports = router;