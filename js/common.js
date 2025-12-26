// Common JavaScript functionality for all pages

// Language translations
const translations = {
    en: {
        // Header
        'main-title': 'Telugu Panchangam 2026',
        'main-subtitle': 'Complete Daily Telugu Calendar with Auspicious Times',
        'region-label': 'Select Region:',
        'home-link': 'Home',

        // Month names
        months: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        // Day names
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        // Labels
        'year-title': '2026 Calendar',
        'month-title': 'Monthly Calendar',
        'date-title': 'Daily Panchangam',
        'about-title': 'About Telugu Panchangam',
        'quick-info-title': 'Quick Information',
        'festivals-title': 'Festivals & Special Days',
        'basic-info-title': 'Basic Information',
        'sun-moon-title': 'Sun & Moon Timings',
        'auspicious-title': 'Auspicious Time',
        'inauspicious-title': 'Inauspicious Times (Times to Avoid)',
        'about-panchangam-title': 'About Panchangam',

        // Field labels
        'masamu-label': 'Masamu (Month)',
        'paksham-label': 'Paksham',
        'tithi-label': 'Tithi',
        'nakshatram-label': 'Nakshatram',
        'yoga-label': 'Yoga',
        'karanam-label': 'Karanam',
        'sunrise-label': 'Sunrise',
        'sunset-label': 'Sunset',
        'moonrise-label': 'Moonrise',
        'moonset-label': 'Moonset',
        'rahukalam-label': 'Rahukalam',
        'yamagandam-label': 'Yamagandam',
        'varjyam-label': 'Varjyam',
        'durmuhurtam-morning-label': 'Durmuhurtam (Morning)',
        'durmuhurtam-evening-label': 'Durmuhurtam (Evening)',
        'abhijit-label': 'Abhijit Muhurtam',

        // Navigation
        'prev-label': 'Previous',
        'next-label': 'Next',
        'prev-day-label': 'Previous Day',
        'next-day-label': 'Next Day',

        // Day labels
        'sun-label': 'Sun',
        'mon-label': 'Mon',
        'tue-label': 'Tue',
        'wed-label': 'Wed',
        'thu-label': 'Thu',
        'fri-label': 'Fri',
        'sat-label': 'Sat'
    },
    te: {
        // Header
        'main-title': 'తెలుగు పంచాంగం 2026',
        'main-subtitle': 'పూర్తి రోజువారీ తెలుగు క్యాలెండర్ శుభ సమయాలతో',
        'region-label': 'ప్రాంతం ఎంచుకోండి:',
        'home-link': 'హోమ్',

        // Month names in Telugu
        months: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్',
                'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
        monthsShort: ['జన', 'ఫిబ్ర', 'మార్చి', 'ఏప్రి', 'మే', 'జూన్',
                     'జూలై', 'ఆగ', 'సెప్ట', 'అక్టో', 'నవం', 'డిసెం'],

        // Day names in Telugu
        days: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
        daysShort: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],

        // Labels
        'year-title': '2026 క్యాలెండర్',
        'month-title': 'మాసిక క్యాలెండర్',
        'date-title': 'రోజువారీ పంచాంగం',
        'about-title': 'తెలుగు పంచాంగం గురించి',
        'quick-info-title': 'త్వరిత సమాచారం',
        'festivals-title': 'పండుగలు & ప్రత్యేక రోజులు',
        'basic-info-title': 'ప్రాథమిక సమాచారం',
        'sun-moon-title': 'సూర్య & చంద్ర సమయాలు',
        'auspicious-title': 'శుభ సమయం',
        'inauspicious-title': 'అశుభ సమయాలు (తప్పించవలసిన సమయాలు)',
        'about-panchangam-title': 'పంచాంగం గురించి',

        // Field labels
        'masamu-label': 'మాసము',
        'paksham-label': 'పక్షము',
        'tithi-label': 'తిథి',
        'nakshatram-label': 'నక్షత్రం',
        'yoga-label': 'యోగం',
        'karanam-label': 'కరణం',
        'sunrise-label': 'సూర్యోదయం',
        'sunset-label': 'సూర్యాస్తమయం',
        'moonrise-label': 'చంద్రోదయం',
        'moonset-label': 'చంద్రాస్తమయం',
        'rahukalam-label': 'రాహుకాలం',
        'yamagandam-label': 'యమగండం',
        'varjyam-label': 'వర్జ్యం',
        'durmuhurtam-morning-label': 'దుర్ముహూర్తం (ఉదయం)',
        'durmuhurtam-evening-label': 'దుర్ముహూర్తం (సాయంత్రం)',
        'abhijit-label': 'అభిజిత్ ముహూర్తం',

        // Navigation
        'prev-label': 'మునుపటి',
        'next-label': 'తర్వాత',
        'prev-day-label': 'మునుపటి రోజు',
        'next-day-label': 'తర్వాత రోజు',

        // Day labels
        'sun-label': 'ఆది',
        'mon-label': 'సోమ',
        'tue-label': 'మంగళ',
        'wed-label': 'బుధ',
        'thu-label': 'గురు',
        'fri-label': 'శుక్ర',
        'sat-label': 'శని'
    }
};

// Current language state
let currentLang = 'en';
let currentRegion = 'amaravati';

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    loadPreferences();

    // Setup event listeners
    setupLanguageToggle();
    setupMobileLangToggle();
    setupRegionSelector();
    setupHeaderRegionSelector();
    setupMobileMenu();

    // Apply initial language
    applyLanguage();
});

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('mobile-active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.top-nav')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('mobile-active');
            }
        });
    }
}

