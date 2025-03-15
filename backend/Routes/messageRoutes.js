import express from 'express';
import { postMessage } from '../Controllers/messageControler.js';

 export const routerMessage = express.Router();

// Corrected route syntax
routerMessage.post('/send/:id', postMessage); // Added '/' before `:id` for proper URL parameter


