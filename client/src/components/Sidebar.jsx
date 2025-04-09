import React, { useState } from "react";
import {
  History,
  House,
  Layers,
  LogOut,
  Settings,
  UserCog,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

const pages = [
  {
    page: "Home",
    icon: <House className="icon" />,
    path: "/home",
  },
  {
    page: "History",
    icon: <History className="icon" />,
    path: "/history",
  },
  {
    page: "Categories",
    icon: <Layers className="icon" />,
    path: "/categories",
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
    <div className="md:w-[20%]">
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-0 top-2 cursor-pointer z-40 order-10 block h-16 w-16 self-center rounded bg-white opacity-100 lg:hidden dark:bg-dark-3 transition-colors duration-300 ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300 dark:bg-slate-50"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300 dark:bg-slate-100"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300 dark:bg-slate-200"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r  border-r-slate-200 bg-white transition-transform lg:translate-x-0 dark:bg-dark-1 dark:text-white dark:border-r-slate-900/70 duration-300 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
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
              to="/settings"
              className="hover:bg-primary-400 hover:text-white font-medium py-3 px-4 rounded-lg"
            >
              <li className="flex items-center gap-3.5">
                <Settings className="icon" />
                <h1 className="text-lg md:text-sm">Settings</h1>
              </li>
            </NavLink>
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
      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Basic side navigation menu --> */}
    </div>
  );
}

export default Sidebar;
