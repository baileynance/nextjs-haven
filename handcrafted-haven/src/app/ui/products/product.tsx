import { fetchProductList } from "@/app/lib/data";

export default async function Product({ productId }: { productId: number }) {
    const data = await fetchProductList();
    const product = data.find((p) => p.id === productId);

    if (!product) {
        return <div className="p-6 text-red-600">Product not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow flex flex-col md:flex-row gap-6">
                <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 h-auto object-cover rounded"
                />
                <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-gray-800 mb-4">{product.price}</p>
                <p className="text-gray-700">{product.description}</p>
                <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
                    Review
                </button>
                </div>
            </div>
        </div>
    )
} 