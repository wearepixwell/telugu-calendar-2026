// Index page JavaScript

let currentYear = 2026;
let currentMuhurtamCategory = 'all';
let muhurtamData = {};

const monthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    te: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్']
};

const dayHeaders = {
    en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    te: ['ఆ', 'సో', 'మం', 'బు', 'గు', 'శు', 'శ']
};

function isMuhurtamDate(year, month, day, category) {
    if (category === 'all' || !muhurtamData[year] || !muhurtamData[year][category]) {
        return false;
    }

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return muhurtamData[year][category].some(d => d.date === dateStr);
}

function generateMiniCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '';

    // Add day headers
    const lang = localStorage.getItem('language') || 'en';
    dayHeaders[lang].forEach(day => {
        html += `<div class="mini-cal-day-header">${day}</div>`;
    });

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="mini-cal-date empty"></div>';
    }

    // Add date cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dayOfWeek = new Date(year, month, day).getDay();
        const isSunday = dayOfWeek === 0 ? ' sunday' : '';
        const isMuhurtam = isMuhurtamDate(year, month, day, currentMuhurtamCategory) ? ' muhurtam-date' : '';
        html += `<div class="mini-cal-date${isSunday}${isMuhurtam}">${day}</div>`;
    }

    return html;
}

function updatePageTitle() {
    const mainTitle = document.getElementById('main-title');
    const yearTitle = document.getElementById('year-title');
    const festivalsTitle = document.getElementById('festivals-title');

    if (mainTitle) {
        mainTitle.textContent = `Telugu Calendar ${currentYear}`;
    }
    if (yearTitle) {
        yearTitle.textContent = `${currentYear} Calendar`;
    }
    if (festivalsTitle) {
        festivalsTitle.textContent = `Telugu Festivals ${currentYear}`;
    }
}

function renderMonthCards() {
    const monthsGrid = document.getElementById('months-grid');
    if (!monthsGrid) return;

    const lang = localStorage.getItem('language') || 'en';

    monthsGrid.innerHTML = '';

    for (let month = 0; month < 12; month++) {
        const monthCard = document.createElement('a');
        monthCard.href = `month-calendar.html?month=${month}&year=${currentYear}`;
        monthCard.className = 'month-card';

        const header = document.createElement('div');
        header.className = 'month-card-header';
        header.innerHTML = `<h3>${monthNames[lang][month]}</h3>`;

        const calendar = document.createElement('div');
        calendar.className = 'mini-calendar';
        calendar.innerHTML = generateMiniCalendar(month, currentYear);

        monthCard.appendChild(header);
        monthCard.appendChild(calendar);
        monthsGrid.appendChild(monthCard);
    }
}

async function loadMuhurtamData(year) {
    try {
        const region = window.teluguCalendar?.currentRegion || 'amaravati';
        console.log(`Loading Muhurtam data for year ${year}, region ${region}`);

        const response = await window.APIService.getMuhurtamAll(year, region);

        if (response && response.muhurtam_data) {
            muhurtamData[year] = response.muhurtam_data;
            console.log(`Loaded Muhurtam data for ${year}:`, Object.keys(muhurtamData[year]));
        }
    } catch (error) {
        console.error('Error loading Muhurtam data:', error);
    }
}

function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            currentMuhurtamCategory = category;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Re-render calendars with new highlights
            renderMonthCards();
        });
    });

    // Set 'All Dates' as active by default
    const allTab = document.querySelector('.category-tab[data-category="all"]');
    if (allTab) {
        allTab.classList.add('active');
    }
}

function setupYearSelector() {
    const yearSelect = document.getElementById('year-select');
    if (yearSelect) {
        yearSelect.addEventListener('change', async function() {
            currentYear = parseInt(this.value);
            updatePageTitle();

            // Load muhurtam data for new year if not already loaded
            if (!muhurtamData[currentYear]) {
                await loadMuhurtamData(currentYear);
            }

            renderMonthCards();
        });
    }
}

async function initializePage() {
    console.log('Telugu Panchangam Index Page Loaded');

    // Get year from URL parameter or use default
    const urlParams = new URLSearchParams(window.location.search);
    const yearParam = urlParams.get('year');
    if (yearParam) {
        currentYear = parseInt(yearParam);
    }

    // Set year selector to current year
    const yearSelect = document.getElementById('year-select');
    if (yearSelect) {
        yearSelect.value = currentYear;
    }

    // Setup category tabs
    setupCategoryTabs();

    // Setup year selector
    setupYearSelector();

    // Load muhurtam data for current year
    await loadMuhurtamData(currentYear);

    // Update title and render
    updatePageTitle();
    renderMonthCards();
}

// Use window.onload to ensure all scripts are loaded
if (document.readyState === 'complete') {
    initializePage();
} else {
    window.addEventListener('load', initializePage);
}

// Listen for language changes
window.addEventListener('languageChanged', function(e) {
    console.log('Language changed to:', e.detail.lang);
    renderMonthCards();
});

// Listen for region changes
window.addEventListener('regionChanged', async function(e) {
    console.log('Region changed to:', e.detail.region);

    // Clear cached muhurtam data and reload for current year
    muhurtamData = {};
    await loadMuhurtamData(currentYear);
    renderMonthCards();
});
