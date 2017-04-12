/*
*	Configuring and creating mongodb connection using mongoose
*/

'use strict';

const mongoose = require('mongoose'),
        url = 'mongodb://127.0.0.1:27017/todoDB',
        log4js = require('log4js'),
        debug = require('debug')('db'),
        log = log4js.getLogger('db'),
        autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.connect(url, _callback);

autoIncrement.initialize(connection);

function _callback(err){
    log.debug("Mongodb connection callback");
        if(err){
            log.error("Unable to connect database " + err);
            process.exit(1);
        }else{
            console.log("Connection established !");
            log.info("Connection established !");
        }
};

module.exports = mongoose;