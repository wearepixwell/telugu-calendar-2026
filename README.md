# Telugu Calendar 2026 Website

A comprehensive Telugu Calendar website for 2026 with Panchangam, festivals, and muhurtam information.

## 🌟 Features

- **Today's Panchangam**: Current day's auspicious timings and details
- **Date Search**: Look up any date in 2026
- **Monthly Calendar**: Full month view with festivals
- **Festival Details**: Complete information for all 12 major festivals
- **Muhurtam**: Auspicious times for various events
- **Multi-Region Support**: Panchangam for cities worldwide
- **Mobile Responsive**: Works perfectly on all devices
- **Telugu + English**: Bilingual support

## 📅 Festivals Covered (All 12 with Detailed Sections)

1. **Makara Sankranti / Pongal** (January 14)
2. **Maha Shivaratri** (February 26)
3. **Ugadi - Telugu New Year** (March 22)
4. **Sri Rama Navami** (April 2)
5. **Hanuman Jayanti** (April 8)
6. **Krishna Janmashtami** (August 22)
7. **Vinayaka Chavithi** (August 29)
8. **Dasara / Vijayadashami** (October 12)
9. **Dussehra** (October 12)
10. **Deepavali** (October 31)
11. **Karthika Masam** (November 1)
12. **Christmas** (December 25)

Each festival includes:
- Detailed Panchangam with specific timings
- Complete puja procedures
- Historical and mythological stories
- Spiritual significance
- Traditional foods and recipes
- Cultural practices
- Regional variations

## 🚀 Quick Start

### Local Development

1. **Clone or download this folder**
2. **Open terminal in this folder**
3. **Start local server**:
   ```bash
   python3 -m http.server 8080
   ```
4. **Open browser**: http://localhost:8080

### Deploy to Production

See **DEPLOYMENT-GUIDE.md** for detailed instructions on deploying to:
- GitHub Pages (Free)
- Netlify (Recommended)
- Vercel (Fast)

## 📁 Project Structure

```
telugu-calendar-deployment/
├── index.html              # Home page
├── today.html             # Today's Panchangam
├── date.html              # Date search
├── month-calendar.html    # Monthly calendar
├── festivals.html         # All festivals list
├── festival-detail.html   # Dynamic festival details
├── muhurtam.html         # Auspicious timings
├── about.html            # About page
├── privacy-policy.html   # Privacy policy
├── faq.html              # Frequently asked questions
├── sitemap.html          # Site map
├── css/
│   └── style.css         # All styling
├── js/
│   ├── common.js         # Shared functionality
│   ├── config.js         # API configuration
│   ├── today.js          # Today page logic
│   ├── date.js           # Date search logic
│   ├── month-calendar.js # Calendar logic
│   ├── festivals.js      # Festivals page
│   ├── festival-details.js # Festival detail content (ALL 12 festivals)
│   └── muhurtam.js       # Muhurtam logic
├── data/
│   ├── festivals-2026.json    # Festival data
│   ├── muhurtam-2026.json     # Muhurtam data
│   └── regional-offsets.json  # Timezone offsets
├── images/
│   ├── logo.svg          # Main logo (తె)
│   ├── logo-white.svg    # White logo for footer
│   └── favicon.svg       # Browser icon
├── DEPLOYMENT-GUIDE.md   # Complete deployment instructions
└── README.md             # This file
```

## 🔧 Configuration

### API Configuration

Edit `js/config.js` to set your API endpoints:

```javascript
const API_BASE_URL = 'https://your-api.vercel.app';
```

### Regional Support

Default cities are configured in `data/regional-offsets.json`. The website supports:
- India: Hyderabad, Vijayawada, Visakhapatnam, Bangalore, Chennai, Mumbai, Delhi
- USA: New York, Chicago, San Francisco, Los Angeles
- UK: London
- Middle East: Dubai, Riyadh
- Australia: Sydney, Melbourne
- Others: Singapore, Toronto, Auckland, Cape Town

## 🎨 Customization

### Change Colors

Edit `css/style.css`:
```css
:root {
    --primary-color: #003CE2;  /* Main blue */
    --secondary-color: #0028a3; /* Darker blue */
}
```

### Update Logo

Replace files in `images/` folder:
- `logo.svg` - Main logo (48x48px)
- `logo-white.svg` - Footer logo
- `favicon.svg` - Browser icon

### Add/Modify Festivals

Edit `data/festivals-2026.json` and `js/festival-details.js`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Data

- No user data collected
- No cookies required
- No external tracking (unless you add Google Analytics)
- All data stored locally in browser

## 📄 License

This website is for personal/community use.

## 🤝 Contributing

To add more festivals or improve content:
1. Edit the relevant JSON files in `data/`
2. Add detailed sections in `js/festival-details.js`
3. Test locally
4. Deploy updates

## 🐛 Known Issues

None currently! All 12 festivals have complete detailed sections.

## 📧 Support

For questions or issues, check the DEPLOYMENT-GUIDE.md file.

## 🙏 Credits

- Calendar calculations based on traditional Panchangam methods
- Telugu cultural information from authentic sources
- Icons from Material Icons
- Fonts: Google Sans, Noto Sans Telugu

## 🎯 Roadmap

Future enhancements:
- [ ] Print calendar functionality
- [ ] Email/SMS festival reminders
- [ ] WhatsApp sharing
- [ ] PDF download of monthly calendar
- [ ] Mobile app (iOS/Android)
- [ ] More festivals and regional events
- [ ] Multi-year support (2027, 2028...)

## 🌟 Star Features

✨ **All 12 major festivals have comprehensive detailed sections**
✨ Complete puja procedures with step-by-step instructions
✨ Panchangam details with exact timings
✨ Stories, significance, and cultural practices
✨ Traditional recipes and foods
✨ Regional variations and celebrations
✨ Mobile-responsive design
✨ Fast loading, no dependencies on external libraries

---

**Ready to deploy?** Open `DEPLOYMENT-GUIDE.md` for step-by-step instructions!
