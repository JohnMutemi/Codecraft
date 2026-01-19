export interface ServiceDetail {
  id: string
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
}

export const servicesData: Record<string, ServiceDetail> = {
  cybersecurity: {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    subtitle: "Enterprise-Grade Security Infrastructure",
    description:
      "Comprehensive cybersecurity solutions protecting your organization from evolving threats. We implement security-first architecture, threat detection systems, and compliance frameworks tailored to your needs.",
    problem:
      "Organizations face increasing cyber threats including data breaches, ransomware attacks, and compliance violations. Without robust security infrastructure, institutions risk operational disruption, financial loss, and reputational damage.",
    solution:
      "CodeCraft implements comprehensive security strategies including threat assessment, infrastructure hardening, employee training, and 24/7 monitoring. Our approach combines technical safeguards with institutional awareness programs.",
    benefits: [
      "Reduced risk of data breaches and cyber attacks",
      "Compliance with regulatory frameworks (GDPR, HIPAA, etc.)",
      "24/7 threat monitoring and incident response",
      "Proactive vulnerability management",
      "Business continuity planning",
    ],
    process: [
      {
        title: "Security Assessment",
        description: "Comprehensive audit of current infrastructure and vulnerabilities",
      },
      {
        title: "Strategy Development",
        description: "Create tailored security roadmap aligned with organizational goals",
      },
      {
        title: "Implementation",
        description: "Deploy security systems, firewalls, and monitoring tools",
      },
      {
        title: "Training & Support",
        description: "Employee training and ongoing 24/7 security monitoring",
      },
    ],
  },
  "ict-schools": {
    id: "ict-schools",
    title: "ICT for Schools",
    subtitle: "Modern Digital Infrastructure for Education",
    description:
      "Tailored ICT infrastructure enabling modern teaching and learning. From student information systems to classroom connectivity, we build secure, scalable solutions for educational institutions.",
    problem:
      "Schools struggle with fragmented systems, outdated infrastructure, and challenges managing student data securely. Poor connectivity disrupts learning, and inadequate digital tools limit educational quality.",
    solution:
      "CodeCraft designs integrated ICT ecosystems for schools including student management systems, learning management platforms, secure connectivity, and digital classroom tools—all built with security and accessibility in mind.",
    benefits: [
      "Seamless digital learning environment",
      "Secure student data management",
      "Improved administrative efficiency",
      "Enhanced teacher-student engagement",
      "Compliance with education data protection requirements",
    ],
    process: [
      {
        title: "Infrastructure Assessment",
        description: "Evaluate current systems and educational technology needs",
      },
      {
        title: "System Design",
        description: "Design integrated platform supporting curriculum and administration",
      },
      {
        title: "Implementation",
        description: "Deploy systems with staff training and change management",
      },
      {
        title: "Ongoing Support",
        description: "Continuous optimization and technical support",
      },
    ],
  },
  "ict-hospitals": {
    id: "ict-hospitals",
    title: "ICT for Hospitals",
    subtitle: "Secure Healthcare IT Systems",
    description:
      "Specialized healthcare ICT solutions including patient record systems, medical device integration, and health data security. Built to meet strict regulatory requirements and ensure patient safety.",
    problem:
      "Hospitals need robust systems for patient care coordination while managing sensitive health data securely. Legacy systems often lack integration, and regulatory compliance becomes increasingly complex.",
    solution:
      "CodeCraft implements comprehensive healthcare IT infrastructure including electronic health records (EHR), medical device integration, secure data management, and compliance with healthcare regulations (HIPAA, local standards).",
    benefits: [
      "Integrated patient care system",
      "Secure electronic health records",
      "Medical device connectivity",
      "HIPAA and regulatory compliance",
      "Reduced operational inefficiencies",
    ],
    process: [
      {
        title: "Healthcare Needs Analysis",
        description: "Understand clinical workflows and data requirements",
      },
      {
        title: "System Architecture",
        description: "Design secure, integrated healthcare IT infrastructure",
      },
      {
        title: "Implementation",
        description: "Deploy EHR and medical systems with clinical staff training",
      },
      {
        title: "Compliance & Support",
        description: "Ensure regulatory compliance and provide ongoing support",
      },
    ],
  },
  "software-development": {
    id: "software-development",
    title: "Web & Software Development",
    subtitle: "Custom Solutions for Your Unique Challenges",
    description:
      "Custom web and software solutions designed specifically for your organization. From internal tools to public-facing applications, we build secure, scalable, and user-friendly software.",
    problem:
      "Organizations often cannot find off-the-shelf solutions addressing their specific workflows and requirements. Generic software requires costly workarounds and doesn't optimize organizational processes.",
    solution:
      "CodeCraft develops custom web applications and software solutions tailored to your exact requirements. Our approach combines modern technologies, security best practices, and user-centric design.",
    benefits: [
      "Purpose-built for your workflow",
      "Scalable and maintainable architecture",
      "Security-first implementation",
      "User-friendly interfaces",
      "Competitive advantage through custom tools",
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "Deep understanding of your needs and desired outcomes",
      },
      {
        title: "Design & Planning",
        description: "Create architecture and user experience design",
      },
      {
        title: "Development",
        description: "Build secure, scalable solution using modern technologies",
      },
      {
        title: "Testing & Deployment",
        description: "Rigorous testing and seamless deployment with training",
      },
    ],
  },
}
