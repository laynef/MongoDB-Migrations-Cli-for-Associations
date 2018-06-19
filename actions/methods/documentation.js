var fs = require('fs');
var path = require('path');
var utils = require('../../utils');

var shortHandCommands = utils.shortHandCommands;

var aliasCache = fs.readdirSync(path.join(__dirname, '..', 'alias')).map(e => e.replace(RegExp('.js', 'g'), '')).reduce(function (acc, item) {
    acc[item] = require(path.join(__dirname, 'alias', item));
    return acc;
}, {});

var keyMapOfCommands = fs.readdirSync(path.join(__dirname)).map(function (e) { return e.replace(RegExp('.js', 'g'), ''); }).filter(function (e) { return e !== 'documentation'; }).reduce(function (accumulation, file) {
    var shortcut = shortHandCommands(file);
    accumulation[file] = require(path.join(__dirname, file));
    accumulation[shortcut] = require(path.join(__dirname, file));
    aliasCache[file].forEach(function (item) {
        accumulation[item] = require(path.join(__dirname, file));
    });
    return accumulation;
}, {});

var description = 'Display this documentation';

var command = function () {
    console.info('\nCobra JS');

    console.info('\n\nCobra JS: Command Line Interface to make your life easier.');
    console.info("=> The Cobra JS command is 'cobra'. To blast this project into the fifth dimension.");
    console.info("=> Use '--help' or '--h' on any of the commands listed below for more details.");
    console.info('\n');

    console.info('List of commands:\n');
    console.info('=> documentation - ' + description);
    console.info('=> docs - ' + description);
    console.info('=> d - ' + description);
    for (var command in keyMapOfCommands) {
        console.info('=> ' + command + ' - ' + keyMapOfCommands[command].description);
    }

    console.info('\n');
};

var documentation = function () {
    return command();
};

module.exports = {
    description: description,
    command: command,
    documentation: documentation,
};
