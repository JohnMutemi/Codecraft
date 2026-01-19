import { NextResponse } from "next/server"
import { INDUSTRIES } from "@/lib/constants"

// Industry details with challenges, solutions, and outcomes
const industryDetails = {
  schools: {
    challenges: [
      "Digital infrastructure for modern learning",
      "Student and administrative data management",
      "Secure connectivity for learning environments",
    ],
    solutions: [
      "Integrated learning management systems (LMS)",
      "Student Information Systems (SIS)",
      "Secure school connectivity infrastructure",
      "Digital classroom enablement",
    ],
    outcomes: [
      "Enhanced teaching and learning quality",
      "Streamlined administrative processes",
      "Improved student engagement and outcomes",
      "Secure, compliant data management",
    ],
  },
  hospitals: {
    challenges: [
      "Secure patient data management (HIPAA/local compliance)",
      "Medical device integration and interoperability",
      "Real-time clinical decision support",
    ],
    solutions: [
      "Electronic Health Records (EHR) systems",
      "Medical device integration platforms",
      "Secure patient communication systems",
      "Clinical data analytics and reporting",
    ],
    outcomes: [
      "Improved patient care coordination",
      "Regulatory compliance and audit readiness",
      "Operational efficiency gains",
      "Enhanced clinical outcomes tracking",
    ],
  },
  smes: {
    challenges: [
      "Cost-effective IT infrastructure scaling",
      "Operational efficiency and automation",
      "Cybersecurity without enterprise budgets",
    ],
    solutions: [
      "Scalable cloud and hybrid infrastructure",
      "Business process automation",
      "Affordable enterprise security",
      "Custom business applications",
    ],
    outcomes: [
      "Competitive advantage through technology",
      "Reduced operational costs",
      "Improved business agility",
      "Better risk management",
    ],
  },
  ngos: {
    challenges: [
      "Limited ICT budgets and resources",
      "Complex beneficiary data management",
      "Impact measurement and reporting",
    ],
    solutions: [
      "Open-source and cost-effective technology",
      "Beneficiary management systems",
      "Impact tracking and analytics platforms",
      "Donor reporting systems",
    ],
    outcomes: [
      "Maximized social impact per dollar spent",
      "Better beneficiary services",
      "Transparent impact reporting",
      "Improved donor confidence",
    ],
  },
}

// GET /api/industries - Get all industries with full details
export async function GET() {
  try {
    // Merge INDUSTRIES with their detailed information
    const industriesWithDetails = INDUSTRIES.map((industry) => ({
      ...industry,
      details: industryDetails[industry.id as keyof typeof industryDetails] || null,
    }))

    return NextResponse.json({
      success: true,
      data: industriesWithDetails,
      count: industriesWithDetails.length,
    })
  } catch (error) {
    console.error("Industries API error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch industries" },
      { status: 500 }
    )
  }
}
