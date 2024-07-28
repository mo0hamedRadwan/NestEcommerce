import catImage1 from "assets/images/category/category-1.svg";
import catImage10 from "assets/images/category/category-10.svg";
import catImage2 from "assets/images/category/category-2.svg";
import catImage3 from "assets/images/category/category-3.svg";
import catImage4 from "assets/images/category/category-4.svg";
import catImage5 from "assets/images/category/category-5.svg";
import catImage6 from "assets/images/category/category-6.svg";
import catImage7 from "assets/images/category/category-7.svg";
import catImage8 from "assets/images/category/category-8.svg";
import catImage9 from "assets/images/category/category-9.svg";

import img1 from "assets/images/products/product-1-1.jpg";
import img2 from "assets/images/products/product-2-1.jpg";
import img3 from "assets/images/products/product-3-1.jpg";
import img4 from "assets/images/products/product-4-1.jpg";
import img5 from "assets/images/products/product-5-1.jpg";

import { Category, Product } from "design-system/types";

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

const product5: Product = {
  id: 5,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img1,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4,
  venderBy: "AC Group",
};
const product6: Product = {
  id: 6,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img5,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 4.5,
  venderBy: "MN Group",
};

const product7: Product = {
  id: 7,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img3,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "AB Group",
};

const product8: Product = {
  id: 8,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img4,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "HW Group",
};

const product9: Product = {
  id: 9,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img3,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "AB Group",
};

const product10: Product = {
  id: 10,
  name: "Nestle Original Coffee-Mate Coffee Creamer",
  img: img4,
  newPrice: 32.5,
  oldPrice: 35,
  rating: 5,
  venderBy: "HW Group",
};

export const categories: Category[] = [
  { id: 1, name: "Milks and Dairies", img: catImage1 },
  { id: 2, name: "Wines & Alcohol", img: catImage2 },
  { id: 3, name: "Clothing & Beauty", img: catImage3 },
  { id: 4, name: "Pet Foods & Toy", img: catImage4 },
  { id: 5, name: "Fast food", img: catImage5 },
  { id: 6, name: "Baking material", img: catImage6 },
  { id: 7, name: "Vegetables", img: catImage7 },
  { id: 8, name: "Fresh Seafood", img: catImage8 },
  { id: 9, name: "Noodles & Rice", img: catImage9 },
  { id: 10, name: "Ice cream", img: catImage10 },
];
