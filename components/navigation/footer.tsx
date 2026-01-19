import Link from "next/link"
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="<> CodeCraft" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">&lt;&gt;</span>
                <span className="text-xs font-semibold opacity-80">CodeCraft</span>
              </div>
            </div>
            <p className="text-sm opacity-80">Modern ICT Consultancy & Cybersecurity Solutions</p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-sm uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-80 transition hover:opacity-100 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <a href="mailto:assignmentsprodesk@gmail.com" className="hover:text-primary">
                  assignmentsprodesk@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <a href="tel:+254758058974" className="hover:text-primary">
                  0758058974
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-secondary-foreground/60 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-secondary-foreground/60 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
