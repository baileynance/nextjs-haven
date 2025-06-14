import TrendingProducts from "@/app/ui/trending-products";
import PopularProducts from "@/app/ui/popular-products";

export default function Home() {
    return (
        <div>
            <img src="/hero-image.avif" alt="Hero" className="w-full h-auto" />
            <TrendingProducts />
            <PopularProducts />
        </div>
    )
}