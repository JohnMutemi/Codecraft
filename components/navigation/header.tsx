"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ServicesModal } from "@/components/modals/services-modal"
import { IndustriesModal } from "@/components/modals/industries-modal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesModalOpen, setServicesModalOpen] = useState(false)
  const [industriesModalOpen, setIndustriesModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServicesClick = () => {
    setServicesModalOpen(!servicesModalOpen)
    // Close industries if open
    if (industriesModalOpen) {
      setIndustriesModalOpen(false)
    }
  }

  const handleIndustriesClick = () => {
    setIndustriesModalOpen(!industriesModalOpen)
    // Close services if open
    if (servicesModalOpen) {
      setServicesModalOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/50 bg-background/95 shadow-lg backdrop-blur-xl"
            : "border-b border-border/20 bg-background/95 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0 group">
            <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-gradient-to-r from-primary/5 via-primary/8 to-primary/5 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/50 group-hover:shadow-xl group-hover:scale-105">
              <span className="flex h-10 w-10 overflow-hidden items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ring-2 ring-primary/40 shadow-lg group-hover:ring-primary/60 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="CodeCraft logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  CodeCraft
                </span>
                <span className="hidden sm:block text-[0.7rem] sm:text-xs text-accent font-semibold group-hover:text-accent/90 transition-colors duration-300">
                  ICT Solutions
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.label === "Services") {
                return (
                  <div key={item.href} className="relative">
                    <button
                      onClick={handleServicesClick}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors duration-200 group ${
                        servicesModalOpen
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-200 ${
                          servicesModalOpen
                            ? "opacity-100 rotate-180"
                            : "opacity-60 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </div>
                )
              }

              if (item.label === "Industries") {
                return (
                  <div key={item.href} className="relative">
                    <button
                      onClick={handleIndustriesClick}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors duration-200 group ${
                        industriesModalOpen
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-all duration-200 ${
                          industriesModalOpen
                            ? "opacity-100 rotate-180"
                            : "opacity-60 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            })}
          </div>

          <Button
            asChild
            className="hidden lg:inline-flex bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-bold shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <Link href="/contact" className="relative z-10">
              Get Started
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-md lg:hidden animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1 px-4 py-4">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.label === "Services" ? (
                    <button
                      onClick={() => {
                        setServicesModalOpen(true)
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : item.label === "Industries" ? (
                    <button
                      onClick={() => {
                        setIndustriesModalOpen(true)
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-4 h-11">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <ServicesModal
        isOpen={servicesModalOpen}
        onClose={() => setServicesModalOpen(false)}
      />
      <IndustriesModal
        isOpen={industriesModalOpen}
        onClose={() => setIndustriesModalOpen(false)}
      />
    </>
  )
}
