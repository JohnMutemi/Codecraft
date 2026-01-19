import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { SectionHeader } from "@/components/sections/section-header"
import { ScrollCta } from "@/components/sections/scroll-cta"
import { FeatureCard } from "@/components/sections/feature-card"
import { WHY_CODECRAFT } from "@/lib/constants"
import Link from "next/link"
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Why CodeCraft - Competitive Positioning",
  description:
    "Learn what makes CodeCraft different: security-first mindset, customized solutions, ongoing support, and ethical practices.",
}

export default function WhyCodecraftPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/12"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--primary)/7%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--accent)/7%,transparent_50%)]"></div>
          
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
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Advantage</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Why <span className="text-primary">CodeCraft</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed">
                What makes us different in the ICT consultancy landscape.
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
                Join Leading Institutions Using CodeCraft
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Let's discuss how our security-first, partnership-focused approach can transform your institution.
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

        {/* Core Differentiators */}
        <section id="advantages-section" className="relative bg-background py-12 sm:py-16">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="space-y-12">
            <SectionHeader title="Our Competitive Advantages" description="Why leading institutions choose CodeCraft" />

            <div className="grid gap-8 sm:grid-cols-2">
              {WHY_CODECRAFT.map((item) => (
                <FeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={<CheckCircle className="h-6 w-6" />}
                  variant="accent"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Comparative Analysis */}
        <section className="relative bg-muted/50 py-12 sm:py-16">
          {/* Visible Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3Ccircle cx='3' cy='13' r='1.5'/%3E%3Ccircle cx='13' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="space-y-12">
            <SectionHeader title="CodeCraft vs. Traditional ICT Providers" />

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Aspect</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">CodeCraft</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground/60">Typical Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Approach</td>
                    <td className="px-4 py-3 text-accent font-medium">Security-First</td>
                    <td className="px-4 py-3 text-foreground/60">Cost-Focused</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Customization</td>
                    <td className="px-4 py-3 text-accent font-medium">Fully Tailored</td>
                    <td className="px-4 py-3 text-foreground/60">One-Size-Fits-All</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Support Model</td>
                    <td className="px-4 py-3 text-accent font-medium">Partnership (24/7)</td>
                    <td className="px-4 py-3 text-foreground/60">Transactional</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Industry Expertise</td>
                    <td className="px-4 py-3 text-accent font-medium">Deep Sector Knowledge</td>
                    <td className="px-4 py-3 text-foreground/60">Generic Solutions</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Vendor Lock-in</td>
                    <td className="px-4 py-3 text-accent font-medium">None (Open Standards)</td>
                    <td className="px-4 py-3 text-foreground/60">Significant Lock-in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Transparency</td>
                    <td className="px-4 py-3 text-accent font-medium">Complete Transparency</td>
                    <td className="px-4 py-3 text-foreground/60">Hidden Fees Common</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Key Principles */}
        <section className="relative py-12 sm:py-16">
          {/* Visible Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative space-y-10">
            <SectionHeader title="Our Core Principles in Action" />

            <div className="grid gap-8 sm:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-border p-8">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Performance-Driven</h3>
                <p className="text-sm text-foreground/60">
                  Solutions that actually work. Every implementation focuses on measurable outcomes and ROI.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-border p-8">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Human-Centered</h3>
                <p className="text-sm text-foreground/60">
                  Technology should serve people, not the other way around. User experience is non-negotiable.
                </p>
              </div>

              <div className="space-y-4 rounded-lg border border-border p-8">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Future-Ready</h3>
                <p className="text-sm text-foreground/60">
                  Scalable architectures built to grow with your organization. No rip-and-replace needed.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonials Style Section */}
        <section className="relative bg-muted/50 py-12 sm:py-16">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative space-y-10">
            <SectionHeader title="Success Stories" description="Organizations that transformed with CodeCraft" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "CodeCraft transformed our school's digital infrastructure. Security and performance improved dramatically.",
                  org: "Regional School District",
                  metric: "95% uptime | 60% cost reduction",
                },
                {
                  quote: "The consultancy approach meant they truly understood our healthcare compliance requirements.",
                  org: "Teaching Hospital",
                  metric: "100% HIPAA compliant | 3x faster deployment",
                },
                {
                  quote: "Finally, a technology partner that aligns with our mission and budget constraints.",
                  org: "International NGO",
                  metric: "40% efficiency gain | Unlimited support",
                },
              ].map((item) => (
                <div key={item.org} className="space-y-4 rounded-lg border border-border bg-background p-6">
                  <p className="italic text-foreground/60">"{item.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{item.org}</p>
                    <p className="text-sm text-accent font-medium">{item.metric}</p>
                  </div>
                </div>
              ))}
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
            <h2 className="text-3xl font-bold text-foreground">Join Leading Institutions Using CodeCraft</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Let's discuss how our security-first, partnership-focused approach can transform your institution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
