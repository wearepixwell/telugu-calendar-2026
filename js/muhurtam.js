// Muhurtam page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Year selector functionality
    const yearSelect = document.getElementById('muhurtam-year');

    if (yearSelect) {
        yearSelect.addEventListener('change', function() {
            const selectedYear = this.value;
            // Update all category links with year parameter
            updateCategoryLinks(selectedYear);
        });
    }
});

function updateCategoryLinks(year) {
    const categoryLinks = document.querySelectorAll('.category-card');
    categoryLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            // Remove existing year parameter if any
            const baseHref = href.split('?')[0];
            // Add new year parameter
            link.setAttribute('href', `${baseHref}?year=${year}`);
        }
    });
}
