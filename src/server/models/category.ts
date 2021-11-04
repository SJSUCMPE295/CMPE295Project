const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        Name: { type: String, required: true },
        Type: { type: String, required: true },
    },
    { collection: 'Category', versionKey: false }
);

const categoryModel = mongoose.model('category', Category);
module.exports = categoryModel;
