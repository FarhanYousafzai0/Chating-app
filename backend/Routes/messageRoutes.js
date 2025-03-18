import express from 'express';
import { getMessages, postMessage } from '../Controllers/messageControler.js';
import protectRoute from '../Middleware/protectRoute.js';

 export const routerMessage = express.Router();

// Corrected route syntax
routerMessage.post('/send/:id',protectRoute, postMessage); // Added '/' before `:id` for proper URL parameter
routerMessage.get('/:id',protectRoute,getMessages)


