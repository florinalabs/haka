'use client'

import React from "react";
import { ArrowRight, Brain, Briefcase, Cpu, Palette, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { CategoryCard as DefaultCategoryCard } from "@/components/site/CategoryCard";
import ThemeToggle from "./components/theme-toggle";

// Navigation configuration - simplified for Next.js 15 app router
const navigation = [
  { href: "/", label: "Home" },
  { href: "#explore", label: "Explore" },
  { href: "#ideas", label: "Ideas" },
  { href: "#about", label: "About HAKA" },
];

// Categories - static data instead of fetching
const categories = [
  { 
    title: "Technology",
    description: "Future tech, AI, and innovation.",
    icon: Cpu,
    href: "#"
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning & deep learning.",
    icon: Brain,
    href: "#"
  },
  {
    title: "Business",
    description: "Entrepreneurship & strategy.",
    icon: Briefcase,
    href: "#"
  },
  {
    title: "Design",
    description: "UI/UX, branding, and creativity.",
    icon: Palette,
    href: "#"
  },
];

function ClientFooter() {
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
      <div>
        {/* <Link href="/" className="text-3xl font-black text-[var(--foreground)]">
          HAKA<span className="text-haka-yellow">.</span>
        </Link> */}

        <p className="mt-2 text-xs text-light-muted">
          Think. Explore. Create.
        </p>
      </div>

      {year && (
        <p className="text-xs text-light-muted">
          © {year} HAKA. All rights reserved.
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border-color bg-card backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-3xl font-black tracking-tight text-[var(--foreground)]">
            <Image src="/Haka_logo.jpg" alt="HAKA Logo" width={50} height={50} className="object-contain min-w-fit" priority />
            HAKA<span className="text-haka-yellow">.</span>
          </Link>

          <nav className="flex items-center gap-5 sm:gap-9">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition hover:text-haka-yellow sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-haka-yellow px-5 py-3 text-sm font-bold text-black transition hover:bg-[#f7d801] lg:flex"
            >
              Let&apos;s Connect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden">
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-haka-yellow/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-haka-yellow/5 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-haka-yellow/30 bg-haka-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-haka-yellow">
              <Sparkles size={14} />
              Ideas. Technology. Possibilities.
            </div>

            <h1 className="text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-[100px]">
              Think beyond
              <br />
              <span className="text-haka-yellow">what&apos;s possible.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              HAKA explores ideas, technology, artificial intelligence, and
              business to inspire people to think differently and move forward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#explore"
                className="flex items-center gap-3 rounded-full bg-haka-yellow px-7 py-4 font-bold text-black transition hover:bg-[#f7d801]"
              >
                Explore HAKA <ArrowRight size={19} />
              </Link>

              <Link
                href="#about"
                className="rounded-full border border-border-color px-7 py-4 font-semibold transition hover:border-haka-yellow hover:text-haka-yellow"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-8 border-t border-border-color pt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:gap-14">
            <span>Curiosity</span>
            <span>Innovation</span>
            <span>Technology</span>
            <span>Progress</span>
          </div>
        </div>
      </section>

      {/* Explore Categories */}
      <section id="explore" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-haka-yellow">
                What We Explore
              </p>

              <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
                Ideas without
                <br />
                <span className="text-muted-foreground">boundaries.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-muted-foreground">
              Different interests. Different perspectives. One place to
              discover what&apos;s next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <DefaultCategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Statement */}
      <section id="ideas" className="py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border-color bg-background px-8 py-20 sm:px-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-haka-yellow/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-haka-yellow">
                The HAKA Perspective
              </p>

              <h2 className="text-4xl font-black leading-tight sm:text-6xl">
                The future belongs to those who{" "}
                <span className="text-haka-yellow">stay curious.</span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-muted-foreground">
                We believe that asking questions, exploring possibilities,
                and embracing change are the foundations of progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border-color py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-haka-yellow">
              About HAKA
            </p>

            <h2 className="text-5xl font-black leading-tight sm:text-6xl">
              A space for
              <br />
              <span className="text-haka-yellow">the curious.</span>
            </h2>

            <p className="mt-7 leading-8 text-muted-foreground">
              HAKA is a creative platform built around curiosity,
              knowledge, and innovation. We bring together conversations
              about technology, AI, business, and the ideas shaping tomorrow.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              Whether you&apos;re a student, creator, entrepreneur, or technology
              enthusiast, there&apos;s always something new to discover.
            </p>

            <Link
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 font-bold text-haka-yellow transition hover:gap-5"
            >
              Get to know us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl border border-border-color bg-card">
            <div className="absolute h-64 w-64 rounded-full bg-haka-yellow/15 blur-[90px]" />

            <div className="relative text-center">
              <div className="text-8xl font-black tracking-tighter sm:text-9xl">
                HAKA<span className="text-haka-yellow">.</span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
                Think. Explore. Create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Users className="mx-auto mb-8 text-haka-yellow" size={38} />

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-haka-yellow">
            Be Part of the Conversation
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            Have an idea?
            <br />
            <span className="text-haka-yellow">Let&apos;s explore it.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-muted-foreground">
            Have a project, business opportunity, or interesting idea?
            We&apos;d love to hear from you.
          </p>

          <a
            href="mailto:hello@haka.ph"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-haka-yellow px-8 py-4 font-bold text-black transition hover:bg-[#f7d801]"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-color">
        <ClientFooter />
      </footer>
    </main>
  );
}