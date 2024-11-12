const mongoose = require('mongoose');

const model = mongoose.model;
const Schema = mongoose.Schema;

const PetsCollection = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: [true, 'Please provide the breed of the pet.']
    },
    id: {
        type: Number,
        unique: true,
        required: true
    }
}, {timestamps: true});

const Pets = model("pets", PetsCollection);

module.exports = Pets;