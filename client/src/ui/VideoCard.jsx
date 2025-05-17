import { Link } from "react-router-dom";
import VideoCardBody from "./VideoCardBody";
import VideoInfo from "./VideoInfo";
import Menus from "./Menus";
import { Bookmark, BookmarkX, Trash2 } from "lucide-react";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import VideoInterface from "./VideoInterface";
import { handleAddVideo } from "../constants/handleAddVideo";
import customAxios from "../utils/customAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { getSavedVideos } from "../utils/api";

function VideoCard({ flexCard, id, item, deleteType }) {
  const handleSave = async () => {
    try {
      await customAxios.post("/saved/save-video", {
        url: item.url,
        videoOwner: item.videoOwner,
        image: item.image,
        duration: item.duration,
      });
    } catch (err) {
      console.error(`Could not save this video ${err.message}`);
    }
  };
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: () => handleSave(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedVideos"] });
    },
  });

  const { data: savedVideos, isLoading: isLoadingSave } = useQuery({
    queryKey: ["savedVideos"],
    queryFn: getSavedVideos,
  });

  if (isLoadingSave) return <Spinner />;

  const isSaved = savedVideos?.some((vid) => vid.url === id);

  if (flexCard)
    return (
      <div className="cursor-pointer w-full">
        <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
          <VideoInterface flex item={item} />

          <VideoInfo item={item} />

          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Modal.Button opens="deleteConfirmation">
                  <button className="flex items-center gap-2 px-3 py-2 w-full hover:bg-slate-100 rounded-md cursor-pointer dark:bg-dark-2 dark:text-white dark:hover:bg-dark-3 transition">
                    <Trash2 className="w-5 h-5" />
                    delete
                  </button>
                </Modal.Button>

                <Menus.Button
                  icon={
                    isSaved ? <BookmarkX /> : <Bookmark className="w-5 h-5" />
                  }
                  onClick={() => saveMutation.mutate()}
                  className="capitalize"
                >
                  save
                </Menus.Button>
              </Menus.List>
            </Menus.Menu>

            <Modal.Window name="deleteConfirmation">
              <ConfirmDelete type={deleteType} item={item} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    );

  return (
    <Link
      className="cursor-pointer"
      to={`/video-page/${item.id}`}
      onClick={() => handleAddVideo(item)}
    >
      <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200 dark:bg-dark-3 dark:shadow-dark-3">
        <VideoInterface item={item} />
        <VideoCardBody item={item} />
      </div>
    </Link>
  );
}

export default VideoCard;
