import { categories } from "shared/data/seekData";
import endpoint from "shared/endpoint";

// for dummy purpose only
export function getHome() {
  return endpoint.get("/home");
}

export function getCategories() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(categories);
    }, 5000),
  );
}
