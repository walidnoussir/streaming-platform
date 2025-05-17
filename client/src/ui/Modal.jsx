import { X } from "lucide-react";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const ModalContext = createContext();

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

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4">
      <main
        ref={ref}
        className="relative w-full max-w-2xl bg-white dark:bg-dark-3 rounded-2xl shadow-lg p-6 max-h-[90vh] overflow-y-auto z-[1000]"
      >
        <button
          className="absolute top-3 right-3 text-primary-500 h-8 w-8 cursor-pointer"
          onClick={close}
        >
          <X className="h-full w-full" />
        </button>
        {children}
      </main>
    </div>,
    document.body
  );
}

Modal.Button = Button;
Modal.Window = Window;

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext was used outside of ModalProvider");
  }

  return context;
};

export default Modal;
