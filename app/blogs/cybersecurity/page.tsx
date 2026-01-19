import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CybersecurityBlogPage() {
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
                  Cybersecurity
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Cybersecurity Best Practices for Modern Organizations
              </h1>

              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
                Learn essential cybersecurity strategies to protect your organization from evolving threats and ensure
                data security compliance.
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
                    Understanding the Cybersecurity Landscape
                  </h2>
                  <p>
                    In today's digital-first world, organizations face an ever-evolving landscape of cyber threats. From
                    sophisticated phishing attacks to ransomware and data breaches, the importance of robust
                    cybersecurity measures cannot be overstated. This comprehensive guide outlines best practices that
                    modern organizations should implement to protect their digital assets.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    Essential Security Measures
                  </h2>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Multi-Factor Authentication (MFA)</h3>
                  <p>
                    Implementing MFA across all systems and applications significantly reduces the risk of unauthorized
                    access. Even if credentials are compromised, attackers cannot gain entry without the second
                    authentication factor.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Regular Security Audits</h3>
                  <p>
                    Conduct comprehensive security audits at least quarterly to identify vulnerabilities, assess current
                    security posture, and ensure compliance with industry standards and regulations.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Employee Training Programs</h3>
                  <p>
                    Human error remains one of the leading causes of security breaches. Regular training sessions on
                    recognizing phishing attempts, safe browsing practices, and data handling protocols are essential.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Network Segmentation</h3>
                  <p>
                    Divide your network into isolated segments to limit the potential impact of a breach. This ensures
                    that even if one segment is compromised, the entire network remains protected.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Incident Response Planning</h3>
                  <p>
                    Develop and regularly test an incident response plan that outlines procedures for detecting,
                    responding to, and recovering from security incidents. Quick response times can significantly
                    minimize damage.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    Compliance and Regulatory Requirements
                  </h2>
                  <p>
                    Organizations must stay compliant with relevant regulations such as GDPR, HIPAA, or industry-specific
                    standards. Regular compliance audits and documentation are crucial for maintaining legal standing and
                    protecting sensitive data.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
                  <p>
                    Cybersecurity is not a one-time implementation but an ongoing process. By adopting these best
                    practices and maintaining vigilance, organizations can significantly reduce their risk exposure and
                    protect their valuable digital assets.
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
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Need Expert Cybersecurity Assistance?
              </h2>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                CodeCraft offers comprehensive cybersecurity solutions tailored to your organization's needs. Contact us
                for a consultation.
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
