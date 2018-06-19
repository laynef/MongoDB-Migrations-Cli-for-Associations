// methods for CLI
var actions = require('../actions');

var Commander = function (commandName, args, flags) {
    var execute = function () {
        if (flags.length > 0) {
            var helpExists = flags.filter(e => {
                var flagName = e[0];
                return flagName === 'help' || flagName === 'h';
            }).length;
            if (actions[commandName] && helpExists > 0) {
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
