import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowDownToLine, Bookmark, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { getLikes, getSavedVideos, like } from "../utils/api";
import { useParams } from "react-router-dom";
import { handleSaveVideo } from "../constants/handleSaveVideo";

function VideoActions({ item }) {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["like", id],
    queryFn: () => getLikes(id),
  });

  const { mutate } = useMutation({
    mutationFn: () => like(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["like", id] });
    },
  });

  const saveMutation = useMutation({
    mutationFn: () => handleSaveVideo(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedVideos"] });
    },
  });

  const {
    data: savedVideos,
    isLoading: isLoadingSave,
    error,
  } = useQuery({
    queryKey: ["savedVideos"],
    queryFn: getSavedVideos,
  });

  useEffect(() => {
    if (data) {
      setIsLiked(data.liked);
    }
  }, [data]);

  if (isLoading) return null;

  if (isLoadingSave) return <p>Loading...</p>;
  if (error) console.log(error);

  const isSaved = savedVideos?.some((vid) => vid.url === id);

  return (
    <div className="flex justify-end py-1 px-2 overflow-x-scroll gap-1.5 md:justify-baseline">
      <div className="action">
        <Heart
          className={`icon cursor-pointer ${isLiked ? "fill-primary-500" : ""}`}
          onClick={() => mutate()}
        />
        <h1 className="flex items-center gap-2">
          <span className="text-sm">{data.count}</span>
        </h1>
      </div>

      <div className="action" onClick={() => saveMutation.mutate()}>
        <Bookmark
          className={`icon cursor-pointer ${isSaved ? "fill-primary-500" : ""}`}
        />
        <span className="text-sm">Save</span>
      </div>

      <div className="action">
        <ArrowDownToLine className="icon" />
        <span className="text-sm">Download</span>
      </div>
    </div>
  );
}

export default VideoActions;
