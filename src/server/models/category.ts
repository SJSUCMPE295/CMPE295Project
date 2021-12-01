const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Category = new Schema(
    {
        Name: { type: String, required: true },
        Type: { type: String, required: true },
    },
    { collection: 'Category', versionKey: false }
);

export const categoryModel = mongoose.model('category', Category);
export default categoryModel;
