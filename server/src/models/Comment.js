import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
