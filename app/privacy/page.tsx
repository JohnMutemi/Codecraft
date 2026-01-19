import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"

export const metadata: Metadata = {
  title: "Privacy Policy - CodeCraft",
  description: "CodeCraft privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16 sm:py-24">
          <Container>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-foreground/60">Last updated: January 2026</p>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="text-foreground/60">
                  CodeCraft ICT Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="text-foreground/60">We may collect information about you in a variety of ways:</p>
                <ul className="space-y-2 list-disc list-inside text-foreground/60">
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number, organization, and industry
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on pages
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Messages and inquiries submitted through our contact form
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="text-foreground/60">We use the information we collect for the following purposes:</p>
                <ul className="space-y-2 list-disc list-inside text-foreground/60">
                  <li>Responding to inquiries and providing customer support</li>
                  <li>Sending newsletters and promotional materials (with your consent)</li>
                  <li>Analyzing website usage to improve our services</li>
                  <li>Detecting and preventing fraudulent activities</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
                <p className="text-foreground/60">
                  CodeCraft implements comprehensive security measures to protect your personal information, including
                  encryption, secure server storage, and regular security audits. However, no method of transmission
                  over the Internet is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Third-Party Disclosure</h2>
                <p className="text-foreground/60">
                  We do not sell, trade, or rent your personal information to third parties. We only share information
                  when required by law or with your explicit consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
                <p className="text-foreground/60">
                  You have the right to access, correct, or delete your personal information. To exercise these rights,
                  please contact us at info@codecraft.com.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
                <p className="text-foreground/60">
                  If you have questions about this Privacy Policy, please contact us at info@codecraft.com.
                </p>
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
