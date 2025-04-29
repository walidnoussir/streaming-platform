import Spinner from "../ui/Spinner";
import VideoCard from "../ui/VideoCard";
import { getPopularVideos } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

function VideoList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["videos"],
    queryFn: getPopularVideos,
  });

  if (isPending) return <Spinner />;
  if (error) console.log(error);
  // console.log(data);

  return (
    <div className="grid grid-cols-1 gap-x-4.5 gap-y-4 md:grid-cols-3">
      {/* <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard /> */}
      {data.videos.map((item) => (
        <VideoCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default VideoList;
