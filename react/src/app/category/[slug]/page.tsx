import { ProductsFlow } from "@/components/organisms";
import { categoriesList } from "@/utils/categories";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const titlePage = categoriesList.find(item => item.path == `/category/${params.slug}`)?.title || ''
  return (
    <div className="flex flex-col w-full items-center justify-between gap-8">
      <ProductsFlow title={titlePage} url={`/category/${params.slug}`} notMore />
    </div>
  );
}
