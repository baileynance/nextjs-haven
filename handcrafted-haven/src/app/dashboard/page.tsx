import Image from 'next/image'

export default function Dashboard() {
    return (
        <div>
            <Image src="/hero-image.avif" alt="Hero" className="w-full h-auto" />
        </div>
    )
}