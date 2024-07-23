import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "shared/components/ui/carousel";

import { CarouselSlidersData } from "./CarouselData";
import Slider from "./Slider";

export default function CarouselComponent() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-[calc(w-full - 40px)]  h-[300px] md:h-[450px] xl:h-[700px] m-6 rounded-3xl">
      <CarouselContent className="w-full h-[300px] md:h-[450px] xl:h-[700px] rounded-3xl">
        {CarouselSlidersData.map(slider => (
          <Slider slider={slider} key={slider.header1}></Slider>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
