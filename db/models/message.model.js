import { model, Schema } from "mongoose";

export const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export const Message = model('Message', messageSchema);
