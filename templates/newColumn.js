module.exports = function (mongoose) {
    var DataType = mongoose.Types;
    var tableName = 'TABLENAME';
    var schema;
    /* Auto Columns Here */
    var options = {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    };
    return {
        tableName: tableName,
        schema: schema,
        options: options,
    };
};
