const mongoose1 = require('mongoose');
const Schema1 = mongoose1.Schema;

export const Resource = new Schema1(
    {
        UserId: { type: Object, required: true },
        Resource_Name: { type: String, required: true },
        Category: { type: String, required: true },
        AddressId: { type: Object, required: true },
        Phone_Number: { type: Number, required: true },
        Description: { type: String, required: true },
        SKU: { type: Number, required: true },
    },
    { collection: 'Resource' },
    {
        versionKey: false,
    }
);

export const resourceModel = mongoose1.model('resource', Resource);
export default resourceModel;
