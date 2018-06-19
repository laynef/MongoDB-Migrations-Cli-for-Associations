var path = require('path')
var utils = require('../../utils')

var copy = utils.copy;
var mkdir = utils.mkdir;

var description = 'Setting up initial configuration if not exists';

var command = function () {
    var newDirectory = path.join(process.cwd());
    var templateDirectory = path.join(__dirname, '..', '..', 'templates');

    console.log(templateDirectory)

    copy(path.resolve(templateDirectory, 'config'), newDirectory, function () {
        copy(path.resolve(templateDirectory, newDirectory, 'cobra'), function () {
            mkdir(path.resolve(newDirectory, 'migrations'), function() {
                mkdir(path.resolve(newDirectory, 'seeders'), function() {
                    
                });
            });
        });
    });
};

var documentation = function () {
    console.info('');
};

module.exports = {
    description: description,
    command: command,
    documentation: documentation,
};
