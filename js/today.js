// Today page functionality
let currentDate = new Date();

// Initialize today's page
function initializeTodayPage() {
    // Load today's date
    loadTodayDate();

    // Setup navigation buttons
    setupDateNavigation();

    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        updateDateDisplay();
        loadPanchangamContent();
    });

    // Listen for region changes
    window.addEventListener('regionChanged', function() {
        loadPanchangamContent();
    });
}

// Use window.load to ensure all scripts are loaded
if (document.readyState === 'complete') {
    initializeTodayPage();
} else {
    window.addEventListener('load', initializeTodayPage);
}

// Load today's date
function loadTodayDate() {
    currentDate = new Date();
    updateDateDisplay();
    updateHeaderDate();
    loadPanchangamContent();
}

// Setup date navigation buttons
function setupDateNavigation() {
    const prevBtn = document.getElementById('prev-date');
    const nextBtn = document.getElementById('next-date');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentDate.setDate(currentDate.getDate() - 1);
            updateDateDisplay();
            updateHeaderDate();
            loadPanchangamContent();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentDate.setDate(currentDate.getDate() + 1);
            updateDateDisplay();
            updateHeaderDate();
            loadPanchangamContent();
        });
    }
}

// Update date display in navigation
function updateDateDisplay() {
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
        const lang = window.teluguCalendar?.currentLang || 'en';
        const monthName = window.teluguCalendar?.getMonthName(currentDate.getMonth());
        const dayName = window.teluguCalendar?.getDayName(currentDate.getDay());

        dateDisplay.textContent = `${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    }

    // Update button labels
    updateNavigationLabels();
}

// Update header date display
function updateHeaderDate() {
    const headerDateDisplay = document.getElementById('today-date-display');
    if (headerDateDisplay) {
        const lang = window.teluguCalendar?.currentLang || 'en';
        const monthName = window.teluguCalendar?.getMonthName(currentDate.getMonth());
        const dayName = window.teluguCalendar?.getDayName(currentDate.getDay());

        headerDateDisplay.textContent = `${dayName}, ${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    }
}

// Update navigation button labels based on language
function updateNavigationLabels() {
    const lang = window.teluguCalendar?.currentLang || 'en';
    const translations = window.teluguCalendar?.translations || {};

    const prevLabel = document.getElementById('prev-label');
    const nextLabel = document.getElementById('next-label');

    if (prevLabel && translations[lang]) {
        prevLabel.textContent = translations[lang]['prev-day-label'] || 'Previous Day';
    }

    if (nextLabel && translations[lang]) {
        nextLabel.textContent = translations[lang]['next-day-label'] || 'Next Day';
    }
}

// Load Panchangam content for current date
async function loadPanchangamContent() {
    console.log('[TODAY] loadPanchangamContent called');
    const detailsContainer = document.getElementById('panchangam-details');
    if (!detailsContainer) {
        console.error('[TODAY] panchangam-details container not found!');
        return;
    }

    // Format date for API call
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    console.log('[TODAY] Loading data for date:', dateStr);

    // Show loading message
    detailsContainer.innerHTML = '<p>Loading Panchangam data...</p>';

    try {
        // Get region
        const region = window.teluguCalendar?.currentRegion || 'amaravati';
        console.log('[TODAY] Using region:', region);
        console.log('[TODAY] APIService available:', typeof window.APIService);

        if (typeof window.APIService === 'undefined') {
            console.error('[TODAY] APIService is not defined!');
            detailsContainer.innerHTML = '<p>Error: API service not loaded. Please refresh the page.</p>';
            return;
        }

        // Fetch data from API
        const data = await window.APIService.getPanchangam(dateStr, region);
        console.log('[TODAY] API response received:', data ? 'Success' : 'No data');

        if (!data) {
            detailsContainer.innerHTML = '<p>No Panchangam data available for this date.</p>';
            return;
        }

        // Render Panchangam details
        renderPanchangamDetails(data);

    } catch (error) {
        console.error('[TODAY] Error loading Panchangam:', error);
        console.error('[TODAY] Error stack:', error.stack);
        detailsContainer.innerHTML = '<p>Error loading Panchangam data. Please try again.</p>';
    }
}

