import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Simple validation helper
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 500) // Basic length limit
}

// Create reusable transporter
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.organization || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitized = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      organization: sanitizeInput(body.organization),
      industry: sanitizeInput(body.industry || ""),
      message: sanitizeInput(body.message),
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    }

    // Send email via Gmail
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = createTransporter()

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER, // Fallback to GMAIL_USER if CONTACT_EMAIL not set
        replyTo: sanitized.email,
        subject: `New Contact Form Submission from ${sanitized.name} - ${sanitized.organization}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${sanitized.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${sanitized.email}">${sanitized.email}</a></p>
              <p><strong>Organization:</strong> ${sanitized.organization}</p>
              ${sanitized.industry ? `<p><strong>Industry:</strong> ${sanitized.industry}</p>` : ""}
              <p><strong>Submitted:</strong> ${new Date(sanitized.timestamp).toLocaleString()}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px; white-space: pre-wrap;">
                ${sanitized.message}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>IP Address: ${sanitized.ip}</p>
              <p>This email was sent from the CodeCraft contact form.</p>
            </div>
          </div>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${sanitized.name}
          Email: ${sanitized.email}
          Organization: ${sanitized.organization}
          ${sanitized.industry ? `Industry: ${sanitized.industry}` : ""}
          Submitted: ${new Date(sanitized.timestamp).toLocaleString()}
          
          Message:
          ${sanitized.message}
          
          IP Address: ${sanitized.ip}
        `,
      }

      await transporter.sendMail(mailOptions)
    } else {
      // Log if Gmail credentials are not configured
      console.warn("Gmail credentials not configured. Email not sent.")
      console.log("Contact form submission:", sanitized)
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will contact you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 },
    )
  }
}
