import type { Metadata } from "next";
import ThemeToggle from "./components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "HAKA — Think Beyond What's Possible.",
  description:
    "HAKA explores ideas, technology, artificial intelligence, and business to inspire people to think differently and move forward. Curiosity. Innovation. Possibilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased font-sans"
      >
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}