// Render Panchangam details
function renderPanchangamDetails(data) {
    const detailsContainer = document.getElementById('panchangam-details');
    const lang = window.teluguCalendar?.currentLang || 'en';

    // Helper to get bilingual text
    const getText = (obj) => {
        if (!obj) return '-';
        return lang === 'te' ? obj.te : obj.en;
    };

    // Helper to format time range
    const formatTime = (timeObj) => {
        if (!timeObj) return '-';
        if (typeof timeObj === 'string') return timeObj;
        if (timeObj.start && timeObj.end) {
            return `${timeObj.start} - ${timeObj.end}`;
        }
        return '-';
    };

    // Parse durmuhurtham JSON
    let durmuhurthamMorning = '-';
    let durmuhurthamEvening = '-';
    try {
        const durmuhurtham = JSON.parse(data.durmuhurtham_json || '[]');
        if (durmuhurtham.length > 0) {
            durmuhurthamMorning = `${durmuhurtham[0].start} - ${durmuhurtham[0].end}`;
        }
        if (durmuhurtham.length > 1) {
            durmuhurthamEvening = `${durmuhurtham[1].start} - ${durmuhurtham[1].end}`;
        }
    } catch (e) {
        console.error('Error parsing durmuhurtham:', e);
    }

    // Parse karana JSON
    let karanaList = '-';
    try {
        const karanas = JSON.parse(data.karana_json || '[]');
        if (karanas && karanas.length > 0) {
            karanaList = karanas.map(k => getText(k.name)).join(', ');
        }
    } catch (e) {
        console.error('Error parsing karana:', e);
    }

    let html = '';

    // Calendar System Information Card
    html += `
        <div class="info-card">
            <h3>Calendar System</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Samvatsaram</span>
                    <span class="info-value">${getText(data.samvatsaram)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Ayana</span>
                    <span class="info-value">${getText(data.ayana)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Ruthu (Season)</span>
                    <span class="info-value">${getText(data.ruthu)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Masa (Month)</span>
                    <span class="info-value">${getText(data.masa)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Paksha</span>
                    <span class="info-value">${getText(data.paksha)}</span>
                </div>
            </div>
        </div>
    `;

    // Panchang Elements Card
    html += `
        <div class="info-card">
            <h3>Panchang Elements</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Tithi</span>
                    <span class="info-value">${getText(data.tithi_name)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Tithi Ends At</span>
                    <span class="info-value">${data.tithi_end || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nakshatra</span>
                    <span class="info-value">${getText(data.nakshatra_name)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nakshatra Ends At</span>
                    <span class="info-value">${data.nakshatra_end || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Yoga</span>
                    <span class="info-value">${getText(data.yoga_name)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Yoga Ends At</span>
                    <span class="info-value">${data.yoga_end || '-'}</span>
                </div>
                <div class="info-item" style="grid-column: 1 / -1;">
                    <span class="info-label">Karana</span>
                    <span class="info-value">${karanaList}</span>
                </div>
            </div>
        </div>
    `;

    // Sun & Moon Information Card
    html += `
        <div class="info-card">
            <h3>Sun & Moon Information</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Sunrise</span>
                    <span class="info-value">${data.sunrise || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Sunset</span>
                    <span class="info-value">${data.sunset || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Moonrise</span>
                    <span class="info-value">${data.moonrise || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Moonset</span>
                    <span class="info-value">${data.moonset || '-'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Surya Rashi (Sun Sign)</span>
                    <span class="info-value">${getText(data.suryarashi)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Chandra Rashi (Moon Sign)</span>
                    <span class="info-value">${getText(data.chandrarashi)}</span>
                </div>
            </div>
        </div>
    `;

    // Auspicious Times Card
    html += `
        <div class="info-card auspicious-card">
            <h3>Auspicious Times</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Abhijit Muhurtam</span>
                    <span class="info-value">${formatTime(data.abhijit_muhurtham)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Amruthakalam</span>
                    <span class="info-value">${formatTime(data.amruthakalam)}</span>
                </div>
            </div>
        </div>
    `;

    // Inauspicious Times Card
    html += `
        <div class="info-card inauspicious-card">
            <h3>Inauspicious Times (Times to Avoid)</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-label">Rahukalam</span>
                    <span class="info-value">${formatTime(data.rahukalam)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Yamagandam</span>
                    <span class="info-value">${formatTime(data.yamagandam)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Varjyam</span>
                    <span class="info-value">${formatTime(data.varjyam)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Durmuhurtam (Morning)</span>
                    <span class="info-value">${durmuhurthamMorning}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Durmuhurtam (Evening)</span>
                    <span class="info-value">${durmuhurthamEvening}</span>
                </div>
            </div>
        </div>
    `;

    detailsContainer.innerHTML = html;

    // Re-apply language to new elements
    if (window.teluguCalendar?.applyLanguage) {
        window.teluguCalendar.applyLanguage();
    }

    // Load muhurtam information for this date
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    loadTodayMuhurtam(dateStr);
}

