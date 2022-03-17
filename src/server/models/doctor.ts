import { Schema, model } from 'mongoose';
export const DoctorModel = new Schema(
    {
        userId: { type: Object, required: true },
        speciality: { type: String, required: true },
        license: { type: String, required: true },
        qualification: { type: String, required: true },
        experience: { type: String, required: true },
        gender: { type: String, required: false },
        availability: { type: Date, required: false },
        description: { type: String, required: false },
    },
    { collection: 'Doctor', versionKey: false }
);

export const doctorModel = model('doctor', DoctorModel);
export default doctorModel;
