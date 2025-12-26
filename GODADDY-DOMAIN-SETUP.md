# GoDaddy Domain Setup Guide

You've purchased a domain on GoDaddy - great choice! This guide will show you how to connect your GoDaddy domain to your Telugu Calendar website.

---

## 🎯 Overview - What We'll Do

1. **Deploy your website** to Netlify (FREE hosting)
2. **Connect your GoDaddy domain** to Netlify
3. **Enable HTTPS** (free SSL certificate)
4. **Go live!** Your domain will show your website

**Total Time:** 20-30 minutes
**Total Cost:** Only your domain cost (no hosting fees!)

---

## 📋 What You'll Need

- ✅ Your GoDaddy account login
- ✅ Your domain name (e.g., `telugucalendar.com`)
- ✅ This deployment folder (you already have it!)

---

## 🚀 Step-by-Step Guide

---

## Part 1: Deploy Website to Netlify (10 minutes)

### Step 1: Create Netlify Account

1. Go to https://www.netlify.com
2. Click **"Sign up"**
3. Sign up with:
   - **Email** (recommended), OR
   - **GitHub** (if you have GitHub account)
4. Verify your email

### Step 2: Deploy Your Website

#### Method A: Drag & Drop (EASIEST)

1. After logging in, you'll see the Netlify dashboard
2. Look for the section that says:
   ```
   "Want to deploy a new site without connecting to Git?"
   ```
3. **Drag your entire folder** (`telugu-calendar-deployment`) into the drop zone

   OR

   Click **"Browse to upload"** and select your folder

4. Netlify will upload and deploy (takes about 30 seconds)
5. You'll see: **"Site deploy in progress"**
6. Wait until it shows: **"Published"** with a green checkmark ✅

#### Method B: Using GitHub (Better for Updates)

If you prefer to use GitHub:

1. Create a GitHub repository (see DEPLOYMENT-GUIDE.md)
2. Push your files to GitHub
3. In Netlify, click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Select your repository
6. Click **"Deploy site"**

### Step 3: Note Your Netlify Site URL

After deployment, Netlify gives you a random URL like:
```
https://random-name-12345.netlify.app
```

**Test this URL** - your website should be live!

### Step 4: Change Netlify Site Name (Optional but Recommended)

1. In Netlify dashboard, click on your site
2. Go to **"Site settings"**
3. Click **"Change site name"**
4. Enter a memorable name: `telugu-calendar-2026`
5. Click **"Save"**

Your new Netlify URL:
```
https://telugu-calendar-2026.netlify.app
```

**Important:** Keep this Netlify URL - we'll use it in the next step!

---

## Part 2: Connect Your GoDaddy Domain (10 minutes)

Now let's connect your GoDaddy domain to your Netlify site.

### Step 5: Add Domain in Netlify

1. In Netlify, go to your site dashboard
2. Click **"Domain settings"** (or "Set up a custom domain")
3. Click **"Add custom domain"**
4. Enter your domain name (e.g., `telugucalendar.com`)
5. Click **"Verify"**
6. Netlify will ask: **"Do you own this domain?"**
7. Click **"Yes, add domain"**

### Step 6: Note the DNS Records

Netlify will show you DNS records to add. You'll see something like:

