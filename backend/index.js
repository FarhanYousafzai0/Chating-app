import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'
import router from './Routes/authRoutes.js'
import connectDB from './Config/ConnectToDB.js'

const app = express()

// Database-Connection
connectDB()
// Middlewares
app.use('/api/auth',router)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())



// Server
app.listen(process.env.PORT,console.log(`Server has been started on ${process.env.PORT.blue}`))