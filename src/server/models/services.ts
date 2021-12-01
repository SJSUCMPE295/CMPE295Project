const mongoose2 = require('mongoose');
const Schema2 = mongoose2.Schema;

export const Service = new Schema2(
    {
        userId: { type: Object, required: true },
        Service_Name: { type: String, required: true },
        Category: { type: String, required: true },
        AddressId: { type: String, required: true },
        Phone_Number: { type: Number, required: true },
        Description: { type: String, required: true },
        Availability: { type: Boolean, required: true },
    },
    { collection: 'Services' },
    {
        versionKey: false,
    }
);

export const serviceModel = mongoose2.model('service', Service);
export default serviceModel;
