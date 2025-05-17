import { useQuery } from "@tanstack/react-query";
import VideoDetails from "../components/VideoDetails";
import SuggestedVideos from "../ui/SuggestedVideos";
import { getPopularVideos } from "../utils/api";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";

function VideoPage() {
  const { id } = useParams();

  const {
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
    error,
    data,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getPopularVideos,
  });

  if (isLoadingPopular) return <Spinner />;
  if (isErrorPopular) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data found</div>;

  const video = data.videos?.find((vid) => vid.id === Number(id));

  if (!video) return <div>Video not found</div>;

  return (
    <div className="flex flex-col gap-10 md:flex-row h-screen">
      <VideoDetails video={video} />
      <SuggestedVideos data={data} />
    </div>
  );
}

export default VideoPage;
