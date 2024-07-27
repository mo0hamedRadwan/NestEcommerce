import { Link } from "@mongez/react-router";
import { Product } from "../../types";
import ViewRating from "./ViewRating";

type productCardPropsType = {
  product: Product;
};

export function ProductCard({ product }: productCardPropsType) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="p-5 border border-slate-200 dark:border-slate-700 rounded-lg">
        <img src={product.img} alt="product image" className="rounded mb-4" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <ViewRating rating={product.rating} />
        <p>
          By <span className="text-main-500 font-bold">{product.venderBy}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-end gap-x-2 my-5">
            <span className="text-2xl font-bold text-main-500">
              ${product.newPrice}
            </span>
            <span className="">/</span>
            <span className="">${product.oldPrice}</span>
          </p>
          <button className="flex items-center gap-x-2 px-5 py-2 rounded bg-main-500 text-white">
            <span>
              <i className="bx bx-cart"></i>
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
