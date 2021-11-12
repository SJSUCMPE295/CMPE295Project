const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transaction_Logger = new Schema(
    {
        UserId: { type: Object, required: true },
        ResourceId: { type: Object, required: true },
        ServiceId: { type: Object, required: true },
        Date: { type: Date, required: true },
        CategoryId: { type: String, required: true },
        Quantity: { type: Number, required: true },
        Type: { type: String, required: true },
    },
    { collection: 'Transaction_Logger', versionKey: false }
);

const transaction_loggerModel = mongoose.model('transaction_logger', Transaction_Logger);
module.exports = transaction_loggerModel;
