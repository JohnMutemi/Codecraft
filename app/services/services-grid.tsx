"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/sections/container"
import { Shield, BookOpen, Activity, Code2, Church, Briefcase, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react"
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
  shield: <Shield className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  code: <Code2 className="h-6 w-6" />,
  church: <Church className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-muted/30 p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-full rounded bg-muted" />
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
          <p className="text-foreground/60">{error}</p>
        </Container>
      </section>
    )
  }

  return (
    <section id="services-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
      {/* Visible Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <Container className="relative space-y-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const isExpanded = expandedCard === service.id
            return (
              <div
                key={service.id}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "border-primary/50 shadow-lg shadow-primary/10 bg-gradient-to-br " + (service.color || "from-primary/5 to-accent/5")
                    : "border-border/50 hover:border-primary/30 bg-gradient-to-br from-background to-muted/30 hover:shadow-md"
                }`}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${idx * 0.08}s both`,
                }}
              >
                {/* Card Header - Always Visible */}
                <button
                  type="button"
                  onClick={() => setExpandedCard(isExpanded ? null : service.id)}
                  className="w-full p-5 flex items-start gap-4 text-left cursor-pointer"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color || "from-primary/15 to-accent/15"} transition-all duration-300 ${isExpanded ? "scale-110" : "group-hover:scale-105"}`}>
                    <div className={service.accentColor || "text-primary"}>{iconMap[service.icon]}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base sm:text-lg font-semibold mb-1 transition-colors ${isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <ChevronDown className={`h-5 w-5 text-foreground/40 transition-transform duration-300 ${isExpanded ? "rotate-180 text-primary" : ""}`} />
                  </div>
                </button>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-5 space-y-4">
                    {/* Brief Description */}
                    <div className="p-4 rounded-lg bg-background/80 border border-border/30">
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {service.brief}
                      </p>
                    </div>

                    {/* Highlights */}
                    {service.highlights && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">What We Offer</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.highlights.map((highlight, hidx) => (
                            <div key={hidx} className="flex items-center gap-2 text-sm text-foreground/70">
                              <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${service.accentColor || "text-primary"}`} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-200 gap-2"
                      >
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-border hover:border-primary/50 hover:bg-primary/5 font-medium transition-all duration-200 gap-2"
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
