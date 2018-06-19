module.exports = function (mongoose) {
    var DataType = mongoose.Types;
    var tableName = 'TABLENAME';
    var schema = {
        _id: {
            type: DataType.Number,
            required: true,
        },
    };
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
