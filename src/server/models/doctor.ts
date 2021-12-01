const mongoose3 = require('mongoose');
const Schema3 = mongoose3.Schema;

export const DoctorModel = new Schema3(
    {
        userId: { type: Object, required: true },
        speciality: { type: String, required: true },
        license: { type: String, required: true },
        qualification: { type: String, required: true },
        experience: { type: String, required: true },
        gender: { type: String, required: false },
        availability: { type: Date, required: true },
        description: { type: String, required: false },
    },
    { collection: 'Doctor' },
    {
        versionKey: false,
    }
);

export const doctorModel = mongoose3.model('doctor', DoctorModel);
export default doctorModel;
