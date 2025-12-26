# API Setup Guide for Telugu Calendar

This guide helps you set up the backend APIs for your Telugu Calendar website.

## 🤔 Do You Need an API?

**Current Status**: Your website works with static JSON files for:
- ✅ Festival data (`data/festivals-2026.json`)
- ✅ Muhurtam data (`data/muhurtam-2026.json`)
- ✅ Regional timezone data (`data/regional-offsets.json`)

**You Need an API If**:
- You want real-time Panchangam calculations (not just 2026 data)
- You want to calculate Panchangam for any date dynamically
- You want to support multiple years (2027, 2028, etc.)
- You need to calculate regional sunrise/sunset times accurately

**You DON'T Need an API If**:
- You're only supporting year 2026 (current setup)
- Static JSON data is sufficient
- You update the JSON files manually each year

---

## 🎯 Option 1: Keep Using Static JSON (Simplest)

**Recommendation**: Start here, add API later if needed.

Your website already works! No API needed. Just:
1. Deploy the frontend as-is
2. Update JSON files annually

**Pros**:
- ✅ No backend needed
- ✅ Free forever
- ✅ Fast loading
- ✅ Easy to maintain

**Cons**:
- ❌ Manual updates each year
- ❌ Limited to pre-calculated data

---

## 🚀 Option 2: Build Your Own API

If you want dynamic Panchangam calculations, here are simple API options:

---

### Option 2A: Python FastAPI (Recommended)

**Best for**: Python developers, easy to understand
**Difficulty**: Beginner-friendly
**Time**: 1-2 hours

#### 1. Create Project Structure

```
telugu-calendar-api/
├── api/
│   └── index.py           # Main API file
├── requirements.txt       # Dependencies
├── vercel.json           # Vercel config
└── README.md
```

#### 2. Install Dependencies

Create `requirements.txt`:
```txt
fastapi==0.104.1
uvicorn==0.24.0
python-dateutil==2.8.2
pytz==2023.3
```

#### 3. Create Simple API (`api/index.py`)

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json

app = FastAPI()

# Enable CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Telugu Calendar API", "status": "running"}

@app.get("/api/festivals")
def get_festivals(year: int = 2026):
    """Get all festivals for a year"""
    # Load from JSON file
    with open('data/festivals-2026.json', 'r', encoding='utf-8') as f:
        festivals = json.load(f)
    return festivals

@app.get("/api/festival/{festival_id}")
def get_festival(festival_id: str):
    """Get specific festival details"""
    with open('data/festivals-2026.json', 'r', encoding='utf-8') as f:
        festivals = json.load(f)

    if festival_id in festivals:
        return festivals[festival_id]
    return {"error": "Festival not found"}

@app.get("/api/panchangam")
def get_panchangam(date: str, location: str = "hyderabad"):
    """
    Get Panchangam for a specific date and location
    Example: /api/panchangam?date=2026-01-01&location=hyderabad
    """
    # For now, return sample data
    # Later, add actual calculation logic
    return {
        "date": date,
        "location": location,
        "tithi": "Shukla Pratipada",
        "nakshatra": "Ashwini",
        "yoga": "Vishkambha",
        "karana": "Bava",
        "sunrise": "06:30 AM",
        "sunset": "06:15 PM",
        "moonrise": "07:45 PM",
        "moonset": "06:00 AM"
    }

@app.get("/api/muhurtam")
def get_muhurtam(date: str, event_type: str = "marriage"):
    """Get auspicious timings for an event"""
    with open('data/muhurtam-2026.json', 'r', encoding='utf-8') as f:
        muhurtam_data = json.load(f)

    # Filter by date and event type
    # This is simplified - implement full logic
    return {
        "date": date,
        "event_type": event_type,
        "auspicious_times": [
            {"start": "06:00 AM", "end": "07:30 AM", "rating": "Excellent"},
            {"start": "10:00 AM", "end": "12:00 PM", "rating": "Good"}
        ]
    }

