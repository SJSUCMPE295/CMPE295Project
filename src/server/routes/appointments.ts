import { Router } from 'express';
import mongoose from 'mongoose';
import { doctorModel } from 'models/doctor';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import {
    getUserByIdWithAppointments,
    getAllUsers,
    getUserById,
    greaterThanDate,
    equalDates,
} from 'utils/dao';
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
    try {
        const user = await getUserByIdWithAppointments(req?.params?.id);
        if (user) {
            res.send(user);
        } else {
            res.send({ error: 'finding user' });
        }
    } catch (err) {
        res.json({ message: err });
    }
};
export const getAllAvailableDoctorsHandler = async (req, res) => {
    const { userName, firstName, lastName, availability = '', ...doctorModelQuery } = req?.query;
    doctorModel
        .find(doctorModelQuery)
        .then(async (data = []) => {
            const userIds = data.map((x) => x.userId);
            const users = await getAllUsers(userIds, { userName, firstName, lastName });
            const doctorsList = data
                .map((doctor) => {
                    let user =
                        users.find((x) => (x?.id || x?._id?.toString()) === doctor?.userId) || {};
                    user = user?.toJSON ? user.toJSON() : user;
                    return { ...user, doctor, password: '' };
                })
                .filter((x) => x?._id)
                .filter((x) => {
                    const now = new Date();
                    const isProfileActive = x?.profile?.profileActive;
                    const isDateGreaterThanNow = greaterThanDate(now, availability);
                    const isDocDateGreaterThanNow = greaterThanDate(now, x?.doctor?.availability);
                    const hasConflictTime = equalDates(x?.doctor?.availability, availability);
                    const isGreaterThanDate = greaterThanDate(
                        x?.doctor?.availability,
                        availability
                    );
                    const isAvailable = availability
                        ? isDateGreaterThanNow && !hasConflictTime && isGreaterThanDate
                        : isDocDateGreaterThanNow;
                    return isProfileActive && isAvailable;
                });
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

export const setAppointmentHandler = async (req, res) => {
    doctorAppointmentModel
        .findOneAndUpdate({ _id: new mongoose.Types.ObjectId(req?.params?.id) }, req?.body)
        .then((data) => {
            const dataJson = data?.toJSON ? data.toJSON() : data;
            const updatedData = { ...dataJson, ...req?.body };
            if (dataJson) {
                return res.send({ updatedData });
            }
            return res.status(500).json({ message: 'no data' });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};
router.get('/doctors', getAllAvailableDoctorsHandler);
router.get('/doctors/:id', getAllDoctorsAppointmentHandler);
router.post('/doctors/:id', setDoctorsAvailabilityHandler);

router.post('/', createAppointmentHandler);
router.put('/:id', setAppointmentHandler);
router.delete('/:id', deleteAppointmentHandler);
export default router;
