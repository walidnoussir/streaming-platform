import VideoActions from "../ui/VideoActions";
import VideoContent from "../ui/VideoContent";

function VideoDetails({ video }) {
  return (
    <div className="">
      <video
        className="h-60 w-full"
        src={video.video_files[0].link}
        controls
      ></video>
      <VideoContent />
    </div>
  );
}

export default VideoDetails;
