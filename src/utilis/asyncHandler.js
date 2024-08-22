import { AppError } from "./appError.js";

export function asyncHandeler(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            next(new AppError(err.message, err.statusCode));
        });
    };
}

export const globalHandler = (err, req, res, next) => {
    if (req.errorArray) {
        return res.status(err.statusCode || 500).json({ message: req.errorArray, success: false });
    }
    return res.status(err.statusCode || 500).json({ message: err.message, success: false });
};
