import mongoose from "mongoose";
import User from "../Models/authModel.js";
import bcrypt from "bcryptjs"; // For password hashing
import generateTokenAndSetCookie from "../Utils/generateToken.js";

// Signup Controller
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender,profilePic } = req.body;

        if(!fullName || !username || !password || !confirmPassword || !gender){
            res.status(400).json({error:"Please enter all the fields!"})
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match!" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            try {
                generateTokenAndSetCookie(newUser._id, res);
                await newUser.save();

                return res.status(201).json({
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    username: newUser.username,
                    profilePic: newUser.profilePic
                });
            } catch (tokenError) {
                console.error("Token Error:", tokenError);
                return res.status(500).json({ error: "Token generation failed!" });
            }
        } else {
            return res.status(400).json({ error: "Invalid user data!" });
        }

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: "Something went wrong. Please try again!" });
    }
};

// Login Controller
export const login = async (req, res) => {

    
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const isCorrectPassword = await bcrypt.compare(password, user?.password);

        if (!isCorrectPassword) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ error: "Something went wrong. Please try again!" });
    }
};

// Logout Controller
export const logout = async (req, res) => {
    
};
