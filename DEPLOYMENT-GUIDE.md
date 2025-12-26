# Telugu Calendar 2026 - Complete Deployment Guide

This guide will walk you through deploying your Telugu Calendar website and APIs step by step, as if you're doing it for the first time.

---

## 📁 What's in This Folder?

Your deployment folder contains everything needed for the website:

```
telugu-calendar-deployment/
├── index.html              # Home page
├── today.html             # Today's page
├── date.html              # Date search page
├── month-calendar.html    # Monthly calendar
├── festivals.html         # Festivals list
├── festival-detail.html   # Festival details (dynamic)
├── muhurtam.html         # Muhurtam page
├── about.html            # About page
├── privacy-policy.html   # Privacy policy
├── faq.html              # FAQ page
├── sitemap.html          # Sitemap
├── css/
│   └── style.css         # All styling
├── js/
│   ├── common.js         # Common functionality
│   ├── today.js          # Today page logic
│   ├── date.js           # Date page logic
│   ├── month-calendar.js # Calendar logic
│   ├── festivals.js      # Festivals logic
│   ├── festival-details.js # Festival detail page (with all 12 festivals)
│   ├── muhurtam.js       # Muhurtam logic
│   └── config.js         # API configuration
├── data/
│   ├── festivals-2026.json    # Festival data
│   ├── muhurtam-2026.json     # Muhurtam data
│   └── regional-offsets.json  # Regional timezone data
└── images/
    ├── logo.svg          # Main logo
    ├── logo-white.svg    # Footer logo
    └── favicon.svg       # Browser icon
```

---

## 🚀 Deployment Options

I'll show you 3 ways to deploy, from easiest to most professional:

### **Option 1: GitHub Pages (FREE & EASIEST)** ⭐ RECOMMENDED FOR BEGINNERS
### **Option 2: Netlify (FREE & PROFESSIONAL)** ⭐ RECOMMENDED
### **Option 3: Vercel (FREE & FAST)**

---

## 📋 Part 1: Deploying the Frontend (Website)

---

## Option 1: GitHub Pages (FREE)

**Perfect for**: Beginners, free hosting, simple setup
**Cost**: FREE
**Time**: 10 minutes

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Enter your email, create a password
4. Verify your email

### Step 2: Install GitHub Desktop (Easy Way)
1. Go to https://desktop.github.com
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 3: Create Repository
1. Open GitHub Desktop
2. Click "Create New Repository"
3. Name it: `telugu-calendar-2026`
4. Choose Local Path: Select your deployment folder
5. Click "Create Repository"

### Step 4: Upload Files
1. In GitHub Desktop, you'll see all your files listed
2. In the "Summary" box (bottom left), type: "Initial commit - Telugu Calendar website"
3. Click "Commit to main"
4. Click "Publish repository" (top bar)
5. Uncheck "Keep this code private" if you want it public
6. Click "Publish repository"

### Step 5: Enable GitHub Pages
1. Go to https://github.com
2. Click on your repository name (`telugu-calendar-2026`)
3. Click "Settings" (top menu)
4. Click "Pages" (left sidebar)
5. Under "Source", select "main" branch
6. Click "Save"
7. Wait 2-3 minutes

### Step 6: Access Your Live Website
Your website will be live at:
```
https://YOUR-USERNAME.github.io/telugu-calendar-2026
```

**Example**: If your username is `sandeepk`, the URL will be:
```
https://sandeepk.github.io/telugu-calendar-2026
```

### ✅ Done! Your website is live!

---

## Option 2: Netlify (RECOMMENDED)

**Perfect for**: Professional deployment, custom domains, easy updates
**Cost**: FREE (with optional paid features)
**Time**: 5 minutes

### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Click "Sign up"
3. Sign up with GitHub (easier) or email

### Step 2: Deploy Your Site

#### Method A: Drag & Drop (Easiest)
1. After signing in, you'll see the Netlify dashboard
2. Scroll down to "Want to deploy a new site without connecting to Git?"
3. Drag your entire `telugu-calendar-deployment` folder into the drop area
4. Wait 30 seconds - Done!

