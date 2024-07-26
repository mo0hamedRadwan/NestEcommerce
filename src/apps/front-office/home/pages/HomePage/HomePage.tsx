// import CarouselComponent from "design-system/components/CarouselComponent";
import FamousProductsGrid from "apps/front-office/design-system/components/FamousProductsGrid";
import FeaturesComponent from "apps/front-office/design-system/components/FeaturesComponent";
import SwiperComponent from "design-system/components/SwiperComponent";
import { Separator } from "shared/components/ui/separator";

export default function HomePage() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <SwiperComponent />
      <Separator />
      <FamousProductsGrid />
      <FeaturesComponent />
      <h1 className="h-[1000px]">HomePage</h1>
    </>
  );
}