// Load Muhurtam information for today
async function loadTodayMuhurtam(dateStr) {
    try {
        const region = window.teluguCalendar?.currentRegion || 'amaravati';
        const year = parseInt(dateStr.split('-')[0]);

        // Get all muhurtam data for the year
        const response = await window.APIService.getMuhurtamAll(year, region);

        if (response && response.muhurtam_data) {
            const muhurtamTypes = {
                'marriage': { name: 'Marriage', icon: 'favorite' },
                'grihapravesam': { name: 'Grihapravesam', icon: 'home' },
                'vehicle': { name: 'Vehicle Purchase', icon: 'directions_car' },
                'naamkaranam': { name: 'Naamkaranam', icon: 'child_care' },
                'annaprasanam': { name: 'Annaprasanam', icon: 'restaurant' },
                'upanayanam': { name: 'Upanayanam', icon: 'school' }
            };

            const todayMuhurtams = [];

            // Check each muhurtam type for today's date
            for (const [type, info] of Object.entries(muhurtamTypes)) {
                const dates = response.muhurtam_data[type] || [];
                const todayData = dates.find(d => d.date === dateStr);

                if (todayData) {
                    todayMuhurtams.push({
                        type,
                        name: info.name,
                        icon: info.icon,
                        data: todayData
                    });
                }
            }

            displayTodayMuhurtams(todayMuhurtams);
        }
    } catch (error) {
        console.error('Error loading today muhurtam:', error);
    }
}

function displayTodayMuhurtams(muhurtams) {
    const section = document.getElementById('muhurtam-today-section');
    const grid = document.getElementById('muhurtam-today-grid');
    const noMessage = document.getElementById('no-muhurtam-message');

    if (muhurtams.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    grid.innerHTML = '';
    noMessage.style.display = 'none';

    muhurtams.forEach(muhurtam => {
        const card = document.createElement('div');
        card.className = 'muhurtam-card';
        card.innerHTML = `
            <div class="muhurtam-card-header">
                <div class="muhurtam-card-icon">
                    <span class="material-icons">${muhurtam.icon}</span>
                </div>
                <div class="muhurtam-card-title">${muhurtam.name}</div>
            </div>
            <div class="muhurtam-card-details">
                <p><strong>Day:</strong> ${muhurtam.data.day}</p>
                <p><strong>Tithi:</strong> ${muhurtam.data.tithi}${muhurtam.data.tithi_end ? ` (until ${muhurtam.data.tithi_end})` : ''}</p>
                <p><strong>Nakshatra:</strong> ${muhurtam.data.nakshatra}${muhurtam.data.nakshatra_end ? ` (until ${muhurtam.data.nakshatra_end})` : ''}</p>
                <p><strong>Masa:</strong> ${muhurtam.data.masa}</p>
                <p><strong>Paksha:</strong> ${muhurtam.data.paksha}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}
