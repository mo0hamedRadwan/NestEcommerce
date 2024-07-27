import { Link } from "@mongez/react-router";
import DealCard from "./DealCard";
import { DealsData } from "./DealsData";

export default function DealsComponent() {
  return (
    <div className="mt-10 mb-40">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Deals Of The Day</h2>
        <Link to="/deals" className="">
          <span>All Deals</span>
          <span className="text-lg">
            <i className="bx bxs-chevron-right"></i>
          </span>
        </Link>
      </div>

      <ul className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-x-5 gap-y-28">
        {DealsData.map((deal, index) => (
          <li
            key={index}
            className={`relative ${index === 3 && "sm:hidden xl:block"} ${index === 2 && "sm:hidden lg:block"}`}>
            <Link to="/product/:id">
              <DealCard deal={deal} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
