import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function AppLayout() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="w-full flex flex-col lg:ml-22">
        <Navbar setIsDark={setIsDark} isDark={isDark} />
        <main className="w-full h-full bg-snow overflow-y-scroll dark:bg-slate-700">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
