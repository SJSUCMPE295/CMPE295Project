const mongoose2 = require('mongoose');
const Schema2 = mongoose2.Schema;

export const Service = new Schema2(
    {
        UserId: { type: Object, required: true },
        Service_Name: { type: String, required: true },
        Category: { type: String, required: true },
        Address: { type: String, required: true },
        City: { type: String, required: true },
        State: { type: String, required: true },
        Zipcode: { type: Number, required: true },
        Country: { type: String, required: true },
        Phone_Number: { type: Number, required: true },
        Description: { type: String, required: true },
        availableDate: { type: Date, required: true },
    },
    { collection: 'Services' },
    {
        versionKey: false,
    }
);

export const serviceModel = mongoose2.model('service', Service);
export default serviceModel;
