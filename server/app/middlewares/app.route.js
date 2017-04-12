"use strict"

var router = require("../middlewares/route-init"),
    log4js = require('log4js'),
    log = log4js.getLogger('router');


/*
*       User Routing
 */


router.route('/login')
    .post(function (req, res) {
        log.info("login route-----------");
        res.end();
    });

router.route('/register')
    .post(function (req, res) {
        log.info("register route-----------");
        res.end();
    });

/*
*       TO-DO Routing
 */


router.route('/todo/list')
    .get(function (req, res) {
        log.info("todo list route-----------");
        res.end();
    })

router.route('/todo/delete/:id')
    .get(function (req, res) {
        log.info("todo delete route-----------");
        res.end();
    })

router.route('/todo/add')
    .post(function (req, res) {
        log.info("todo add route-----------");
        res.end();
    });


module.exports = router;