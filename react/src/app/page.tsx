import { ProductsFlow } from "@/components/organisms";
import { categoriesList } from "@/utils/categories";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-between gap-8">
      {categoriesList.map((item, key) => 
        <ProductsFlow key={key} {...item} url={item.path} limit={4} />
      )}
    </div>
  );
}
