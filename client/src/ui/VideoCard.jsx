import { Link } from "react-router-dom";
import VideoCardBody from "./VideoCardBody";
import VideoPlayer from "../components/VideoPlayer";
import VideoInfo from "./VideoInfo";
import Menus from "./Menus";
import { Bookmark, Trash2 } from "lucide-react";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import VideoInterface from "./VideoInterface";

function VideoCard({ flexCard, id, item }) {
  if (flexCard)
    return (
      <div className="cursor-pointer">
        <div className="flex gap-2.5 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
          <VideoPlayer />
          {/*  <!-- Body--> */}
          <VideoInfo />
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Modal.Button opens="deleteConfirmation">
                  <button className="flex items-center gap-2 px-3 py-2 w-full hover:bg-slate-100 rounded-md cursor-pointer dark:bg-dark-2 dark:text-white dark:hover:bg-dark-3">
                    <Trash2 />
                    delete
                  </button>
                </Modal.Button>
                <Modal.Window name="deleteConfirmation">
                  <ConfirmDelete />
                </Modal.Window>
                <Menus.Button icon={<Bookmark />}>save</Menus.Button>
              </Menus.List>
            </Menus.Menu>
          </Modal>
        </div>
      </div>
    );

  return (
    <Link className="cursor-pointer" to={`/video-page/${item.id}`}>
      <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
        {/* <VideoPlayer item={item} /> */}
        <VideoInterface item={item} />
        <VideoCardBody item={item} />
      </div>
    </Link>
  );
}

export default VideoCard;
