var fs = require('fs');
var path = require('path');

// methods for CLI
var index = fs.readdirSync(path.join(__dirname, 'methods')).reduce(function (acc, item) {
    // Import original command with attached functionality
    acc[item] = require(path.join(__dirname, 'methods', item));
    return acc;
}, {});

// All keys or command names for commander of CLI and values are the the functionality called
module.exports = index;
