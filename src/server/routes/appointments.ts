import { Router } from 'express';
import mongoose from 'mongoose';
import { doctorModel } from 'models/doctor';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import userModel from 'models/user';
const router = Router();
export const getAllUsers = async (userIds) => {
    const userIdsObjects = userIds.map((id) => {
        if (typeof id === 'string') {
            return new mongoose.Types.ObjectId(id);
        }
        return id;
    });
    const users =
        (await userModel.find({
            _id: {
                $in: userIdsObjects,
            },
        })) || [];
    return users;
};
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
        .then(async (data) => {
            const userIds = data.map((x) => x.userId);
            const users = await getAllUsers(userIds);
            res.send(
                data.map((appointment) => {
                    let user = users.find((x) => x?._id.toString() === appointment?.userId) || {};
                    user = user?.toJSON ? user.toJSON() : user;
                    return { ...user, appointment, password: '' };
                })
            );
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

export const getAllAvailableDoctorsHandler = async (req, res) => {
    doctorModel
        .find(req?.query)
        .then(async (data = []) => {
            const userIds = data.map((x) => x.userId);
            const users = await getAllUsers(userIds);
            res.send(
                data.map((doctor) => {
                    let user = users.find((x) => x?._id.toString() === doctor?.userId) || {};
                    user = user?.toJSON ? user.toJSON() : user;
                    return { ...user, doctor, password: '' };
                })
            );
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
router.get('/doctors', getAllAvailableDoctorsHandler);
router.get('/doctors/:id', getAllDoctorsAppointmentHandler);
router.post('/doctors/:id', setDoctorsAvailability);

router.post('/', createAppointmentHandler);
router.delete('/:id', deleteAppointmentHandler);
export default router;
