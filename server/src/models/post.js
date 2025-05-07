import mongoose, { Schema, model, Document } from "mongoose";

const postSchema = new Schema(
  {
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    text: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
