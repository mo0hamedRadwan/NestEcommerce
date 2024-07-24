// import CarouselComponent from "design-system/components/CarouselComponent";
import SwiperComponent from "design-system/components/SwiperComponent";
import { Separator } from "shared/components/ui/separator";

export default function HomePage() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <SwiperComponent />
      <Separator />
      <h1 className="h-[1000px]">HomePage</h1>
    </>
  );
}
