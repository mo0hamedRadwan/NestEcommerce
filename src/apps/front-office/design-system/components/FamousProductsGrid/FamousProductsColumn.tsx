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
    <>
      <h3 className="text-2xl font-bold py-5 mb-8 border-b border-slate-200 relative">
        <span>{title}</span>
        <span className="h-[2px] w-20 bg-main-700 absolute bottom-[-1px] left-0 z-10"></span>
      </h3>
      <ul className="flex flex-col gap-y-7">
        {products.map(product => (
          <li key={title + "-" + product.name}>
            <FamousProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
