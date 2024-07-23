import { Link } from "@mongez/react-router";
import logo from "shared/assets/images/logo.svg";
import { Input } from "shared/components/ui/input";
import { Separator } from "shared/components/ui/separator";
import { bottomHeaderNavbarItems } from "./constant/bottomHeaderData";

type NavigationMenuType = {
  toggleSidebar: () => void;
};

const NavigationMenu = ({ toggleSidebar }: NavigationMenuType) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-black bg-opacity-15">
      <div className="w-1/2 h-full bg-white px-5">
        <div className="flex justify-between items-center p-5">
          <img src={logo} alt="nest logo" className="w-[140px] h-[44px]" />
          <span
            className="w-8 h-8 flex justify-center items-center rounded-full bg-main-200"
            onClick={() => toggleSidebar()}>
            <i className="bx bx-x font-bold"></i>
          </span>
        </div>
        <Separator />
        <div className="mt-2 p-5">
          <Input
            placeholder="search for items"
            className="p-5 bg-gray-200 text-black placeholder:text-black text-base border-none rounded-lg focus-visible:ring-0"
          />
        </div>
        <ul className="flex flex-col gap-y-3 p-5">
          {bottomHeaderNavbarItems.map(item => (
            <li key={item.label}>
              <Link to={item.link}>
                <span className="pb-3 block font-bold">{item.label}</span>
              </Link>
              <Separator />
            </li>
          ))}
          <li className="pb-3">
            <span className="pb-3 block font-bold">Language</span>
            <Separator />
          </li>
        </ul>
        <ul className="p-5 flex flex-col gap-y-2 border border-gray-200 font-bold">
          <li className="flex items-center gap-x-2">
            <i className="bx bx-location-plus text-main-500"></i>
            <span>location</span>
          </li>
          <li className="flex items-center gap-x-2">
            <i className="bx bx-user text-main-500"></i>
            <span>Login in / Sign up</span>
          </li>
          <li className="flex items-center gap-x-2">
            <i className="bx bxs-phone text-main-500"></i>
            <span>(+01)-2345-6789</span>
          </li>
        </ul>
        <div className="mt-5">
          <p className="font-bold">Follow us:</p>
          <ul className="flex items-center gap-x-2 mt-5">
            <li className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
              <i className="bx bxl-facebook"></i>
            </li>
            <li className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
              <i className="bx bxl-twitter"></i>
            </li>
            <li className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
              <i className="bx bxl-instagram"></i>
            </li>
            <li className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
              <i className="bx bxl-pinterest"></i>
            </li>
            <li className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
              <i className="bx bxl-youtube"></i>
            </li>
          </ul>
        </div>
        <div className="my-10">
          <p>
            Copyright 2024 &copy; Nest. All rights reserved. Powered by Mentoor
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
