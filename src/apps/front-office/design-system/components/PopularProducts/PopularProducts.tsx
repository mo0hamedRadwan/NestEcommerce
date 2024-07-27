import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "shared/components/ui/tabs";
import AllProductContent from "./AllProductsContent";
import Coffes__TeasContent from "./Coffes__TeasContent";
import FruitsContent from "./FruitsContent";
import MeatsContent from "./MeatsContent";
import Milks__DairiesContent from "./Milks__DairiesContent";
import Pet_FoodsContent from "./Pet_FoodsContent";
import VegetablesContent from "./VegetablesContent";

export default function PopularProducts() {
  return (
    <div className="relative flex flex-row-reverse py-5">
      <h2 className="absolute top-5 left-0 text-3xl font-bold">
        Popular Products
      </h2>
      <Tabs defaultValue="All" className="w-full border border-red-500">
        <TabsList className="bg-transparent w-full flex justify-end">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Milks__Dairies">Milks & Dairies</TabsTrigger>
          <TabsTrigger value="Coffes__Teas">Coffes & Teas</TabsTrigger>
          <TabsTrigger value="Pet_Foods">Pet Foods</TabsTrigger>
          <TabsTrigger value="Meats">Meats</TabsTrigger>
          <TabsTrigger value="Vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="Fruits">Fruits</TabsTrigger>
        </TabsList>
        <TabsContent value="All" className="py-5">
          <AllProductContent />
        </TabsContent>
        <TabsContent value="Milks__Dairies" className="py-5">
          <Milks__DairiesContent />
        </TabsContent>
        <TabsContent value="Coffes__Teas" className="py-5">
          <Coffes__TeasContent />
        </TabsContent>
        <TabsContent value="Pet_Foods" className="py-5">
          <Pet_FoodsContent />
        </TabsContent>
        <TabsContent value="Meats" className="py-5">
          <MeatsContent />
        </TabsContent>
        <TabsContent value="Vegetables" className="py-5">
          <VegetablesContent />
        </TabsContent>
        <TabsContent value="Fruits" className="py-5">
          <FruitsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
