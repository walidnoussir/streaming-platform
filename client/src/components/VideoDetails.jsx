import VideoActions from "../ui/VideoActions";
import VideoContent from "../ui/VideoContent";
import VideoPlayer from "./VideoPlayer";

function VideoDetails() {
  return (
    <div className="md:w-[60%]">
      <VideoPlayer />
      <VideoContent />
    </div>
  );
}

export default VideoDetails;
