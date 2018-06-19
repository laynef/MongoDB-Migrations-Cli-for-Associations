module.exports = {

    shortHandCommands: function (file) {
        return file.replace(RegExp(/\.js/ig), '').replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); }).split(' ').map(e => e[0]).join('').toLowerCase();
    },

};
