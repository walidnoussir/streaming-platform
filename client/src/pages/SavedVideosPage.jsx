import { useQuery } from "@tanstack/react-query";
import { getSavedVideos } from "../utils/api";
import Spinner from "../ui/Spinner";
import Menus from "../ui/Menus";
import VideoCard from "../ui/VideoCard";

function SavedVideosPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["savedVideos"],
    queryFn: getSavedVideos,
  });

  if (isLoading) return <Spinner />;
  if (error) console.log(error);

  if (!data.length)
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <h1 className="text-center text-3xl font-bold dark:text-white">
          No saved videos found. <br /> Save some videos to see them listed
          here.
        </h1>
      </div>
    );

  return (
    <Menus>
      <div className="flex flex-col gap-4 overflow-y-scroll px-4 py-[7rem] md:grid md:grid-cols-3">
        {data.map((item) => (
          <VideoCard
            key={item.url}
            flexCard
            id={item.url}
            item={item}
            deleteType="saved"
          />
        ))}
      </div>
    </Menus>
  );
}

export default SavedVideosPage;
