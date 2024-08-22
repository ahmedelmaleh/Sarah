import jwt from 'jsonwebtoken';
import { AppError } from '../utilis/appError.js';

export const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    jwt.verify(token, 'ahmed', (err, decoded) => {
        if (err) {
            return next(new AppError('Invalid token. Please log in again!', 401));
        }
        req.user = decoded;
        next();
    });
};
