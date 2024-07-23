import { Link } from "@mongez/react-router";
import { Button } from "shared/components/ui/button";
import { useDarkMode, useWindowScroll } from "../../hooks";
import { bottomHeaderNavbarItems } from "./constant/bottomHeaderData";
import DropMegaMenu from "./DropMegaMenu";

const BottomHeader = () => {
  const windowScroll = useWindowScroll();
  const { theme, toggleTheme } = useDarkMode();

  // console.log(theme);
  // console.log(windowScroll);

  return (
    <div
      className={`container relative bg-white py-2 dark:bg-slate-900 w-full hidden lg:flex justify-between items-center 
        ${windowScroll >= 150 && "sticky top-0 z-50"}`}>
      <div className="flex justify-between items-center gap-x-8">
        <Button className="bg-main-500 hover:bg-main-700 active:bg-main-700 border-none outline-none focus-visible:ring-0">
          <i className="bx bx-category"></i>
          <span className="mx-2">Browse All Categories</span>
          <i className="bx bx-chevron-down"></i>
        </Button>
        <ul className="flex items-center gap-x-6 xl:gap-x-8">
          <li className="text-base font-bold">
            <i className="bx bxs-hot text-main-500"></i>
            <span className="ml-2 mr-2 xl:mr-8">Deals</span>
          </li>
          {bottomHeaderNavbarItems.map(item => (
            <li
              key={item.label}
              className="text-base font-bold hover:text-main-700 cursor-pointer group py-5">
              {item.label === "Mega menu" ? (
                <div className="">
                  <span>{item.label}</span>
                  <i className="bx bx-chevron-down"></i>
                  <DropMegaMenu />
                </div>
              ) : (
                <Link to={item.link}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div
          className="flex justify-center items-center rounded-full text-3xl ml-5 2xl:mx-5 2xl:mr-16 w-12 h-12 bg-main-500 text-white cursor-pointer"
          onClick={() => toggleTheme()}>
          {theme === "light" ? (
            <i className="bx bxs-moon"></i>
          ) : (
            <i className="bx bxs-sun"></i>
          )}
        </div>

        <div className="hidden 2xl:flex items-center gap-x-3">
          <i className="bx bx-headphone text-4xl"></i>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-main-500">
              1900 - 888
            </span>
            <span className="text-xs font-serif">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
