import mongoose from "mongoose";

export const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/sarah')
        .then(() => {
            console.log("DB connected successfully");
        })
        .catch((err) => {
            console.log("Failed to connect to DB", err);
        });
};
