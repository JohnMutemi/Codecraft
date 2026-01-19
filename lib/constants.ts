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
    brief: "Protect your organization from evolving cyber threats with our enterprise-grade security solutions. We implement multi-layered defense strategies, 24/7 threat monitoring, and incident response protocols.",
    highlights: ["Threat Assessment & Penetration Testing", "24/7 Security Monitoring", "Compliance & Audit Support", "Employee Security Training"],
    color: "from-red-500/20 to-orange-500/20",
    accentColor: "text-red-500",
  },
  {
    id: "school-ict",
    title: "ICT for Schools",
    description: "Digital infrastructure for modern educational institutions",
    icon: "book-open",
    href: "/services/ict-schools",
    brief: "Transform your educational institution with modern digital infrastructure. From Learning Management Systems to secure student data management, we build the foundation for 21st-century learning.",
    highlights: ["Learning Management Systems (LMS)", "Student Information Systems", "Smart Classroom Setup", "Secure Campus Networks"],
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-500",
  },
  {
    id: "hospital-ict",
    title: "ICT for Hospitals",
    description: "Secure healthcare IT systems and data management",
    icon: "activity",
    href: "/services/ict-hospitals",
    brief: "Empower your healthcare facility with robust IT systems designed for patient safety and regulatory compliance. Our solutions integrate seamlessly with medical devices and existing workflows.",
    highlights: ["Electronic Health Records (EHR)", "Medical Device Integration", "HIPAA Compliance Systems", "Telemedicine Platforms"],
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-500",
  },
  {
    id: "software",
    title: "Web & Software Development",
    description: "Custom solutions tailored to your business needs",
    icon: "code",
    href: "/services/software-development",
    brief: "Get software that fits your exact needs. Our expert developers create scalable, secure, and user-friendly applications that streamline your operations and give you a competitive edge.",
    highlights: ["Custom Web Applications", "Mobile App Development", "API Development & Integration", "Legacy System Modernization"],
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-500",
  },
  {
    id: "churches",
    title: "ICT for Churches",
    description: "Digital solutions for faith-based organizations and ministries",
    icon: "church",
    href: "/services/churches",
    brief: "Help your ministry reach more people with modern technology. We provide solutions for live streaming, member management, online giving, and community engagement.",
    highlights: ["Live Streaming Setup", "Church Management Systems", "Online Giving Platforms", "Community Engagement Tools"],
    color: "from-amber-500/20 to-yellow-500/20",
    accentColor: "text-amber-500",
  },
  {
    id: "business",
    title: "Business Solutions",
    description: "Enterprise IT infrastructure and digital transformation",
    icon: "briefcase",
    href: "/services/business",
    brief: "Scale your business with enterprise-grade IT infrastructure. We help you automate processes, secure your data, and leverage technology for growth and efficiency.",
    highlights: ["Cloud Migration & Management", "Business Process Automation", "Enterprise Security", "IT Infrastructure Design"],
    color: "from-indigo-500/20 to-violet-500/20",
    accentColor: "text-indigo-500",
  },
]

export const INDUSTRIES = [
  {
    id: "schools",
    title: "Educational Institutions",
    challenges: ["Digital transformation", "Student data management", "Learning infrastructure"],
    icon: "book-open",
    brief: "We understand the unique challenges schools face in the digital age. From primary schools to universities, we help create engaging, secure, and efficient learning environments.",
    solutions: ["Integrated Learning Platforms", "Secure Student Portals", "Digital Library Systems", "Online Examination Tools"],
    impact: "500+ institutions transformed",
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-500",
  },
  {
    id: "hospitals",
    title: "Healthcare Organizations",
    challenges: ["Patient record systems", "Healthcare data security", "Compliance requirements"],
    icon: "activity",
    brief: "Healthcare demands precision and security. We provide IT solutions that enhance patient care while maintaining strict compliance with healthcare regulations and data protection standards.",
    solutions: ["Patient Management Systems", "Secure Data Backup", "Regulatory Compliance", "Telehealth Infrastructure"],
    impact: "99.9% uptime guaranteed",
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-500",
  },
  {
    id: "smes",
    title: "Small & Medium Enterprises",
    challenges: ["IT infrastructure growth", "Operational efficiency", "Cost optimization"],
    icon: "briefcase",
    brief: "Growth shouldn't be limited by technology. We help SMEs punch above their weight with enterprise-grade solutions at budgets that make sense for growing businesses.",
    solutions: ["Scalable Cloud Solutions", "Business Automation", "Affordable Security", "Growth-Ready Infrastructure"],
    impact: "40% average cost reduction",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-500",
  },
  {
    id: "ngos",
    title: "NGOs & Non-Profits",
    challenges: ["Limited budget", "Resource management", "Impact tracking"],
    icon: "heart",
    brief: "Maximize your social impact with technology that doesn't drain your resources. We specialize in cost-effective solutions that help NGOs focus on what matters most - their mission.",
    solutions: ["Open-Source Platforms", "Donor Management", "Impact Analytics", "Volunteer Coordination"],
    impact: "Trusted by 100+ NGOs",
    color: "from-rose-500/20 to-red-500/20",
    accentColor: "text-rose-500",
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
