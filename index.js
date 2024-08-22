import express from 'express';
import jwt from 'jsonwebtoken';
import userRouter from './src/modules/user/user.router.js';
import messageRouter from './src/modules/message/message.router.js';
import { connectdb } from './db/connection.js';
import { globalHandler } from './src/utilis/asyncHandler.js';
import { User } from './db/models/user.model.js';

const app = express();
const port = 3000;

app.use(express.json());
connectdb();

app.use('/users', userRouter);
app.use('/messages', messageRouter);

app.get('/verify/:token', async (req, res, next) => {
    const token = req.params.token;
    const payload = jwt.verify(token, 'ahmed');
    await User.findOneAndUpdate({ email: payload.email }, { isVerified: true });
    res.json({ message: 'Your account verified successfully', success: true });
});

app.use(globalHandler);

app.listen(port, () => {
    console.log('Server is running on port', port);
});
