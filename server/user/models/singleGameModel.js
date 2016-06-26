'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var singleGameSchema = new schema({
    game_id: {
        type: String,
        default: ''
    },
    game_title:{
    	type: String,
    	default: ''
    },
    description: {
        type: String,
        default: ''
    },
    amazon_link: {
    	type: String,
    	default: ''
    },
    date: {
    	type: Date,
    	default: Date.now
    },
    tag: {
    	type: String,
    	default: ''
    },
    image_icon: {
    	type: String,
    	default: ''
    },
    image_thumb: {
        type: String,
        default: ''
    },
    image_review: {
        type: String,
        default: ''
    },
    image_large: {
        type: String,
        default: ''
    },
    image_banner: {
        type: String,
        default: ''
    }
});
var singleGameModel = mongoose.model('games', singleGameSchema, 'games');

module.exports = singleGameModel;