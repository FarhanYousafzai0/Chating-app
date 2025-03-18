import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import User from "../Models/authModel.js";

dotenv.config();

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        // Check if token exists
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No Token Provided' });
        }

        // Verify token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // Handle invalid token
        if (!decode) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        // Find the user
        const user = await User.findById(decode.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        // Attach user to request object
        req.user = user;

        next();

    } catch (error) {
        console.error(`Error in protecting middleware: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;
