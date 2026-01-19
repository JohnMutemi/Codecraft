import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { ScrollCta } from "@/components/sections/scroll-cta"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { INDUSTRIES } from "@/lib/constants"
import { BookOpen, Activity, Briefcase, Heart, ArrowRight } from "lucide-react"
import type React from "react"

export const metadata: Metadata = {
  title: "Industries - CodeCraft ICT Solutions",
  description:
    "Explore how CodeCraft serves schools, hospitals, SMEs, and NGOs with tailored ICT solutions addressing sector-specific challenges.",
}

const iconMap: Record<string, React.ReactNode> = {
  schools: <BookOpen className="h-6 w-6" />,
  hospitals: <Activity className="h-6 w-6" />,
  smes: <Briefcase className="h-6 w-6" />,
  ngos: <Heart className="h-6 w-6" />,
}

const industryDetails = {
  schools: {
    challenges: [
      "Digital infrastructure for modern learning",
      "Student and administrative data management",
      "Secure connectivity for learning environments",
    ],
    solutions: [
      "Integrated learning management systems (LMS)",
      "Student Information Systems (SIS)",
      "Secure school connectivity infrastructure",
      "Digital classroom enablement",
    ],
    outcomes: [
      "Enhanced teaching and learning quality",
      "Streamlined administrative processes",
      "Improved student engagement and outcomes",
      "Secure, compliant data management",
    ],
  },
  hospitals: {
    challenges: [
      "Secure patient data management (HIPAA/local compliance)",
      "Medical device integration and interoperability",
      "Real-time clinical decision support",
    ],
    solutions: [
      "Electronic Health Records (EHR) systems",
      "Medical device integration platforms",
      "Secure patient communication systems",
      "Clinical data analytics and reporting",
    ],
    outcomes: [
      "Improved patient care coordination",
      "Regulatory compliance and audit readiness",
      "Operational efficiency gains",
      "Enhanced clinical outcomes tracking",
    ],
  },
  smes: {
    challenges: [
      "Cost-effective IT infrastructure scaling",
      "Operational efficiency and automation",
      "Cybersecurity without enterprise budgets",
    ],
    solutions: [
      "Scalable cloud and hybrid infrastructure",
      "Business process automation",
      "Affordable enterprise security",
      "Custom business applications",
    ],
    outcomes: [
      "Competitive advantage through technology",
      "Reduced operational costs",
      "Improved business agility",
      "Better risk management",
    ],
  },
  ngos: {
    challenges: [
      "Limited ICT budgets and resources",
      "Complex beneficiary data management",
      "Impact measurement and reporting",
    ],
    solutions: [
      "Open-source and cost-effective technology",
      "Beneficiary management systems",
      "Impact tracking and analytics platforms",
      "Donor reporting systems",
    ],
    outcomes: [
      "Maximized social impact per dollar spent",
      "Better beneficiary services",
      "Transparent impact reporting",
      "Improved donor confidence",
    ],
  },
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
                Let's discuss how CodeCraft can address your organization's specific ICT challenges and deliver tailored solutions.
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

        {/* Industries Overview */}
        <div id="industries-section" className="relative bg-background">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
        {INDUSTRIES.map((industry) => {
          const details = industryDetails[industry.id as keyof typeof industryDetails]
          return (
            <section key={industry.id} className="relative border-t border-border bg-background py-12 sm:py-16">
              <Container>
                <div className="space-y-12">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {iconMap[industry.id]}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{industry.title}</h2>
                    </div>
                  </div>

                  {/* Challenges, Solutions, Outcomes Grid */}
                  <div className="grid gap-8 sm:grid-cols-3">
                    {/* Challenges */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Key Challenges</h3>
                      <ul className="space-y-3">
                        {details.challenges.map((challenge) => (
                          <li key={challenge} className="flex gap-3 text-sm text-foreground/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Our Solutions</h3>
                      <ul className="space-y-3">
                        {details.solutions.map((solution) => (
                          <li key={solution} className="flex gap-3 text-sm text-foreground/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Expected Outcomes</h3>
                      <ul className="space-y-3">
                        {details.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-3 text-sm text-foreground/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          )
        })}
        </div>

        {/* CTA Section */}
        <section className="bg-muted/50 py-20 sm:py-28">
          <Container className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Explore Your Industry Solution?</h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Let's discuss how CodeCraft can address your organization's specific ICT challenges.
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
