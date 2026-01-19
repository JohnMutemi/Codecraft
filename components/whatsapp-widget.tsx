"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/254115900005"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      <div
        className={`bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isHovered ? "animate-pulse" : ""
        }`}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </div>

      {isHovered && (
        <div className="absolute bottom-0 right-16 bg-green-600 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg animate-in fade-in slide-in-from-right-2 duration-200">
          Chat with us
        </div>
      )}
    </a>
  )
}
