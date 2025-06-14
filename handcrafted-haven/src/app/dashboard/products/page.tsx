import { fetchProductList } from "@/app/lib/data";

export default async function Products() {
    const data = await fetchProductList();
    console.log(data);

    return (
        <div>Product List</div>
    )
}

