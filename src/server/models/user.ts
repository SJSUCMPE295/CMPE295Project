const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        Username: { type: String, required: true },
        Password: { type: String, required: true },
        Firstname: { type: String, required: true },
        Lastname: { type: String, required: true },
        UserMetaData: {
            Gender: { type: String, required: false },
            isDoctor: { type: Boolean, required: true },
        },
        Profile: {
            Phonenumber: { type: Number, required: true },
            Profileactive: { type: Boolean, required: true },
        },
        Address: [
            {
                City: { type: String, required: false },
                State: { type: String, required: false },
                Country: { type: String, required: false },
            },
        ],
    },
    { collection: 'User' },
    {
        versionKey: false,
    }
);

const userModel = mongoose.model('user', UserModel);
module.exports = userModel;
