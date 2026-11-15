import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
  index?: number;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
  className = "",
  index,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl border border-border-color bg-card p-7 transition duration-300 hover:-translate-y-2 hover:border-[#FFD700]/50 ${className}`}
    >
      <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-xl bg-haka-yellow/10 text-[#FFD700] transition group-hover:bg-[#FFD700] group-hover:text-black">
        <Icon size={27} />
      </div>

      {index !== undefined && (
        <span className="text-xs font-bold tracking-widest text-light-muted/50">
          {String(index).padStart(2, "0")}
        </span>
      )}

      <h3 className="mt-3 text-xl font-bold text-[var(--foreground)]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#FFD700] transition-all group-hover:gap-4">
        Explore <ArrowRight size={16} />
      </div>
    </Link>
  );
}