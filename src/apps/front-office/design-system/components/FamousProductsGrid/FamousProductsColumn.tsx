import { Product } from "../../types";
import FamousProductItem from "./FamousProductItem";

type famousProductsColumnPropsType = {
  title: string;
  products: Product[];
};

export default function FamousProductsColumn({
  title,
  products,
}: famousProductsColumnPropsType) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold py-5 border-b border-slate-200">
        {title}
      </h2>
      <hr className="mb-8 w-20 bg-main-700" />
      <ul className="flex flex-col gap-y-5">
        {products.map(product => (
          <li key={title + "-" + product.name}>
            <FamousProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
