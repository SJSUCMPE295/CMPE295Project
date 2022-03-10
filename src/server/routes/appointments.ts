import { Router } from 'express';
import { doctorModel } from 'models/doctor';
import { doctorAppointmentModel } from 'models/doctorAppointment';
const router = Router();

export const createAppointmentHandler = async ({ body }, res) => {
    const newAppointment = new doctorAppointmentModel(body);
    newAppointment
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
export const getAllDoctorsAppointmentHandler = async (req, res) => {
    doctorAppointmentModel
        .find({ doctorId: req?.params?.id })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
export const setDoctorsAvailability = async (req, res) => {
    doctorModel
        .findOneAndUpdate({ doctorId: req?.params?.id }, req?.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

export const deleteAppointmentHandler = async (req, res) => {
    doctorAppointmentModel
        .findOneAndDelete({ doctorId: req?.params?.id }, req?.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
router.get('/doctor/:id', getAllDoctorsAppointmentHandler);
router.post('/doctor/:id', setDoctorsAvailability);

router.post('/', createAppointmentHandler);
router.delete('/:id', deleteAppointmentHandler);
export default router;