// Load saved preferences from localStorage
function loadPreferences() {
    const savedLang = localStorage.getItem('preferredLanguage');
    const savedRegion = localStorage.getItem('preferredRegion');

    if (savedLang) {
        currentLang = savedLang;
    }

    if (savedRegion) {
        currentRegion = savedRegion;

        // Sync both region selectors
        const regionSelect = document.getElementById('region');
        if (regionSelect) {
            regionSelect.value = savedRegion;
        }

        const headerRegionSelect = document.getElementById('region-header');
        if (headerRegionSelect) {
            headerRegionSelect.value = savedRegion;
        }
    }
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('preferredLanguage', currentLang);
    localStorage.setItem('preferredRegion', currentRegion);
}

// Setup language toggle button
function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'te' : 'en';
            savePreferences();
            applyLanguage();

            // Trigger custom event for page-specific updates
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
        });
    }
}

// Setup mobile language toggle button
function setupMobileLangToggle() {
    const langToggleMobile = document.getElementById('lang-toggle-mobile');
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'te' : 'en';
            savePreferences();
            applyLanguage();

            // Trigger custom event for page-specific updates
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
        });
    }
}

// Setup region selector
function setupRegionSelector() {
    const regionSelect = document.getElementById('region');
    if (regionSelect) {
        regionSelect.addEventListener('change', function() {
            currentRegion = this.value;
            savePreferences();

            // Sync with header region selector
            const headerRegionSelect = document.getElementById('region-header');
            if (headerRegionSelect) {
                headerRegionSelect.value = currentRegion;
            }

            // Trigger custom event for page-specific updates
            window.dispatchEvent(new CustomEvent('regionChanged', { detail: { region: currentRegion } }));
        });
    }
}

// Setup header region selector
function setupHeaderRegionSelector() {
    const headerRegionSelect = document.getElementById('region-header');
    if (headerRegionSelect) {
        headerRegionSelect.addEventListener('change', function() {
            currentRegion = this.value;
            savePreferences();

            // Sync with nav region selector
            const navRegionSelect = document.getElementById('region');
            if (navRegionSelect) {
                navRegionSelect.value = currentRegion;
            }

            // Trigger custom event for page-specific updates
            window.dispatchEvent(new CustomEvent('regionChanged', { detail: { region: currentRegion } }));
        });
    }
}

// Apply language to all text elements
function applyLanguage() {
    const lang = translations[currentLang];

    // Update all elements with IDs that match translation keys
    for (const key in lang) {
        const element = document.getElementById(key);
        if (element) {
            if (typeof lang[key] === 'string') {
                element.textContent = lang[key];
            }
        }
    }

    // Toggle language-specific elements
    // .lang-en contains "తెలుగు" (shown in English mode to switch to Telugu)
    // .lang-te contains "English" (shown in Telugu mode to switch to English)
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = currentLang === 'en' ? 'inline' : 'none';
    });

    document.querySelectorAll('.lang-te').forEach(el => {
        el.style.display = currentLang === 'te' ? 'inline' : 'none';
    });

    // Toggle mobile language button display
    // Mobile button shows CURRENT language (not what you'll switch to)
    // .lang-mobile-en contains "తె" - shown when in TELUGU mode
    // .lang-mobile-te contains "EN" - shown when in ENGLISH mode
    document.querySelectorAll('.lang-mobile-en').forEach(el => {
        el.style.display = currentLang === 'te' ? 'inline' : 'none';
    });

    document.querySelectorAll('.lang-mobile-te').forEach(el => {
        el.style.display = currentLang === 'en' ? 'inline' : 'none';
    });

    // Update month names
    document.querySelectorAll('.month-name-en').forEach(el => {
        el.style.display = currentLang === 'en' ? 'block' : 'none';
    });

    document.querySelectorAll('.month-name-te').forEach(el => {
        el.style.display = currentLang === 'te' ? 'block' : 'none';
    });
}

// Utility function to format date as YYYY-MM-DD
function formatDateForFile(year, month, day) {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
}

// Utility function to get month name
function getMonthName(monthIndex) {
    return translations[currentLang].months[monthIndex];
}

// Utility function to get day name
function getDayName(dayIndex) {
    return translations[currentLang].days[dayIndex];
}

// Utility function to get short day name
function getShortDayName(dayIndex) {
    return translations[currentLang].daysShort[dayIndex];
}

// Load Panchangam data from JSON file
async function loadPanchangamData(date) {
    try {
        const response = await fetch(`data/${date}.json`);
        if (!response.ok) {
            throw new Error('Data not found');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading Panchangam data:', error);
        return null;
    }
}

// Get region-specific data
function getRegionData(panchangamData, region) {
    if (!panchangamData || !panchangamData.regions) {
        return null;
    }
    return panchangamData.regions[region];
}

// Format time range
function formatTimeRange(timeObj) {
    if (!timeObj || !timeObj.start || !timeObj.end) {
        return '-';
    }
    return `${timeObj.start} - ${timeObj.end}`;
}

// Get bilingual text
function getBilingualText(textObj) {
    if (!textObj) return '-';
    return currentLang === 'en' ? textObj.english : textObj.telugu;
}

// Export functions and variables
window.teluguCalendar = {
    get currentLang() { return currentLang; },
    get currentRegion() { return currentRegion; },
    translations,
    formatDateForFile,
    getMonthName,
    getDayName,
    getShortDayName,
    loadPanchangamData,
    getRegionData,
    formatTimeRange,
    getBilingualText,
    applyLanguage
};
