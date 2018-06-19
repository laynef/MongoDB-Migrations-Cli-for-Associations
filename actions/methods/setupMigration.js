var path = require('path');
var utils = require('../../utils');

var mkdir = utils.mkdir;

var description = 'Setting up initial migrations if not exists';

var command = function () {
    var newDirectory = path.join(process.cwd());

    mkdir(path.resolve(newDirectory, 'migrations'), function () {});
};

var documentation = function () {
    console.info('');
};

module.exports = {
    description: description,
    command: command,
    documentation: documentation,
};
