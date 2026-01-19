import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

interface CtaSectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CtaSection({
  title = "Ready to Transform Your Infrastructure?",
  description = "Let's discuss how CodeCraft can help your organization achieve its ICT goals with secure, scalable solutions.",
  primaryButtonText = "Get Started Today",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
}: CtaSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <Container className="relative">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Card background with glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
          <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl" />
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/70">Let&apos;s Connect</span>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h2>
            
            {/* Description */}
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-foreground/60 leading-relaxed">
              {description}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
              >
                <Link href={primaryButtonHref} className="gap-2">
                  {primaryButtonText}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
                >
                  <Link href={secondaryButtonHref} className="gap-2">
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
