import cache, {
  PlainLocalStorageDriver,
  setCacheConfigurations,
} from "@mongez/cache";
import { atom } from "@mongez/react-atom";

type themeActionsType = {
  toggleTheme: () => void;
};

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

const themeAtom = atom<string, themeActionsType>({
  key: "theme",
  default: cache.get("nest-theme", "light"),
  beforeUpdate(theme) {
    cache.set("nest-theme", theme);
    return theme;
  },
  actions: {
    toggleTheme: () => {
      const newTheme = themeAtom.value === "light" ? "dark" : "light";
      themeAtom.update(newTheme);
    },
  },
});

export default themeAtom;
