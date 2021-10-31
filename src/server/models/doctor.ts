const mongoose3 = require('mongoose');
const Schema3 = mongoose3.Schema;

const DoctorModel = new Schema3(
    {
        UserId: { type: Object, required: true },
        Speciality: { type: String, required: true },
        License: { type: String, required: true },
        Qualification: { type: String, required: true },
        Experience: { type: String, required: true },
        Gender: { type: String, required: false },
        Availability: { type: Date, required: true },
        Description: { type: String, required: false },
    },
    { collection: 'Doctor' },
    {
        versionKey: false,
    }
);

const doctorModel = mongoose.model('doctor', DoctorModel);
module.exports = doctorModel;
