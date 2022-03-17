const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const TransactionLogger = new Schema(
    {
        userId: { type: Object, required: true },
        ResourceId: { type: Object, required: true },
        ServiceId: { type: Object, required: true },
        Date: { type: Date, required: true },
        CategoryId: { type: String, required: true },
        Quantity: { type: Number, required: true },
        Type: { type: String, required: true },
    },
    { collection: 'Transaction_Logger', versionKey: false }
);

export const transactionLoggerModel = mongoose.model('transaction_logger', TransactionLogger);
export default transactionLoggerModel;
