import ViewRating from "design-system/components/ui/ViewRating";
import { Product } from "design-system/types";

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
        <h4 className="text-base font-bold">{product.name}</h4>

        <ViewRating rating={product.rating} />

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
