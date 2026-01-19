import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { Container } from "@/components/sections/container"
import { ScrollCta } from "@/components/sections/scroll-cta"
import { ContactForm } from "@/components/forms/contact-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact CodeCraft - Request Consultation",
  description:
    "Get in touch with CodeCraft to discuss your ICT challenges and solutions. Multiple contact options available.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Elegant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_var(--primary)/8%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,_var(--accent)/8%,transparent_60%)]"></div>
          
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
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-foreground/70 leading-relaxed">
                Let's discuss how CodeCraft can help transform your institution with secure, tailored ICT solutions.
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
                Let's Start a Conversation
              </h2>
              <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
                Get in touch with our team to discuss how we can help transform your institution with secure, tailored ICT solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
              >
                <Link href="#contact-section" className="gap-2">
                  Contact Us Now
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        <div id="contact-section" className="relative bg-background py-12 sm:py-16">
          {/* Visible Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          
          <Container className="relative">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <a
                    href="mailto:assignmentsprodesk@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium text-lg break-all"
                  >
                    assignmentsprodesk@gmail.com
                  </a>
                  <p className="text-sm text-foreground/60">Response within 24 hours</p>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                  <a href="tel:+254758058974" className="text-primary hover:text-primary/80 font-medium text-lg">
                    0758058974
                  </a>
                  <p className="text-sm text-foreground/60">Monday-Friday, 9AM-6PM EAT</p>
                </div>

                {/* WhatsApp */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  </div>
                  <a
                    href="https://wa.me/254115900005"
                    className="text-primary hover:text-primary/80 font-medium text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +254 115 900 005
                  </a>
                  <p className="text-sm text-foreground/60">Quick response for urgent matters</p>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                  </div>
                  <p className="text-foreground">Available Nationwide</p>
                  <p className="text-sm text-foreground/60">Serving organizations globally</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="rounded-lg border border-border bg-card p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Response Time Guarantee */}
        <section className="relative bg-muted/50 py-12 sm:py-16">
          {/* Visible Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3Ccircle cx='3' cy='13' r='1.5'/%3E%3Ccircle cx='13' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
          <Container className="relative">
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Commitment</h3>
              <p className="text-foreground/60">
                Every inquiry receives a response within 24 hours. We take your challenges seriously and are committed
                to finding the right solution for your organization.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
