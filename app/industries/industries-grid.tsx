"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/sections/container"
import { BookOpen, Activity, Briefcase, Heart, ChevronDown, Zap, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IndustryDetails {
  challenges: string[]
  solutions: string[]
  outcomes: string[]
}

interface Industry {
  id: string
  title: string
  challenges: string[]
  icon: string
  brief: string
  solutions: string[]
  impact?: string
  color?: string
  accentColor?: string
  details?: IndustryDetails
}

const iconMap: Record<string, React.ReactNode> = {
  "book-open": <BookOpen className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
}

export function IndustriesGrid() {
  const [industries, setIndustries] = useState<Industry[]>([])
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const response = await fetch("/api/industries")
        const result = await response.json()
        
        if (result.success) {
          setIndustries(result.data)
        } else {
          setError("Failed to load industries")
        }
      } catch (err) {
        setError("Failed to load industries")
        console.error("Error fetching industries:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchIndustries()
  }, [])

  if (loading) {
    return (
      <div id="industries-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="rounded-xl border border-border/50 bg-muted/30 p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-full rounded bg-muted" />
                    <div className="flex gap-2">
                      <div className="h-6 w-20 rounded-full bg-muted" />
                      <div className="h-6 w-24 rounded-full bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  }

  if (error) {
    return (
      <div id="industries-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
        <Container className="relative text-center">
          <p className="text-foreground/60">{error}</p>
        </Container>
      </div>
    )
  }

  return (
    <div id="industries-section" className="relative bg-background py-12 sm:py-16 lg:py-20">
      {/* Visible Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <Container className="relative space-y-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((industry, idx) => {
            const isExpanded = expandedCard === industry.id
            return (
              <div
                key={industry.id}
                id={industry.id}
                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? "border-accent/50 shadow-lg shadow-accent/10 bg-gradient-to-br " + (industry.color || "from-accent/5 to-primary/5")
                    : "border-border/50 hover:border-accent/30 bg-gradient-to-br from-background to-muted/30 hover:shadow-md"
                }`}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Card Header - Always Visible */}
                <button
                  type="button"
                  onClick={() => setExpandedCard(isExpanded ? null : industry.id)}
                  className="w-full p-5 flex items-start gap-4 text-left cursor-pointer"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${industry.color || "from-accent/15 to-primary/15"} transition-all duration-300 ${isExpanded ? "scale-110" : "group-hover:scale-105"}`}>
                    <div className={industry.accentColor || "text-accent"}>{iconMap[industry.icon]}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`text-base sm:text-lg font-semibold transition-colors ${isExpanded ? "text-accent" : "text-foreground group-hover:text-accent"}`}>
                        {industry.title}
                      </h3>
                      {industry.impact && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${industry.accentColor?.replace('text-', 'bg-')}/10 ${industry.accentColor || "text-accent"}`}>
                          {industry.impact}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.challenges.slice(0, 3).map((challenge, cidx) => (
                        <span key={cidx} className="text-xs text-foreground/50 bg-muted/50 px-2 py-0.5 rounded-full">
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                    <ChevronDown className={`h-5 w-5 text-foreground/40 transition-transform duration-300 ${isExpanded ? "rotate-180 text-accent" : ""}`} />
                  </div>
                </button>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-5 space-y-4">
                    {/* Brief Description */}
                    <div className="p-4 rounded-lg bg-background/80 border border-border/30">
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {industry.brief}
                      </p>
                    </div>

                    {/* Solutions */}
                    {industry.solutions && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider flex items-center gap-2">
                          <Zap className="h-3 w-3" />
                          Our Solutions
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.solutions.map((solution, sidx) => (
                            <div key={sidx} className="flex items-center gap-2 text-sm text-foreground/70">
                              <TrendingUp className={`h-4 w-4 flex-shrink-0 ${industry.accentColor || "text-accent"}`} />
                              <span>{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Sections from API */}
                    {industry.details && (
                      <div className="grid gap-4 sm:grid-cols-3 pt-2">
                        {/* Challenges */}
                        <div className="space-y-2 p-3 rounded-lg bg-background/60 border border-border/20">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Key Challenges</h4>
                          <ul className="space-y-1.5">
                            {industry.details.challenges.map((challenge, cidx) => (
                              <li key={cidx} className="flex gap-2 text-xs text-foreground/60">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div className="space-y-2 p-3 rounded-lg bg-background/60 border border-border/20">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Solutions</h4>
                          <ul className="space-y-1.5">
                            {industry.details.solutions.map((solution, sidx) => (
                              <li key={sidx} className="flex gap-2 text-xs text-foreground/60">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-2 p-3 rounded-lg bg-background/60 border border-border/20">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Outcomes</h4>
                          <ul className="space-y-1.5">
                            {industry.details.outcomes.map((outcome, oidx) => (
                              <li key={oidx} className="flex gap-2 text-xs text-foreground/60">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium transition-all duration-200 gap-2"
                      >
                        <Link href="/contact">
                          Discuss Your Needs
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-border hover:border-accent/50 hover:bg-accent/5 font-medium transition-all duration-200 gap-2"
                      >
                        <Link href={`/industries#${industry.id}`}>
                          See Case Studies
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
    </div>
  )
}
