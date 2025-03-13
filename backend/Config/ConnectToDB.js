import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async()=>{

  
    await mongoose.connect(process.env.MONGO_URl)
    console.log('Database has been connected!')
  
}
export default connectDB