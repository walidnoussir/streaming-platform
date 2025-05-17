import VideoDetails from "../components/VideoDetails";
import SuggestedSearchVideos from "../ui/SuggestedSearchVideos";
import { useParams } from "react-router-dom";

function VideoPageBySearch() {
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("dataSearch"));

  if (data) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - data.timestamp;
    const expirationTime = 1000 * 60;

    if (elapsedTime >= expirationTime) {
      localStorage.removeItem("dataSearch");
      console.log("Cached data expired");
    }
  }

  if (!data) return <div>No data found</div>;

  const video = data.videos?.find((vid) => vid.id === Number(id));

  if (!video) return <div>Video not found</div>;

  return (
    <div className="flex flex-col gap-2 md:flex-row h-screen">
      <VideoDetails video={video} />
      <SuggestedSearchVideos data={data} />
    </div>
  );
}

export default VideoPageBySearch;
