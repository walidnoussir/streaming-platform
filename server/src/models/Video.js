import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    url: String,
    videoOwner: String,
    videoPicture: String,
    duration: Number,

    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
