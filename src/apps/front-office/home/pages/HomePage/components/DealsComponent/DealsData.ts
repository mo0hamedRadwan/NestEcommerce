import img1 from "assets/images/banner/banner-5.png";
import img2 from "assets/images/banner/banner-6.png";
import img3 from "assets/images/banner/banner-7.png";
import img4 from "assets/images/banner/banner-8.png";
import { Product } from "design-system/types";

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

export const DealsData = [
  { product: product1, date: new Date(2024, 0, 0) },
  { product: product2, date: new Date(2025, 0, 15) },
  { product: product3, date: new Date(2025, 5, 1) },
  { product: product4, date: new Date(2025, 3, 12) },
];
