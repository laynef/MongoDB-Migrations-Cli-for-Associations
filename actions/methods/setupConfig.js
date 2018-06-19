var path = require('path');
var utils = require('../../utils');

var copy = utils.copy;

var description = 'Setting up initial configuration folder if not exists';

var command = function () {
    var newDirectory = path.join(process.cwd());
    var templateDirectory = path.join(__dirname, '..', '..', 'templates');

    copy(newDirectory, path.resolve(templateDirectory, 'config'), function () {});
};

var documentation = function () {
    console.info('');
};

module.exports = {
    description: description,
    command: command,
    documentation: documentation,
};
