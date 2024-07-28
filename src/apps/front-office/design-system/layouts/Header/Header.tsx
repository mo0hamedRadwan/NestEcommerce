import categoriesAtom from "apps/front-office/home/atoms/categoriesAtom";
import { useEffect } from "react";
import { Separator } from "shared/components/ui/separator";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  const setCategories = categoriesAtom.setCategories;

  useEffect(() => {
    setCategories();
  }, []);

  return (
    <>
      <TopHeader />
      <Separator />
      <MiddleHeader />
      <Separator />
      <BottomHeader />
      <Separator />
    </>
  );
}
