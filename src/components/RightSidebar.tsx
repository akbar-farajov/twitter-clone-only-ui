import { IoIosSearch } from "react-icons/io";

function RightSidebar() {
  return (
    <section className="w-[33%] sticky top-0 overflow-y-scroll  hidden  lg:flex flex-col items-stretch gap-4 h-screen ">
      <div className="sticky top-0 w-full py-2 pl-8 backdrop-blur-sm bg-black/10 z-40">
        <div className="w-full h-full relative group">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="w-full h-full rounded-full bg-border py-3 pr-4 pl-14 outline-none placeholder:text-graytext focus:border focus:border-primary peer"
          />
          <label
            htmlFor="search"
            className=" h-full absolute left-0 top-0 flex items-center justify-center px-4 peer-focus:text-primary"
          >
            <IoIosSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl border-[0.5px] border-border pb-2 ml-8">
        <h3 className="font-bold text-xl px-4 py-2">Trends for you</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="px-4 py-2 hover:bg-neutral-950/70 transition duration-200 cursor-pointer"
            >
              <div className="font-bold text-base">#Turkiye</div>
              <div className="text-graytext text-xs">3,073 posts</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl border-[0.5px] border-border pb-2 ml-8">
        <h3 className="font-bold text-xl px-4 py-2">Who to follow</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-3 hover:bg-neutral-950/70 transition duration-200 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-slate-300"></div>
              <div className="flex-1">
                <div className="text-sm font-bold">Google</div>
                <div className="text-graytext text-sm">@Google</div>
              </div>
              <div>
                <button className="py-1.5 px-4 bg-white rounded-full text-black text-sm font-bold">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
