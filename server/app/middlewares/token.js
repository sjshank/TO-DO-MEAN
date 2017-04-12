"use strict"

var log4js = require('log4js'),
    log = log4js.getLogger('token');
    
    /*
         middleware for verifying token send by client
    */

module.exports = function (req, res, next) {
    log.info("token ------------");
    /*if (req.method === 'OPTIONS') {
        next();
    } else {*/
        var bearerToken = '';
        var bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader !== 'undefined') {
            var bearer = bearerHeader.split(" ");
            bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403).json({errMsg: 'Unauthorized User'}).end();
        }
    
}