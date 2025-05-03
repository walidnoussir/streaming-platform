import React, { useState } from "react";
import { History, House, ListPlus, LogOut, UserCog } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

const pages = [
  { page: "Home", icon: <House className="icon" />, path: "/home" },
  { page: "History", icon: <History className="icon" />, path: "/history" },
  {
    page: "Playlists",
    icon: <ListPlus className="icon" />,
    path: "/playlists",
  },
  {
    page: "Admin Panel",
    icon: <UserCog className="icon" />,
    path: "/admin-panel",
  },
];

function Sidebar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        className={`fixed top-2 left-2 z-50 h-12 w-12 rounded bg-white dark:bg-dark-3 lg:hidden transition-all`}
      >
        <div className="relative w-6 h-6 mx-auto mt-3">
          <span
            className="absolute top-0 left-0 w-full h-0.5 bg-black dark:bg-white transform transition duration-300"
            style={{
              transform: isSideNavOpen
                ? "rotate(45deg) translateY(6px)"
                : "none",
            }}
          ></span>
          <span
            className={`absolute top-2 left-0 w-full h-0.5 bg-black dark:bg-white transition duration-300 ${
              isSideNavOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white transform transition duration-300"
            style={{
              transform: isSideNavOpen
                ? "rotate(-45deg) translateY(-6px)"
                : "none",
            }}
          ></span>
        </div>
      </button>

      {/* Sidebar */}
      <aside
        className={`z-40 h-screen w-72 bg-white dark:bg-dark-1 transition-transform flex flex-col shadow-2xl shadow-slate-200 dark:text-white dark:shadow-slate-950
        lg:translate-x-0 lg:static fixed top-0 left-0 duration-300
        ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Logo />
        <div className="py-5 px-4 flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-4">
            {pages.map((page) => (
              <NavLink
                to={page.path}
                key={page.path}
                className="hover:bg-primary-400 hover:text-white font-medium py-3 px-4 rounded-lg"
              >
                <li
                  onClick={() => setIsSideNavOpen(false)}
                  className="flex items-center gap-3.5"
                >
                  {page.icon}
                  <h1 className="text-lg md:text-sm">{page.page}</h1>
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 py-1.5">
            <NavLink
              to="/"
              className="hover:bg-primary-400 hover:text-white font-medium py-3 px-4 rounded-lg"
            >
              <li className="flex items-center gap-3.5">
                <LogOut className="icon" />
                <h1 className="text-lg md:text-sm">Log out</h1>
              </li>
            </NavLink>
          </ul>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isSideNavOpen && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setIsSideNavOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
