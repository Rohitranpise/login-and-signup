const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 10,
        max: 10,
        unique: true
    },
    profession: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        maxlength: 10
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// users