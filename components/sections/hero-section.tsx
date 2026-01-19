import Link from "next/link"
import { ArrowRight, Shield, Zap, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/15"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
      
      {/* Subtle Tech Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Radial Gradients for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--primary)/20%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--accent)/20%,transparent_50%)]"></div>
      
      {/* Background Image Layer (optional - if image exists) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/hero-background.png)",
          backgroundSize: "cover",
        }}
      ></div>

      <Container className="space-y-12 relative z-10">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="space-y-4 animate-fade-in">
            {/* Value proposition focused headline - avoids duplication */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-tight">
              <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                CodeCraft ICT Solutions
              </span>
              <span className="block text-accent text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2 animate-gradient">
              TRUSTED. SECURE. SCALABLE.
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
            Comprehensive cybersecurity, system upgrades, and custom software solutions 
            <span className="block mt-1 text-white/75 text-base sm:text-lg">
              Trusted by schools, hospitals, SMEs, and NGOs nationwide
            </span>
          </p>

          {/* Prominent CTA Buttons - Moved Up & Enhanced */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6 pt-4">
            <Button
              asChild
              size="lg"
              className="group relative bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-110 text-white font-bold text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 overflow-hidden"
            >
              <Link href="/contact" className="flex items-center gap-3 relative z-10">
                <span>Request Consultation</span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="group relative border-2 border-white/80 bg-white/10 hover:bg-white/20 hover:border-white backdrop-blur-md transition-all duration-300 text-white font-bold text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 shadow-xl hover:shadow-2xl hover:scale-110 overflow-hidden"
            >
              <Link href="/services" className="flex items-center gap-3 relative z-10">
                <span>Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-8 border-t border-white/20">
          <div className="flex items-center gap-3 sm:justify-center px-4 py-2">
            <Shield className="h-6 w-6 text-accent flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">Security-First Approach</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center px-4 py-2">
            <Zap className="h-6 w-6 text-accent flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">High-Performance Systems</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center px-4 py-2">
            <Lock className="h-6 w-6 text-accent flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium text-white">Compliance Ready</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
