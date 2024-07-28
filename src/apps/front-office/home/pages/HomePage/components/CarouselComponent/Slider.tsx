import { CarouselItem } from "shared/components/ui/carousel";

type SliderPropsType = {
  slider: {
    img: string;
    header1: string;
    header2: string;
    text: string;
  };
};

const Slider = ({ slider }: SliderPropsType) => {
  return (
    <CarouselItem className="w-full h-full ml-4 relative rounded-3xl text-slate-900">
      <img
        src={slider.img}
        className="absolute w-full h-full top-0 left-0 rounded-3xl"
      />
      <div className="absolute top-10 sm:top-28 xl:top-52 left-8 md:left-16 xl:left-28  z-10">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold">
          {slider.header1} <br /> {slider.header2}
        </h2>
        <p className="text-xs sm:text-base lg:text-2xl mt-10 md:mt-20">
          {slider.text}
        </p>
      </div>
    </CarouselItem>
  );
};

export default Slider;