**For Root Domain (e.g., telugucalendar.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain (e.g., www.telugucalendar.com):**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

**Keep this page open** - you'll need these values!

---

## Part 3: Update DNS Settings in GoDaddy (5 minutes)

### Step 7: Log into GoDaddy

1. Go to https://www.godaddy.com
2. Click **"Sign In"** (top right)
3. Enter your username and password

### Step 8: Access DNS Management

1. Click on your **profile icon** (top right)
2. Click **"My Products"**
3. Find your domain in the list
4. Click **"DNS"** next to your domain name

   OR

   Click the **three dots** (...) next to your domain → **"Manage DNS"**

### Step 9: Add/Update DNS Records

You'll see a list of DNS records. We need to add/update them.

#### 9A: Update A Record (for root domain)

1. Look for existing **A record** (Type: A, Name: @)
2. If it exists:
   - Click the **pencil icon** (edit)
   - Change **"Points to"** to: `75.2.60.5`
   - Change **TTL** to: `600 seconds` (or keep default)
   - Click **"Save"**

3. If it doesn't exist:
   - Click **"Add"** button
   - Select **Type: A**
   - **Name:** `@`
   - **Value/Points to:** `75.2.60.5`
   - **TTL:** `600 seconds`
   - Click **"Save"**

#### 9B: Add/Update CNAME Record (for www)

1. Look for existing **CNAME record** (Type: CNAME, Name: www)
2. If it exists and points to something else:
   - Click **pencil icon** (edit)
   - Change **"Points to"** to: `your-site.netlify.app`
   - Click **"Save"**

3. If it doesn't exist:
   - Click **"Add"** button
   - Select **Type: CNAME**
   - **Name:** `www`
   - **Value/Points to:** `your-site.netlify.app`
     (Replace `your-site` with your actual Netlify site name)
   - **TTL:** `600 seconds`
   - Click **"Save"**

#### 9C: Remove Conflicting Records (Important!)

**Check for and DELETE these if they exist:**
- **CNAME record** with Name: `@` (conflicts with A record)
- **A records** pointing to old IP addresses
- **Forwarding** settings (should be disabled)

### Step 10: Save Changes

1. Review your DNS records
2. You should have:
   - **A record:** @ → 75.2.60.5
   - **CNAME record:** www → your-site.netlify.app
3. Click **"Save"** or **"Save Changes"**

---

## Part 4: Verify Connection (Wait & Test)

### Step 11: Wait for DNS Propagation

**DNS changes take time to spread worldwide:**
- Minimum: 30 minutes
- Maximum: 48 hours
- Average: 2-6 hours

**What to do while waiting:**
- ✅ Check your Netlify URL (should work immediately)
- ✅ Have coffee ☕
- ✅ Tell friends about your upcoming website!

### Step 12: Check Domain Status in Netlify

1. Go back to Netlify dashboard
2. Click on your site
3. Go to **"Domain settings"**
4. You'll see your domain with status:
   - 🟡 **"Awaiting External DNS"** (waiting for GoDaddy changes)
   - 🟢 **"Netlify DNS is configured"** (when ready!)

### Step 13: Enable HTTPS (Free SSL Certificate)

Once your domain is connected (showing green checkmark):

1. In Netlify **"Domain settings"**
2. Scroll to **"HTTPS"** section
3. Click **"Verify DNS configuration"**
4. Click **"Provision certificate"** (if not automatic)
5. Wait 1-2 minutes
6. HTTPS will be enabled automatically!

Your site will be accessible at:
- ✅ `http://telugucalendar.com` (redirects to HTTPS)
- ✅ `https://telugucalendar.com` (secure)
- ✅ `https://www.telugucalendar.com` (secure)

---

## 🔍 Troubleshooting

### Problem 1: "Domain not connecting after 24 hours"

**Solution:**
1. Check GoDaddy DNS records are correct:
   - A record: `@` → `75.2.60.5`
   - CNAME: `www` → `your-site.netlify.app`
2. Make sure no CNAME with `@` exists
3. Disable domain forwarding in GoDaddy
4. Wait another 24 hours

### Problem 2: "SSL certificate not provisioning"

**Solution:**
1. Make sure DNS is fully propagated (wait 24 hours)
2. In Netlify, go to Domain settings
3. Click "Renew certificate" or "Provision certificate"
4. Check that both `domain.com` and `www.domain.com` are verified

### Problem 3: "Website shows but without styles/images"

**Solution:**
1. Make sure all files uploaded to Netlify
2. Check that `css/`, `js/`, `images/`, `data/` folders are included
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for errors (F12 → Console)

### Problem 4: "www.domain.com doesn't work"

**Solution:**
1. Check CNAME record in GoDaddy exists
2. Make sure CNAME points to: `your-site.netlify.app`
3. In Netlify, add both versions:
   - `domain.com`
   - `www.domain.com`
4. Wait for DNS propagation

---

## ✅ Quick Verification Checklist

Before you consider it "done":

- [ ] Netlify site is deployed and working
- [ ] GoDaddy A record added: @ → 75.2.60.5
- [ ] GoDaddy CNAME added: www → your-site.netlify.app
- [ ] Waited at least 2-6 hours for DNS propagation
- [ ] Domain shows green checkmark in Netlify
- [ ] HTTPS is enabled (padlock icon in browser)
- [ ] Both domain.com and www.domain.com work
- [ ] All pages load correctly on live domain
- [ ] Tested on mobile device
- [ ] No browser console errors

---

## 📊 Expected Timeline

| Step | Time | Status Check |
|------|------|--------------|
| Deploy to Netlify | 5 min | ✅ Site live at netlify.app URL |
| Add domain in Netlify | 2 min | ✅ Domain added, awaiting DNS |
| Update GoDaddy DNS | 5 min | ✅ DNS records saved |
| DNS Propagation | 2-24 hours | 🕐 Wait patiently |
| HTTPS Certificate | 2-5 min | ✅ After DNS propagation |
| **Total** | **2-24 hours** | 🎉 **Live!** |

---

## 🌐 Alternative: Using Netlify DNS (Easier!)

If you want to skip manual DNS configuration, you can use Netlify DNS:

### Benefits:
- ✅ Automatic configuration
- ✅ Faster DNS updates
- ✅ Better performance
- ✅ Easier management

### How to Transfer DNS to Netlify:

1. In Netlify, go to **"Domain settings"**
2. Click **"Use Netlify DNS"**
3. Netlify will give you nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

4. Go to GoDaddy:
   - My Products → Domain
   - Click **"Manage"** or **DNS**
   - Find **"Nameservers"** section
   - Click **"Change"**
   - Select **"Custom"**
   - Enter Netlify's nameservers
   - Click **"Save"**

5. Wait 24-48 hours for nameserver change
6. Everything will auto-configure in Netlify!

**Note:** This transfers DNS control to Netlify. Your domain stays with GoDaddy, but DNS is managed by Netlify.

---

## 💡 Pro Tips

### Tip 1: Set up Email Forwarding
If you want email@yourdomain.com:
1. In GoDaddy, go to Email Forwarding
2. Set up forwards to your existing email
3. Free with your domain!

### Tip 2: Enable Automatic Deployments
If you used GitHub method:
1. Every time you update files on GitHub
2. Netlify automatically redeploys
3. Changes live in 1-2 minutes!

### Tip 3: Check DNS Propagation
Use these tools to check if DNS has spread:
- https://dnschecker.org
- https://www.whatsmydns.net
- Enter your domain, check A and CNAME records

### Tip 4: Test Before DNS Fully Propagates
Edit your computer's hosts file to test:
- Mac/Linux: `/etc/hosts`
- Windows: `C:\Windows\System32\drivers\etc\hosts`
- Add line: `75.2.60.5 yourdomain.com`
- Save and test (remember to remove later!)

---

## 📞 Need Help?

### GoDaddy Support
- Phone: 1-480-505-8877
- Chat: Available 24/7 on GoDaddy.com
- Help: https://www.godaddy.com/help

### Netlify Support
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com
- Support: support@netlify.com

### Check Your Setup
If stuck, check these:
1. GoDaddy DNS records are correct
2. Netlify domain is verified
3. Waited enough time (24 hours)
4. No conflicting DNS records
5. Browser cache cleared

---

## 🎉 Success! What's Next?

Once your domain is live:

### 1. Share Your Website
- Post on social media
- Share with Telugu community
- Tell family and friends

### 2. Submit to Search Engines
- Google Search Console: https://search.google.com/search-console
- Submit your sitemap: `yourdomain.com/sitemap.html`

### 3. Set Up Analytics (Optional)
- Google Analytics: https://analytics.google.com
- Track visitors and usage
- See which festivals are most popular

### 4. Add More Features
- Email newsletter
- WhatsApp sharing
- Print calendar functionality
- Multi-year support

### 5. Promote Your Site
- Share in Telugu groups
- Post on Facebook/Instagram
- Create helpful content
- Build backlinks

---

## 📋 Quick Reference

### Your Setup Summary

**Hosting:** Netlify (FREE)
**Domain:** GoDaddy (your domain)
**SSL:** Netlify (FREE, automatic)
**Total Cost:** Only domain cost (no hosting fees!)

### DNS Records (for quick reference)

```
A Record:
Type: A
Name: @
Value: 75.2.60.5

CNAME Record:
Type: CNAME
Name: www
Value: your-site.netlify.app
```

### Important URLs

- **Netlify Dashboard:** https://app.netlify.com
- **GoDaddy Dashboard:** https://account.godaddy.com
- **Your Netlify Site:** https://your-site.netlify.app
- **Your Live Domain:** https://yourdomain.com

---

## ✅ Final Checklist

- [ ] Website deployed to Netlify
- [ ] Domain added in Netlify
- [ ] DNS records updated in GoDaddy
- [ ] Waited for DNS propagation (2-24 hours)
- [ ] Domain shows green in Netlify
- [ ] HTTPS enabled (padlock shows)
- [ ] Tested all pages on live domain
- [ ] Tested on mobile
- [ ] Shared with friends!

---

**Congratulations on setting up your domain!** 🎊

Your Telugu Calendar website will be accessible to everyone at your custom domain!

**Questions?** Re-read this guide or check the troubleshooting section.

**Ready to go live?** Follow the steps above and you'll be deployed in no time! 🚀
