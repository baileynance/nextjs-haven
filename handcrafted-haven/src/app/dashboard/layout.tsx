import NavLinks from "@/app/ui/nav-links";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <header>
                <NavLinks />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}