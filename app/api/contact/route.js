import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.GODADDY_SMTP_HOST,
      port: parseInt(process.env.GODADDY_SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GODADDY_SMTP_USER,
        pass: process.env.GODADDY_SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GODADDY_SMTP_USER,
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
    return Response.json({ success: false, message: 'Failed to send email' }, { status: 500 })
  }
}