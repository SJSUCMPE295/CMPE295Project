const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Speciality = new Schema(
    {
        name: { Array, default: [] },
    },
    { collection: 'Specialities', versionKey: false }
);

export const specialityModel = mongoose.model('speciality', Speciality);
export default specialityModel;