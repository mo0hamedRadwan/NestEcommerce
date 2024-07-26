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
      <h2 className="text-2xl font-bold py-5 mb-8 border-b border-slate-200 relative">
        {title}
        <div className="h-[2px] w-20 bg-main-700 absolute bottom-[-2px] z-10"></div>
      </h2>
      <ul className="flex flex-col gap-y-7">
        {products.map(product => (
          <li key={title + "-" + product.name}>
            <FamousProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
