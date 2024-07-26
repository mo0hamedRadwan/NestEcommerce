import FamousProductsColumn from "./FamousProductsColumn";
import { famousProductsData } from "./FamousProductsData";

export default function FamousProductsGrid() {
  return (
    <ul className="mt-10 flex items-center justify-between gap-x-5">
      {famousProductsData.map((column, index) => (
        <li
          key={column.title}
          className={`${index >= 3 && "hidden 2xl:block"}`}>
          <FamousProductsColumn
            title={column.title}
            products={column.products}
          />
        </li>
      ))}
    </ul>
  );
}
