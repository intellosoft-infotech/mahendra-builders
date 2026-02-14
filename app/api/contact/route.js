import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    // Validate environment variables (supporting both old and new variable names)
    const smtpHost = process.env.SMTP_HOST || process.env.GODADDY_SMTP_HOST
    const smtpUser = process.env.SMTP_USER || process.env.GODADDY_SMTP_USER
    const smtpPass = process.env.SMTP_PASS || process.env.GODADDY_SMTP_PASS
    
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP environment variables')
      return Response.json({ 
        success: false, 
        message: 'Server configuration error. Please contact administrator.' 
      }, { status: 500 })
    }

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return Response.json({ 
        success: false, 
        message: 'Missing required fields. Please fill all fields.' 
      }, { status: 400 })
    }

    // Create transporter with Rediffmail SMTP settings
    const smtpPort = parseInt(process.env.SMTP_PORT || process.env.GODADDY_SMTP_PORT || '465')
    const useSecure = smtpPort === 465
    
    const transporter = nodemailer.createTransport({
      host: smtpHost || 'smtp.rediffmail.com',
      port: smtpPort,
      secure: useSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false
      },
      requireTLS: !useSecure,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000
    })

    // Email content
    const mailOptions = {
      from: smtpUser,
      to: 'mahendrabuilders@rediffmail.com', // or another recipient
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    
    // Provide more detailed error message in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to send email: ${error.message}` 
      : 'Failed to send email. Please try again later or contact us directly.'
    
    return Response.json({ 
      success: false, 
      message: errorMessage 
    }, { status: 500 })
  }
}