import img1 from "assets/images/products/product-1-1.jpg";
import img2 from "assets/images/products/product-2-1.jpg";
import img3 from "assets/images/products/product-3-1.jpg";
import img4 from "assets/images/products/product-4-1.jpg";

import { Product } from "../../../../../design-system/types";

const product1: Product = {
  id: 1,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img1,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4,
  venderBy: "AC Group",
};
const product2: Product = {
  id: 2,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img2,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4.5,
  venderBy: "MN Group",
};
const product3: Product = {
  id: 3,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img3,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "AB Group",
};

const product4: Product = {
  id: 4,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img4,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "HW Group",
};

export const featuredData = [product1, product2, product3, product4];
export const popularData = [product1, product2, product3, product4];
export const newAddedData = [product1, product2, product3, product4];
