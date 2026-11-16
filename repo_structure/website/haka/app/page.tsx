
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  BriefcaseBusiness,
  Cpu,
  Sparkles,
  Zap,
  TrendingUp,
} from "lucide-react";

import { CategoryCard } from "@/components/site/CategoryCard";

const categories = [
  {
    title: "Technology",
    description:
      "Discover emerging technologies, digital transformation, and innovations shaping our world.",
    icon: Cpu,
    href: "#technology",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Explore AI tools, intelligent systems, automation, and the future of artificial intelligence.",
    icon: Sparkles,
    href: "#ai",
  },
  {
    title: "Business",
    description:
      "Discover business strategies, entrepreneurship, productivity, and opportunities for growth.",
    icon: BriefcaseBusiness,
    href: "#business",
  },
  {
    title: "Ideas & Innovation",
    description:
      "Explore creative thinking, new perspectives, and ideas that challenge the ordinary.",
    icon: Lightbulb,
    href: "#ideas",
  },
];

const focusAreas = [
  {
    id: "technology",
    number: "01",
    title: "Technology",
    description:
      "Understand the tools, platforms, and technological breakthroughs changing the way we work and live.",
    icon: Cpu,
  },
  {
    id: "ai",
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Learn how AI works, discover useful tools, and explore its impact on individuals and businesses.",
    icon: Sparkles,
  },
  {
    id: "business",
    number: "03",
    title: "Business",
    description:
      "Explore entrepreneurship, digital business, practical strategies, and the changing world of work.",
    icon: TrendingUp,
  },
  {
    id: "ideas",
    number: "04",
    title: "Ideas & Innovation",
    description:
      "Question the ordinary, discover new perspectives, and turn curiosity into meaningful ideas.",
    icon: Lightbulb,
  },
];

const marqueeWords = [
  "Technology",
  "Innovation",
  "Artificial Intelligence",
  "Business",
  "Creativity",
  "Curiosity",
  "Progress",
  "Future",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0A0A] text-[#EDEDED]">

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#FFD700]/5 blur-[130px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-5xl">
            <div className="animate-rise mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
              <Sparkles size={14} />
              Ideas. Technology. Possibilities.
            </div>

            <h1 className="animate-rise text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-[100px]">
              Think Beyond
              <br />
              <span className="text-[#FFD700]">
                What&apos;s Possible.
              </span>
            </h1>

            <p className="animate-rise mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              The future belongs to those who stay curious. Discover
              technology, artificial intelligence, business, and ideas
              shaping tomorrow.
            </p>

            <div className="animate-rise mt-10 flex flex-wrap gap-4">
              <Link
                href="#explore"
                className="inline-flex items-center gap-3 rounded-full bg-[#FFD700] px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-[#E5C100]"
              >
                Explore HAKA
                <ArrowRight size={19} />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-[#FFD700] hover:text-[#FFD700]"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          <div className="mt-24 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/35 sm:gap-14">
            <span>Curiosity</span>
            <span>Innovation</span>
            <span>Technology</span>
            <span>Progress</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-white/10 bg-[#171717] py-5">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-12 text-xl font-black uppercase tracking-widest text-white/50"
            >
              {word}
              <span className="text-[#FFD700]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section
        id="explore"
        className="scroll-mt-20 bg-[#111111] py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD700]">
                What We Explore
              </p>

              <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
                Ideas Without
                <br />
                <span className="text-white/35">Boundaries.</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/50">
              Different interests. Different perspectives. One place
              to discover what&apos;s next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard
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

      {/* TOPIC DETAILS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD700]">
              Explore Further
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Knowledge for the
              <span className="text-[#FFD700]"> Curious.</span>
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              We break down complex topics and make interesting ideas
              easier to understand and explore.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.id}
                  id={area.id}
                  className="group scroll-mt-28 rounded-2xl border border-white/10 bg-[#141414] p-8 transition duration-300 hover:border-[#FFD700]/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 text-[#FFD700] transition group-hover:bg-[#FFD700] group-hover:text-black">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-white/25">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-7 text-white/45">
                    {area.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10 transition group-hover:bg-[#FFD700]/40" />

                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#FFD700]">
                    Discover More
                    <ArrowRight className="ml-2 inline-block" size={15} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED STATEMENT */}
      <section className="bg-[#111111] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171717] px-8 py-20 sm:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FFD700]/10 blur-[100px]" />

            <div className="relative max-w-4xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD700]">
                The HAKA Perspective
              </p>

              <h2 className="text-4xl font-black leading-tight sm:text-6xl">
                The Future Belongs to Those Who{" "}
                <span className="text-[#FFD700]">
                  Stay Curious.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-white/50">
                We believe asking questions, exploring possibilities,
                and embracing change are the foundations of progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT HAKA */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-white/10 bg-[#0A0A0A] py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-[#FFD700]/20 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171717]">
              <Image
                src="/Haka_logo.jpg"
                alt="HAKA brand logo"
                width={800}
                height={800}
                className="aspect-square w-full object-contain p-8"
              />
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD700]">
              Welcome to HAKA
            </p>

            <h2 className="text-5xl font-black leading-tight sm:text-7xl">
              A Space for
              <br />
              <span className="text-[#FFD700]">The Curious.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-white/50">
              HAKA is a creative platform built around curiosity,
              knowledge, and innovation. We bring together conversations
              about technology, AI, business, and the ideas shaping tomorrow.
            </p>

            <p className="mt-5 max-w-lg leading-8 text-white/50">
              Whether you&apos;re a student, creator, entrepreneur, or
              technology enthusiast, there&apos;s always something new to discover.
            </p>

            <Link
              href="#explore"
              className="mt-9 inline-flex items-center gap-3 font-bold text-[#FFD700] transition hover:gap-5"
            >
              Discover HAKA
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden border-t border-white/10 py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FFD700]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Zap className="mx-auto mb-8 text-[#FFD700]" size={38} />

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#FFD700]">
            Join the Conversation
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            Have an Idea?
            <br />
            <span className="text-[#FFD700]">
              Let&apos;s Explore It.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-white/50">
            Have a project, business opportunity, collaboration, or
            interesting idea? We&apos;d love to hear from you.
          </p>

          <a
            href="mailto:hello@haka.ph"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FFD700] px-9 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-[#E5C100]"
          >
            Get in Touch
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <Link href="/" className="text-3xl font-black">
              HAKA<span className="text-[#FFD700]">.</span>
            </Link>

            <p className="mt-2 text-xs text-white/35">
              Think. Explore. Create.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            <Link href="/#home" className="text-xs text-white/45 transition hover:text-[#FFD700]">
              Home
            </Link>
            <Link href="/#explore" className="text-xs text-white/45 transition hover:text-[#FFD700]">
              Explore
            </Link>
            <Link href="/#about" className="text-xs text-white/45 transition hover:text-[#FFD700]">
              About
            </Link>
            <Link href="/#contact" className="text-xs text-white/45 transition hover:text-[#FFD700]">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-white/35">
            © 2026 HAKA. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
