import mongoose from "mongoose";
import User from "../Models/authModel.js";
import bcrypt from "bcryptjs"; // For password hashing
import generateTokenAndSetCookie from "../Utils/generateToken.js";

// Signup Controller
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Password Match Check
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match!" });
        }

        // Check if Username Already Exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists!" });
        }

        // Hashing Password for Security
        const hashedPassword = await bcrypt.hash(password, 10);

        // Profile Picture Based on Gender
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create New User
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword, // Store hashed password
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){
generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();

        res.status(201).json({ 
_id :newUser._id,
fullName:newUser.fullName,
password:newUser.password,

         });

        }else{
            res.status(400).json({error:"Invalid user data!"})
        }

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: "Something went wrong. Please try again!" });
    }
};

// Login Controller (Empty for now)
export const login = async (req, res) => {
    res.status(200).json({ message: "Login logic will be added soon!" });
};

// Logout Controller (Empty for now)
export const logout = async (req, res) => {
    res.status(200).json({ message: "Logout logic will be added soon!" });
};
