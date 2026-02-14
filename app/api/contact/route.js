import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    // Validate environment variables (using old variable names)
    const smtpHost = process.env.GODADDY_SMTP_HOST
    const smtpUser = process.env.GODADDY_SMTP_USER
    const smtpPass = process.env.GODADDY_SMTP_PASS
    
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP environment variables')
      console.error('SMTP Config Check:', {
        host: smtpHost || 'MISSING',
        user: smtpUser || 'MISSING',
        pass: smtpPass ? 'SET' : 'MISSING',
        port: process.env.GODADDY_SMTP_PORT || '465'
      })
      return Response.json({ 
        success: false, 
        message: 'Server configuration error. Please contact administrator.' 
      }, { status: 500 })
    }
    
    // Debug logging (password is masked)
    console.log('SMTP Configuration:', {
      host: smtpHost,
      port: parseInt(process.env.GODADDY_SMTP_PORT || '465'),
      user: smtpUser,
      userLength: smtpUser.length,
      passSet: smtpPass ? 'YES' : 'NO',
      passLength: smtpPass ? smtpPass.length : 0,
      environment: process.env.NODE_ENV
    })

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
    const smtpPort = parseInt(process.env.GODADDY_SMTP_PORT || '465')
    const useSecure = smtpPort === 465
    
    // For free Rediffmail accounts, username should be without @rediffmail.com
    let authUser = smtpUser
    if (smtpUser.includes('@rediffmail.com')) {
      authUser = smtpUser.replace('@rediffmail.com', '')
      console.log('Trying username without @rediffmail.com:', authUser)
    }
    
    // Rediffmail SMTP configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost || 'smtp.rediffmail.com',
      port: smtpPort,
      secure: useSecure,
      auth: {
        user: authUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1'
      },
      requireTLS: !useSecure,
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 15000
    })

    // Email content
    const mailOptions = {
      from: smtpUser.includes('@') ? smtpUser : `${smtpUser}@rediffmail.com`,
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