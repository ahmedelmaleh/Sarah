import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../db/models/user.model.js';
import { sendEmail } from '../../utilis/sendemail.js';
import { AppError } from '../../utilis/appError.js';

export const addUser = async (req, res, next) => {
    const { username, email, password, otp } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new AppError('User already exists', 409));
    }

    const hashPass = bcrypt.hashSync(password, 8);
    const user = new User({
        username,
        email,
        password: hashPass,
        otp
    });

    const newUser = await user.save();
    newUser.password = undefined;

    const token = jwt.sign({ email }, 'ahmed');
    sendEmail(email, token);

    res.status(201).json({ message: 'User added successfully', success: true, data: newUser });
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
        return next(new AppError('Invalid credentials', 401));
    }

    const matchPassword = bcrypt.compareSync(password, userExist.password);
    if (!matchPassword) {
        return next(new AppError('Invalid credentials', 401));
    }

    const token = jwt.sign({ userId: userExist._id, username: userExist.username }, 'ahmed');
    res.status(200).json({ message: 'Login successful', success: true, token });
};

export const getUsers = async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({ users, success: true });
};
