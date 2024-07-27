import { Link } from "@mongez/react-router";
import banner from "assets/images/banner/banner-4.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "shared/components/ui/tabs";
import FeaturedContent from "./FeaturedContent";
import New_AddedContent from "./New_AddedContent";
import PopularContent from "./PopularContent";

export default function BestSellComponent() {
  return (
    <div className="relative my-10">
      <h2 className="absolute top-0 left-0 text-3xl font-bold">
        Daily Best Sells
      </h2>
      <div className="flex justify-between items-start gap-x-5">
        <div className="py-10 relative">
          <img
            src={banner}
            alt=""
            className="mt-5 min-w-[360px] h-[520px] rounded-xl"
          />
          <div className="absolute top-28 left-10">
            <h3 className="text-5xl font-semibold mb-28 text-black">
              Bring nature into your home
            </h3>
            <Link
              to="/"
              className="px-6 py-3 bg-main-500 hover:bg-main-700 text-white rounded">
              Shop now
            </Link>
          </div>
        </div>

        <Tabs defaultValue="Featured" className="w-full">
          <TabsList className="bg-transparent w-full flex justify-end">
            <TabsTrigger value="Featured">Featured</TabsTrigger>
            <TabsTrigger value="Popular">Popular</TabsTrigger>
            <TabsTrigger value="New_Added">New added</TabsTrigger>
          </TabsList>
          <TabsContent value="Featured" className="py-5">
            <FeaturedContent />
          </TabsContent>
          <TabsContent value="Popular" className="py-5">
            <PopularContent />
          </TabsContent>
          <TabsContent value="New_Added" className="py-5">
            <New_AddedContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
