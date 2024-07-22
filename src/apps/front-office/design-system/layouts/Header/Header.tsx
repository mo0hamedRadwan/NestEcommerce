import { Separator } from "shared/components/ui/separator";
import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
// import NavigationMenu from "./NavigationMenu";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <>
      <TopHeader />
      <Separator />
      <MiddleHeader />
      <Separator />
      <BottomHeader />
      <Separator />
      {/* <NavigationMenu /> */}
    </>
  );
}
