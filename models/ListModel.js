var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var listSchema = new Schema({

module.exports = mongoose.model('List', listSchema);