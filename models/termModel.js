var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var termSchema = new Schema({

module.exports = mongoose.model('term', termSchema);