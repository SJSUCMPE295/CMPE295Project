import mongoose, { Schema } from 'mongoose';

export const Service = new Schema(
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

export const serviceModel = mongoose.model('service', Service);
export default serviceModel;
