import { AppError } from "../utilis/appError.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errorArray = error.details.map((ele) => {
                return ele.message;
            });
            return next(new AppError(errorArray, 401));
        }
        next();
    };
};
