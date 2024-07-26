import FamousProductsColumn from "./FamousProductsColumn";
import { famousProductsData } from "./FamousProductsData";

export default function FamousProductsGrid() {
  return (
    <div className="mt-10 flex items-center justify-between gap-x-5">
      {famousProductsData.map(column => (
        <FamousProductsColumn
          key={column.title}
          title={column.title}
          products={column.products}
        />
      ))}
    </div>
  );
}
