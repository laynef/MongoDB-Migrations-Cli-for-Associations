// Added warning to not use on production (NODE_ENV === 'production' throw Error)

var description = '';

var command = function () {
    console.info('');
};

var documentation = function () {
    return command();
};

module.exports = {
    description: description,
    command: command,
    documentation: documentation,
};
