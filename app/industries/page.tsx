import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { ScrollCta } from "@/components/sections/scroll-cta"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IndustriesGrid } from "./industries-grid"

export const metadata: Metadata = {
  title: "Industries - CodeCraft ICT Solutions",
  description:
    "Explore how CodeCraft serves schools, hospitals, SMEs, and NGOs with tailored ICT solutions addressing sector-specific challenges.",
}

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/8"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_var(--primary)/6%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_var(--accent)/6%,transparent_60%)]"></div>
          
          {/* Visible Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          {/* Content */}
          <Container className="relative z-10 py-12 sm:py-16">
            <div className="max-w-4xl space-y-8 text-center">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Industries</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Industries <span className="text-primary">We Serve</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed">
                Tailored ICT solutions for education, healthcare, business, and non-profit organizations.
              </p>
            </div>
          </Container>
        </section>

        <ScrollCta targetId="hero-cta-section" />

        {/* Hero CTA Section */}
        <section id="hero-cta-section" className="relative bg-background py-12 sm:py-16">
          <Container>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 sm:p-12 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              </div>
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Ready to Explore Your Industry Solution?
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Let&apos;s discuss how CodeCraft can address your organization&apos;s specific ICT challenges and deliver tailored solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                <Link href="/contact" className="gap-2">
                  Request Consultation
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Industries Grid - Client Component with API data */}
        <IndustriesGrid />

        {/* CTA Section */}
        <section className="bg-muted/50 py-20 sm:py-28">
          <Container className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Explore Your Industry Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Let&apos;s discuss how CodeCraft can address your organization&apos;s specific ICT challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
