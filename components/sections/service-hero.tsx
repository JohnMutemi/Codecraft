import { Container } from "./container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
}

export function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
      <Container className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Service</p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="text-xl text-foreground/60">{subtitle}</p>
        <p className="max-w-2xl text-lg text-foreground/60">{description}</p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/contact" className="gap-2">
            Request Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </section>
  )
}
