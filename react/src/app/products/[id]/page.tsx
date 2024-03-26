import { ProductSingle } from "@/components/organisms";

export default function ProductSinglePage({ params }: { params: { id: string } }) {
  return (
    <ProductSingle id={params.id} />
  );
}
