export type Category = {
  id: number;
  name: string;
  img: string;
};

export type Product = {
  id: number;
  name: string;
  img: string;
  oldPrice: number;
  newPrice: number;
  rating: number;
  venderBy?: string;
  categories?: string[];
};
