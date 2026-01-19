"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { INDUSTRIES } from "@/lib/constants"
import { ArrowRight, BookOpen, Activity, Briefcase, Heart, X, ChevronDown, Zap, TrendingUp, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useCallback } from "react"

const iconMap: Record<string, React.ReactNode> = {
  "book-open": <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
  activity: <Activity className="h-5 w-5 sm:h-6 sm:w-6" />,
  briefcase: <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />,
  heart: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />,
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
      {/* Backdrop with blur */}
      <div
        ref={backdropRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="fixed inset-2 sm:inset-4 md:top-1/2 md:left-1/2 z-50 md:w-[95vw] md:max-w-4xl md:max-h-[92vh] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300"
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-2xl sm:rounded-3xl" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-accent/10 to-transparent rounded-t-2xl sm:rounded-t-3xl" />
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

        {/* Header */}
        <div className="relative flex-shrink-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-white/10">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-1">
              <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm border border-accent/20 shadow-lg shadow-accent/10">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-foreground/50 ml-8 sm:ml-12">
              <span className="hidden sm:inline">Click any industry to explore details</span>
              <span className="sm:hidden">Tap to expand</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 flex-shrink-0 group backdrop-blur-sm"
            aria-label="Close"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70 group-hover:text-foreground group-hover:rotate-90 transition-all duration-200" />
          </button>
        </div>

        {/* Content */}
        <div 
          ref={scrollContainerRef}
          className="relative flex-1 p-3 sm:p-4 lg:p-6 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        >
          <div className="max-w-3xl mx-auto">
            {/* Industries Grid - 2 cols on tablet, fills nicely */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {INDUSTRIES.map((industry, idx) => {
                const isExpanded = expandedCard === industry.id
                return (
                  <div
                    key={industry.id}
                    className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
                      isExpanded 
                        ? "ring-2 ring-accent/50 shadow-xl shadow-accent/10"
                        : "hover:ring-1 hover:ring-white/20 hover:shadow-lg"
                    }`}
                    style={{
                      animation: `slideUp 0.5s ease-out ${idx * 0.08}s both`,
                    }}
                  >
                    {/* Card glassmorphism background */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isExpanded 
                        ? "bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-lg"
                        : "bg-white/5 backdrop-blur-sm group-hover:bg-white/8"
                    }`} />
                    
                    {/* Gradient accent on expanded */}
                    {isExpanded && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color || "from-accent/10 to-primary/10"} opacity-50`} />
                    )}
                    
                    {/* Card border glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />

                    {/* Card Header - Always Visible */}
                    <button
                      type="button"
                      onClick={() => setExpandedCard(isExpanded ? null : industry.id)}
                      className="relative w-full p-3 sm:p-4 lg:p-5 flex items-start gap-3 sm:gap-4 text-left cursor-pointer"
                    >
                      {/* Icon with glow */}
                      <div className={`relative p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                        isExpanded 
                          ? "scale-110 bg-gradient-to-br " + (industry.color || "from-accent/30 to-primary/30")
                          : "bg-gradient-to-br from-white/10 to-white/5 group-hover:scale-105"
                      }`}>
                        <div className={`${industry.accentColor || "text-accent"} transition-colors duration-300`}>
                          {iconMap[industry.icon]}
                        </div>
                        {/* Icon glow */}
                        {isExpanded && (
                          <div className={`absolute inset-0 rounded-lg sm:rounded-xl ${industry.accentColor?.replace('text-', 'bg-') || "bg-accent"}/20 blur-lg -z-10`} />
                        )}
                      </div>

                      {/* Title & Tags */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 flex-wrap">
                          <h3 className={`text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 ${
                            isExpanded 
                              ? industry.accentColor || "text-accent"
                              : "text-foreground group-hover:text-accent"
                          }`}>
                            {industry.title}
                          </h3>
                          {industry.impact && (
                            <span className={`text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium bg-white/10 backdrop-blur-sm border border-white/10 ${industry.accentColor || "text-accent"}`}>
                              {industry.impact}
                            </span>
                          )}
                        </div>
                        {/* Challenge tags */}
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {industry.challenges.slice(0, 2).map((challenge, cidx) => (
                            <span 
                              key={cidx} 
                              className="text-[10px] sm:text-xs text-foreground/40 bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/5 truncate max-w-[120px] sm:max-w-none"
                            >
                              {challenge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 mt-0.5 sm:mt-1">
                        <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${
                          isExpanded 
                            ? "rotate-180 text-accent"
                            : "text-foreground/30 group-hover:text-foreground/50"
                        }`} />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div className={`relative overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5 space-y-3 sm:space-y-4">
                        {/* Brief Description */}
                        <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                            {industry.brief}
                          </p>
                        </div>

                        {/* Solutions */}
                        {industry.solutions && (
                          <div className="space-y-2">
                            <h4 className="text-[10px] sm:text-xs font-semibold text-foreground/40 uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                              <Zap className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              Our Solutions
                            </h4>
                            <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                              {industry.solutions.map((solution, sidx) => (
                                <div 
                                  key={sidx} 
                                  className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60 group/item"
                                  style={{ animation: `fadeIn 0.3s ease-out ${sidx * 0.1}s both` }}
                                >
                                  <TrendingUp className={`h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 ${industry.accentColor || "text-accent"}`} />
                                  <span className="group-hover/item:text-foreground/80 transition-colors">{solution}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 pt-1 sm:pt-2">
                          <Button
                            asChild
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white font-medium transition-all duration-300 gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-[1.02]"
                          >
                            <Link href="/contact" onClick={onClose}>
                              Discuss Your Needs
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 font-medium transition-all duration-300 gap-1.5 sm:gap-2 text-xs sm:text-sm h-8 sm:h-9 backdrop-blur-sm hover:scale-[1.02]"
                          >
                            <Link href={`/industries#${industry.id}`} onClick={onClose}>
                              See Case Studies
                              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
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
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl relative overflow-hidden">
              {/* CTA Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl sm:rounded-2xl" />
              
              <div className="relative text-center">
                <p className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4">
                  Your industry not listed?{" "}
                  <span className="text-accent font-medium">We still want to help!</span>
                </p>
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-105 text-xs sm:text-sm h-9 sm:h-10"
                >
                  <Link href="/contact" onClick={onClose} className="gap-1.5 sm:gap-2">
                    Tell Us About Your Industry
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}
