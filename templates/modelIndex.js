var fs = require('fs');
var path = require('path');

var mongoose = require('mongoose');

var root = path.join(__dirname, '..');

var env = process.env.NODE_ENV || 'development';
var config = require(path.resolve(root, 'config.js'))[env];

var length = Object.keys(config.options).length;

var options = {
    db: {
        native_parser: true,
    },
    server: {
        auto_reconnect: true,
        poolSize: 5,
    },
    autoIndex: true,
};

var schemasCollections = fs.readdirSync(path.resolve(root, 'migrations')).reduce((modelObject, migration) => {
    var importing = require(path.resolve(root, 'migrations', migration))(mongoose);
    var tableName = importing.tableName;
    modelObject[tableName] = modelObject[tableName] ? modelObject[tableName] : [];
    modelObject[tableName].push(importing.schema);
    return modelObject;
}, {});

var schemas = {};

for (var schemaName in schemasCollections) {
    if (schemaName) {
        schemas[schemaName] = new mongoose.Schema(schemasCollections[schemaName].reduce((schema, schemaPartial) => {
            schema = Object.assign({}, schema, schemaPartial.schema);
            return schema;
        }, {}),
        schemasCollections[schemaName].reduce((schema, schemaPartial) => {
            schema = Object.assign({}, schema, schemaPartial.options);
            return schema;
        }, {}));
    }
}

var models = {};

for (var modelName in schemasCollections) {
    if (modelName) {
        models[modelName] = mongoose.model(modelName, schemas[modelName]);
    }
}

var mongoDbUri = 'mongodb://' + (config.username || '') +
(config.username && config.password ? ':' : '') +
(config.password || '') +
(config.username && config.password ? '@' : '') +
config.host + ':' + config.port + '/' + config.name;

mongoose.connect(mongoDbUri, !length ? options : config.options, function (err) {
    if (err) {
        console.error('[cobra]:error mongoose connection failed ==> ', err);
    } else {
        console.info('[cobra]:success mongoose connected');
    }
});

var Cobra = {};

Cobra.db = mongoose.connection;

Cobra.db.on('error', function (error) {
    return console.error('[cobra]:error mongodb error ==> ', error);
});

Cobra.db.once('open', function () {
    return console.info('[cobra]:success mongodb open');
});

Cobra.schemas = schemas;
Cobra.models = models;

module.exports = Cobra;
