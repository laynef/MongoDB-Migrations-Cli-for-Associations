var fs = require('fs');
var path = require('path');

var aliasCache = fs.readdirSync(path.join(__dirname, 'alias')).reduce(function (acc, item) {
    acc[item] = require(path.join(__dirname, 'alias', item));
    return acc;
}, {});

var index = fs.readdirSync(path.join(__dirname, 'methods')).reduce(function (acc, item) {
    // Import aliases with attached functionality
    if (!!aliasCache[item]) {
            aliasCache[item].forEach((alias) => {
            acc[alias] = require(path.join(__dirname, 'methods', item));
        });
    }
    acc[item] = require(path.join(__dirname, 'methods', item));
    return acc;
}, {});

module.exports = index;