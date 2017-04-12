"use strict"

var log4js = require('log4js'),
    log = log4js.getLogger('todo'),
    errorService = require('../middlewares/error.service'),
    Item = require("../models/item");
const APPCONSTANT = require("../config/app.constants");

var errorMsg = '';


/*
        Adding new TO-DO item in MongoDB
*/
exports.addItem = function (req, res) {
    log.info("addItem method ---------");
    try {
        if (!req.body) {
            res.json({
                errorMsg: "Request body is empty."
            });
        }
        var item = new Item(req.body);
        item.save()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: "Failed to add new to-do item."
                    });
                } else {
                    res.json({
                        success: "true",
                        id: result.id
                    });
                }
            })
            .catch(function (err) {
                log.error("addItem method ---------", err);
                errorService.checkMongoError(err, errorMsg);
                res.json({ errMsg: errorMsg });
            });
    } catch (e) {
        log.error("addItem method ---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};


/*
        Retrieving saved TO-DO item from MongoDB based on item 'ID'
*/

exports.getItem = function (req, res) {
    log.info("getItem method ---------");
    try {
        Item.findOne()
            .where('id').equals(req.params.id)
            .select('id iName iComment')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'TO-DO Item not found'
                    });
                } else {
                    res.json({
                        item: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getItem method ---------", err);
                errorService.checkMongoError(err, errorMsg);
                res.json({ errMsg: errorMsg });
            })
    } catch (e) {
        log.error("getItem method ---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};



/*
        Retrieving all saved TO-DO items from MongoDB 
*/


exports.getItemList = function (req, res) {
    log.info("getItemList method---------");
    try {
        Item.find()
            .select('id iName iComment createdAt')
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'TO-DO list is empty'
                    });
                } else {
                    res.json({
                        success: "true",
                        list: result
                    });
                }
            })
            .catch(function (err) {
                log.error("getItemList method---------", err);
                errorService.checkMongoError(err, errorMsg);
                res.json({ errMsg: errorMsg });
            })
    } catch (e) {
        log.error("getItemList method---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};



/*
        Deleting saved TO-DO item from MongoDB based on 'ID'
*/

exports.deleteItem = function (req, res) {
    log.info("deleteItem method---------");
    try {
        Item.findOneAndRemove()
            .where('id').equals(req.params.id)
            .exec()
            .then(function (result) {
                if (!result) {
                    res.json({
                        errorMsg: 'TO-DO item not found'
                    });
                } else {
                    res.json({
                        result: true
                    });
                }
            })
            .catch(function (err) {
                log.error("deleteItem method---------", err);
                errorService.checkMongoError(err, errorMsg);
                res.json({ errMsg: errorMsg });
            })
    } catch (e) {
        log.error("deleteItem method ---------", e);
        res.json({
            errorMsg: APPCONSTANT.serviceErr
        });
    }
};