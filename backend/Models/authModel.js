import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Enter your full name!']
    },
    username: {
        type: String,
        required: [true, 'Enter your username!'],
        unique: true // Ensures usernames are unique
    },
    password: {
        type: String, // Changed from Number to String (passwords are usually strings)
        required: [true, 'Enter your password!']
    },
    gender: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: true // Default avatar URL
    }
}, { timestamps: true });

// Corrected the model creation method
const User = mongoose.model('User', UserSchema);

export default User;