#### Method B: Connect to GitHub (Better for Updates)
1. Click "Add new site" → "Import an existing project"
2. Click "Deploy with GitHub"
3. Authorize Netlify to access GitHub
4. Select your `telugu-calendar-2026` repository
5. Click "Deploy site"

### Step 3: Get Your URL
Netlify will give you a URL like:
```
https://random-name-12345.netlify.app
```

### Step 4: Change to Custom Name (Optional)
1. Click "Site settings"
2. Click "Change site name"
3. Enter: `telugu-calendar-2026`
4. Your new URL: `https://telugu-calendar-2026.netlify.app`

### Step 5: Add Custom Domain (Optional)
If you have a domain like `telugucalendar.com`:
1. Click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Follow the instructions to update DNS settings

### ✅ Done! Your website is live!

**Bonus**: Every time you update files and push to GitHub, Netlify auto-deploys!

---

## Option 3: Vercel

**Perfect for**: Fast global CDN, automatic deployments
**Cost**: FREE
**Time**: 5 minutes

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign up"
3. Sign up with GitHub

### Step 2: Deploy
1. Click "Add New" → "Project"
2. Click "Import Git Repository"
3. Select your `telugu-calendar-2026` repository
4. Click "Deploy"

### Step 3: Access Your Site
Your URL will be:
```
https://telugu-calendar-2026.vercel.app
```

### ✅ Done!

---

## 🔧 Part 2: Deploying the Backend APIs

Your website currently makes API calls to calculate Panchangam data. You need to deploy these APIs separately.

---

## Where Are the APIs?

Currently, your website expects APIs at these endpoints (check `js/config.js`):

```javascript
// Example API endpoints needed:
const API_BASE_URL = 'YOUR_API_URL_HERE';

// APIs needed:
// 1. /api/panchangam?date=YYYY-MM-DD&location=city
// 2. /api/muhurtam?date=YYYY-MM-DD&location=city
// 3. /api/festivals?year=2026
```

---

## API Deployment Options

### Option 1: Deploy to Vercel (EASIEST)

**What you need**: Your API code (Python/Node.js)

#### For Python APIs (FastAPI/Flask):

1. **Create API Project Structure**:
```
telugu-calendar-api/
├── api/
│   └── index.py          # Your API code
├── requirements.txt       # Python dependencies
└── vercel.json           # Vercel configuration
```

2. **Create `vercel.json`**:
```json
{
  "builds": [
    {
      "src": "api/index.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/index.py"
    }
  ]
}
```

3. **Deploy**:
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to API folder
cd telugu-calendar-api

# Deploy
vercel
```

4. **Update Frontend Config**:
Edit `js/config.js`:
```javascript
const API_BASE_URL = 'https://your-api.vercel.app';
```

---

### Option 2: Deploy to Railway (for Python/Node.js)

**Cost**: FREE tier available
**Perfect for**: Database + API together

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your API repository
5. Railway auto-detects and deploys

---

### Option 3: AWS Lambda + API Gateway (Advanced)

**Cost**: FREE tier (1M requests/month)
**Perfect for**: Scalable, serverless APIs

This is more complex. Let me know if you want detailed instructions for this.

---

## 🔄 Quick API Setup (If You Don't Have APIs Yet)

If you don't have backend APIs yet, you can:

### Option A: Use Static JSON Files (Temporary)
For now, your festivals data is already in `data/festivals-2026.json`, so that's working!

### Option B: Build Simple APIs

I can help you create simple APIs using:
- **Python FastAPI** (recommended - easy and fast)
- **Node.js Express** (if you prefer JavaScript)
- **Cloudflare Workers** (free, serverless)

**Would you like me to create a simple API for you?**

---

## 📝 Part 3: Update API URLs in Your Website

After deploying your API, update the configuration:

1. **Open** `/js/config.js` in your deployment folder

2. **Update the API URL**:
```javascript
// Before
const API_BASE_URL = 'http://localhost:5000';

