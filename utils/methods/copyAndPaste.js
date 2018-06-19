var fs = require('fs');
var ncp = require('ncp').ncp;

module.exports = {

    copy: function (source, destintation, callback) {
        ncp(source, destintation, { stopOnErr: true }, function (err) {
            if (err) console.error('');
            else callback();
        });
    },

    mkdir: function (destintionPath, callback) {
        fs.mkdir(destintionPath, 0o777, function (error) {
            if (error) console.error('');
            else callback();
        });
    },

};
