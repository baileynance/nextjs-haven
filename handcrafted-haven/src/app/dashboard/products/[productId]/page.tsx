import { fetchProductList } from "@/app/lib/data";
import Product from "@/app/ui/products/product";

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const productId = parseInt(params.productId, 10);
  const data = await fetchProductList();
  const product = data.find((p) => p.id === productId);

  if (!product) {
      return <div className="p-6 text-red-600">Product not found.</div>;
  }

  return (
    <div>
      <Product product={product} />
    </div>

  )
}
  