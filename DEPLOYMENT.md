# Deployment Guide - Mahendra Builders

## Environment Variables Setup

For the email functionality to work on your server, you **MUST** set the following environment variables:

### Required Environment Variables

Create a `.env.local` file in your project root (or set them in your hosting platform's environment variables section):

```env
GODADDY_SMTP_HOST=smtpout.secureserver.net
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=your-email@yourdomain.com
GODADDY_SMTP_PASS=your-email-password
```

### How to Set Environment Variables

#### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `GODADDY_SMTP_HOST`
   - `GODADDY_SMTP_PORT`
   - `GODADDY_SMTP_USER`
   - `GODADDY_SMTP_PASS`
4. Redeploy your application

#### For Other Hosting Platforms:
- **Netlify**: Site settings → Environment variables
- **Railway**: Project → Variables
- **DigitalOcean App Platform**: Settings → App-Level Environment Variables
- **AWS/EC2**: Set in your `.env` file or use AWS Systems Manager

### Common Issues & Solutions

#### Issue: "Failed to send enquiry" error
**Solution**: 
- Check that all environment variables are set correctly
- Verify your SMTP credentials are correct
- Check server logs for detailed error messages

#### Issue: Works locally but not on server
**Solution**:
- Environment variables are NOT automatically deployed
- You must manually set them in your hosting platform
- Make sure variable names match exactly (case-sensitive)

#### Issue: SMTP connection timeout
**Solution**:
- Verify `GODADDY_SMTP_HOST` is correct: `smtpout.secureserver.net`
- Check if your hosting provider blocks SMTP ports
- Try port 587 with `secure: false` if 465 doesn't work

### Testing Email Configuration

After setting environment variables, test by:
1. Submitting the contact form
2. Checking server logs for any errors
3. Verifying email is received at `mahendrabuilders@rediffmail.com`

### Security Notes

- **Never commit `.env.local` to Git**
- Use your hosting platform's secure environment variable storage
- Keep SMTP passwords secure and rotate them regularly

### Support

If emails still don't work after setting environment variables:
1. Check server logs for detailed error messages
2. Verify SMTP credentials with your email provider
3. Test SMTP connection using a simple Node.js script
