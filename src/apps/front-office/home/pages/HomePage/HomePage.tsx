import { Separator } from "shared/components/ui/separator";
import DealsComponent from "./components/DealsComponent";
import FamousProductsGrid from "./components/FamousProductsGrid";
import FeaturedCategoriesComponent from "./components/FeaturedCategoiesComponent/FeaturedCategoriesComponent";
import FeaturesComponent from "./components/FeaturesComponent";
import PopularProducts from "./components/PopularProducts";
import SwiperComponent from "./components/SwiperComponent";

export default function HomePage() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <SwiperComponent />
      <FeaturedCategoriesComponent />
      <PopularProducts />
      {/* <BestSellComponent /> */}
      <DealsComponent />
      <FamousProductsGrid />
      <FeaturesComponent />
      <Separator />
      {/* <h1 className="h-[1000px]">HomePage</h1> */}
    </>
  );
}
