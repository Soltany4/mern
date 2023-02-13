import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Add  full name']
    },
    email: {
        type: String,
        required: [true, 'Add your email']
    },
    password: {
        type: String,
        required: [true, 'Add a password']
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)