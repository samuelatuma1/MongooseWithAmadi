// Mongoose a way to interact with mongodb from Js
const Mongoose = require("mongoose");

const UserSchema = Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
},   {
    timestamps: true,
    strict: true
})

const User = Mongoose.model("User", UserSchema);

module.exports = { User };

