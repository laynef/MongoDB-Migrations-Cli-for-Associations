var fs = require('fs');
var path = require('path');
var utils = require('./utils')

// import utils in circular imports for older versions of Node.js
var formatCommands = utils.formatCommands;

// Constant lookup for alias names with key name being the original command
// Names are created in the array based on the file name
var aliasCache = fs.readdirSync(path.join(__dirname, 'alias')).reduce(function (acc, item) {
    acc[item] = require(path.join(__dirname, 'alias', item));
    return acc;
}, {});

// methods for CLI
var index = fs.readdirSync(path.join(__dirname, 'methods')).reduce(function (acc, item) {
    // Import aliases with attached functionality
    if (!!aliasCache[item]) {
            aliasCache[item].forEach((alias) => {
            acc[formatCommands(alias)] = require(path.join(__dirname, 'methods', item));
        });
    }
    // Import original command with attached functionality
    acc[formatCommands(item)] = require(path.join(__dirname, 'methods', item));
    return acc;
}, {});

// All keys or command names for commander of CLI and values are the the functionality called
module.exports = index;