# For Vercel serverless deployment
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

#### 4. Create Vercel Config (`vercel.json`)

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

#### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd telugu-calendar-api
vercel

# Follow prompts:
# - Project name: telugu-calendar-api
# - Deploy? Yes
```

#### 6. Get Your API URL

After deployment, Vercel gives you a URL like:
```
https://telugu-calendar-api.vercel.app
```

#### 7. Update Frontend Config

Edit `js/config.js` in your frontend:
```javascript
const API_BASE_URL = 'https://telugu-calendar-api.vercel.app';
```

---

### Option 2B: Node.js Express

**Best for**: JavaScript developers
**Difficulty**: Easy
**Time**: 1 hour

#### 1. Create Project

```bash
mkdir telugu-calendar-api
cd telugu-calendar-api
npm init -y
npm install express cors
```

#### 2. Create `index.js`

```javascript
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Telugu Calendar API', status: 'running' });
});

// Get all festivals
app.get('/api/festivals', (req, res) => {
  const festivals = JSON.parse(
    fs.readFileSync('./data/festivals-2026.json', 'utf8')
  );
  res.json(festivals);
});

// Get specific festival
app.get('/api/festival/:id', (req, res) => {
  const festivals = JSON.parse(
    fs.readFileSync('./data/festivals-2026.json', 'utf8')
  );

  const festival = festivals[req.params.id];
  if (festival) {
    res.json(festival);
  } else {
    res.status(404).json({ error: 'Festival not found' });
  }
});

