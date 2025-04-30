import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { VideoProvider } from "../contexts/VideoContext";

function AppLayout() {
  return (
    <VideoProvider>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-full flex flex-col lg:ml-22">
          <Navbar />
          <main className="w-full h-full bg-snow overflow-y-scroll dark:bg-dark-2 transition-colors duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </VideoProvider>
  );
}

export default AppLayout;
