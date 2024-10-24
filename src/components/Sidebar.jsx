import { Heart, Home } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-64 hidden sm:block sidebar">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="assets/logo.png" alt="logo" className="hidden md:block" />
          <img src="assets/logo.svg" alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col items-start gap-8">
          <NavLink
            to="/"
            activeClassName="text-[#06D66E] font-bold"
            className="sidebar-item cursor-pointer hover:text-[#FF6600] transition duration-200"
          >
            <Home />
            <span className="font-bold">Home</span>
          </NavLink>
          <NavLink
            to="/favorites"
            activeClassName="text-[#06D66E] font-bold"
            className="sidebar-item cursor-pointer hover:text-[#FF6600] transition duration-200"
          >
            <Heart size={"24"} />
            <span className="font-bold">Favorites</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="flex justify-around mobile-bottom-bar fixed w-full bottom-0 left-0 z-10">
      <NavLink
        to="/"
        className="flex flex-col items-center cursor-pointer hover:text-[#FF6600] transition duration-200"
      >
        <Home size={"24"} />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className="flex flex-col items-center cursor-pointer hover:text-[#FF6600] transition duration-200"
      >
        <Heart size={"24"} />
        <span className="text-xs">Favorites</span>
      </NavLink>
    </div>
  );
};
