import { ProductsFlow } from "@/components/organisms";

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full items-center justify-between gap-8">
      <ProductsFlow title="Todos os Produtos" url="/" notMore />
    </div>
  );
}
