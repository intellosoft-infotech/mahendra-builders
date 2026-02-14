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

    const formData = await request.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const position = formData.get('position')
    const experience = formData.get('experience')
    const message = formData.get('message')
    const resume = formData.get('resume')

    // Validate required fields
    if (!name || !email || !phone || !position || !experience) {
      return Response.json({ 
        success: false, 
        message: 'Missing required fields. Please fill all required fields.' 
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

    // Handle resume file
    let attachments = []
    if (resume && resume instanceof File) {
      const arrayBuffer = await resume.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments = [{
        filename: resume.name,
        content: buffer,
      }]
    }

    // Email content
    const mailOptions = {
      from: smtpUser,
      to: 'mahendrabuilders@rediffmail.com',
      subject: `Job Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0369a1 0%, #075985 100%); padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Job Application</h2>
          </div>
          <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
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
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Position:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0369a1; font-weight: bold;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Experience:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${experience}</td>
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
      attachments: attachments,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    
    // Provide more detailed error message in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to submit application: ${error.message}` 
      : 'Failed to submit application. Please try again later or contact us directly.'
    
    return Response.json({ 
      success: false, 
      message: errorMessage 
    }, { status: 500 })
  }
}