// After (replace with your actual API URL)
const API_BASE_URL = 'https://your-api-name.vercel.app';
```

3. **Save the file**

4. **Re-deploy** your frontend:
   - **GitHub Pages**: Commit and push changes
   - **Netlify**: Just drag the updated folder again or push to GitHub
   - **Vercel**: Push to GitHub (auto-deploys)

---

## 🌐 Part 4: Connect a Custom Domain (Optional)

### Buy a Domain (If You Don't Have One)

**Recommended Registrars**:
- **Namecheap** (cheapest): $8-12/year
- **Google Domains**: $12/year
- **GoDaddy**: $10-15/year

**Suggested Domains**:
- `telugucalendar.com`
- `telugupanchangam.com`
- `2026telugucal.com`

### Connect Domain to Netlify

1. In Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Enter your domain: `telugucalendar.com`
4. Go to your domain registrar (Namecheap/GoDaddy)
5. Add these DNS records:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

6. Wait 1-24 hours for DNS propagation
7. Netlify will auto-enable HTTPS (free SSL certificate)

### Connect Domain to Vercel

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records at your registrar as instructed

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Festival detail pages show complete information
- [ ] All 12 festivals have detailed content
- [ ] Images load (logo, favicon)
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (open browser DevTools)
- [ ] API calls work (if using APIs)
- [ ] Privacy policy and about pages are complete

---

## 🔍 Testing Your Deployed Site

1. **Open your live URL**
2. **Test each page**:
   - Home page loads
   - Click "Today" - shows today's date
   - Click "Festivals" - lists all festivals
   - Click any festival - shows detailed information with sections
   - Click "Muhurtam" - shows auspicious times
   - Test on mobile phone
   - Test on different browsers (Chrome, Safari, Firefox)

3. **Check browser console**:
   - Right-click → "Inspect" → "Console" tab
   - Should see no red errors

---

## 🐛 Common Issues & Solutions

### Issue 1: "404 Not Found" on festival detail pages
**Solution**: Make sure `festival-detail.html` is deployed and URLs use `?festival=` parameter

### Issue 2: Images not showing
**Solution**:
- Check that `images/` folder is deployed
- Verify image paths in HTML are correct (should be `images/logo.svg`)

### Issue 3: CSS not loading
**Solution**:
- Check that `css/style.css` is deployed
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue 4: API errors
**Solution**:
- Check `js/config.js` has correct API URL
- Verify API is deployed and running
- Check browser console for CORS errors

---

## 📊 Monitoring Your Site

### Google Analytics (Track Visitors)

1. Go to https://analytics.google.com
2. Create account and property
3. Get tracking code
4. Add to all HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Netlify Analytics
Built-in! Just enable in Netlify dashboard (paid feature: $9/month)

---

## 💰 Costs Summary

### Free Option (Total: $0/year)
- Frontend: GitHub Pages (FREE)
- API: Vercel/Railway free tier (FREE)
- Domain: Use free subdomain (FREE)
- SSL: Automatic (FREE)

### Professional Option (Total: ~$12/year)
- Frontend: Netlify (FREE)
- API: Vercel (FREE)
- Domain: Namecheap ($12/year)
- SSL: Automatic (FREE)

### Premium Option (Total: ~$100/year)
- Frontend: Netlify Pro ($19/month)
- API: Railway Pro ($5/month)
- Domain: Premium domain ($30/year)
- SSL: Automatic (FREE)

---

## 🚀 Next Steps After Deployment

1. **Share your website**:
   - Post on social media
   - Share with Telugu community
   - Submit to search engines

2. **SEO Optimization**:
   - Submit sitemap to Google Search Console
   - Add meta descriptions to all pages
   - Create content for FAQ and About pages

3. **Add Features**:
   - Email notifications for festivals
   - WhatsApp sharing
   - Print calendar option
   - Mobile app (later)

---

## 📞 Need Help?

If you get stuck:

1. **Check browser console** for errors (F12 → Console tab)
2. **Check deployment logs** in Netlify/Vercel dashboard
3. **Test locally first**: Run `python3 -m http.server 8080` in your folder
4. **Common fix**: Clear browser cache (Ctrl+Shift+R)

---

## 🎉 You're Ready!

Choose one of the deployment options above and follow the steps.

**My Recommendation**:
- **Frontend**: Deploy to **Netlify** (easiest, professional)
- **API**: Deploy to **Vercel** (free, fast, easy)
- **Domain**: Start with free subdomain, buy custom domain later

The entire process should take **less than 30 minutes**!

Good luck with your deployment! 🚀
