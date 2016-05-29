'use strict'

var mongoose = require('mongoose');
var gameoriModel; // database model
var model;

gameoriModel = mongoose.model('gameori', {
    text: {
        type: String,
        default: ''
    }
});

var getTodos = function () {
    gameoriModel.find(function (err, todos) {
        return {err, todos};
    });
};



model = {
	getTodos : getTodos
}

module.exports = model;