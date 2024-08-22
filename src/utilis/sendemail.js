import nodemailer from 'nodemailer';
import { htmlTemplate } from './htmltemplate.js';

export const sendEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "almalehahmed@gmail.com",
            pass: "lqtu pxwd hllm dvim",
        },
    });

    const info = await transporter.sendMail({
        from: '"Breadfast" <almalehahmed@gmail.com>',
        to: email,
        subject: "Verify Email",
        html: htmlTemplate(token),
    });

    console.log("Message sent: %s", info.messageId);
};
