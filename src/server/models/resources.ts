const mongoose1 = require('mongoose');
const Schema1 = mongoose1.Schema;

const Resource = new Schema1(
    {
        UserId: { type: Object, required: true },
        Resource_Name: { type: String, required: true },
        Category: { type: String, required: true },
        AddressId: { type: String, required: true },
        Phone_Number: { type: Number, required: true },
        Description: { type: String, required: true },
        SKU: { type: Number, required: true },
    },
    { collection: 'Resource' },
    {
        versionKey: false,
    }
);

const resourceModel = mongoose1.model('resource', Resource);
//module.exports = resourceModel;
export default resourceModel;
