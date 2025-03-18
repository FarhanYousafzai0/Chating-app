import express from 'express'
import protectRoute from '../Middleware/protectRoute.js'
import { SideBarUsers } from '../Controllers/userControlers.js'

const router = express.Router()


router.get('/',protectRoute,SideBarUsers);

export default router