import VideoCard from "../ui/VideoCard";

function VideoList() {
  return (
    <div className="grid grid-cols-1 gap-x-4.5 gap-y-4 md:grid-cols-3">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default VideoList;
