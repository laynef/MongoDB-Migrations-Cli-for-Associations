var fs = require('fs');
var path = require('path');

var mongoose = require('mongoose');

var root = path.join(__dirname, '..');

var env = process.env.NODE_ENV || 'development';
var config = require(path.resolve(root, 'config.js'))[env];

var mongoDbUri = 'mongodb://' + (config.username || '') +
(config.username && config.password ? ':' : '') +
(config.password || '') +
(config.username && config.password ? '@' : '') +
config.host + ':' + config.port + '/' + config.name;

mongoose.connect(mongoDbUri, config.options, function (err) {
    if (err) {
        console.error('');
    } else {
        console.info('');
    }
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, ''));

db.on('open', function () {
    return console.info('');
});

module.exports = db;
