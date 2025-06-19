import Image from 'next/image'

export default function Dashboard() {
    return (
        <div>
            <Image src="/hero-image.avif" alt="Hero"  width={1200} height={600} className="w-full h-auto" />
        </div>
    )
}