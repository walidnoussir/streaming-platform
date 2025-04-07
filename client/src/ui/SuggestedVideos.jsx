import VideoCard from "./VideoCard";

function SuggestedVideos() {
  return (
    <div className="h-screen overflow-y-scroll flex flex-col gap-6 px-2">
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

export default SuggestedVideos;
