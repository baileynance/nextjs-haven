import NavLinks from "@/app/ui/nav-links";
import AuthLinks from "@/app/ui/auth-route";
import Image from "next/image";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <header className="bg-white dark:bg-zinc-900 shadow-sm">
              <div className="mx-auto flex bg-neutral-100 h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600 dark:text-teal-300" href="#">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/handcrafted-haven.svg"
                    alt="Home"
                    width={100}
                    height={100}
                    className="h-12 slate-100"
                  />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">

                  <NavLinks />

                  <div className="flex items-center gap-4">
                    <AuthLinks />
                    
                    {/* Mobile menu button */}

                    <button
                      className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    >
                      <span className="sr-only">Toggle menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}