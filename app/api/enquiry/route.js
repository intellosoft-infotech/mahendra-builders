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
    const { name, email, phone, message, projectName, source } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return Response.json({ 
        success: false, 
        message: 'Missing required fields: name, email, and phone are required.' 
      }, { status: 400 })
    }

    // Create transporter with Rediffmail SMTP settings
    // Rediffmail uses port 465 (SSL)
    const smtpPort = parseInt(process.env.GODADDY_SMTP_PORT || '465')
    const useSecure = smtpPort === 465
    
    // Rediffmail SMTP configuration
    // Note: For free Rediffmail accounts, username might need to be without @rediffmail.com
    // For paid/Pro accounts, use full email address
    const transporter = nodemailer.createTransport({
      host: smtpHost || 'smtp.rediffmail.com',
      port: smtpPort,
      secure: useSecure,
      auth: {
        user: smtpUser,
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
      from: smtpUser,
      to: 'mahendrabuilders@rediffmail.com',
      subject: `New Enquiry: ${projectName || 'Website Enquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0369a1 0%, #075985 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New ${source || 'Project'} Enquiry</h2>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${projectName ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Project/Venture:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0369a1; font-weight: bold;">${projectName}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #0369a1;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #0369a1;">${phone}</a>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #475569; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #1e293b;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
              ` : ''}
            </table>
            <div style="margin-top: 20px; padding: 12px; background: #dbeafe; border-radius: 6px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                📅 Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Enquiry sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    
    // Provide more detailed error message in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to send enquiry: ${error.message}` 
      : 'Failed to send enquiry. Please try again later or contact us directly.'
    
    return Response.json({ 
      success: false, 
      message: errorMessage 
    }, { status: 500 })
  }
}
