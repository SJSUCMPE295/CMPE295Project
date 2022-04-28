import mongoose from 'mongoose';
import doctorModel from 'models/doctor';
import Users from 'models/user';
import { doctorAppointmentModel } from 'models/doctorAppointment';
import userModel from 'models/user';
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
            const doctor = await doctorModel.findOne({ userId });
            const appointments = await doctorAppointmentModel.find(
                doctor ? { doctorId: userId } : { userId }
            );
            return { ...user.toJSON(), doctor, appointments };
        }
    }
};
export const getUserData = async (user) => {
    const userId = user?._id.toString() || user?.userId;
    if (userId) {
        return getUserById(userId);
    }
};
