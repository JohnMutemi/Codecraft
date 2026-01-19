import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  variant?: "default" | "accent"
  href?: string
  ctaLabel?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = "default",
  href,
  ctaLabel = "Learn more",
}: FeatureCardProps) {
  const baseClassName = cn(
    "group flex flex-col gap-4 rounded-xl border border-border/50 bg-gradient-to-br from-background to-muted/20 p-5 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5",
    variant === "accent" && "border-accent/30 bg-gradient-to-br from-accent/5 to-background",
    className,
  )

  const content = (
    <>
      {icon && (
        <div className="inline-flex p-2.5 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 group-hover:from-primary/25 group-hover:to-accent/25 transition-colors text-primary group-hover:text-accent">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-foreground text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>

      {href && (
        <div className="mt-auto pt-1">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
            {ctaLabel}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={baseClassName} aria-label={`${ctaLabel}: ${title}`}>
        {content}
      </Link>
    )
  }

  return <div className={baseClassName}>{content}</div>
}
