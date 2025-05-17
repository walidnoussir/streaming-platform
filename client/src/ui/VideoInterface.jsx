import { CirclePlay } from "lucide-react";

function VideoInterface({ item, flex }) {
  if (flex)
    return (
      <div className="relative">
        <CirclePlay className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12" />
        <img className="w-full h-44" src={item.image} />
      </div>
    );

  return (
    <div className="relative">
      <CirclePlay className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12" />
      <img className="w-full h-60" src={item.image} />
    </div>
  );
}

export default VideoInterface;