// Panchangam endpoint
app.get('/api/panchangam', (req, res) => {
  const { date, location } = req.query;

  // Sample response - add real calculation later
  res.json({
    date: date,
    location: location || 'hyderabad',
    tithi: 'Shukla Pratipada',
    nakshatra: 'Ashwini',
    sunrise: '06:30 AM',
    sunset: '06:15 PM'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

module.exports = app;
```

#### 3. Create `vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

#### 4. Deploy to Vercel

```bash
vercel
```

---

### Option 2C: Cloudflare Workers (Serverless)

**Best for**: Free tier, global distribution, blazing fast
**Difficulty**: Medium
**Time**: 1 hour

#### 1. Install Wrangler

```bash
npm install -g wrangler
wrangler login
```

#### 2. Create Worker

```bash
wrangler init telugu-calendar-api
cd telugu-calendar-api
```

#### 3. Edit `src/index.js`

```javascript
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Root endpoint
    if (url.pathname === '/') {
      return new Response(
        JSON.stringify({ message: 'Telugu Calendar API', status: 'running' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Festivals endpoint
    if (url.pathname === '/api/festivals') {
      const festivals = await fetch(
        'https://your-site.netlify.app/data/festivals-2026.json'
      );
      const data = await festivals.json();
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Panchangam endpoint
    if (url.pathname === '/api/panchangam') {
      const date = url.searchParams.get('date');
      const location = url.searchParams.get('location') || 'hyderabad';

      const panchangam = {
        date: date,
        location: location,
        tithi: 'Shukla Pratipada',
        nakshatra: 'Ashwini',
        sunrise: '06:30 AM',
        sunset: '06:15 PM'
      };

      return new Response(JSON.stringify(panchangam), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
```

#### 4. Deploy

```bash
wrangler deploy
```

Your API will be at: `https://telugu-calendar-api.YOUR-SUBDOMAIN.workers.dev`

---

## 🔧 Adding Real Panchangam Calculations

To calculate accurate Panchangam data, you'll need:

### Python Libraries:
- **PySwissEph**: Swiss Ephemeris for astronomical calculations
- **Datetime**: Date/time handling
- **Pytz**: Timezone support

### Install:
```bash
pip install pyswisseph pytz
```

### Sample Calculation Code:

```python
import swisseph as swe
from datetime import datetime
import pytz

def calculate_panchangam(date_str, lat, lon, tz):
    """
    Calculate Panchangam for given date and location
    date_str: "2026-01-01"
    lat: Latitude (e.g., 17.3850 for Hyderabad)
    lon: Longitude (e.g., 78.4867 for Hyderabad)
    tz: Timezone (e.g., "Asia/Kolkata")
    """

    # Parse date
    date = datetime.strptime(date_str, "%Y-%m-%d")
    tz_obj = pytz.timezone(tz)
    local_dt = tz_obj.localize(date)

    # Convert to Julian Day
    jd = swe.julday(date.year, date.month, date.day, 12.0)

    # Calculate Sun position
    sun_pos = swe.calc_ut(jd, swe.SUN)[0][0]

    # Calculate Moon position
    moon_pos = swe.calc_ut(jd, swe.MOON)[0][0]

    # Calculate Tithi (lunar day)
    tithi_deg = (moon_pos - sun_pos) % 360
    tithi_num = int(tithi_deg / 12) + 1

    # Tithi names
    tithi_names = [
        "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
        "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
        "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima"
    ]

    paksha = "Shukla" if tithi_num <= 15 else "Krishna"
    tithi_name = tithi_names[(tithi_num - 1) % 15]

    # Calculate Nakshatra (lunar mansion)
    nakshatra_num = int(moon_pos / 13.333333)
    nakshatra_names = [
        "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
        "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
        "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
        "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
        "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
        "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
    ]
    nakshatra = nakshatra_names[nakshatra_num % 27]

    return {
        "date": date_str,
        "tithi": f"{paksha} {tithi_name}",
        "nakshatra": nakshatra,
        "sun_sign": get_rashi(sun_pos),
        "moon_sign": get_rashi(moon_pos)
    }

def get_rashi(degree):
    """Convert degree to Rashi (zodiac sign)"""
    rashi_names = [
        "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya",
        "Tula", "Vrischika", "Dhanu", "Makara", "Kumbha", "Meena"
    ]
    rashi_num = int(degree / 30)
    return rashi_names[rashi_num % 12]
```

---

## 📊 API Hosting Cost Comparison

| Platform | Free Tier | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Vercel** | ✅ 100GB bandwidth<br>✅ Serverless functions<br>✅ Unlimited requests | $20/month Pro | Most projects |
| **Railway** | ✅ $5 free credit/month<br>✅ 500 hours | $5-20/month | Database + API |
| **Cloudflare Workers** | ✅ 100,000 requests/day<br>✅ Global CDN | $5/month for 10M requests | High traffic |
| **AWS Lambda** | ✅ 1M requests/month<br>✅ 400,000 GB-seconds | Pay as you go | Scalable apps |
| **Google Cloud Run** | ✅ 2M requests/month<br>✅ 360,000 GB-seconds | Pay as you go | Container apps |

---

## ✅ Quick Decision Guide

### Start with **Static JSON** if:
- ✅ You're new to APIs
- ✅ Only need 2026 data
- ✅ Want to launch quickly
- ✅ Don't want hosting costs

### Build **Simple API** if:
- ✅ Want dynamic calculations
- ✅ Multi-year support needed
- ✅ Real-time Panchangam required

### Use **Panchangam Libraries** if:
- ✅ Need astronomical accuracy
- ✅ Want professional calculations
- ✅ Building comprehensive system

---

## 🎯 My Recommendation

**For Your First Launch**:
1. ✅ Deploy frontend with static JSON (works now!)
2. ✅ Add API later if needed
3. ✅ Start simple, scale later

**Benefits**:
- Get live in 30 minutes
- Zero hosting costs
- Learn from user feedback
- Add API when you need it

---

## 📞 Need Help Building the API?

I can help you:
1. Set up Python FastAPI with real Panchangam calculations
2. Deploy to Vercel/Railway/Cloudflare
3. Connect frontend to backend
4. Add caching for better performance

Just let me know what you need!

---

**Ready to deploy?** Start with the static JSON approach and add APIs later! 🚀
