import Menus from "../ui/Menus";
import VideoCard from "../ui/VideoCard";

function History() {
  return (
    <Menus>
      <div className="flex flex-col gap-4 overflow-y-scroll px-4 pb-4 pt-2 md:w-[50%]">
        {Array.from({ length: 10 }, (_, i) => {
          return <VideoCard flexCard id={i + 1} key={i} />;
        })}
      </div>
    </Menus>
  );
}

export default History;
