const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    middlename: {
        type: String, 
        trim: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    ext: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trime: true,
        minlength: 3
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
});

const Profiles = mongoose.model('Profiles', profileSchema);

module.exports = Profiles;