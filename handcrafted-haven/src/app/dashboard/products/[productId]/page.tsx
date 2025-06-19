import Product from "@/app/ui/products/product";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const productId = parseInt(params.productId, 10);
  return (
    <div>
      <Product productId={productId} />
    </div>

  )
}
  