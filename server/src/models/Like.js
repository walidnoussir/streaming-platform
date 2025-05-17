import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: Number,
      ref: "Video",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Like", LikeSchema);
