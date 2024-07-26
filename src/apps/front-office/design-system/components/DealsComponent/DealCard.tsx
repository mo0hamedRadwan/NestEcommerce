import { useCountDown } from "../../hooks";
import { Product } from "../../types";
import ViewRating from "../ui/ViewRating";

type DealCardPropsType = {
  deal: {
    product: Product;
    date: Date;
  };
};

export default function DealCard({ deal }: DealCardPropsType) {
  const remainderTime = useCountDown(deal.date);

  // console.log(remainderTime);

  return (
    <>
      <img
        src={deal.product.img}
        alt="daal product image"
        className="rounded-xl"
      />
      <div className="flex items-center gap-x-5 absolute left-5 bottom-44">
        {remainderTime.map(time => (
          <div
            key={time.timeType}
            className="w-14 h-14 xl:w-12 xl:h-12 flex flex-col justify-center items-center bg-white dark:bg-slate-800 rounded-lg">
            <span className="text-2xl xl:text-lg font-bold text-main-500">
              {time.number}
            </span>
            <span className="xl:text-xs">{time.timeType}</span>
          </div>
        ))}
      </div>
      <div className="absolute w-[calc(100%-50px)] -bottom-20 left-6 bg-white dark:bg-slate-900 px-5 py-8 rounded-xl  shadow-[0_3px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_3px_60px_-15px_rgba(255,255,255,0.3)]">
        <h3 className="text-lg font-bold">{deal.product.name}</h3>
        <ViewRating rating={deal.product.rating} />
        <h4 className="">
          By
          <span className="ml-2 text-main-700 font-bold">
            {deal.product.venderBy}
          </span>
        </h4>
        <div className="mt-5 flex justify-between items-center">
          <p className="flex items-center gap-x-2">
            <span className="text-xl text-main-500 font-bold">
              ${deal.product.newPrice}
            </span>
            <span>/</span>
            <span className="line-through">${deal.product.oldPrice}</span>
          </p>
          <button className="flex items-center gap-x-2 px-6 py-3 bg-main-200 text-main-700 rounded-lg font-bold">
            <span>
              <i className="bx bx-cart"></i>
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </>
  );
}
