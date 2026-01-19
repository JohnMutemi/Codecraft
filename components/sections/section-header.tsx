import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export function SectionHeader({ title, subtitle, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-6 text-center", className)}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent px-4 py-2 bg-accent/10 rounded-full w-fit mx-auto">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
        <span className="text-pretty">{title}</span>
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground/60 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
