import { ProductCard } from "../ui/ProductCard";
import { allProductsData } from "./PopularProductsData";

export default function AllProductsContent() {
  return (
    <ul className="flex justify-between items-center flex-wrap gap-5">
      {allProductsData.map(product => (
        <li key={product.name + product.id} className="w-[calc(20%-20px)]">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
