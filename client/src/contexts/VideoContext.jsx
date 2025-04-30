import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getVideosBySearch } from "../utils/api";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const { isPending, error, refetch, data } = useQuery({
    queryKey: ["searchVideo"],
    queryFn: (search) => getVideosBySearch(search),
    enabled: false,
  });

  return (
    <VideoContext.Provider value={{ isPending, error, refetch, data }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("useVideoContext was used outside of VideoProvider");
  }

  return context;
};
