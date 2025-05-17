import { Moon, Plus, Sun } from "lucide-react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { useThemeContext } from "../contexts/ThemeContext";
import Modal from "../ui/Modal";
import Categories from "../ui/Categories";

function Navbar() {
  const { isDark, setIsDark } = useThemeContext();

  return (
    <div className="w-full pl-16 pr-3.5 bg-gray-50/20 border-b border-gray-300 shadow-lg shadow-slate-800 py-4 flex justify-between items-center dark:bg-dark-3 dark:border-slate-900 transition-colors duration-300">
      <SearchBar />

      <Modal>
        <Modal.Button opens="categoriesModal">
          <Plus className="h-10 w-10 text-primary-500 cursor-pointer" />
        </Modal.Button>
        <Modal.Window name="categoriesModal">
          <Categories />
        </Modal.Window>
      </Modal>

      <div className="flex justify-end items-center gap-4 px-2.5">
        <Profile />
        <div
          onClick={() => setIsDark((dark) => !dark)}
          title={isDark ? "light mode" : "dark mode"}
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
