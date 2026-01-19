import { Container } from "./container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  accentColor?: string
}

export function ServiceHero({ title, subtitle, description, accentColor = "primary" }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className={`h-4 w-4 text-${accentColor}`} />
            <span className="text-sm font-medium text-foreground/70">Service</span>
          </div>
          
          {/* Title */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '100ms' }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '200ms' }}
          >
            {subtitle}
          </p>
          
          {/* Description */}
          <p 
            className="max-w-3xl text-base sm:text-lg lg:text-xl text-foreground/60 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '300ms' }}
          >
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '400ms' }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
            >
              <Link href="/contact" className="gap-2">
                Request Consultation
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
            >
              <Link href="/services" className="gap-2">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
