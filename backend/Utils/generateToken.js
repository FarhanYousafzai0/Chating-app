import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateTokenAndSetCookie = (userId, res) => {
    
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d' // Token expires in 15 days
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true ,// Protects against XSS attacks
        sameSite:'strict',
        
    });
};
export default generateTokenAndSetCookie