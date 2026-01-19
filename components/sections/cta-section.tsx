import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <Container>
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 sm:p-12 lg:p-16 text-center shadow-xl overflow-hidden">
          {/* decorative background elements */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed">
            Let's discuss how CodeCraft can help your organization achieve its ICT goals with secure, scalable
            solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8"
          >
            <Link href="/contact" className="gap-2">
              Get Started Today
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
