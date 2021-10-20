const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        userMetaData: {
            gender: { type: String, required: false },
            isDoctor: { type: Boolean, required: true },
        },
        profile: {
            phoneNumber: { type: Number, required: true },
            profileActive: { type: Boolean, required: true },
        },
        address: [
            {
                city: { type: String, required: false },
                state: { type: String, required: false },
                country: { type: String, required: false },
            },
        ],
    },
    {
        versionKey: false,
    }
);

const userModel = mongoose.model('user', User);
module.exports = userModel;
