"use client"

import { Container } from "./container"
import { CheckCircle, ArrowRight, Zap, Target, Lightbulb, TrendingUp } from "lucide-react"
import type { ServiceDetail } from "@/lib/services-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceDetailsProps {
  service: ServiceDetail
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <>
      {/* Problem & Solution Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <Container className="relative space-y-12 sm:space-y-16">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            {/* The Challenge */}
            <div 
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden animate-in fade-in slide-in-from-left duration-700"
              style={{ animationDelay: '100ms' }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent backdrop-blur-sm" />
              <div className="absolute inset-0 bg-white/5" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl" />
              
              <div className="relative p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/20">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">The Challenge</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                  {service.problem}
                </p>
              </div>
            </div>
            
            {/* Our Approach */}
            <div 
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden animate-in fade-in slide-in-from-right duration-700"
              style={{ animationDelay: '200ms' }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent backdrop-blur-sm" />
              <div className="absolute inset-0 bg-white/5" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl" />
              
              <div className="relative p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Our Approach</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
                  {service.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)/5%,transparent_50%)]" />
        
        {/* Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <Container className="relative space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground/70">Key Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              What You Gain
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/60 text-sm sm:text-base">
              Transform your organization with our comprehensive solution
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-xl sm:rounded-2xl transition-colors duration-300" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl sm:rounded-2xl" />
                
                <div className="relative p-4 sm:p-5 lg:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed">
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <Container className="relative space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/70">Our Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Implementation Journey
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/60 text-sm sm:text-base">
              A proven methodology ensuring successful delivery
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-primary/30 rounded-xl sm:rounded-2xl transition-colors duration-300" />
                
                {/* Step number glow on hover */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-5 sm:p-6 lg:p-8 space-y-4">
                  {/* Step number */}
                  <div className="relative">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white font-bold text-lg sm:text-xl shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
                      {index + 1}
                    </div>
                    {/* Connector line (hidden on last item and mobile) */}
                    {index < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 ml-4" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <Container className="relative">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl" />
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            
            <div className="relative p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Get Started?
              </h2>
              <p className="max-w-2xl mx-auto text-foreground/70 text-sm sm:text-base lg:text-lg">
                Let&apos;s discuss how our {service.title.toLowerCase()} can transform your organization. 
                Schedule a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
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
                  className="w-full sm:w-auto bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-105 h-12 sm:h-14 px-6 sm:px-8"
                >
                  <Link href="/services" className="gap-2">
                    Explore Other Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
