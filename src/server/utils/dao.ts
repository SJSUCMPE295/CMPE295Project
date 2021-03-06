import mongoose from 'mongoose';
import doctorModel from 'models/doctor';
import Users from 'models/user';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import userModel from 'models/user';
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
export const getDoctorsData = async (user) => {
    const userId = user?._id.toString() || user?.userId;
    if (user?.userMetaData?.isDoctor && userId) {
        return doctorModel.findOne({ userId });
    }
};
export const getUserById = async (id) => {
    const userId = (id?.toString && id.toString()) || id;
    const userIdObject = typeof id === 'string' ? new mongoose.Types.ObjectId(id) : id;
    if (userId) {
        const user = await Users.findOne({ _id: userIdObject });
        if (user && user.toJSON()) {
            const doctorData = await doctorModel.findOne({ userId });
            const doctor = user?.userMetaData?.isDoctor ? doctorData : null;
            const appointmentsData =
                (await doctorAppointmentModel.find(doctor ? { doctorId: userId } : { userId })) ||
                [];
            const appointments =
                appointmentsData?.map &&
                appointmentsData
                    ?.map((appointment) => {
                        const obj = appointment?.toJSON ? appointment.toJSON() : appointment;
                        return {
                            ...obj,
                            id: appointment?._id || obj?._id || obj?.id,
                        };
                    })
                    .filter((x) => x?.id)
                    .filter((x) => greaterThanDate(new Date(), x?.time))
                    .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
            return { ...user.toJSON(), doctor, appointments };
        }
    }
};
export const getUserByIdWithAppointments = async (id) => {
    const user = await getUserById(id);
    const users = (await userModel.find()) || [];
    const usersObject = (users?.toJSON ? users.toJSON() : users).reduce(
        (acc, curr) => ({ ...acc, [curr?._id]: curr }),
        {}
    );
    const appointments =
        user?.appointments?.map &&
        user?.appointments?.map((appointment) => {
            const obj = appointment?.toJSON ? appointment.toJSON() : appointment;
            return {
                ...obj,
                id: appointment?._id || obj?._id || obj?.id,
                user: usersObject[appointment?.userId],
                doctor: usersObject[appointment?.doctorId],
            };
        });
    return { ...user, appointments };
};
export const getUserData = async (user) => {
    const userId = user?._id.toString() || user?.userId;
    if (userId) {
        return getUserById(userId);
    }
};
