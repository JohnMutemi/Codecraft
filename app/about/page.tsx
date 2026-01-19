import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureCard } from "@/components/sections/feature-card"
import { ScrollCta } from "@/components/sections/scroll-cta"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About CodeCraft - Our Story & Mission",
  description:
    "Learn about CodeCraft's mission to transform institutions with secure, ethical ICT solutions. Founded on principles of trust, reliability, and security.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary)/5%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--accent)/5%,transparent_50%)]"></div>
          
          {/* Subtle Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          {/* Content */}
          <Container className="relative z-10 py-12 sm:py-16">
            <div className="max-w-4xl space-y-8 text-center">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                About <span className="text-primary">CodeCraft</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed">
                Transforming institutions through secure, ethical ICT solutions since day one.
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
                Ready to Transform Your Institution?
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Let's discuss how CodeCraft can help you achieve your ICT goals with security, clarity, and partnership at the core.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                <Link href="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Our Story */}
        <section id="our-story-section" className="relative bg-background py-12 sm:py-16">
          {/* Visible Pattern Background */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <Container className="relative space-y-8">
            <div className="mx-auto max-w-3xl space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-foreground/60 leading-relaxed">
                CodeCraft was founded on a simple observation: institutions—from schools to hospitals to businesses—were
                being failed by ICT solutions that prioritized cost over security, complexity over clarity, and vendor
                lock-in over partnership.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed">
                We started with a mission: to be the trusted partner that helps institutions harness technology
                responsibly. Our approach combines technical excellence with human-centered design, delivering solutions
                that are secure, scalable, and sustainable.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Today, CodeCraft serves schools, hospitals, SMEs, and NGOs across diverse sectors. But our mission
                remains unchanged: secure technology for institutions that matter.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission, Vision, Values */}
        <section className="relative bg-muted/50 py-16 sm:py-20">
          {/* Visible Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3Ccircle cx='3' cy='13' r='1.5'/%3E%3Ccircle cx='13' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <Container className="relative space-y-10">
            <SectionHeader title="Our Guiding Principles" />

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 space-y-4">
                <Eye className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Vision</h3>
                <p className="text-foreground/60">
                  To become the go-to ICT consultancy firm, recognized for security-first innovation and ethical
                  technology practices.
                </p>
              </div>

              <div className="rounded-lg border border-border p-8 space-y-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Mission</h3>
                <p className="text-foreground/60">
                  Empowering institutions with secure, scalable, and ethical ICT solutions that drive meaningful
                  transformation.
                </p>
              </div>

              <div className="rounded-lg border border-border p-8 space-y-4">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Values</h3>
                <p className="text-foreground/60">
                  Security first. Clarity over complexity. Partnership over transactions. Ethical practices always.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose CodeCraft */}
        <section className="relative py-16 sm:py-20">
          {/* Visible Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <Container className="relative space-y-10">
            <SectionHeader
              title="Why Trust CodeCraft"
              description="What sets us apart in the ICT consultancy landscape"
            />

            <div className="grid gap-8 sm:grid-cols-2">
              <FeatureCard
                title="Security-First Architecture"
                description="Every solution is designed with security and compliance as foundational principles, not afterthoughts."
              />
              <FeatureCard
                title="Deep Industry Expertise"
                description="Years of experience across education, healthcare, SMEs, and NGOs give us deep understanding of sector-specific challenges."
              />
              <FeatureCard
                title="Customized Solutions"
                description="We reject one-size-fits-all approaches. Every implementation is tailored to your unique needs and context."
              />
              <FeatureCard
                title="Ethical Practices"
                description="We practice what we preach: transparent pricing, no lock-in, sustainable technology choices, and genuine partnerships."
              />
              <FeatureCard
                title="24/7 Support"
                description="Your partnership with CodeCraft doesn't end at deployment. We provide continuous monitoring and proactive support."
              />
              <FeatureCard
                title="Scalable Architecture"
                description="Our solutions grow with you. Today's implementation seamlessly scales as your organization evolves."
              />
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-r from-primary/10 via-background to-primary/5 py-12 sm:py-16">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Transform Your Institution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Let's discuss how CodeCraft can help you achieve your ICT goals with security, clarity, and partnership at
              the core.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact" className="gap-2">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
