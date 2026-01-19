import type React from "react"
import { INDUSTRIES } from "@/lib/constants"
import { Container } from "./container"
import { SectionHeader } from "./section-header"
import { FeatureCard } from "./feature-card"
import { BookOpen, Activity, Briefcase, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  schools: <BookOpen className="h-6 w-6" />,
  hospitals: <Activity className="h-6 w-6" />,
  smes: <Briefcase className="h-6 w-6" />,
  ngos: <Heart className="h-6 w-6" />,
}

export function IndustriesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
      <Container className="space-y-12 sm:space-y-16">
        <SectionHeader
          subtitle="Who We Serve"
          title="Industries We Support"
          description="Tailored solutions for organizations across education, healthcare, business, and non-profit sectors."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <FeatureCard
              key={industry.id}
              icon={iconMap[industry.id]}
              title={industry.title}
              description={industry.challenges.slice(0, 2).join(". ")}
              href={`/industries#${industry.id}`}
              ctaLabel="Explore"
            />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2">
            <Link href="/industries">
              Explore all industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
