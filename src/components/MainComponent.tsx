import { AiOutlineRetweet } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { PiDot } from "react-icons/pi";

const MainComponent = () => {
  return (
    <main className="lg:w-[51%] md:w-[80%] w-full h-full min-h-screen flex flex-col border-x-[0.5px] border-border">
      <h1 className="text-xl font-bold p-4 backdrop-blur border-b-[0.5px] border-border bg-black/10 sticky top-0 z-30">
        Home
      </h1>
      <div className="relative flex space-x-4 w-full border-b-[0.5px] border-border p-3 ">
        <div className="w-10 h-10 rounded-full bg-slate-300 flex-none"></div>
        <div className="w-full h-full flex flex-col  gap-4 justify-between items-stretch p-3 text-wrap">
          <input
            type="text"
            placeholder="What is happening?!"
            className="w-full bg-transparent outline-none text-xl placeholder:text-xl placeholder:text-graytext text-wrap"
          />
          <div className="flex items-center justify-between">
            <div></div>
            <button
              className=" bg-primary hover:bg-primary transition duration-75 rounded-full 
          py-1.5 px-4 text-md font-semibold"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px] border-border flex gap-1 px-4 py-2"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <div className="font-bold">Akbar</div>
                  <div className="text-graytext">@akbarfarajov</div>
                  <PiDot className="text-graytext" />
                  <div className="text-graytext">46m</div>
                </div>
                <div className="p-2 rounded-full hover:bg-border cursor-pointer">
                  <BsThreeDots className="text-graytext" />
                </div>
              </div>

              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                reiciendis dolore voluptates est quo
              </div>
              <div className="bg-slate-400 w-full h-72 md:h-96 aspect-square rounded-xl"></div>
              <div className="w-full flex items-center justify-between ">
                <div className="rounded-full p-2 hover:bg-border cursor-pointer">
                  <FaRegComment className="text-white/30 text-md hover:text-primary" />
                </div>
                <div className="rounded-full p-2 hover:bg-border cursor-pointer">
                  <AiOutlineRetweet className="text-white/30 text-md" />
                </div>
                <div className="rounded-full p-2 hover:bg-border cursor-pointer">
                  <CiHeart className="text-white/30 text-md" />
                </div>
                <div className="rounded-full p-2 hover:bg-border cursor-pointer">
                  <IoIosStats className="text-white/30 text-md" />
                </div>
                <div className="flex gap-1 text-md">
                  <GoBookmark className="text-white/30 text-md" />
                  <FiShare className="text-white/30 text-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
