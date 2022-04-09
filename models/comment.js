import mongoose, { Schema, ObjectId } from "mongoose";

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    commentator: {
        type: ObjectId,
        ref:"User"
    }
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema); 