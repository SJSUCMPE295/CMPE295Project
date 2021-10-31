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
            ProfilePic: { type: String, required: false },
        },
        Address: [
            {
                Location: { type: String, required: false },
                City: { type: String, required: false },
                State: { type: String, required: false },
                Country: { type: String, required: false },
                ZipCode: { type: Number, required: false },
            },
        ],
    },
    { collection: 'User' },
    {
        versionKey: false,
    }
);

export const userModel = mongoose.model('user', UserModel);
export default userModel;
  