var fs = require('fs');
var ncp = require('ncp').ncp;

module.exports = {

    copy: function (destintionPath, preexistingPath, callback) {
        ncp(destintionPath, preexistingPath, { stopOnErr: true }, function (err) {
            if (err) console.error('');
            else callback();
        });
    },
    mkdir: function (destintionPath) {
        fs.mkdir(destintionPath, 0o777, function (error) {
            if (err) console.error('');
            else callback();
        });
    },

};
