import {
  ArrowDownToLine,
  Bookmark,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

function VideoActions() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex justify-evenly py-1 px-2 overflow-x-scroll gap-1.5 md:justify-baseline">
      <div className="action">
        <ThumbsUp
          className={`icon cursor-pointer ${isLiked ? "fill-white" : ""}`}
          onClick={() => setIsLiked((like) => !like)}
        />
        <span className="border-r border-black pr-0.5">0</span>
        <ThumbsDown
          className={`icon cursor-pointer ${isDisliked ? "fill-white" : ""}`}
          onClick={() => setIsDisliked((dislike) => !dislike)}
        />
      </div>

      <div className="action">
        <Star
          className={`icon cursor-pointer ${isFavorite ? "fill-white" : ""}`}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        />
        <span className="text-sm">Favorite</span>
      </div>

      <div className="action">
        <Bookmark
          className={`icon cursor-pointer ${isSaved ? "fill-white" : ""}`}
          onClick={() => setIsSaved((save) => !save)}
        />
        <span className="text-sm">Save</span>
      </div>

      <div className="action">
        <ArrowDownToLine className="icon" />
        <span className="text-sm">Download</span>
      </div>
    </div>
  );
}

export default VideoActions;
