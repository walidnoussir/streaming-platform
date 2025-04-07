import { useState } from "react";
import Comments from "../components/Comments";
import Button from "./Button";
import VideoActions from "./VideoActions";

function VideoContent() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white py-2 shadow-sm shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-800">
      <h3 className="text-xl font-medium text-slate-700 p-1 dark:text-white">
        Memories of the past
      </h3>
      <div className="flex items center gap-2">
        <p className="text-sm text-slate-500 p-1 dark:text-slate-50">
          28k views 2d ago
        </p>
        <button
          className="text-gray-500 cursor-pointer dark:text-white"
          onClick={() => setShowComments((show) => !show)}
        >
          {showComments ? "...Hide comments" : "...See comments"}
        </button>
      </div>
      <main className="flex justify-between px-4 py-2">
        <header className="flex items-center gap-1.5">
          <img
            className="w-10 h-10 rounded-full"
            src="/channel-logo.jpg"
            alt="channelLogo"
          />
          <h2 className="text-sm text-shadow-slate-950 dark:text-slate-50">
            Javascript mastery
          </h2>
        </header>
        <Button type="primary">Subscribe</Button>
      </main>
      <VideoActions />
      {showComments && <Comments />}
    </div>
  );
}

export default VideoContent;
