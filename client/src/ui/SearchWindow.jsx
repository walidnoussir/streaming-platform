import { Link } from "react-router-dom";
import { handleAddVideo } from "../constants/handleAddVideo";

function SearchWindow({ data, setSearch }) {
  function handleClick(item) {
    handleAddVideo(item);

    setSearch("");
  }

  return (
    <div className="fixed max-h-[20rem] overflow-y-scroll w-screen top-18 left-0 bg-white border border-gray-200 rounded-lg md:w-[48rem] md:left-90 md:top-16 z-50 dark:bg-dark-2 dark:border-slate-950">
      <ul className="divide-y divide-slate-100 dark:divide-dark">
        {data?.videos?.map((video) => (
          <li key={video.id} className="flex items-start gap-4 px-4 py-3">
            <div className="flex flex-col gap-0 min-h-[2rem] items-start justify-center">
              <Link
                to={`video-page/search/${video.id}`}
                className="text-base text-slate-700 dark:text-slate-50 flex items-center gap-2"
                onClick={() => handleClick(video)}
              >
                {/* Faster Development */}
                <img
                  src={video.image}
                  className="w-[4rem] h-[4rem]"
                  alt="title"
                />
                {video.user.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchWindow;
