import nodemailer from 'nodemailer'
import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request) {
  try {
    const form = formidable({ multiples: false })

    const [fields, files] = await form.parse(request)

    const { name, email, phone, position, experience, message } = fields
    const resume = files.resume ? files.resume[0] : null

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

    // Email content
    const mailOptions = {
      from: process.env.GODADDY_SMTP_USER,
      to: 'mahendrabuilders@rediffmail.com',
      subject: `Job Application: ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : ''}</p>
      `,
      attachments: resume ? [
        {
          filename: resume.originalFilename,
          content: fs.readFileSync(resume.filepath),
        },
      ] : [],
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Clean up temp file
    if (resume) {
      fs.unlinkSync(resume.filepath)
    }

    return Response.json({ success: true, message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return Response.json({ success: false, message: 'Failed to submit application' }, { status: 500 })
  }
}