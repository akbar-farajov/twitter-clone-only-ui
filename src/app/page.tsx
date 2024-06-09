import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white bg-black">
      <div className="sm:max-w-[92vw] w-full h-full flex">
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
