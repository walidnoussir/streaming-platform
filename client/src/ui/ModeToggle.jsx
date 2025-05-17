import { Monitor, Moon, Sun } from "lucide-react";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeSlice";

export default function ModeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const wrapperRef = useRef(null);

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  console.log(mode);

  const navigationItems = [
    {
      linkName: "System",
      icon: <Monitor className="w-6 h-6 cursor-pointer text-primary-400" />,
    },
    {
      linkName: "Dark",
      icon: <Moon className="w-6 h-6 cursor-pointer text-primary-400" />,
    },
    {
      linkName: "Light",
      icon: <Sun className="w-6 h-6 cursor-pointer text-primary-400" />,
    },
  ];

  function handleToggle(index) {
    dispatch(toggleMode(navigationItems[currentItem].linkName));
    setCurrentItem(index);
    setIsOpen(false);
  }

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap px-2 text-sm font-medium tracking-wide text-white transition duration-300   focus-visible:outline-none disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 disabled:shadow-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span>{navigationItems[currentItem].icon}</span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 right-0 flex w-40 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={` ${
                    index === currentItem
                      ? "bg-green-50 text-green-500"
                      : "bg-none text-slate-500"
                  } w-full flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-green-50 hover:text-green-500 focus:bg-green-50 focus:text-green-600 focus:outline-none focus-visible:outline-none`}
                  onClick={() => handleToggle(index)}
                >
                  <span className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                    <span>{item.icon}</span>
                    <span className="truncate leading-5">{item.linkName}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  );
}

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   });

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   const handleKeyDown = (e) => {
//     if (isOpen) {
//       e.preventDefault();
//     }
//     switch (e.keyCode) {
//       // KeyDown
//       case 40:
//         if (currentItem === navigationItems.length - 1) {
//           setCurrentItem(0);
//         } else {
//           setCurrentItem(currentItem + 1);
//         }
//         break;
//       // KeyUp
//       case 38:
//         if (currentItem === 0) {
//           setCurrentItem(navigationItems.length - 1);
//         } else {
//           setCurrentItem(currentItem - 1);
//         }
//         break;
//       // Escape
//       case 27:
//         setCurrentItem(1);
//         setIsOpen(false);
//         break;
//       default:
//         break;
//     }
//   };
