# Why Email Works Locally But Not on Server

## Common Reasons

### 1. **Environment Variables Not Set in Vercel** ⚠️ (Most Common)
- **Localhost**: Your `.env.local` file has the correct credentials
- **Server**: Vercel doesn't automatically read `.env.local` - you must manually add environment variables in Vercel dashboard
- **Solution**: Go to Vercel → Your Project → Settings → Environment Variables → Add all SMTP variables

### 2. **Different Network Environments**
- **Localhost**: Your computer's IP might be whitelisted or have different firewall rules
- **Server**: Vercel servers are in different locations (AWS regions) - Rediffmail might block certain IP ranges
- **Solution**: Check if Rediffmail has IP restrictions in account settings

### 3. **Username Format Difference**
- **Localhost**: Might be using `mahendrabuilders` (without @rediffmail.com)
- **Server**: Vercel might have `mahendrabuilders@rediffmail.com` which fails for free accounts
- **Solution**: Try both formats in Vercel environment variables

### 4. **Cached Credentials Locally**
- **Localhost**: Next.js might be using cached environment variables
- **Server**: Fresh deployment reads from Vercel environment variables
- **Solution**: Clear `.next` folder and restart dev server: `rm -rf .next && npm run dev`

### 5. **Different Node.js Runtime**
- **Localhost**: Your local Node.js version might handle SMTP differently
- **Server**: Vercel uses specific Node.js versions in serverless functions
- **Solution**: Check Vercel logs for runtime errors

### 6. **Rediffmail Account Restrictions**
- **Localhost**: Your local IP might be trusted
- **Server**: Rediffmail might require "Allow less secure apps" or have IP-based restrictions
- **Solution**: Check Rediffmail account settings for SMTP access permissions

## How to Debug

### Step 1: Check What's Actually Being Used
Add this temporary logging to see what credentials are being used:

```javascript
console.log('SMTP Config:', {
  host: smtpHost,
  port: smtpPort,
  user: smtpUser,
  pass: smtpPass ? '***' : 'MISSING'
})
```

### Step 2: Compare Local vs Server
1. **Check your `.env.local` file** (if it exists):
   ```env
   GODADDY_SMTP_HOST=smtp.rediffmail.com
   GODADDY_SMTP_PORT=465
   GODADDY_SMTP_USER=mahendrabuilders
   GODADDY_SMTP_PASS=your-password
   ```

2. **Check Vercel Environment Variables**:
   - Go to Vercel Dashboard
   - Your Project → Settings → Environment Variables
   - Verify all variables match exactly (including username format)
   - Use these exact variable names: `GODADDY_SMTP_HOST`, `GODADDY_SMTP_USER`, `GODADDY_SMTP_PASS`, `GODADDY_SMTP_PORT`

### Step 3: Test Credentials
Try logging into Rediffmail webmail with the exact same credentials you're using in Vercel:
- If webmail login works but SMTP doesn't → SMTP might be disabled
- If webmail login fails → Wrong credentials

## Quick Fix Checklist

- [ ] Environment variables set in Vercel with **old names**: `GODADDY_SMTP_HOST`, `GODADDY_SMTP_USER`, `GODADDY_SMTP_PASS`, `GODADDY_SMTP_PORT`
- [ ] Username format matches (try both with and without @rediffmail.com)
- [ ] Password is exactly the same (no extra spaces)
- [ ] SMTP enabled in Rediffmail account settings
- [ ] Redeployed after changing environment variables
- [ ] Checked Vercel function logs for detailed error messages

## Most Likely Issue

**90% of the time**, it's because:
1. Environment variables are set in `.env.local` locally ✅
2. But NOT set in Vercel dashboard ❌

**Fix**: Copy your `.env.local` values to Vercel Environment Variables and redeploy.
