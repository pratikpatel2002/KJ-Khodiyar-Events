import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, message } = body

    // Validate required fields
    if (!name || !email || !phone || !eventType || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Format event type for display
    const eventTypeMap: Record<string, string> = {
      wedding: 'Wedding / Marriage',
      birthday: 'Birthday',
      'baby-shower': 'Baby Shower',
      corporate: 'Corporate Event',
      festival: 'Festival Decoration',
      'haldi-mehendi': 'Haldi / Mehendi',
      surprise: 'Surprise Event',
      other: 'Other',
    }

    const formattedEventType = eventTypeMap[eventType] || eventType

    // Format date for display
    let formattedDate = 'Not specified'
    if (eventDate) {
      const date = new Date(eventDate)
      formattedDate = date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    }

    // Social media links (use environment variables or defaults)
    const socialLinks = {
      facebook: process.env.FACEBOOK_URL || 'https://www.facebook.com/kjkhodiyarevents',
      instagram: process.env.INSTAGRAM_URL || 'https://www.instagram.com/kjkhodiyarevents',
      twitter: process.env.TWITTER_URL || 'https://www.twitter.com/kjkhodiyarevents',
      whatsapp: process.env.WHATSAPP_URL || 'https://wa.me/91XXXXXXXXXX',
    }

    // Logo URL (use environment variable or inline SVG)
    const logoUrl = process.env.LOGO_URL || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdvbGRHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ3MDAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0NDQUQwMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEyIiB5PSIxMiIgd2lkdGg9IjEwNCIgaGVpZ2h0PSIxMDQiIHJ4PSIxOCIgcnk9IjE4IiBmaWxsPSJ1cmwoI2dvbGRHcmFkaWVudCkiIHRyYW5zZm9ybT0icm90YXRlKC02IDY0IDY0KSIvPgogIDxjaXJjbGUgY3g9IjEwMiIgY3k9IjE4IiByPSIxMiIgZmlsbD0iIzgwMDAyMCIgLz4KICA8dGV4dCB4PSI1MCUiIHk9IjU1JSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjU2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjRkZGRkZGIj5LSjwvdGV4dD4KPC9zdmc+'

    // Email content for customer confirmation
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
              padding: 30px 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
              border-bottom: 2px solid #DEE2E6;
            }
            .logo-container {
              margin-bottom: 20px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }
            .logo-wrapper {
              flex-shrink: 0;
            }
            .logo {
              max-width: 120px;
              height: auto;
              display: block;
            }
            .company-text {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
            .company-name {
              color: #1E40AF;
              font-size: 28px;
              font-weight: bold;
              margin: 0;
              font-family: 'Georgia', 'Times New Roman', serif;
              line-height: 1.2;
            }
            .company-tagline {
              color: #FFD700;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 3px;
              margin: 0;
              text-transform: uppercase;
              font-family: Arial, sans-serif;
            }
            .header h1 {
              color: #212529;
              margin: 0;
              font-size: 28px;
              font-weight: bold;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-box {
              background: white;
              padding: 20px;
              margin: 15px 0;
              border-radius: 8px;
              border-left: 4px solid #FFD700;
            }
            .info-label {
              font-weight: bold;
              color: #666;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .info-value {
              color: #333;
              font-size: 16px;
              margin-top: 5px;
            }
            .message-box {
              background: white;
              padding: 20px;
              margin: 15px 0;
              border-radius: 8px;
              border-left: 4px solid #800020;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 14px;
            }
            .social-icons {
              margin: 20px 0;
              display: flex;
              justify-content: center;
              gap: 12px;
            }
            .social-icon {
              display: inline-block;
              width: 40px;
              height: 40px;
              background: #FFD700;
              border-radius: 50%;
              text-align: center;
              line-height: 40px;
              text-decoration: none;
              color: #000;
              font-size: 18px;
              transition: background 0.3s;
            }
            .social-icon:hover {
              background: #CCAD00;
            }
            .social-icon svg {
              vertical-align: middle;
            }
            .button {
              display: inline-block;
              background: #FFD700;
              color: #000;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-container">
              <div class="logo-wrapper">
                <img src="${logoUrl}" alt="KJ Khodiyar Events Logo" class="logo" />
              </div>
              <div class="company-text">
                <p class="company-name">KJ Khodiyar</p>
                <p class="company-tagline">EVENTS</p>
              </div>
            </div>
            <h1>Thank You for Contacting Us!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to <strong>KJ Khodiyar Events</strong>! We have received your inquiry and are excited to help make your event extraordinary.</p>
            
            <div class="info-box">
              <div class="info-label">Your Event Details</div>
              <div class="info-value"><strong>Event Type:</strong> ${formattedEventType}</div>
              ${eventDate ? `<div class="info-value"><strong>Event Date:</strong> ${formattedDate}</div>` : ''}
            </div>

            <div class="message-box">
              <div class="info-label">Your Message</div>
              <div class="info-value">${message.replaceAll('\n', '<br>')}</div>
            </div>

            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your requirements within 24 hours</li>
              <li>We'll contact you at <strong>${phone}</strong> or <strong>${email}</strong> to discuss your event in detail</li>
              <li>We'll provide you with a customized proposal tailored to your needs</li>
            </ul>

            <p>If you have any urgent questions, feel free to reach out to us directly:</p>
            <div class="info-box">
              <div class="info-value"><strong>Phone:</strong> +91 XXX XXX XXXX</div>
              <div class="info-value"><strong>Email:</strong> info@kjkhodiyarevents.com</div>
              <div class="info-value"><strong>WhatsApp:</strong> <a href="https://wa.me/91XXXXXXXXXX">Chat with us</a></div>
            </div>

            <p>We look forward to creating an unforgettable experience for you!</p>
            <p>Best regards,<br><strong>The KJ Khodiyar Events Team</strong></p>
          </div>
          <div class="footer">
            <div class="social-icons">
              <a href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="social-icon" style="background: #1877F2; color: #fff;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="${socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="social-icon" style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); color: #fff;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="${socialLinks.twitter}" target="_blank" rel="noopener noreferrer" class="social-icon" style="background: #1DA1F2; color: #fff;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="${socialLinks.whatsapp}" target="_blank" rel="noopener noreferrer" class="social-icon" style="background: #25D366; color: #fff;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
            <p>© ${new Date().getFullYear()} KJ Khodiyar Events. All rights reserved.</p>
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </body>
      </html>
    `

    const customerEmailText = `
Thank You for Contacting KJ Khodiyar Events!

Dear ${name},

Thank you for reaching out to KJ Khodiyar Events! We have received your inquiry and are excited to help make your event extraordinary.

Your Event Details:
- Event Type: ${formattedEventType}
${eventDate ? `- Event Date: ${formattedDate}` : ''}

Your Message:
${message}

What happens next?
- Our team will review your requirements within 24 hours
- We'll contact you at ${phone} or ${email} to discuss your event in detail
- We'll provide you with a customized proposal tailored to your needs

If you have any urgent questions, feel free to reach out to us directly:
- Phone: +91 XXX XXX XXXX
- Email: info@kjkhodiyarevents.com
- WhatsApp: https://wa.me/91XXXXXXXXXX

We look forward to creating an unforgettable experience for you!

Best regards,
The KJ Khodiyar Events Team

© ${new Date().getFullYear()} KJ Khodiyar Events. All rights reserved.
This is an automated confirmation email. Please do not reply to this email.
    `

    // Send confirmation email to customer
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'KJ Khodiyar Events <onboarding@resend.dev>',
        to: email,
        subject: 'Thank You for Contacting KJ Khodiyar Events!',
        html: customerEmailHtml,
        text: customerEmailText,
      })
      console.log('Confirmation email sent to customer:', email)
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError)
      // Continue even if customer email fails - we'll still notify the business
    }

    // Send notification email to business (if BUSINESS_EMAIL is configured)
    if (process.env.BUSINESS_EMAIL) {
      const businessEmailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #800020 0%, #600015 100%);
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .header h1 {
                color: #fff;
                margin: 0;
                font-size: 28px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-box {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
                border-left: 4px solid #800020;
              }
              .info-label {
                font-weight: bold;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .info-value {
                color: #333;
                font-size: 16px;
                margin-top: 5px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p>You have received a new inquiry from your website contact form.</p>
              
              <div class="info-box">
                <div class="info-label">Contact Information</div>
                <div class="info-value"><strong>Name:</strong> ${name}</div>
                <div class="info-value"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></div>
                <div class="info-value"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></div>
              </div>

              <div class="info-box">
                <div class="info-label">Event Details</div>
                <div class="info-value"><strong>Event Type:</strong> ${formattedEventType}</div>
                ${eventDate ? `<div class="info-value"><strong>Event Date:</strong> ${formattedDate}</div>` : ''}
              </div>

              <div class="info-box">
                <div class="info-label">Message</div>
                <div class="info-value">${message.replaceAll('\n', '<br>')}</div>
              </div>

              <p><strong>Action Required:</strong> Please contact the customer within 24 hours.</p>
            </div>
          </body>
        </html>
      `

      const businessEmailText = `
New Contact Form Submission

You have received a new inquiry from your website contact form.

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Event Details:
- Event Type: ${formattedEventType}
${eventDate ? `- Event Date: ${formattedDate}` : ''}

Message:
${message}

Action Required: Please contact the customer within 24 hours.
      `

      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || 'KJ Khodiyar Events <onboarding@resend.dev>',
          to: process.env.BUSINESS_EMAIL,
          subject: `New Contact Form: ${formattedEventType} - ${name}`,
          html: businessEmailHtml,
          text: businessEmailText,
        })
        console.log('Notification email sent to business:', process.env.BUSINESS_EMAIL)
      } catch (businessEmailError) {
        console.error('Error sending business notification email:', businessEmailError)
        // Don't fail the request if business email fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We have received your message and sent a confirmation email.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}




