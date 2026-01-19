import { Container } from "@/components/sections/container"
import { ScrollArrow } from "@/components/ui/scroll-arrow"

interface ScrollCtaProps {
  targetId: string
  className?: string
}

export function ScrollCta({ targetId, className = "" }: ScrollCtaProps) {
  return (
    <section
      className={`relative bg-background border-t border-b border-primary/10 py-10 sm:py-12 ${className}`}
      aria-label="Scroll to next section"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center justify-center">
          <ScrollArrow targetId={targetId} className="relative !bottom-0 !left-0 !translate-x-0" />
        </div>
      </Container>
    </section>
  )
}

