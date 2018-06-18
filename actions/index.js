var fs = require('fs');
var path = require('path');

var index = fs.readdirSync(path.join(__dirname, 'methods')).reduce(function (acc, item) {
    acc[item] = require(path.join(__dirname, 'methods', item));
    return acc;
}, {});

module.exports = index;