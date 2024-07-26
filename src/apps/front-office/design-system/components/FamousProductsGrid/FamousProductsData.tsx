import img1 from "assets/images/thumbnail/thumbnail-1.jpg";
import img2 from "assets/images/thumbnail/thumbnail-2.jpg";
import img3 from "assets/images/thumbnail/thumbnail-3.jpg";
import { Product } from "../../types";

const product1: Product = {
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img1,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4,
};
const product2: Product = {
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img2,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4.5,
};
const product3: Product = {
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img3,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
};

export const famousProductsData = [
  { title: "Top Selling", products: [product1, product2, product3] },
  { title: "Trending Products", products: [product1, product2, product3] },
  { title: "Recently added", products: [product1, product2, product3] },
  { title: "Top Rated", products: [product1, product2, product3] },
];
