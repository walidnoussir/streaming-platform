import { EllipsisVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { ModalContext } from "./Modal";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex h-full items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  const { close: closeModal } = useContext(ModalContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
    closeModal();
  }

  return (
    <button
      className="bg-transparent border-none p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-3 transition duration-150"
      onClick={handleClick}
    >
      <EllipsisVertical className="text-gray-600 dark:text-gray-300" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="fixed bg-white border border-gray-200 shadow-lg rounded-lg z-50 dark:bg-dark-2 dark:border-dark-3 min-w-[160px] max-w-[200px] py-2"
      style={{ right: `${position?.x}px`, top: `${position?.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="flex items-center gap-2 px-3 py-1 w-full hover:bg-slate-100 rounded-md cursor-pointer dark:bg-dark-2 dark:text-white dark:hover:bg-dark-3"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
