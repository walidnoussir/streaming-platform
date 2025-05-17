import { useQuery } from "@tanstack/react-query";
import Menus from "../ui/Menus";
import VideoCard from "../ui/VideoCard";
import { getHistoryVideos } from "../utils/api";
import Spinner from "../ui/Spinner";

function History() {
  const { data, error, isPending } = useQuery({
    queryKey: ["history"],
    queryFn: getHistoryVideos,
  });

  if (isPending) return <Spinner />;
  if (error) console.log(error);

  if (!data.length)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center text-3xl font-bold dark:text-white">
          No history found. Start watching <br /> videos to see them listed
          here.
        </h1>
      </div>
    );

  return (
    <Menus>
      <div className="flex flex-col gap-4 overflow-y-scroll px-4 pb-4 pt-2 md:grid md:grid-cols-3">
        {data.map((item) => (
          <VideoCard
            key={item.url}
            flexCard
            id={item.url}
            item={item}
            deleteType="history"
          />
        ))}
      </div>
    </Menus>
  );
}

export default History;
