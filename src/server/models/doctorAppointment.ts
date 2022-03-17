import { Schema, model } from 'mongoose';

const DoctorAppointment = new Schema(
    {
        userId: { type: Object, required: true },
        doctorId: { type: Object, required: true },
        appointmentDetails: { type: String, required: true },
        status: { type: String, required: true },
        notes: { type: String, required: false },
    },
    { collection: 'Doctor_Appointment', versionKey: false }
);

export const doctorAppointmentModel = model('doctor_appointment', DoctorAppointment);
export default doctorAppointmentModel;
