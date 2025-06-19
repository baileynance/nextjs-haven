import { fetchProductList } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";

export default async function ProductList() {
    const data = await fetchProductList();

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
                  <Link href="products/[id]" as={`/dashboard/products/${product.id}`}>
                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition">
                        View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}