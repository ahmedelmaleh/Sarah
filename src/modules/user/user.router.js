import { Router } from "express";
import { addUser, getUsers, signin } from "./user.controller.js";
import { asyncHandeler } from "../../utilis/asyncHandler.js";
import { validate } from "../../middleware/validation.js";
import { adduserVal, signinVal } from "./user.validate.js";

const userRouter = Router();

userRouter.post('/', validate(adduserVal), asyncHandeler(addUser));
userRouter.post('/signin', validate(signinVal), asyncHandeler(signin));
userRouter.get('/', asyncHandeler(getUsers));

export default userRouter;
