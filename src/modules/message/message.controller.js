import { Message } from '../../../db/models/message.model.js';
import { AppError } from '../../utilis/appError.js';

export const addMessage = async (req, res, next) => {
    const { content, receiverId } = req.body;

    const message = new Message({
        content,
        receiverId
    });

    const newMessage = await message.save();
    res.status(201).json({ message: 'Message added successfully', success: true, data: newMessage });
};

export const getMessages = async (req, res, next) => {
    const messages = await Message.find({ receiverId: req.user.userId });
    res.status(200).json({ message: 'Messages retrieved successfully', success: true, data: messages });
};

export const deleteMessage = async (req, res, next) => {
    const { id } = req.params;

    const message = await Message.findById(id);
    if (!message || message.receiverId.toString() !== req.user.userId) {
        return next(new AppError('You do not have permission to delete this message', 403));
    }

    await Message.deleteOne({ _id: id });  
    res.status(200).json({ message: 'Message deleted successfully', success: true });
};
