import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import { addMessage, getMessages, deleteMessage } from './message.controller.js';
import { asyncHandeler } from '../../utilis/asyncHandler.js';

const messageRouter = Router();

messageRouter.post('/', protect, asyncHandeler(addMessage));
messageRouter.get('/', protect, asyncHandeler(getMessages));
messageRouter.delete('/:id', protect, asyncHandeler(deleteMessage));

export default messageRouter;
