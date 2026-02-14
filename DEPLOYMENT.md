# Deployment Guide - Mahendra Builders

## Environment Variables Setup

For the email functionality to work on your server, you **MUST** set the following environment variables:

### Required Environment Variables

Create a `.env.local` file in your project root (or set them in your hosting platform's environment variables section):

**For Rediffmail Email (Current Setup):**
```env
SMTP_HOST=smtp.rediffmail.com
SMTP_PORT=465
SMTP_USER=mahendrabuilders@rediffmail.com
SMTP_PASS=your-rediffmail-password
```

**Alternative (Old variable names still work):**
```env
GODADDY_SMTP_HOST=smtp.rediffmail.com
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=mahendrabuilders@rediffmail.com
GODADDY_SMTP_PASS=your-rediffmail-password
```

**Important Notes:**
- Use **port 465** (SSL) - this is the default and works on localhost
- Rediffmail SMTP host: `smtp.rediffmail.com` or `smtp.rediffmailpro.com`
- `SMTP_USER` must be your **full Rediffmail email address**
- Use your Rediffmail account password
- If port 465 doesn't work, try port 587 (STARTTLS)

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

#### Issue: "535 5.7.0 Authorization failed" (GoDaddy Authentication Error)
**This is the most common issue!** Solutions:

1. **Use App-Specific Password (Recommended)**:
   - Go to GoDaddy Email Settings
   - Enable "App Passwords" or "Two-Factor Authentication"
   - Generate an app-specific password
   - Use this password in `GODADDY_SMTP_PASS` instead of your regular password

2. **Try Port 587 instead of 465**:
   - Set `GODADDY_SMTP_PORT=587` in Vercel
   - Port 587 uses STARTTLS which works better with GoDaddy

3. **Verify Email Credentials**:
   - Make sure `GODADDY_SMTP_USER` is the FULL email address (e.g., `yourname@yourdomain.com`)
   - Not just the username part

4. **Enable SMTP in GoDaddy**:
   - Log into GoDaddy Email
   - Go to Settings → Email Settings
   - Ensure "SMTP Authentication" is enabled

5. **Check Email Account Status**:
   - Make sure the email account is active and not suspended
   - Verify you can log into webmail with the same credentials

#### Issue: "Failed to send enquiry" error
**Solution**: 
- Check that all environment variables are set correctly
- Verify your SMTP credentials are correct
- Check server logs for detailed error messages
- See GoDaddy authentication error above

#### Issue: Works locally but not on server
**Solution**:
- Environment variables are NOT automatically deployed
- You must manually set them in your hosting platform
- Make sure variable names match exactly (case-sensitive)
- Redeploy after setting environment variables

#### Issue: SMTP connection timeout
**Solution**:
- Verify `GODADDY_SMTP_HOST` is correct: `smtpout.secureserver.net`
- Check if your hosting provider blocks SMTP ports
- Try port 587 with `secure: false` if 465 doesn't work
- The code now automatically tries both ports 587 and 465

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
