import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { HiOutlineUsers, HiUser } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

const NAVIGATION_ITEMS = [
  { title: "Twitter", icon: FaXTwitter },
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: IoIosSearch,
  },
  { title: "Notifications", icon: IoMdNotificationsOutline },
  { title: "Messages", icon: HiOutlineEnvelope },
  { title: "Communities", icon: HiOutlineUsers },
  { title: "Profile", icon: HiUser },
];

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 hidden sm:flex flex-col justify-between lg:items-stretch items-center w-[10%] lg:w-[24%] h-screen">
      <div className="flex flex-col lg:mr-9">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="flex items-center justify-start w-fit gap-5 p-3 rounded-full  text  hover:bg-white/10 transition duration-150"
            href={`${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div className="">
              <item.icon className="text-3xl" />
            </div>
            {item.title !== "Twitter" && (
              <div className="text-[20px] hidden lg:block">{item.title}</div>
            )}
          </Link>
        ))}
        <button className="w-fit lg:w-full bg-primary hover:bg-primary transition duration-75 rounded-full p-3 text-md font-bold mt-2">
          Post
        </button>
      </div>
      <button className="hover:bg-white/10 transition duration-200 mb-2 rounded-full p-3 text-md font-bold mt-2 flex items-center justify-between mr-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-600"></div>
          <div className="hidden lg:block text-left">
            <div className="text-sm">Akbar</div>
            <div className="text-xs text-gray-500 font-medium">
              @akbarfarajov
            </div>
          </div>
        </div>

        <div className="hidden lg:block text-left">
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
