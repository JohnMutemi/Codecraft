import type React from "react"
import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { Container } from "./container"
import { SectionHeader } from "./section-header"
import { FeatureCard } from "./feature-card"
import { Shield, BookOpen, Activity, Code2, Church, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
  "book-open": <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  activity: <Activity className="h-5 w-5 sm:h-6 sm:w-6" />,
  code: <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />,
  church: <Church className="h-5 w-5 sm:h-6 sm:w-6" />,
  briefcase: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
}

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
      <Container className="space-y-12 sm:space-y-16">
        <SectionHeader
          subtitle="Our Expertise"
          title="Comprehensive ICT Solutions"
          description="From cybersecurity to custom software, we deliver enterprise-grade solutions tailored to your organization's needs."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link key={service.id} href={service.href} className="group h-full">
              <FeatureCard
                icon={iconMap[service.icon]}
                title={service.title}
                description={service.description}
                className="h-full"
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto gap-2">
            <Link href="/services">
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
