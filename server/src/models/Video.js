import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    url: String,
    videoOwner: String,
    image: String,
    duration: Number,

    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
