import { Search } from "lucide-react";
import SearchWindow from "../ui/SearchWindow";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideosBySearch } from "../utils/api";

function SearchBar() {
  const [search, setSearch] = useState("");

  const { isPending, error, refetch, data } = useQuery({
    queryKey: ["searchVideo"],
    queryFn: () => getVideosBySearch(search),
    enabled: false,
  });

  useEffect(() => {
    if (search.trim().length > 0) {
      refetch();
    }
  }, [search, refetch]);

  if (error) console.log(error);
  if (isPending) console.log("loading");

  return (
    <div className="flex items-center gap-3.5 border-2 border-primary-500 py-1 px-2.5 rounded-full focus:border-2 focus:border-primary-500 md:w-full relative">
      <input
        className="border-none outline-none w-full h-full py-1.5 dark:placeholder:text-slate-50 dark:text-white"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="border-l-2 w-8 h-8 border-primary-500 text-primary-600 p-1 cursor-pointer " />

      {search.trim().length > 0 && (
        <SearchWindow data={data} setSearch={setSearch} />
      )}
    </div>
  );
}

export default SearchBar;
