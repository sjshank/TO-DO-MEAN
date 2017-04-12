"use strict"

const bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require("path"),
    log4js = require('log4js'),
    db = require('./db'),
    cors = require('cors');
var log = log4js.getLogger("appConfig");

module.exports = function (express, app) {

    app.use(express.static('node_modules'));

    /*
         middleware for logging
    */
    app.use(morgan('dev'));

    /*
         middleware for parsing request body
    */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(function (req, res, next) {
        res.set('X-Powered-By', 'TO-DO Web API');
        next();
    });

    /*
        CORS middleware
    */

    var allowCrossDomain = function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PUT');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    }

    app.use(allowCrossDomain);
    app.use(cors());


    /*
             middleware for error handling
        */
    app.use(function (err, req, res, next) {
        log.error("unexpected error occur ", err);
        res.status(err.status || 500);
        res.json({
            errorMsg: "Currently we are experiencing technical difficulties. Please try after some time."
        });
    });
}