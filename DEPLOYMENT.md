# Deployment Guide - Mahendra Builders

## Environment Variables Setup

For the email functionality to work on your server, you **MUST** set the following environment variables:

### Required Environment Variables

Create a `.env.local` file in your project root (or set them in your hosting platform's environment variables section):

**For Rediffmail Email (Current Setup):**
```env
GODADDY_SMTP_HOST=smtp.rediffmail.com
GODADDY_SMTP_PORT=465
GODADDY_SMTP_USER=mahendrabuilders@rediffmail.com
GODADDY_SMTP_PASS=your-rediffmail-password
```

**Note:** For free Rediffmail accounts, try username without @rediffmail.com:
```env
GODADDY_SMTP_USER=mahendrabuilders
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

#### Issue: "535 5.7.0 Authorization failed" (Rediffmail Authentication Error)
**This is the most common issue!** Solutions:

1. **Check Username Format**:
   - For **free Rediffmail accounts**: Use just the username part (e.g., `mahendrabuilders` NOT `mahendrabuilders@rediffmail.com`)
   - For **Rediffmail Pro/paid accounts**: Use full email address (e.g., `mahendrabuilders@rediffmail.com`)
   - Try both formats if unsure

2. **Verify Password**:
   - Make sure the password in Vercel matches exactly what you use to log into Rediffmail webmail
   - Rediffmail passwords are case-sensitive
   - Check for any extra spaces or special characters

3. **Enable SMTP Access**:
   - Log into your Rediffmail account at https://mail.rediffmail.com
   - Go to Settings → Mail Settings → POP/IMAP Settings
   - Ensure "Enable SMTP" or "Allow SMTP Access" is enabled
   - Some free accounts may have SMTP disabled by default

4. **Try Different SMTP Host**:
   - Try `smtp.rediffmail.com` (default)
   - Or try `smtp.rediffmailpro.com` if you have a Pro account

5. **Check Account Status**:
   - Make sure your Rediffmail account is active and not suspended
   - Verify you can log into webmail with the same credentials
   - Free accounts may have sending limits

6. **Alternative: Use Gmail SMTP** (if Rediffmail doesn't work):
   - Consider using Gmail SMTP with an app-specific password
   - More reliable for production use

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
