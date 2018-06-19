var fs = require('fs');
var path = require('path');

var mongoose = require('mongoose');

var root = path.join(__dirname, '..');

var env = process.env.NODE_ENV || 'development';
var config = require(path.resolve(root, 'config.js'))[env];

var length = Object.keys(config.options).length;

var options = {
    db: {
        native_parser: true,
    },
    server: {
        auto_reconnect: true,
        poolSize: 5,
    },
};

var mongoDbUri = 'mongodb://' + (config.username || '') +
(config.username && config.password ? ':' : '') +
(config.password || '') +
(config.username && config.password ? '@' : '') +
config.host + ':' + config.port + '/' + config.name;

mongoose.connect(mongoDbUri, !length ? options : config.options, function (err) {
    if (err) {
        console.error('');
    } else {
        console.info('');
    }
});

var Cobra = {};

Cobra.db = mongoose.connection;

Cobra.db.on('error', console.error.bind(console, ''));

Cobra.db.once('open', function () {
    return console.info('');
});

module.exports = Cobra;
