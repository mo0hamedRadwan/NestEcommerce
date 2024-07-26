// import CarouselComponent from "design-system/components/CarouselComponent";
import DealsComponent from "apps/front-office/design-system/components/DealsComponent";
import SwiperComponent from "design-system/components/SwiperComponent";
import { Separator } from "shared/components/ui/separator";

export default function HomePage() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <SwiperComponent />
      <Separator />
      <DealsComponent />
      {/* <FamousProductsGrid /> */}
      {/* <FeaturesComponent /> */}
      <h1 className="h-[1000px]">HomePage</h1>
    </>
  );
}
