import { Router } from 'express';
import { doctorModel } from 'models/doctor';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import { getUserByIdWithAppointments, getAllUsers, getUserById } from 'utils/dao';
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
export const equalDates = (d1, d2) => {
    if (!d1 || !d2) {
        return;
    }
    const date1 = typeof d1 === 'string' && d1 ? new Date(d1) : d1;
    const date2 = typeof d2 === 'string' && d2 ? new Date(d2) : d2;
    return Number(date1) === Number(date2);
};
export const greaterThanDate = (d1, d2) => {
    if (!d1 || !d2) {
        return;
    }
    const date1 = typeof d1 === 'string' && d1 ? new Date(d1) : d1;
    const date2 = typeof d2 === 'string' && d2 ? new Date(d2) : d2;
    return date1 <= date2;
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
                    let user = users.find((x) => x?._id.toString() === doctor?.userId) || {};
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
router.get('/doctors', getAllAvailableDoctorsHandler);
router.get('/doctors/:id', getAllDoctorsAppointmentHandler);
router.post('/doctors/:id', setDoctorsAvailabilityHandler);

router.post('/', createAppointmentHandler);
router.delete('/:id', deleteAppointmentHandler);
export default router;
