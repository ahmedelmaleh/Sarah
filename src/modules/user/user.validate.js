import joi from "joi";

export const adduserVal = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,20}$')).required(),
    otp: joi.string().required(),
    rePassword: joi.valid(joi.ref('password')).required()
}).required();

export const signinVal = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[A-Za-z0-9]{3,20}$')).required(),
}).required();
