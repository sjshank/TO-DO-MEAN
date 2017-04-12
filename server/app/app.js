"use strict"

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    appConfig = require('./middlewares/app.config')(express, app);


/*
    Calling server js to run node server on port 4000
*/
const server = require('./server')(app);

/*
    middleware to verify authorized token
*/
var verifyToken = require("./middlewares/token");
//var route = require("./middlewares/app.route");  Not using anymore


/*
    middlewares to handle user and to-do routing
*/
var userRouter = require("./user/router");
var todoRouter = require("./todo/router");

app.use('/api/user', userRouter);
app.use('/api', verifyToken, todoRouter);