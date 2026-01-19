import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SystemsSecurityBlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
          <Container className="space-y-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blogs" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>

            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                  Systems Security
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Systems Security and Infrastructure Upgrades
              </h1>

              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                Discover how to modernize your IT infrastructure with security-first approaches and seamless upgrade
                strategies.
              </p>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <article className="py-16 sm:py-24">
          <Container>
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="space-y-8 text-foreground/80 leading-relaxed">
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    The Importance of Modern Infrastructure
                  </h2>
                  <p>
                    Legacy systems often become security liabilities as they age. Modernizing your IT infrastructure is
                    not just about performance—it's about security, compliance, and staying competitive in an
                    ever-evolving digital landscape.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    Security-First Upgrade Strategies
                  </h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Assessment and Planning</h3>
                  <p>
                    Before any upgrade, conduct a thorough assessment of your current infrastructure. Identify
                    vulnerabilities, performance bottlenecks, and compliance gaps. This assessment forms the foundation
                    of your upgrade strategy.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Phased Implementation</h3>
                  <p>
                    Implement upgrades in phases to minimize disruption. Start with critical systems and gradually
                    migrate other components. This approach allows for testing and adjustment while maintaining business
                    continuity.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Zero-Trust Architecture</h3>
                  <p>
                    Adopt a zero-trust security model where no user or device is trusted by default. Every access request
                    must be verified, regardless of location or network.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Cloud Migration Strategies</h3>
                  <p>
                    Consider cloud-based solutions for scalability and security. Modern cloud platforms offer
                    enterprise-grade security features, automated updates, and disaster recovery capabilities.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Continuous Monitoring</h3>
                  <p>
                    Implement 24/7 monitoring systems to detect anomalies, potential threats, and performance issues in
                    real-time. Proactive monitoring enables quick response to security incidents.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    Best Practices for Infrastructure Upgrades
                  </h2>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintain detailed documentation throughout the upgrade process</li>
                    <li>Ensure all team members are trained on new systems</li>
                    <li>Implement backup and disaster recovery solutions</li>
                    <li>Regularly update and patch all systems</li>
                    <li>Conduct post-upgrade security audits</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
                  <p>
                    Infrastructure upgrades are essential for maintaining security and competitiveness. By following a
                    security-first approach and implementing upgrades strategically, organizations can modernize their
                    systems while minimizing risks and disruptions.
                  </p>
                </section>
              </div>
            </div>
          </Container>
        </article>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
          <Container>
            <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 sm:p-12 text-center">
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                CodeCraft specializes in secure infrastructure upgrades and modernization. Let's discuss your needs.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
