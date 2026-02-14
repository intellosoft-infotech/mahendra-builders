import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
  let smtpUser = null
  let authUser = null
  
  try {
    // Validate environment variables (using old variable names)
    const smtpHost = process.env.GODADDY_SMTP_HOST
    smtpUser = process.env.GODADDY_SMTP_USER
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
    const usernameWithoutDomain = smtpUser.includes('@rediffmail.com') 
      ? smtpUser.replace('@rediffmail.com', '') 
      : smtpUser
    
    authUser = usernameWithoutDomain
    console.log('Attempting SMTP auth with username:', authUser)
    
    // Rediffmail SMTP configuration
    let transporter = nodemailer.createTransport({
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

    // Send email - try with username without @rediffmail.com first
    try {
      await transporter.sendMail(mailOptions)
      return Response.json({ success: true, message: 'Email sent successfully' })
    } catch (authError) {
      // If authentication fails, try with @rediffmail.com if we haven't already
      if (authError.code === 'EAUTH' && authUser === usernameWithoutDomain && !smtpUser.includes('@')) {
        const fullEmail = `${smtpUser}@rediffmail.com`
        console.log('Auth failed with username without domain, retrying with full email:', fullEmail)
        transporter = nodemailer.createTransport({
          host: smtpHost || 'smtp.rediffmail.com',
          port: smtpPort,
          secure: useSecure,
          auth: {
            user: fullEmail, // Try with full email
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
        try {
          await transporter.sendMail(mailOptions)
          return Response.json({ success: true, message: 'Email sent successfully' })
        } catch (retryError) {
          console.error('Retry with full email also failed:', retryError.message)
          throw authError // Throw original error
        }
      }
      throw authError
    }
  } catch (error) {
    console.error('Email sending error:', error)
    if (authUser) console.error('Auth username used:', authUser)
    if (smtpUser) console.error('Original username:', smtpUser)
    
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