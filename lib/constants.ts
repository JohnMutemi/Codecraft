export const SITE_NAME = "CodeCraft"
export const SITE_DESCRIPTION = "ICT Consultancy & Cybersecurity Solutions"

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Cybersecurity Solutions",
        href: "/services/cybersecurity",
        description: "Comprehensive security infrastructure",
      },
      { label: "ICT for Schools", href: "/services/ict-schools", description: "Digital infrastructure for education" },
      { label: "ICT for Hospitals", href: "/services/ict-hospitals", description: "Secure healthcare IT systems" },
      { label: "Web & Software Development", href: "/services/software-development", description: "Custom solutions" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    submenu: [
      { label: "Educational Institutions", href: "/industries#schools", description: "Schools & Universities" },
      { label: "Healthcare Organizations", href: "/industries#hospitals", description: "Hospitals & Clinics" },
      { label: "Small & Medium Enterprises", href: "/industries#smes", description: "Growing businesses" },
      { label: "NGOs & Non-Profits", href: "/industries#ngos", description: "Non-profit organizations" },
    ],
  },
  { label: "Why CodeCraft", href: "/why-codecraft" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
]

export const SERVICES = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Comprehensive security infrastructure and threat protection",
    icon: "shield",
    href: "/services/cybersecurity",
  },
  {
    id: "school-ict",
    title: "ICT for Schools",
    description: "Digital infrastructure for modern educational institutions",
    icon: "book-open",
    href: "/services/ict-schools",
  },
  {
    id: "hospital-ict",
    title: "ICT for Hospitals",
    description: "Secure healthcare IT systems and data management",
    icon: "activity",
    href: "/services/ict-hospitals",
  },
  {
    id: "software",
    title: "Web & Software Development",
    description: "Custom solutions tailored to your business needs",
    icon: "code",
    href: "/services/software-development",
  },
  {
    id: "churches",
    title: "ICT for Churches",
    description: "Digital solutions for faith-based organizations and ministries",
    icon: "church",
    href: "/services/churches",
  },
  {
    id: "business",
    title: "Business Solutions",
    description: "Enterprise IT infrastructure and digital transformation",
    icon: "briefcase",
    href: "/services/business",
  },
]

export const INDUSTRIES = [
  {
    id: "schools",
    title: "Educational Institutions",
    challenges: ["Digital transformation", "Student data management", "Learning infrastructure"],
    icon: "book-open",
  },
  {
    id: "hospitals",
    title: "Healthcare Organizations",
    challenges: ["Patient record systems", "Healthcare data security", "Compliance requirements"],
    icon: "activity",
  },
  {
    id: "smes",
    title: "Small & Medium Enterprises",
    challenges: ["IT infrastructure growth", "Operational efficiency", "Cost optimization"],
    icon: "briefcase",
  },
  {
    id: "ngos",
    title: "NGOs & Non-Profits",
    challenges: ["Limited budget", "Resource management", "Impact tracking"],
    icon: "heart",
  },
]

export const WHY_CODECRAFT = [
  {
    title: "Security-First Mindset",
    description: "Every solution prioritizes data protection and cybersecurity from day one.",
  },
  {
    title: "Customized Solutions",
    description: "We tailor every implementation to your specific needs, not one-size-fits-all approaches.",
  },
  {
    title: "Ongoing Support",
    description: "Continuous partnership with 24/7 monitoring and proactive maintenance.",
  },
  {
    title: "Ethical ICT Practices",
    description: "Sustainable, transparent, and responsible technology implementation.",
  },
]

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]
