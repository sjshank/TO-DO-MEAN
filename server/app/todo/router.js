"use strict"

var router = require("../middlewares/route-init"),
    todoController = require("./todo.controller"),
    log4js = require('log4js'),
    log = log4js.getLogger('todo-router');

/*
*       TO-DO Routing
 */


router.route('/todo/list')
    .get(function (req, res) {
        log.info("todo list route-----------");
        todoController.getItemList(req, res);
    })

router.route('/todo/delete/:id')
    .get(function (req, res) {
        log.info("todo delete route-----------");
        todoController.deleteItem(req, res);
    })

router.route('/todo/add')
    .post(function (req, res) {
        log.info("todo add route-----------");
        todoController.addItem(req, res);
    })

router.route('/todo/:id')
    .post(function (req, res) {
        log.info("todo add route-----------");
        todoController.getItem(req, res);
    });

module.exports = router;