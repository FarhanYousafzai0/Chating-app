import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
dotenv.config()


const connectDB = async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log(`Database has been connected! on ${process.env.DB_URL.bgMagenta} `)
}
export default connectDB