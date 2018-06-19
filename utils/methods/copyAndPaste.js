var fs = require('fs');
var ncp = require('ncp').ncp;

module.exports = {

    copy: function(destintionPath: String, preexistingPath: String, callback: Function) {
        ncp(destintionPath, preexistingPath, { stopOnErr: true }, function (err) {
            if (err) console.error('');
            else callback();
        });
    },
    mkdir: function(destintionPath: String) {
        fs.mkdir(destintionPath, 0o777, function(error) {
            if (err) console.error('');
            else callback();
        })
    }

};
