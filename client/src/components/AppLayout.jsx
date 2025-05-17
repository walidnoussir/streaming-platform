import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { VideoProvider } from "../contexts/VideoContext";

function AppLayout() {
  return (
    <VideoProvider>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 bg-snow overflow-y-auto dark:bg-dark-2 transition-colors duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </VideoProvider>
  );
}

export default AppLayout;
