import { atom } from "@mongez/react-atom";
import { Category } from "design-system/types";
import { getCategories } from "../services/home-service";

type categoriesActionsType = {
  setCategories: () => void;
  getCategories: () => Category[];
};

const categoriesAtom = atom<Category[], categoriesActionsType>({
  key: "categories",
  default: [] as Category[],
  actions: {
    setCategories: () => {
      // Fetch categories from server or API and return them here
      getCategories()
        .then(data => {
          console.log("Categories");
          categoriesAtom.update(data as Category[]);
        })
        .catch(err => console.error(err));
    },
    getCategories: () => {
      return categoriesAtom.useValue();
    },
  },
});

export default categoriesAtom;
