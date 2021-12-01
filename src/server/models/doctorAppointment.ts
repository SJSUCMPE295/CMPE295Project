const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorAppointment = new Schema(
    {
        UserId: { type: Object, required: true },
        DoctorId: { type: Object, required: true },
        AppointmentDetails: { type: String, required: true },
        Status: { type: String, required: true },
    },
    { collection: 'Doctor_Appointment', versionKey: false }
);

export const doctorAppointmentModel = mongoose.model('doctor_appointment', DoctorAppointment);
export default doctorAppointmentModel;
