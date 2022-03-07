const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        userName: { type: String, required: true },
        // password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userMetaData: {
            gender: { type: String, required: false },
            isDoctor: { type: Boolean, required: true },
        },
        profile: {
            phoneNumber: { type: Number, required: true },
            profileActive: { type: Boolean, required: true },
            profilePic: { type: String, required: false },
        },
        address: 
            {
                location: { type: String, required: false },
                city: { type: String, required: false },
                state: { type: String, required: false },
                country: { type: String, required: false },
                zipCode: { type: Number, required: false },
            },
    },
    { collection: 'User' },
    {
        versionKey: false,
    }
);

export const userModel = mongoose.model('user', UserModel);
export default userModel;
