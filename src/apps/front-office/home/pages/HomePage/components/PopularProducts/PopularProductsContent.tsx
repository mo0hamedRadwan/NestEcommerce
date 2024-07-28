import { ProductCard } from "apps/front-office/design-system/components/ui/ProductCard";
import { allProductsData } from "./PopularProductsData";

type PopularProductsContentPropsType = {
  categoryId?: number;
};

export default function PopularProductsContent({
  categoryId,
}: PopularProductsContentPropsType) {
  return (
    <ul className="flex justify-start items-center flex-wrap gap-5">
      {allProductsData.map((product, index) => (
        <li
          key={product.name + product.id}
          className={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)] xl:w-[calc(25%-20px)] 2xl:w-[calc(20%-20px)] ${index === 9 ? "md:block lg:hidden xl:block" : ""}`}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
