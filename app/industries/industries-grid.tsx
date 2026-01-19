"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/sections/container"
import { BookOpen, Activity, Briefcase, Heart, ChevronDown, Zap, TrendingUp, ArrowRight, Building2 } from "lucide-react"
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
  "book-open": <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  activity: <Activity className="h-5 w-5 sm:h-6 sm:w-6" />,
  briefcase: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
  heart: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[...Array(4)].map((_, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 animate-pulse"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/10" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-3/4 rounded-lg bg-white/10" />
                    <div className="flex gap-2">
                      <div className="h-6 w-20 rounded-full bg-white/5" />
                      <div className="h-6 w-24 rounded-full bg-white/5" />
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
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-foreground/60">{error}</p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div id="industries-section" className="relative bg-background py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
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
            <Building2 className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground/70">Industries We Serve</span>
          </div>
          <p className="text-foreground/50 text-sm sm:text-base max-w-2xl mx-auto">
            Click on any industry card to discover our tailored solutions
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {industries.map((industry, idx) => {
            const isExpanded = expandedCard === industry.id
            return (
              <div
                key={industry.id}
                id={industry.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isExpanded 
                    ? "ring-2 ring-accent/50 shadow-2xl shadow-accent/10 scale-[1.02]"
                    : "hover:ring-1 hover:ring-white/20 hover:shadow-xl hover:scale-[1.01]"
                }`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color || "from-accent/10 to-primary/10"} opacity-60`} />
                )}
                
                {/* Card border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${industry.color || "from-accent/20 to-primary/20"} blur-xl -z-10`} />

                {/* Card Header */}
                <button
                  type="button"
                  onClick={() => setExpandedCard(isExpanded ? null : industry.id)}
                  className="relative w-full p-4 sm:p-5 flex items-start gap-3 sm:gap-4 text-left cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`relative p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${
                    isExpanded 
                      ? "scale-110 bg-gradient-to-br " + (industry.color || "from-accent/30 to-primary/30")
                      : "bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105"
                  }`}>
                    <div className={`${industry.accentColor || "text-accent"} transition-colors duration-300`}>
                      {iconMap[industry.icon]}
                    </div>
                    {isExpanded && (
                      <div className={`absolute inset-0 rounded-xl ${industry.accentColor?.replace('text-', 'bg-') || "bg-accent"}/20 blur-lg -z-10`} />
                    )}
                  </div>

                  {/* Title & Tags */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className={`text-base sm:text-lg font-semibold transition-all duration-300 ${
                        isExpanded 
                          ? industry.accentColor || "text-accent"
                          : "text-foreground group-hover:text-accent"
                      }`}>
                        {industry.title}
                      </h3>
                      {industry.impact && (
                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium bg-white/10 backdrop-blur-sm border border-white/10 ${industry.accentColor || "text-accent"}`}>
                          {industry.impact}
                        </span>
                      )}
                    </div>
                    {/* Challenge tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {industry.challenges.slice(0, 3).map((challenge, cidx) => (
                        <span 
                          key={cidx} 
                          className="text-xs text-foreground/40 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                        >
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                    isExpanded 
                      ? "rotate-180 text-accent"
                      : "text-foreground/30 group-hover:text-foreground/50"
                  }`} />
                </button>

                {/* Expanded Content */}
                <div className={`relative overflow-hidden transition-all duration-500 ease-out ${
                  isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-4">
                    {/* Brief Description */}
                    <div className="p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {industry.brief}
                      </p>
                    </div>

                    {/* Solutions */}
                    {industry.solutions && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-wider flex items-center gap-2">
                          <Zap className="h-3 w-3" />
                          Our Solutions
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.solutions.map((solution, sidx) => (
                            <div 
                              key={sidx} 
                              className="flex items-center gap-2 text-sm text-foreground/60 group/item"
                              style={{ animation: isExpanded ? `fadeIn 0.3s ease-out ${sidx * 0.1}s both` : 'none' }}
                            >
                              <TrendingUp className={`h-4 w-4 flex-shrink-0 ${industry.accentColor || "text-accent"}`} />
                              <span className="group-hover/item:text-foreground/80 transition-colors">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Sections from API */}
                    {industry.details && (
                      <div className="grid gap-3 sm:grid-cols-3 pt-2">
                        {/* Challenges */}
                        <div className="space-y-2 p-3 rounded-xl bg-black/10 backdrop-blur-sm border border-white/5">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                            Key Challenges
                          </h4>
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
                        <div className="space-y-2 p-3 rounded-xl bg-black/10 backdrop-blur-sm border border-white/5">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                            Solutions
                          </h4>
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
                        <div className="space-y-2 p-3 rounded-xl bg-black/10 backdrop-blur-sm border border-white/5">
                          <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                            Outcomes
                          </h4>
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
                        className="flex-1 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white font-medium transition-all duration-300 gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02]"
                      >
                        <Link href="/contact">
                          Discuss Your Needs
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 font-medium transition-all duration-300 gap-2 backdrop-blur-sm hover:scale-[1.02]"
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
    </div>
  )
}
