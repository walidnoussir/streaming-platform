import { AudioLines } from "lucide-react";

function Logo() {
  return (
    <h1 className="text-4xl flex justify-center items-center gap-2 font-bold font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-400 to-primary-600 tracking-wide py-2 px-4 cursor-pointer">
      <AudioLines className="text-primary-600 text-4xl" />
      Streamw
    </h1>
  );
}

export default Logo;
