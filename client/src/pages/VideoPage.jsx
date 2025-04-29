import { useQuery } from "@tanstack/react-query";
import VideoDetails from "../components/VideoDetails";
import SuggestedVideos from "../ui/SuggestedVideos";
import { getPopularVideos } from "../utils/api";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";

function VideoPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["videos"],
    queryFn: getPopularVideos,
  });

  const { id } = useParams();

  if (error) console.log(error);
  if (isPending) return <Spinner />;

  if (!data) return;

  const video = data.videos.find((vid) => String(vid.id) === id);
  console.log(video);

  return (
    <div className="flex flex-col gap-2 md:flex-row h-screen">
      {video && <VideoDetails video={video} />}
      {/* <SuggestedVideos /> */}
    </div>
  );
}

export default VideoPage;
