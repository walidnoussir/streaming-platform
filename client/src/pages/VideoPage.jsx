import VideoDetails from "../components/VideoDetails";
import SuggestedVideos from "../ui/SuggestedVideos";

function VideoPage() {
  return (
    <div className="flex flex-col gap-2 md:flex-row h-screen">
      <VideoDetails />
      <SuggestedVideos />
    </div>
  );
}

export default VideoPage;
