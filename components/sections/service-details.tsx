import { Container } from "./container"
import { SectionHeader } from "./section-header"
import { CheckCircle } from "lucide-react"
import type { ServiceDetail } from "@/lib/services-data"

interface ServiceDetailsProps {
  service: ServiceDetail
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <>
      {/* Problem & Solution */}
      <section className="py-20 sm:py-28">
        <Container className="space-y-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
              <p className="text-lg text-foreground/60">{service.problem}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Our Approach</h2>
              <p className="text-lg text-foreground/60">{service.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-muted/50 py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionHeader title="Key Benefits" description="What you gain with our solution" />

          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg border border-border p-4">
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-accent" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <Container className="space-y-12">
          <SectionHeader title="Our Implementation Process" description="How we ensure successful delivery" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/60">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
