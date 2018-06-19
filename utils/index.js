var fs = require('fs');
var path = require('path');

var index = fs.readdirSync(path.join(__dirname, 'methods')).reduce(function (acc, item) {
    var object = require(path.join(__dirname, 'methods', item));
    acc = Object.assign({}, acc, object);
    return acc;
}, {});

module.exports = index;

