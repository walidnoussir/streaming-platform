import { X } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Button({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return (
    <button onClick={() => open(opensWindowName)} className="cursor-pointer">
      {children}
    </button>
  );
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 h-screen w-full bg-transparent z-100   backdrop-blur-xs">
      <main className="w-[80%] h-[30%] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg py-2 px-4 md:w-[50%] md:h-[50%] dark:bg-dark-3">
        <button
          className="absolute top-2 right-3 text-primary-500 h-8 w-8 cursor-pointer "
          onClick={close}
        >
          <X className="h-full w-full" />
        </button>
        <div className="h-full overflow-y-scroll">{children}</div>
      </main>
    </div>,
    document.querySelector("body")
  );
}

Modal.Button = Button;
Modal.Window = Window;

export default Modal;
