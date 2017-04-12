"use strict";

var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var userSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    userName: {
        type: String,
        required: [true, "Invalid Username or Password"]
    },
    password: {
        type: String,
        required: [true, "Invalid Username or Password"]
    }
});

userSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var User = db.model('User', userSchema);

module.exports = User;