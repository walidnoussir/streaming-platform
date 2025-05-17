import { useState } from "react";
import Comments from "../components/Comments";
import Button from "./Button";
import VideoActions from "./VideoActions";

function VideoContent({ video }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white py-2 shadow-sm shadow-slate-300 dark:bg-dark-3 dark:shadow-dark-3">
      <div className="w-full flex justify-between items-center gap-2 p-2">
        <h3 className="text-xl font-medium text-slate-700 p-1 dark:text-white">
          {video.user.name}
        </h3>
        <Button
          type="secondary"
          className="text-gray-500 cursor-pointer dark:text-white"
          onClick={() => setShowComments((show) => !show)}
        >
          {showComments ? "Hide comments" : "See comments"}
        </Button>
      </div>

      <VideoActions item={video} />
      {showComments && <Comments />}
    </div>
  );
}

export default VideoContent;
