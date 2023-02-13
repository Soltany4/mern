import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: [true, 'Please add a text value']
    },
    firstName: {
        type: String,
        required: [true, 'Please add a text value']
    },
    lastName: {
        type: String,
        required: [true, 'Please add a text value']
    },
    email: {
        type: String,
        required: [true, 'Please add a text value']
    },
    contactNumber: {
        type: String,
        required: [true, 'Please add a text value']
    },
    age: {
        type: String,
        required: [true, 'Please add a text value']
    },
    dob: {
        type: String,
        required: [true, 'Please add a text value']
    },
    salary: {
        type: String,
        required: [true, 'Please add a text value']
    },
    address: {
        type: String,
        required: [true, 'Please add a text value']
    }
})

export default mongoose.model("Employee", employeeSchema)