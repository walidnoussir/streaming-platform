import { Link } from "react-router-dom";
import VideoCardBody from "./VideoCardBody";
import VideoPlayer from "../components/VideoPlayer";

function VideoCard() {
  return (
    <Link className="cursor-pointer" to="/video-page">
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
        <VideoPlayer />
        {/*  <!-- Body--> */}
        <VideoCardBody />
      </div>
    </Link>
  );
}

export default VideoCard;
