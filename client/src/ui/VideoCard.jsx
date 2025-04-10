import { Link } from "react-router-dom";
import VideoCardBody from "./VideoCardBody";
import VideoPlayer from "../components/VideoPlayer";
import VideoInfo from "./VideoInfo";
import Menus from "./Menus";
import { Bookmark, Trash2 } from "lucide-react";

function VideoCard({ flexCard, id }) {
  if (flexCard)
    return (
      <div className="cursor-pointer">
        <div className="flex gap-2.5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
          <VideoPlayer />
          {/*  <!-- Body--> */}
          <VideoInfo />
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button icon={<Trash2 />}>delete</Menus.Button>
              <Menus.Button icon={<Bookmark />}>save</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </div>
    );

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
