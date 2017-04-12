"use strict"

var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var itemSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    iName: {
        type: String,
        required: [true, "Item name is required"]
    },
    iComment: {
        type: String,
        required: [true, "Item comment is required"]
    },
    createdAt: {
        type: String,
        default: Date.now().toString()
    }
});

itemSchema.plugin(autoIncrement.plugin, {
    model: 'Item',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var Item = db.model('Item', itemSchema);

module.exports = Item;