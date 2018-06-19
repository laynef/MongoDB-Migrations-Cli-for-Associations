var fs = require('fs');
var path = require('path');

// In node you do not need to include the path 'index' that is used by default
var utils = require('../utils')

// import utils in circular imports for older versions of Node.js
var shortHandCommands = utils.shortHandCommands;

// Constant lookup for alias names with key name being the original command
// Names are created in the array based on the file name
var aliasCache = fs.readdirSync(path.join(__dirname, 'alias')).map(e => e.replace(RegExp('.js', 'ig'), '')).reduce(function (acc, item) {
    acc[item] = require(path.join(__dirname, 'alias', item));
    return acc;
}, {});

// methods for CLI
var index = fs.readdirSync(path.join(__dirname, 'methods')).map(e => e.replace(RegExp('.js', 'ig'), '')).reduce(function (acc, item) {
    // Import aliases with attached functionality
    if (!!aliasCache[item]) {
        aliasCache[item].forEach((alias) => {
            var aliasShortHand = shortHandCommands(alias);
            acc[aliasShortHand] = require(path.join(__dirname, 'methods', item));
        });
    }
    // Import original command with attached functionality
    var originalShortHand = shortHandCommands(item);
    acc[originalShortHand] = require(path.join(__dirname, 'methods', item));
    return acc;
}, {});

// All keys or command names for commander of CLI and values are the the functionality called
module.exports = index;