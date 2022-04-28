import { Router } from 'express';
import mongoose from 'mongoose';
import { doctorModel } from 'models/doctor';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import userModel from 'models/user';
const router = Router();
export const getAllUsers = async (userIds, query = {}) => {
    const userIdsObjects = (userIds || []).map((id) => {
        if (typeof id === 'string') {
            return new mongoose.Types.ObjectId(id);
        }
        return id;
    });
    Object.keys(query).forEach((key) => {
        if (query[key] === undefined) {
            delete query[key];
        }
    });
    const idsQuery = userIdsObjects.length
        ? {
              _id: {
                  $in: userIdsObjects,
              },
          }
        : {};
    const userQuery = {
        ...query,
        ...idsQuery,
    };
    const users = (await userModel.find(userQuery)) || [];
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
            const appointments = data.map((appointment) => {
                let user = users.find((x) => x?._id.toString() === appointment?.userId) || {};
                user = user?.toJSON ? user.toJSON() : user;
                return { ...user, appointment, password: '' };
            });
            res.send({ appointments });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
export const getAllAvailableDoctorsHandler = async (req, res) => {
    const { userName, firstName, lastName, availability, ...doctorModelQuery } = req?.query;
    doctorModel
        .find(doctorModelQuery)
        .then(async (data = []) => {
            const userIds = data.map((x) => x.userId);
            const users = await getAllUsers(userIds, { userName, firstName, lastName });
            const doctorsList = data
                .map((doctor) => {
                    let user = users.find((x) => x?._id.toString() === doctor?.userId) || {};
                    user = user?.toJSON ? user.toJSON() : user;
                    return { ...user, doctor, password: '' };
                })
                .filter((x) => x?._id);
            res.send(doctorsList);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
export const setDoctorsAvailabilityHandler = async (req, res) => {
    doctorModel
        .findOneAndUpdate({ userId: req?.params?.id }, req?.body)
        .then((data) => {
            const dataJson = data?.toJSON ? data.toJSON() : data;
            const doctor = { ...dataJson, ...req?.body };
            if (dataJson) {
                return res.send({ doctor });
            }
            return res.status(500).json({ message: 'no data' });
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
router.post('/doctors/:id', setDoctorsAvailabilityHandler);

router.post('/', createAppointmentHandler);
router.delete('/:id', deleteAppointmentHandler);
export default router;
