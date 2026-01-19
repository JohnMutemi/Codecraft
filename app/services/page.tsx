import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { ScrollCta } from "@/components/sections/scroll-cta"
import { SERVICES } from "@/lib/constants"
import { FeatureCard } from "@/components/sections/feature-card"
import Link from "next/link"
import { Shield, BookOpen, Activity, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services - CodeCraft ICT Solutions",
  description:
    "Explore our comprehensive ICT consulting and cybersecurity services for schools, hospitals, SMEs, and NGOs.",
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--accent)/8%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary)/8%,transparent_50%)]"></div>
          
          {/* Visible Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          {/* Content */}
          <Container className="relative z-10 py-12 sm:py-16">
            <div className="max-w-4xl space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Comprehensive <span className="text-primary">ICT Solutions</span>
              </h1>
              <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
                Enterprise-grade ICT consulting and cybersecurity services tailored to your organization's unique
                challenges and goals.
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
                Ready to Explore Our Services?
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Discover how our comprehensive ICT solutions can address your organization's unique challenges and goals.
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

        {/* Services Grid */}
        <section id="services-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <Container className="relative space-y-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
