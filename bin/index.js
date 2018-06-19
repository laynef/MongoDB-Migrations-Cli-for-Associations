#!/usr/bin/env node

var Commander = require('../commander');

var user = process.argv.slice(2);

var args = [];
var flags = [];

for (var i = 1; i < user.length; i++) {
    if (user[i].indexOf('--') === 0) {
        var command = user[i].slice(2);
        flags.push(command);
    } else {
        args.push(user[i]);
    }
}

var start = new Commander(user[0], args, flags);

start.execute();
