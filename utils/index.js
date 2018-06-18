const fs = require('fs');
const path = require('path');

const index = fs.readdirSync(path.join(__dirname, 'methods')).reduce((acc, item) => {

}, {});

module.exports = index;

