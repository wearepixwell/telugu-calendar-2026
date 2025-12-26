// Month page JavaScript

let currentMonth = 0;
let currentYear = 2026;

document.addEventListener('DOMContentLoaded', function() {
    // Get month and year from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    currentMonth = parseInt(urlParams.get('month')) || 0;
    currentYear = parseInt(urlParams.get('year')) || 2026;

    // Initialize the calendar
    renderCalendar();

    // Setup navigation buttons
    setupNavigation();

    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        renderCalendar();
    });

    // Listen for region changes
    window.addEventListener('regionChanged', function() {
        renderCalendar();
    });
});

// Render the calendar for the current month
function renderCalendar() {
    const monthName = window.teluguCalendar.getMonthName(currentMonth);
    const monthYearDisplay = document.getElementById('month-year-display');
    const currentMonthSpan = document.getElementById('current-month');
    const monthLink = document.getElementById('month-link');

    if (monthYearDisplay) {
        monthYearDisplay.textContent = `${monthName} ${currentYear}`;
    }

    if (currentMonthSpan) {
        currentMonthSpan.textContent = monthName;
    }

    if (monthLink) {
        monthLink.href = `month.html?month=${currentMonth}&year=${currentYear}`;
        monthLink.textContent = monthName;
    }

    // Generate calendar grid
    generateCalendarGrid();
}

// Generate the calendar grid
function generateCalendarGrid() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;

    calendarGrid.innerHTML = '';

    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Get today's date for highlighting
    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const todayDate = today.getDate();

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'date-cell empty-cell';
        calendarGrid.appendChild(emptyCell);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('a');
        dateCell.className = 'date-cell';
        dateCell.href = `date.html?date=${window.teluguCalendar.formatDateForFile(currentYear, currentMonth, day)}`;

        // Highlight today
        if (isCurrentMonth && day === todayDate) {
            dateCell.classList.add('today');
        }

        // Date number
        const dateNumber = document.createElement('div');
        dateNumber.className = 'date-number';
        dateNumber.textContent = day;
        dateCell.appendChild(dateNumber);

        // Panchangam info container
        const panchangamInfo = document.createElement('div');
        panchangamInfo.className = 'date-panchangam-info';
        dateCell.appendChild(panchangamInfo);

        calendarGrid.appendChild(dateCell);

        // Load Panchangam data for this date
        loadDatePreview(day, dateCell, panchangamInfo);
    }
}

// Load date preview data from API
async function loadDatePreview(day, dateCell, panchangamInfo) {
    try {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const region = window.teluguCalendar?.currentRegion || 'amaravati';

        // Fetch data from API
        const data = await window.APIService.getPanchangam(dateStr, region);

        if (data) {
            const lang = window.teluguCalendar?.currentLang || 'en';

            // Helper to get bilingual text
            const getText = (obj) => {
                if (!obj) return '';
                return lang === 'te' ? obj.te : obj.en;
            };

            // Create compact display like reference calendar
            let html = '';

            // Tithi with Paksha indicator
            if (data.tithi_name) {
                const paksha = data.paksha?.en || '';
                const pakshaShort = paksha.includes('Krishna') ? '(K)' : '(S)';
                html += `<div class="cal-tithi">${getText(data.tithi_name)} ${pakshaShort}</div>`;
            }

            // Nakshatra (short form)
            if (data.nakshatra_name) {
                html += `<div class="cal-nakshatra">${getText(data.nakshatra_name)}</div>`;
            }

            // Special indicators for Amavasya/Pournami
            if (data.tithi_name?.en === 'Amavasya') {
                dateCell.classList.add('amavasya-date');
            } else if (data.tithi_name?.en === 'Pournami') {
                dateCell.classList.add('pournami-date');
            }

            panchangamInfo.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading date preview:', error);
        // Silently fail - don't show errors on calendar
    }
}

// Setup navigation buttons
function setupNavigation() {
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateURL();
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateURL();
            renderCalendar();
        });
    }
}

// Update URL without page reload
function updateURL() {
    const newURL = `month.html?month=${currentMonth}&year=${currentYear}`;
    window.history.pushState({}, '', newURL);
}

// Listen for language changes
window.addEventListener('languageChanged', function(e) {
    renderCalendar();
});

// Listen for region changes
window.addEventListener('regionChanged', function(e) {
    // Reload calendar to show region-specific data
    renderCalendar();
});
