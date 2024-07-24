// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperStyle.css";

// import required modules
import { Link } from "@mongez/react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlidersData } from "./SwiperData";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  h-[350px] xl:h-[540px] mt-5">
        {SwiperSlidersData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded-3xl overflow-hidden">
            <img
              src={slide.img}
              alt="slider"
              className="w-full h-full object-fit"
            />
            <div className="absolute w-3/5 top-5 md:top-10 lg:top-10 xl:top-24 left-5 lg:left-16 font-bold text-slate-900">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl">
                {slide.header1}
                <br />
                {slide.header2}
              </h2>
              <p className="mt-10 mb-10 md:mb-20 text-xl lg:text-2xl">
                {slide.text}
              </p>
              <Link
                to="/store"
                className="px-6 py-4 bg-main-500 rounded-full text-lg text-white font-bold">
                Discover Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
