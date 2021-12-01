const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Doctor_Appointment = new Schema(
    {
        UserId: { type: Object, required: true },
        DoctorId: { type: Object, required: true },
        AppointmentDetails: { type: String, required: true },
        Status: { type: String, required: true },
    },
    { collection: 'Doctor_Appointment', versionKey: false }
);

const doctor_appointmentModel = mongoose.model('doctor_appointment', Doctor_Appointment);
module.exports = doctor_appointmentModel;
