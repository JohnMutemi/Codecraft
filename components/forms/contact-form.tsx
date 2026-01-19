"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    industry: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", organization: "", industry: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">Full Name</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          disabled={isSubmitting}
          className="w-full transition-all duration-200"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">Email Address</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          disabled={isSubmitting}
          className="w-full transition-all duration-200"
        />
      </div>

      {/* Organization */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">Organization Name</label>
        <Input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
          placeholder="Your organization"
          disabled={isSubmitting}
          className="w-full transition-all duration-200"
        />
      </div>

      {/* Industry */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">Industry</label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground disabled:opacity-50 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:border-primary"
        >
          <option value="">Select your industry</option>
          <option value="education">Educational Institution</option>
          <option value="healthcare">Healthcare Organization</option>
          <option value="business">Small/Medium Business</option>
          <option value="nonprofit">NGO / Non-Profit</option>
          <option value="government">Government Agency</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-foreground">Message</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your ICT challenges and goals..."
          disabled={isSubmitting}
          rows={5}
          className="w-full transition-all duration-200"
        />
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/10 border border-accent/30 text-accent animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">Thank you! We'll be in touch within 24 hours.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm font-medium">Failed to submit. Please try again or email us directly.</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all duration-200 hover:shadow-lg"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  )
}
