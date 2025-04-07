function Wrapper({ children }) {
  return (
    <div className="w-full h-[60%] justify-center px-8 flex flex-col gap-2.5 md:w-[50%] md:px-14 md:gap-4">
      {children}
    </div>
  );
}

export default Wrapper;
