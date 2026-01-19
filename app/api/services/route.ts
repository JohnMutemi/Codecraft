import { NextResponse } from "next/server"
import { SERVICES } from "@/lib/constants"

// GET /api/services - Get all services
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: SERVICES,
      count: SERVICES.length,
    })
  } catch (error) {
    console.error("Services API error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch services" },
      { status: 500 }
    )
  }
}
