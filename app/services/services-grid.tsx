"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/sections/container"
import { Shield, BookOpen, Activity, Code2, Church, Briefcase, ChevronDown, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
  brief: string
  highlights: string[]
  color?: string
  accentColor?: string
}

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
  "book-open": <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  activity: <Activity className="h-5 w-5 sm:h-6 sm:w-6" />,
  code: <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />,
  church: <Church className="h-5 w-5 sm:h-6 sm:w-6" />,
  briefcase: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
}

export function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([])
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/services")
        const result = await response.json()
        
        if (result.success) {
          setServices(result.data)
        } else {
          setError("Failed to load services")
        }
      } catch (err) {
        setError("Failed to load services")
        console.error("Error fetching services:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <section id="services-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 animate-pulse"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-3/4 rounded-lg bg-white/10" />
                    <div className="h-4 w-full rounded-lg bg-white/5" />
                    <div className="h-4 w-2/3 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    )
  }

  if (error) {
    return (
      <section id="services-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
        <Container className="relative text-center">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-foreground/60">{error}</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="services-section" className="relative bg-background py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <Container className="relative space-y-8">
        {/* Section header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground/70">Explore Our Services</span>
          </div>
          <p className="text-foreground/50 text-sm sm:text-base max-w-2xl mx-auto">
            Click on any service card to learn more about how we can help your organization
          </p>
        </div>

        {/* Services Grid - More columns for better visibility */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((service, idx) => {
            const isExpanded = expandedCard === service.id
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isExpanded 
                    ? "ring-2 ring-primary/50 shadow-2xl shadow-primary/10 scale-[1.02]"
                    : "hover:ring-1 hover:ring-white/20 hover:shadow-xl hover:scale-[1.01]"
                }`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.08}s both`,
                }}
              >
                {/* Card glassmorphism background */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  isExpanded 
                    ? "bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl"
                    : "bg-white/5 backdrop-blur-sm group-hover:bg-white/8"
                }`} />
                
                {/* Gradient accent on expanded */}
                {isExpanded && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color || "from-primary/10 to-accent/10"} opacity-60`} />
                )}
                
                {/* Card border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color || "from-primary/20 to-accent/20"} blur-xl -z-10`} />

                {/* Card Header */}
                <button
                  type="button"
                  onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                  className="relative w-full p-4 sm:p-5 flex items-start gap-3 sm:gap-4 text-left cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`relative p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${
                    isExpanded 
                      ? "scale-110 bg-gradient-to-br " + (service.color || "from-primary/30 to-accent/30")
                      : "bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105"
                  }`}>
                    <div className={`${service.accentColor || "text-primary"} transition-colors duration-300`}>
                      {iconMap[service.icon]}
                    </div>
                    {isExpanded && (
                      <div className={`absolute inset-0 rounded-xl ${service.accentColor?.replace('text-', 'bg-') || "bg-primary"}/20 blur-lg -z-10`} />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-all duration-300 ${
                      isExpanded 
                        ? service.accentColor || "text-primary"
                        : "text-foreground group-hover:text-primary"
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/50 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                    isExpanded 
                      ? "rotate-180 text-primary"
                      : "text-foreground/30 group-hover:text-foreground/50"
                  }`} />
                </button>

                {/* Expanded Content */}
                <div className={`relative overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-4">
                    {/* Brief Description */}
                    <div className="p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {service.brief}
                      </p>
                    </div>

                    {/* Highlights */}
                    {service.highlights && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">
                          What We Offer
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.highlights.map((highlight, hidx) => (
                            <div 
                              key={hidx} 
                              className="flex items-center gap-2 text-sm text-foreground/60 group/item"
                              style={{ animation: isExpanded ? `fadeIn 0.3s ease-out ${hidx * 0.1}s both` : 'none' }}
                            >
                              <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${service.accentColor || "text-primary"}`} />
                              <span className="group-hover/item:text-foreground/80 transition-colors">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-medium transition-all duration-300 gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
                      >
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 font-medium transition-all duration-300 gap-2 backdrop-blur-sm hover:scale-[1.02]"
                      >
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
