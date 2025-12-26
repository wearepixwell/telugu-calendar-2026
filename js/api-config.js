// API Configuration
const API_CONFIG = {
    // Base URL for the Telugu Calendar API
    BASE_URL: 'http://localhost:8000',

    // Endpoints
    ENDPOINTS: {
        PANCHANGAM: '/panchangam',
        PANCHANGAM_RANGE: '/panchangam/range',
        PANCHANGAM_MONTH: '/panchangam/month',
        PANCHANGAM_YEAR: '/panchangam/year',
        MUHURTAM: '/muhurtam',
        MUHURTAM_ALL: '/muhurtam/all',
        LOCATIONS: '/locations'
    },

    // Location mapping from frontend keys to API keys
    LOCATION_MAP: {
        'amaravati': 'amaravati',
        'hyderabad': 'hyderabad',
        'atlanta': 'atlanta',
        'chicago': 'chicago',
        'newark': 'newark',
        'newyork': 'newyork',
        'phoenix': 'phoenix',
        'sanfrancisco': 'sanfrancisco',
        'losangeles': 'losangeles',
        'toronto': 'toronto',
        'london': 'london',
        'auckland': 'auckland',
        'sydney': 'sydney',
        'capetown': 'capetown',
        'riyadh': 'riyadh',
        'dubai': 'dubai',
        'singapore': 'singapore',
        'kualalumpur': 'kualalumpur'
    }
};

// API Service
const APIService = {
    /**
     * Get Panchangam for a single date
     */
    async getPanchangam(date, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PANCHANGAM}?date=${date}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching Panchangam:', error);
            throw error;
        }
    },

    /**
     * Get Panchangam for a date range
     */
    async getPanchangamRange(startDate, endDate, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PANCHANGAM_RANGE}?start_date=${startDate}&end_date=${endDate}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching Panchangam range:', error);
            throw error;
        }
    },

    /**
     * Get Panchangam for a month
     */
    async getPanchangamMonth(year, month, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PANCHANGAM_MONTH}?year=${year}&month=${month}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching month Panchangam:', error);
            throw error;
        }
    },

    /**
     * Get Panchangam for a year
     */
    async getPanchangamYear(year, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PANCHANGAM_YEAR}?year=${year}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching year Panchangam:', error);
            throw error;
        }
    },

    /**
     * Get list of available locations
     */
    async getLocations() {
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOCATIONS}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching locations:', error);
            throw error;
        }
    },

    /**
     * Get Muhurtam dates for a specific type, year, and location
     */
    async getMuhurtam(year, muhurtamType, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MUHURTAM}?year=${year}&muhurtam_type=${muhurtamType}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching Muhurtam:', error);
            throw error;
        }
    },

    /**
     * Get all Muhurtam types for a specific year and location
     */
    async getMuhurtamAll(year, location) {
        const apiLocation = API_CONFIG.LOCATION_MAP[location] || location;
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MUHURTAM_ALL}?year=${year}&location=${apiLocation}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching all Muhurtam data:', error);
            throw error;
        }
    }
};

// Export for use in other scripts
window.APIService = APIService;
window.API_CONFIG = API_CONFIG;
