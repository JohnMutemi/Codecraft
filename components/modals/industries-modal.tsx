"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { INDUSTRIES } from "@/lib/constants"
import { ArrowRight, BookOpen, Activity, Briefcase, Heart, X, ChevronDown, Zap, TrendingUp, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useCallback } from "react"

const iconMap: Record<string, React.ReactNode> = {
  "book-open": <BookOpen className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
}

interface IndustriesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IndustriesModal({ isOpen, onClose }: IndustriesModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // All cards collapsed by default - user clicks to expand
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  // Handle backdrop click to close modal
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEscape)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  // Reset expanded card when modal closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedCard(null)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        ref={backdropRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
      />

      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 z-50 w-[95vw] sm:w-[90vw] max-w-5xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border/50 bg-background shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between border-b border-border/30 px-6 sm:px-8 py-5 bg-gradient-to-r from-accent/5 via-background to-primary/5">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-accent/10">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Industries We Serve</h2>
            </div>
            <p className="text-sm text-foreground/60 ml-12">
              <span className="hidden sm:inline">Click any industry to expand details</span>
              <span className="sm:hidden">Tap any industry to see more</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-muted rounded-xl transition-colors flex-shrink-0 group"
            aria-label="Close"
          >
            <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Content */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 p-4 sm:p-6 overflow-y-auto overscroll-contain"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INDUSTRIES.map((industry, idx) => {
                const isExpanded = expandedCard === industry.id
                return (
                  <div
                    key={industry.id}
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
                        {!isExpanded && (
                          <span className="text-[10px] text-accent/70 font-medium hidden sm:block">Click to expand</span>
                        )}
                        <ChevronDown className={`h-5 w-5 text-foreground/40 transition-transform duration-300 ${isExpanded ? "rotate-180 text-accent" : ""}`} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
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

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 pt-2">
                          <Button
                            asChild
                            className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium transition-all duration-200 gap-2"
                          >
                            <Link href="/contact" onClick={onClose}>
                              Discuss Your Needs
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-border hover:border-accent/50 hover:bg-accent/5 font-medium transition-all duration-200 gap-2"
                          >
                            <Link href={`/industries#${industry.id}`} onClick={onClose}>
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

            {/* Bottom CTA */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 text-center">
              <p className="text-sm text-foreground/70 mb-3">
                Your industry not listed? <span className="text-accent font-medium">We still want to help!</span>
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact" onClick={onClose} className="gap-2">
                  Tell Us About Your Industry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

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
    </>
  )
}
