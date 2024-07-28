import { ProductCard } from "design-system/components/ui/ProductCard";
import { featuredData } from "./BestSellData";

export default function FeaturedContent() {
  return (
    <ul className="flex justify-between items-center gap-x-5">
      {featuredData.map(product => (
        <li key={product.name} className="w-[calc(25%-20px)]">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
