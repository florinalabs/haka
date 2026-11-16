
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAKA — Think Beyond What's Possible",
  description:
    "Exploring technology, artificial intelligence, business, and ideas that shape the future.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#explore", label: "Explore" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Haka_logo.jpg"
                alt="HAKA logo"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded object-contain"
              />
              {/* <span className="text-2xl font-black tracking-tight">
                HAKA<span className="text-[#FFD700]">.</span>
              </span> */}
            </Link>

            <nav className="hidden items-center gap-9 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-[#FFD700]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#contact"
              className="hidden items-center rounded-full bg-[#FFD700] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#E5C100] md:inline-flex"
            >
              Let's Connect
            </Link>

            <Link
              href="/#explore"
              aria-label="Explore HAKA"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#FFD700] hover:text-[#FFD700] md:hidden"
            >
              Explore
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
