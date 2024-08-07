import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "shared/components/ui/tabs";
import PopularProductsContent from "./PopularProductsContent";

export default function PopularProducts() {
  return (
    <div className="relative flex flex-row-reverse my-10">
      <h2 className="absolute top-0 left-0 text-3xl font-bold">
        Popular Products
      </h2>
      <Tabs defaultValue="All" className="w-full">
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
          <PopularProductsContent />
        </TabsContent>
        <TabsContent value="Milks__Dairies" className="py-5">
          <PopularProductsContent categoryId={1} />
        </TabsContent>
        <TabsContent value="Coffes__Teas" className="py-5">
          <PopularProductsContent categoryId={2} />
        </TabsContent>
        <TabsContent value="Pet_Foods" className="py-5">
          <PopularProductsContent categoryId={3} />
        </TabsContent>
        <TabsContent value="Meats" className="py-5">
          <PopularProductsContent categoryId={4} />
        </TabsContent>
        <TabsContent value="Vegetables" className="py-5">
          <PopularProductsContent categoryId={5} />
        </TabsContent>
        <TabsContent value="Fruits" className="py-5">
          <PopularProductsContent categoryId={6} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
