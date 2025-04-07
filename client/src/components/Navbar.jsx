import { Moon, Sun } from "lucide-react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function Navbar({ isDark, setIsDark }) {
  console.log(isDark);
  return (
    <div className="w-full pl-16 pr-3.5 bg-gray-50/20 border-b border-gray-300 shadow-lg shadow-slate-800 py-4 flex justify-between items-center dark:bg-slate-800 dark:border-slate-900">
      <SearchBar />
      <div className="flex justify-end items-center gap-4 px-2.5">
        <Profile />
        <div
          onClick={() => {
            setIsDark((dark) => !dark);
            // localStorage.setItem("theme", isDark);
          }}
        >
          {isDark ? (
            <Sun className="w-6 h-6 cursor-pointer text-primary-400" />
          ) : (
            <Moon className="w-6 h-6 cursor-pointer text-primary-400" />
          )}
        </div>

        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default Navbar;
