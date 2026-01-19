"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

interface ScrollArrowProps {
  targetId: string
  className?: string
}

export function ScrollArrow({ targetId, className = "" }: ScrollArrowProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6
      setIsVisible(window.scrollY < heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      // Scroll further down to show CTA section - add 100px extra offset
      const headerOffset = 80
      const extraOffset = 100 // Additional offset to reveal CTA below
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - extraOffset

      window.scrollTo({
        top: Math.max(offsetPosition, 0), // Ensure we don't scroll to negative
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTarget}
      className={`flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-all duration-300 hover:scale-110 animate-bounce cursor-pointer ${className || "absolute bottom-8 left-1/2 -translate-x-1/2 z-20"}`}
      aria-label="Scroll to next section"
    >
      <span className="text-sm font-medium">Scroll</span>
      <ChevronDown className="h-6 w-6" />
    </button>
  )
}
