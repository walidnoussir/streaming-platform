import { Link } from "react-router-dom";
import VideoCardBody from "./VideoCardBody";
import VideoInterface from "./VideoInterface";
import { handleAddVideo } from "../constants/handleAddVideo";

function VideoSearch({ item }) {
  return (
    <Link
      className="cursor-pointer"
      to={`/video-page/search/${item.id}`}
      onClick={() => handleAddVideo(item)}
    >
      <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
        <VideoInterface item={item} />
        <VideoCardBody item={item} />
      </div>
    </Link>
  );
}

export default VideoSearch;
