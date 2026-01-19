"use client"

import type React from "react"

import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { ArrowRight, Code2, Shield, BookOpen, Activity, Church, Briefcase, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="h-6 w-6" />,
  "book-open": <BookOpen className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  code: <Code2 className="h-6 w-6" />,
  church: <Church className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
}

interface ServicesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handleBackdropClick = (e: MouseEvent) => {
      // Only close if clicking directly on the backdrop element
      if (backdropRef.current && e.target === backdropRef.current) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    backdropRef.current?.addEventListener("click", handleBackdropClick)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      backdropRef.current?.removeEventListener("click", handleBackdropClick)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        ref={backdropRef}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 animate-fade-in"
      />

      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
        className="fixed top-1/2 left-1/2 z-50 w-[95vw] sm:w-[90vw] max-w-5xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border/50 bg-background/95 shadow-2xl backdrop-blur-xl animate-in fade-in scale-95 duration-200 flex flex-col overflow-hidden"
      >
        <div className="flex-shrink-0 flex items-center justify-between border-b border-border/30 px-6 sm:px-8 py-4 sm:py-5 bg-background/98">
          <div className="flex-1 pr-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-foreground">Our Services</h2>
            <p className="text-xs sm:text-sm text-foreground/60 mt-1">Enterprise solutions tailored to your needs</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted/50 rounded-lg transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div 
          className="flex-1 p-6 sm:p-8 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {SERVICES.map((service, idx) => (
                <div
                  key={service.id}
                  className="group p-4 rounded-lg border border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="inline-flex p-2 rounded-md bg-gradient-to-br from-primary/15 to-accent/15 group-hover:from-primary/25 group-hover:to-accent/25 transition-colors mb-3">
                    <div className="text-primary group-hover:text-accent transition-colors">{iconMap[service.icon]}</div>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-foreground/60 mb-4 leading-relaxed flex-1 line-clamp-3">
                    {service.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 hover:border-primary font-medium transition-all duration-200 gap-2 group/btn text-xs mt-auto py-2 h-auto"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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
