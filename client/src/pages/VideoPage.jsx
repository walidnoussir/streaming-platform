import { useQuery } from "@tanstack/react-query";
import VideoDetails from "../components/VideoDetails";
import SuggestedVideos from "../ui/SuggestedVideos";
import { getPopularVideos } from "../utils/api";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useVideoContext } from "../contexts/VideoContext";

function VideoPage() {
  const { id } = useParams();

  const {
    isPending: isPendingPopular,
    error,
    data: popularData,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getPopularVideos,
  });

  const { data: searchData, isPending: isPendingSearch = false } =
    useVideoContext();

  const isLoading = isPendingPopular || isPendingSearch;

  if (isLoading) return <Spinner />;
  if (error) console.log(error);

  // const data = searchData?.videos?.length ? searchData : popularData;
  const data = searchData || popularData;
  if (!data) return;

  const video = data.videos.find((vid) => vid.id === Number(id));
  console.log(data);

  return (
    <div className="flex flex-col gap-2 md:flex-row h-screen">
      {video && <VideoDetails video={video} />}
      {/* <SuggestedVideos /> */}
    </div>
  );
}

export default VideoPage;
