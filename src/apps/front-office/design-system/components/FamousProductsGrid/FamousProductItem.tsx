import { Product } from "../../types";

type famousProductItemPropsType = {
  product: Product;
};

export default function FamousProductItem({
  product,
}: famousProductItemPropsType) {
  return (
    <div className="flex gap-x-5 rounded-lg duration-300 hover:-translate-y-2">
      <img src={product.img} alt="" className="w-40 h-28" />
      <div className="flex flex-col">
        <h3 className="text-base font-bold">{product.name}</h3>

        <ul className="flex flex-row items-center">
          {[1, 2, 3, 4, 5].map(star => (
            <li key={star} className="text-yellow-400">
              {star <= product.rating ? (
                <i className="bx bxs-star"></i>
              ) : star === Math.ceil(product.rating) ? (
                <i className="bx bxs-star-half"></i>
              ) : (
                <i className="bx bx-star"></i>
              )}
            </li>
          ))}
          <p className="ml-2">({product.rating})</p>
        </ul>

        <p className="mt-3">
          <span className="text-main-500 text-xl font-bold">
            ${product.newPrice}
          </span>
          <span className="mx-1">/</span>
          <span className="text-slate-500 line-through">
            ${product.oldPrice}
          </span>
        </p>
      </div>
    </div>
  );
}
