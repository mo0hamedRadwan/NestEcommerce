// import CarouselComponent from "design-system/components/CarouselComponent";

import BestSellComponent from "apps/front-office/design-system/components/BestSellComponent";
import DealsComponent from "apps/front-office/design-system/components/DealsComponent";
import FamousProductsGrid from "apps/front-office/design-system/components/FamousProductsGrid";
import FeaturedCategoriesComponent from "apps/front-office/design-system/components/FeaturedCategoiesComponent/FeaturedCategoriesComponent";
import FeaturesComponent from "apps/front-office/design-system/components/FeaturesComponent";
import PopularProducts from "apps/front-office/design-system/components/PopularProducts";
import SwiperComponent from "apps/front-office/design-system/components/SwiperComponent";
import { Separator } from "shared/components/ui/separator";

export default function HomePage() {
  return (
    <>
      {/* <CarouselComponent /> */}
      <SwiperComponent />
      <FeaturedCategoriesComponent />
      <PopularProducts />
      <BestSellComponent />
      <DealsComponent />
      <FamousProductsGrid />
      <FeaturesComponent />
      <Separator />
      {/* <h1 className="h-[1000px]">HomePage</h1> */}
    </>
  );
}
