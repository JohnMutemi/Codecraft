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
        subject: `🔔 New Inquiry from ${sanitized.name} | ${sanitized.organization}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f4f8;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.04);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                          📬 New Contact Inquiry
                        </h1>
                        <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.85); font-size: 14px;">
                          Someone wants to connect with CodeCraft
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Quick Summary Badge -->
                    <tr>
                      <td style="padding: 24px 40px 0 40px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%); border-radius: 12px; padding: 16px 20px; border-left: 4px solid #0EA5E9;">
                              <p style="margin: 0; font-size: 13px; color: #0369A1; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                📅 Received: ${new Date(sanitized.timestamp).toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Contact Details -->
                    <tr>
                      <td style="padding: 24px 40px;">
                        <h2 style="margin: 0 0 20px 0; font-size: 16px; color: #374151; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                          👤 Contact Details
                        </h2>
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background: #F9FAFB; border-radius: 12px; overflow: hidden;">
                          <tr>
                            <td style="padding: 16px 20px; border-bottom: 1px solid #E5E7EB;">
                              <p style="margin: 0 0 4px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</p>
                              <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 600;">${sanitized.name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 16px 20px; border-bottom: 1px solid #E5E7EB;">
                              <p style="margin: 0 0 4px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</p>
                              <p style="margin: 0;">
                                <a href="mailto:${sanitized.email}" style="font-size: 16px; color: #4F46E5; text-decoration: none; font-weight: 500;">${sanitized.email}</a>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 16px 20px; border-bottom: 1px solid #E5E7EB;">
                              <p style="margin: 0 0 4px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Organization</p>
                              <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 500;">${sanitized.organization}</p>
                            </td>
                          </tr>
                          ${sanitized.industry ? `
                          <tr>
                            <td style="padding: 16px 20px;">
                              <p style="margin: 0 0 4px 0; font-size: 11px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Industry</p>
                              <p style="margin: 0;">
                                <span style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: #ffffff; font-size: 13px; padding: 6px 14px; border-radius: 20px; font-weight: 500;">${sanitized.industry}</span>
                              </p>
                            </td>
                          </tr>
                          ` : ""}
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Message -->
                    <tr>
                      <td style="padding: 0 40px 24px 40px;">
                        <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #374151; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                          💬 Message
                        </h2>
                        <div style="background: linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%); border-radius: 12px; padding: 20px 24px; border-left: 4px solid #EAB308;">
                          <p style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.7; white-space: pre-wrap;">${sanitized.message}</p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Action Button -->
                    <tr>
                      <td style="padding: 0 40px 32px 40px; text-align: center;">
                        <a href="mailto:${sanitized.email}?subject=Re: Your inquiry to CodeCraft" style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);">
                          ✉️ Reply to ${sanitized.name.split(' ')[0]}
                        </a>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background: #F9FAFB; padding: 24px 40px; border-top: 1px solid #E5E7EB;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="text-align: center;">
                              <p style="margin: 0 0 8px 0; font-size: 12px; color: #9CA3AF;">
                                🌐 IP Address: ${sanitized.ip}
                              </p>
                              <p style="margin: 0; font-size: 12px; color: #6B7280;">
                                This email was automatically sent from the <strong style="color: #4F46E5;">CodeCraft</strong> contact form.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
        text: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📬 NEW CONTACT INQUIRY - CODECRAFT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Received: ${new Date(sanitized.timestamp).toLocaleString()}

👤 CONTACT DETAILS
─────────────────────────────────────────
• Name: ${sanitized.name}
• Email: ${sanitized.email}
• Organization: ${sanitized.organization}
${sanitized.industry ? `• Industry: ${sanitized.industry}` : ""}

💬 MESSAGE
─────────────────────────────────────────
${sanitized.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 IP Address: ${sanitized.ip}
Sent from CodeCraft Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
