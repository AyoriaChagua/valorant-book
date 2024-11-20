import { Heart, Map, SquareUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" bg-[#1c202d] bg-opacity-30 w-full backdrop-blur-lg h-14 flex items-center lg:px-10 md:px-6 px-3 pr-5 pl-24 md:pl-5 sticky top-0 z-10">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-0.5 bg-[#40475f]"
        aria-hidden="true"
      ></div>

      <div className="flex w-full space-x-4 justify-between">
        <div className="flex items-center gap-7">
          <button className={`text-red-500 display flex items-center gap-2 text-sm`}>
            <SquareUserRound /> <span className="hidden md:block">Agents</span>
          </button>
          <button className={`text-red-500 display flex items-center gap-2 text-sm`}>
            <Map /> <span className="hidden md:block">Maps</span>
          </button>
        </div>
        <div className="flex items-center">
          <button className={`text-white font-bold`}>
            <Heart style={{ fontSize: "20px" }} className="text-red-500" />
          </button>
        </div>
      </div>
    </nav>
  );
}