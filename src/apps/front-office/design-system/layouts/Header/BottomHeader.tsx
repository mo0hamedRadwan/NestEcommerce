import { Button } from "shared/components/ui/button";
import { bottomHeaderNavbarItems } from "./constant/bottomHeaderData";

const BottomHeader = () => {
  return (
    <div className="container py-4 hidden lg:flex justify-between items-center">
      <div className="flex justify-between items-center gap-x-8">
        <Button className="bg-main-500 hover:bg-red-700 active:bg-red-700 border-none outline-none focus-visible:ring-0">
          <i className="bx bx-category"></i>
          <span className="mx-2">Browse All Categories</span>
          <i className="bx bx-chevron-down"></i>
        </Button>
        <ul className="flex items-center gap-x-6 xl:gap-x-8">
          <li className="text-base">
            <i className="bx bxs-hot text-main-500"></i>
            <span className="ml-2 mr-2 xl:mr-8">Deals</span>
          </li>
          {bottomHeaderNavbarItems.map(item => (
            <li key={item} className="text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:flex items-center gap-x-3">
        <i className="bx bx-headphone text-4xl"></i>
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-main-500">
            1900 - 888
          </span>
          <span className="text-sm">24/7 Support Center</span>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
