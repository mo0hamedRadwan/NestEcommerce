import CarouselComponent from "apps/front-office/design-system/components/CarouselComponent";
import { Separator } from "shared/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <CarouselComponent />
      <Separator />
      <h1 className="h-[1000px]">HomePage</h1>
    </>
  );
}
