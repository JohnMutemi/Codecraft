"use client"

import React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export function Modal({ isOpen, onClose, title, children, size = "lg" }: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className={cn(
          "bg-background rounded-lg shadow-2xl border border-border max-h-[90vh] overflow-y-auto animation-fade-in",
          size === "sm" && "w-full max-w-md",
          size === "md" && "w-full max-w-2xl",
          size === "lg" && "w-full max-w-4xl",
        )}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
