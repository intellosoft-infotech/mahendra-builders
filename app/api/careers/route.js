import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const position = formData.get('position')
    const experience = formData.get('experience')
    const message = formData.get('message')
    const resume = formData.get('resume')

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.GODADDY_SMTP_HOST,
      port: parseInt(process.env.GODADDY_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.GODADDY_SMTP_USER,
        pass: process.env.GODADDY_SMTP_PASS,
      },
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
      from: process.env.GODADDY_SMTP_USER,
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
    return Response.json({ success: false, message: 'Failed to submit application' }, { status: 500 })
  }
}