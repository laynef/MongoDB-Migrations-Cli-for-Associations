// methods for CLI
var actions = require('../actions');

var Commander = function (commandName, args, flags) {
    var execute = function () {
        if (flags.length > 0) {
            const helpExists = flags.filter(e => e === 'help' || e === 'h').length;
            if (actions[commandName] && !!helpExists) {
                return actions[commandName].documentation();
            } else {
                return actions.documentation.command(...args);
            }
        } else {
            if (actions[commandName]) {
                return actions[commandName].command(...args);
            } else {
                return actions.documentation.command();
            }
        }
    };

    return { execute: execute };
};

module.exports = Commander;
