import VideoSearch from "./VideoSearch";

function SuggestedSearchVideos({ data }) {
  return (
    <div className="h-screen overflow-y-scroll flex flex-col gap-6 px-2 md:w-80">
      {data.videos.map((video) => (
        <VideoSearch item={video} key={video.id} />
      ))}
    </div>
  );
}

export default SuggestedSearchVideos;
