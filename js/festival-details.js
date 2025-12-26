// Festival Details - Complete Implementation
// This file loads basic festival data AND adds detailed content sections

// Get URL parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load basic festival data and populate the page
async function loadBasicFestivalData(festivalId) {
    try {
        const response = await fetch('data/festivals-2026.json');
        const festivalsData = await response.json();

        const festival = festivalsData[festivalId];

        if (!festival) {
            document.getElementById('festival-content').innerHTML = '<p>Festival not found.</p>';
            return null;
        }

        // Update page title
        document.title = `${festival.name} - Telugu Calendar 2026`;

        // Update date and time section
        document.getElementById('festival-full-date').textContent = festival.name;
        const dateObj = new Date(festival.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('festival-day-time').textContent = formattedDate;

        // Update Panchangam information
        document.getElementById('festival-tithi').textContent = festival.tithi || 'N/A';
        document.getElementById('festival-nakshatra').textContent = festival.nakshatra || 'N/A';
        document.getElementById('festival-masa').textContent = festival.masa || 'N/A';
        document.getElementById('festival-paksha').textContent = festival.paksha || 'N/A';

        // Update description
        document.getElementById('festival-description').textContent = festival.description || '';

        // Update significance
        document.getElementById('festival-significance-text').textContent = festival.significance || '';

        // Update rituals list
        const ritualsList = document.getElementById('festival-rituals-list');
        if (festival.rituals && festival.rituals.length > 0) {
            ritualsList.innerHTML = festival.rituals.map(ritual => `<li>${ritual}</li>`).join('');
        } else {
            ritualsList.innerHTML = '<li>Ritual information coming soon.</li>';
        }

        // Update celebration text
        document.getElementById('festival-celebration-text').textContent = festival.celebration || '';

        return festival;
    } catch (error) {
        console.error('Error loading festival data:', error);
        document.getElementById('festival-content').innerHTML = '<p>Error loading festival information. Please try again later.</p>';
        return null;
    }
}

// Additional detailed content for specific festivals
const festivalDetailedContent = {
    'ugadi': `
        <!-- Ugadi Panchangam Section -->
        <section class="festival-detail-section">
            <h2>Ugadi 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Ugadi 2026 will help you perform puja at the most auspicious time:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Pratipada Tithi Begins</span>
                        <span class="info-value">March 20, 2026 at 08:32 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Pratipada Tithi Ends</span>
                        <span class="info-value">March 21, 2026 at 09:15 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Nakshatra</span>
                        <span class="info-value">Ashwini</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Best Time for Puja</span>
                        <span class="info-value">06:30 AM - 08:30 AM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Tip:</strong> It's considered highly auspicious to take an oil bath early morning and perform Ugadi puja during Brahma Muhurtam (approximately 1.5 hours before sunrise).</p>
            </div>
        </section>

        <!-- Ugadi Puja Vidhanam Section -->
        <section class="festival-detail-section">
            <h2>Ugadi Puja Vidhanam (Procedure)</h2>
            <div class="info-card">
                <h3>Step-by-Step Puja Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Oil Bath (Abhyanga Snanam):</strong> Wake up early, apply sesame oil all over your body, and take a holy bath before sunrise. This ritual cleanses the body and mind for the new year.</li>

                    <li><strong>Home Decoration:</strong> Clean your house thoroughly and decorate the entrance with fresh mango leaves (torana) and colorful rangoli designs.</li>

                    <li><strong>Prepare Puja Items:</strong>
                        <ul>
                            <li>Kalasham (sacred pot with water, mango leaves, and coconut)</li>
                            <li>Fresh flowers, turmeric, kumkum</li>
                            <li>Incense sticks and camphor</li>
                            <li>Fruits and new clothes</li>
                            <li>Ugadi Pachadi ingredients</li>
                        </ul>
                    </li>

                    <li><strong>Kalasha Sthapana:</strong> Place the kalasham in your puja room and invoke Lord Brahma, the creator, as Ugadi marks the day when Lord Brahma started creation.</li>

                    <li><strong>Puja Offerings:</strong> Offer flowers, fruits, and light incense while chanting mantras. Perform aarti with camphor.</li>

                    <li><strong>Panchanga Shravanam:</strong> Listen to the new year's Panchanga (almanac) being read, which predicts the year ahead based on astrological calculations.</li>

                    <li><strong>Ugadi Pachadi Prasadam:</strong> Prepare and offer Ugadi Pachadi to the deity, then distribute as prasadam to all family members.</li>

                    <li><strong>Charity (Danam):</strong> Donate food, clothes, or money to the needy. Giving charity on Ugadi is considered highly meritorious.</li>
                </ol>
            </div>
        </section>

        <!-- Ugadi Pachadi Section -->
        <section class="festival-detail-section">
            <h2>Ugadi Pachadi - The Six Tastes of Life</h2>
            <div class="info-card">
                <p>Ugadi Pachadi is a special dish prepared exclusively for Ugadi, symbolizing the six different tastes (shad ruchulu) and experiences of life:</p>

                <h3>Six Ingredients and Their Meanings:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>1. Neem Flowers (Vepaku)</h4>
                        <p><strong>Taste:</strong> Bitter</p>
                        <p><strong>Represents:</strong> Sadness and difficulties in life</p>
                    </div>

                    <div class="pachadi-item">
                        <h4>2. Jaggery (Bellam)</h4>
                        <p><strong>Taste:</strong> Sweet</p>
                        <p><strong>Represents:</strong> Happiness and joy</p>
                    </div>

                    <div class="pachadi-item">
                        <h4>3. Tamarind (Chintapandu)</h4>
                        <p><strong>Taste:</strong> Sour</p>
                        <p><strong>Represents:</strong> Challenges and unexpected events</p>
                    </div>

                    <div class="pachadi-item">
                        <h4>4. Green Chili (Mirapakaya)</h4>
                        <p><strong>Taste:</strong> Spicy/Hot</p>
                        <p><strong>Represents:</strong> Anger and frustration</p>
                    </div>

                    <div class="pachadi-item">
                        <h4>5. Salt (Uppu)</h4>
                        <p><strong>Taste:</strong> Salty</p>
                        <p><strong>Represents:</strong> Fears and anxieties</p>
                    </div>

                    <div class="pachadi-item">
                        <h4>6. Raw Mango (Mamidikaya)</h4>
                        <p><strong>Taste:</strong> Tangy</p>
                        <p><strong>Represents:</strong> Surprises and new experiences</p>
                    </div>
                </div>

                <p class="info-note"><strong>Life Lesson:</strong> Just as Ugadi Pachadi contains all six tastes, life brings all types of experiences. We should accept them with equanimity and gratitude, understanding that both sweet and bitter moments are essential for growth.</p>
            </div>
        </section>
    `,

    'makara-sankranti': `
        <!-- Three-Day Celebration -->
        <section class="festival-detail-section">
            <h2>The Three-Day Celebration</h2>
            <div class="info-card">
                <h3>Day 1: Bhogi (January 13)</h3>
                <p>Bhogi is the first day dedicated to Lord Indra, the god of rain and prosperity. It marks the discarding of old belongings and welcoming new possessions.</p>
                <ul class="significance-list">
                    <li><strong>Bhogi Mantalu:</strong> Old, unwanted items are burned in a bonfire symbolizing the end of the past and new beginnings</li>
                    <li><strong>House Cleaning:</strong> Homes are thoroughly cleaned and decorated with fresh rangoli and mango leaf torans</li>
                    <li><strong>Special Preparations:</strong> Families prepare for the main Sankranti celebrations</li>
                </ul>

                <h3>Day 2: Sankranti/Pongal (January 14)</h3>
                <p>The main day when the Sun enters Makara Rashi, marking the beginning of Uttarayana (Sun's northward journey).</p>
                <ul class="significance-list">
                    <li><strong>Surya Puja:</strong> Special prayers offered to the Sun God</li>
                    <li><strong>Pongal Preparation:</strong> The traditional sweet rice dish is cooked and offered to the deity</li>
                    <li><strong>New Clothes:</strong> Family members wear new traditional attire</li>
                    <li><strong>Rangoli Competitions:</strong> Elaborate colorful designs adorn the courtyards</li>
                </ul>

                <h3>Day 3: Kanuma (January 15)</h3>
                <p>The third day is dedicated to cattle and livestock, recognizing their contribution to agriculture and daily life.</p>
                <ul class="significance-list">
                    <li><strong>Cattle Worship:</strong> Cows and bulls are bathed, decorated with flowers, and worshipped</li>
                    <li><strong>Cock Fights:</strong> Traditional sport in some regions (though now restricted in many places)</li>
                    <li><strong>Family Gatherings:</strong> Relatives come together for feast and celebrations</li>
                </ul>
            </div>
        </section>

        <!-- Sankranti Panchangam Section -->
        <section class="festival-detail-section">
            <h2>Sankranti 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Makara Sankranti 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Sun Enters Makara</span>
                        <span class="info-value">January 14, 2026 at 02:40 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Uttarayana Begins</span>
                        <span class="info-value">January 14, 2026</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Best Puja Time</span>
                        <span class="info-value">07:00 AM - 12:00 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Charity Muhurtam</span>
                        <span class="info-value">Entire day auspicious</span>
                    </div>
                </div>
                <p class="info-note"><strong>Important:</strong> Taking a holy dip in sacred rivers like Godavari, Krishna, or the ocean is highly auspicious on Sankranti day. Charity done on this day yields manifold benefits.</p>
            </div>
        </section>

        <!-- Traditional Sankranti Foods -->
        <section class="festival-detail-section">
            <h2>Traditional Sankranti Delicacies</h2>
            <div class="info-card">
                <h3>Sweet Preparations:</h3>
                <ul class="celebration-list">
                    <li><strong>Pongal/Chakara Pongali:</strong> Sweet rice prepared with jaggery, moong dal, milk, ghee, cardamom, and cashews.</li>
                    <li><strong>Til Laddu:</strong> Sesame seed balls made with jaggery, extremely popular during Sankranti.</li>
                    <li><strong>Ariselu:</strong> Rice flour and jaggery deep-fried delicacy, a must-have in Telugu households.</li>
                    <li><strong>Bellam Garelu:</strong> Jaggery-coated fritters.</li>
                    <li><strong>Gavvalu:</strong> Shell-shaped deep-fried snack made with maida and sugar coating.</li>
                </ul>

                <h3>Savory Items:</h3>
                <ul class="celebration-list">
                    <li><strong>Pulihora:</strong> Tamarind rice offered to the deity.</li>
                    <li><strong>Ven Pongal:</strong> Savory rice preparation with pepper, cumin, and ghee.</li>
                    <li><strong>Garelu (Vada):</strong> Urad dal fritters.</li>
                    <li><strong>Murukku:</strong> Spiral-shaped savory snack.</li>
                </ul>

                <p class="info-note"><strong>Sharing Tradition:</strong> It's customary to share these delicacies with neighbors and friends, strengthening community bonds.</p>
            </div>
        </section>
    `,

    'maha-shivaratri': `
        <!-- Four Prahar Puja Times -->
        <section class="festival-detail-section">
            <h2>Shivaratri 2026 - Four Prahar Puja Timings</h2>
            <div class="info-card">
                <p>Maha Shivaratri night is divided into four prahars (quarters), each lasting approximately 3 hours. Devotees perform puja in all four prahars for maximum spiritual benefits:</p>

                <h3>1st Prahar Puja Time</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Timing</span>
                        <span class="info-value">06:32 PM - 09:44 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Offering</span>
                        <span class="info-value">Milk</span>
                    </div>
                </div>

                <h3>2nd Prahar Puja Time</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Timing</span>
                        <span class="info-value">09:44 PM - 12:56 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Offering</span>
                        <span class="info-value">Curd</span>
                    </div>
                </div>

                <h3>3rd Prahar Puja Time</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Timing</span>
                        <span class="info-value">12:56 AM - 04:08 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Offering</span>
                        <span class="info-value">Ghee</span>
                    </div>
                </div>

                <h3>4th Prahar Puja Time</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Timing</span>
                        <span class="info-value">04:08 AM - 07:20 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Offering</span>
                        <span class="info-value">Honey</span>
                    </div>
                </div>

                <p class="info-note"><strong>Nishita Kala (Most Auspicious):</strong> The midnight prahar (12:00 AM - 01:00 AM) is considered the most auspicious time for Shiva puja on Shivaratri.</p>
            </div>
        </section>

        <!-- Shivaratri Vratam Rules -->
        <section class="festival-detail-section">
            <h2>Shivaratri Vratam (Fasting) Rules</h2>
            <div class="info-card">
                <h3>Complete Fasting Rules:</h3>
                <ol class="puja-steps">
                    <li><strong>Begin the Fast:</strong> Start the fast from sunrise on Shivaratri day. Take an early morning bath before sunrise.</li>

                    <li><strong>No Food or Water:</strong> Strict observers abstain from both food and water for the entire day and night until the next morning.</li>

                    <li><strong>Partial Fasting Option:</strong> Those who cannot observe complete fast may consume:
                        <ul>
                            <li>Fruits (especially ber/jujube fruit)</li>
                            <li>Milk and milk products</li>
                            <li>Water and coconut water</li>
                            <li>Sabudana (tapioca pearls) preparations</li>
                        </ul>
                    </li>

                    <li><strong>Stay Awake (Jagarana):</strong> Devotees should stay awake the entire night chanting "Om Namah Shivaya" and performing puja.</li>

                    <li><strong>Break the Fast:</strong> The fast should be broken the next morning after sunrise, following completion of the 4th prahar puja.</li>

                    <li><strong>Items to Avoid:</strong> Grains, pulses, salt, onion, garlic, and tamasic food should be completely avoided.</li>
                </ol>

                <p class="info-note"><strong>For Special Groups:</strong> Children, elderly, pregnant women, and those with health conditions may observe a less strict fast or skip fasting after consulting family elders.</p>
            </div>
        </section>

        <!-- Shivaratri Mantras -->
        <section class="festival-detail-section">
            <h2>Important Shivaratri Mantras</h2>
            <div class="info-card">
                <h3>Panchakshari Mantra (Most Important):</h3>
                <div class="mantra-box">
                    <p class="mantra-text">ॐ नमः शिवाय</p>
                    <p class="mantra-transliteration">Om Namah Shivaya</p>
                    <p>This five-syllable mantra is the most powerful Shiva mantra. Chant it 108 times or throughout the night.</p>
                </div>

                <h3>Maha Mrityunjaya Mantra:</h3>
                <div class="mantra-box">
                    <p class="mantra-text">ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्</p>
                    <p class="mantra-text">उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्</p>
                    <p class="mantra-transliteration">Om Tryambakam Yajamahe Sugandhim Pushtivardhanam</p>
                    <p class="mantra-transliteration">Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat</p>
                    <p>This mantra is chanted for protection, health, and liberation from death and diseases.</p>
                </div>

                <p class="info-note"><strong>Chanting Tips:</strong> Sit in a comfortable position, use a rudraksha mala for counting, and chant with devotion and concentration. The quality of devotion matters more than the quantity of chanting.</p>
            </div>
        </section>
    `,

    'rama-navami': `
        <!-- Rama Navami Panchangam Section -->
        <section class="festival-detail-section">
            <h2>Rama Navami 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Sri Rama Navami 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Navami Tithi Begins</span>
                        <span class="info-value">April 1, 2026 at 01:23 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Navami Tithi Ends</span>
                        <span class="info-value">April 2, 2026 at 03:14 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Best Puja Time</span>
                        <span class="info-value">11:00 AM - 01:30 PM (Abhijit Muhurta)</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Rama Janma Time</span>
                        <span class="info-value">12:15 PM (Madhyahna Kala)</span>
                    </div>
                </div>
                <p class="info-note"><strong>Note:</strong> Lord Rama is believed to have been born at midday during Punarvasu Nakshatra. Performing puja during this time is considered most auspicious.</p>
            </div>
        </section>

        <!-- Rama Navami Puja Procedure -->
        <section class="festival-detail-section">
            <h2>Rama Navami Puja Vidhanam</h2>
            <div class="info-card">
                <h3>Step-by-Step Puja Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Morning Preparations:</strong> Wake up early, take a bath, and wear clean traditional clothes. Clean the puja room and prepare all puja items.</li>

                    <li><strong>Puja Items Required:</strong>
                        <ul>
                            <li>Rama idol or picture with Sita, Lakshmana, and Hanuman</li>
                            <li>Tulsi leaves (sacred basil)</li>
                            <li>Fresh flowers (preferably jasmine)</li>
                            <li>Fruits and panchamritam (milk, curd, ghee, honey, sugar)</li>
                            <li>Incense sticks, camphor, and oil lamp</li>
                            <li>Yellow cloth for the deity</li>
                        </ul>
                    </li>

                    <li><strong>Kalasha Sthapana:</strong> Install a kalasham with water, mango leaves, and coconut in the puja area.</li>

                    <li><strong>Rama Abhishekam:</strong> Perform abhishekam to Lord Rama's idol with panchamritam while chanting "Sri Rama Jaya Rama Jaya Jaya Rama" mantra.</li>

                    <li><strong>Alankaram (Decoration):</strong> Dress the deity with yellow cloth, offer tulsi garland, and decorate with fresh flowers.</li>

                    <li><strong>Ramayana Parayanam:</strong> Read or listen to the Bala Kanda (birth chapter) of Ramayana, especially the section describing Rama's birth.</li>

                    <li><strong>Bhajans and Kirtans:</strong> Sing devotional songs glorifying Lord Rama's qualities and divine plays.</li>

                    <li><strong>Aarti and Prasadam:</strong> Perform aarti at noon (birth time) and distribute prasadam to family and neighbors.</li>

                    <li><strong>Fasting:</strong> Those observing fast can break it after the noon puja with prasadam and sattvic food.</li>
                </ol>
            </div>
        </section>

        <!-- Ramayana Teachings -->
        <section class="festival-detail-section">
            <h2>Life Lessons from Lord Rama</h2>
            <div class="info-card">
                <h3>Rama's Ideal Qualities:</h3>
                <ul class="significance-list">
                    <li><strong>Truthfulness (Satya):</strong> Rama never broke his word, even when it meant personal sacrifice. He went into exile to honor his father's promise.</li>
                    <li><strong>Dharma:</strong> Always followed righteous path regardless of personal cost, setting example as the ideal king (Maryada Purushottama).</li>
                    <li><strong>Devotion to Parents:</strong> Showed unwavering respect and obedience to parents, considering their word as sacred.</li>
                    <li><strong>Ideal Husband:</strong> Demonstrated loyalty and devotion to Sita, representing the ideal marital relationship.</li>
                    <li><strong>Brotherhood:</strong> Maintained loving relationships with his brothers, especially Lakshmana who accompanied him in exile.</li>
                    <li><strong>Humility:</strong> Despite being God incarnate and powerful warrior, remained humble and treated everyone with respect.</li>
                    <li><strong>Justice:</strong> As king, treated all subjects equally and ruled with fairness and compassion.</li>
                </ul>
                <p class="info-note"><strong>Rama Rajya:</strong> The rule of Lord Rama represents the golden age of governance where dharma prevailed, people were happy, and there was prosperity for all.</p>
            </div>
        </section>

        <!-- Ram Navami Celebrations -->
        <section class="festival-detail-section">
            <h2>How Rama Navami is Celebrated</h2>
            <div class="info-card">
                <h3>Temple Celebrations:</h3>
                <ul class="celebration-list">
                    <li><strong>Rama Kalyanam:</strong> Many temples perform the celestial wedding ceremony of Rama and Sita</li>
                    <li><strong>Shobha Yatra:</strong> Grand processions with decorated chariots carrying Rama's idol through streets</li>
                    <li><strong>Continuous Ramayana Recitation:</strong> Nine-day long recitation leading up to Rama Navami</li>
                    <li><strong>Free Prasadam:</strong> Distribution of sweet prasadam and food to devotees</li>
                </ul>

                <h3>Home Celebrations:</h3>
                <ul class="celebration-list">
                    <li><strong>Cradle Ceremony:</strong> Baby Rama is placed in a decorated cradle and devotees take turns rocking it</li>
                    <li><strong>Reading Ramayana:</strong> Families gather to read and discuss Ramayana stories</li>
                    <li><strong>Traditional Food:</strong> Special dishes like panakam (jaggery drink), kosambari, and sweet rice are prepared</li>
                    <li><strong>Charity:</strong> Feeding the poor and donating to temples is considered highly meritorious</li>
                </ul>
            </div>
        </section>
    `,

    'hanuman-jayanti': `
        <!-- Hanuman Jayanti Panchangam -->
        <section class="festival-detail-section">
            <h2>Hanuman Jayanti 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Hanuman Jayanti 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Purnima Tithi Begins</span>
                        <span class="info-value">April 7, 2026 at 07:43 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Purnima Tithi Ends</span>
                        <span class="info-value">April 8, 2026 at 08:46 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Best Puja Time</span>
                        <span class="info-value">06:00 AM - 09:00 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Moonrise</span>
                        <span class="info-value">06:42 PM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Special:</strong> Hanuman Jayanti on Chaitra Purnima is considered especially auspicious. Visiting Hanuman temples and chanting Hanuman Chalisa 108 times brings immense blessings.</p>
            </div>
        </section>

        <!-- Hanuman Chalisa Significance -->
        <section class="festival-detail-section">
            <h2>Hanuman Chalisa - The Sacred 40 Verses</h2>
            <div class="info-card">
                <p>Hanuman Chalisa, composed by Saint Tulsidas, consists of 40 verses (Chalis = 40) praising Lord Hanuman's qualities and accomplishments.</p>

                <h3>Benefits of Reciting Hanuman Chalisa:</h3>
                <ul class="significance-list">
                    <li><strong>Protection from Evil:</strong> Creates a protective shield against negative energies and evil spirits</li>
                    <li><strong>Removes Obstacles:</strong> Helps overcome difficulties and challenges in life</li>
                    <li><strong>Courage and Strength:</strong> Instills fearlessness and physical/mental strength</li>
                    <li><strong>Disease Prevention:</strong> Regular recitation is believed to prevent ailments and promote good health</li>
                    <li><strong>Success in Endeavors:</strong> Brings success in education, career, and personal goals</li>
                    <li><strong>Spiritual Growth:</strong> Enhances devotion and brings one closer to Lord Rama</li>
                </ul>

                <div class="mantra-box">
                    <h4>How to Recite Hanuman Chalisa:</h4>
                    <ol>
                        <li>Take bath and sit facing east or north</li>
                        <li>Light an oil lamp and incense</li>
                        <li>Offer sindoor and jasmine flowers to Hanuman's image</li>
                        <li>Recite with devotion and concentration</li>
                        <li>On Jayanti day, recite 108 times for maximum benefits</li>
                        <li>Offer laddus or bananas as prasadam</li>
                    </ol>
                </div>
            </div>
        </section>

        <!-- Hanuman's Powers and Qualities -->
        <section class="festival-detail-section">
            <h2>Hanuman's Divine Powers (Siddhis)</h2>
            <div class="info-card">
                <h3>The Eight Siddhis:</h3>
                <p>Lord Hanuman is blessed with Ashta Siddhis (eight supernatural powers):</p>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>1. Anima</h4>
                        <p>Ability to reduce size to the smallest (entered Lanka as tiny fly)</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>2. Mahima</h4>
                        <p>Ability to increase size infinitely (grew huge to cross ocean)</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>3. Garima</h4>
                        <p>Ability to become infinitely heavy (carried Dronagiri mountain)</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>4. Laghima</h4>
                        <p>Ability to become weightless (leaped across ocean to Lanka)</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>5. Prapti</h4>
                        <p>Ability to go anywhere instantly</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>6. Prakamya</h4>
                        <p>Ability to fulfill all desires</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>7. Ishitva</h4>
                        <p>Supreme lordship and authority</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>8. Vashitva</h4>
                        <p>Control over all living beings</p>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Hanuman's Key Qualities:</h3>
                <ul class="significance-list">
                    <li><strong>Param Bhakt:</strong> Supreme devotee of Lord Rama, representing ideal devotion</li>
                    <li><strong>Brahmachari:</strong> Celibate, channeling all energy into divine service</li>
                    <li><strong>Chiranjeevi:</strong> Immortal being who still exists to help devotees</li>
                    <li><strong>Sankat Mochan:</strong> Remover of difficulties and obstacles</li>
                    <li><strong>Vidya Buddhi:</strong> Possesses supreme knowledge and intelligence</li>
                </ul>
            </div>
        </section>

        <!-- Hanuman Jayanti Observances -->
        <section class="festival-detail-section">
            <h2>Special Observances on Hanuman Jayanti</h2>
            <div class="info-card">
                <h3>Traditional Practices:</h3>
                <ul class="celebration-list">
                    <li><strong>Sundarakanda Parayanam:</strong> Reading the Sundara Kanda chapter of Ramayana where Hanuman's exploits in Lanka are described</li>
                    <li><strong>Sindoor Application:</strong> Applying red sindoor to Hanuman idol as it's his favorite offering</li>
                    <li><strong>Oil Bath to Idol:</strong> Many temples perform abhishekam with sesame oil</li>
                    <li><strong>Distribution of Prasadam:</strong> Offering and distributing laddus (Hanuman's favorite sweet), bananas, and betel leaves</li>
                    <li><strong>Physical Fitness Events:</strong> Wrestling bouts and strength competitions in honor of Hanuman's strength</li>
                    <li><strong>Fasting:</strong> Many devotees observe fast, consuming only fruits and milk</li>
                    <li><strong>Continuous Chanting:</strong> Hanuman Chalisa recitation continuing throughout the day</li>
                </ul>

                <p class="info-note"><strong>Special Practice:</strong> Visiting 7 or 11 Hanuman temples on Jayanti day is considered highly auspicious and brings manifold blessings.</p>
            </div>
        </section>
    `,

    'krishna-janmashtami': `
        <!-- Janmashtami Panchangam -->
        <section class="festival-detail-section">
            <h2>Krishna Janmashtami 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Krishna Janmashtami 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Ashtami Tithi Begins</span>
                        <span class="info-value">August 21, 2026 at 03:21 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Ashtami Tithi Ends</span>
                        <span class="info-value">August 22, 2026 at 05:43 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Nishita Kala Puja (Midnight)</span>
                        <span class="info-value">11:57 PM - 12:42 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Rohini Nakshatra Time</span>
                        <span class="info-value">August 22, 12:15 AM - 1:30 AM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Important:</strong> Lord Krishna was born at midnight during Rohini Nakshatra. The birth celebration (Janmashtami puja) should be performed during Nishita Kala when both Ashtami and Rohini prevail.</p>
            </div>
        </section>

        <!-- Janmashtami Puja Procedure -->
        <section class="festival-detail-section">
            <h2>Janmashtami Puja Vidhanam</h2>
            <div class="info-card">
                <h3>Complete Day Observance:</h3>
                <ol class="puja-steps">
                    <li><strong>Morning Preparations:</strong> Take bath early morning, clean the house, and set up the puja area. Decorate with flowers, peacock feathers, and rangoli.</li>

                    <li><strong>Fasting:</strong> Observe complete fast (nirjala) or consume only fruits and milk throughout the day. Fast is broken only after midnight puja.</li>

                    <li><strong>Cradle Decoration:</strong>
                        <ul>
                            <li>Prepare a beautiful cradle (jhula) for baby Krishna</li>
                            <li>Decorate with flowers, peacock feathers, and lights</li>
                            <li>Place soft cloth and cushions in the cradle</li>
                        </ul>
                    </li>

                    <li><strong>Evening Preparations:</strong> Arrange puja items - idol of baby Krishna, butter, milk sweets, tulsi leaves, flowers, incense, camphor.</li>

                    <li><strong>Midnight Celebration (Most Important):</strong>
                        <ul>
                            <li>At midnight, blow conch shells and ring temple bells</li>
                            <li>Perform abhishekam to baby Krishna with panchamritam</li>
                            <li>Dress the deity in new clothes and ornaments</li>
                            <li>Place baby Krishna in the decorated cradle</li>
                            <li>Rock the cradle while singing lullabies</li>
                        </ul>
                    </li>

                    <li><strong>Bhajans and Kirtans:</strong> Sing devotional songs celebrating Krishna's birth, especially "Govinda Ala Re Ala" and "Krishna Krishna Mukunda Janardana."</li>

                    <li><strong>Aarti:</strong> Perform aarti with ghee lamps and offer butter, makhan mishri, and favorite foods of Krishna.</li>

                    <li><strong>Prasadam Distribution:</strong> After midnight puja, break fast with prasadam and distribute to family and devotees.</li>

                    <li><strong>Stay Awake:</strong> Many devotees stay awake entire night in devotion, singing bhajans and narrating Krishna's leelas.</li>
                </ol>
            </div>
        </section>

        <!-- Krishna's Birth Story -->
        <section class="festival-detail-section">
            <h2>The Divine Birth of Krishna</h2>
            <div class="info-card">
                <h3>The Miraculous Birth:</h3>
                <p>Lord Krishna was born in a prison cell in Mathura to Devaki and Vasudeva. His maternal uncle, the tyrant king Kansa, had imprisoned them after a prophecy predicted that Devaki's eighth son would kill him.</p>

                <h3>Divine Events at Birth:</h3>
                <ul class="significance-list">
                    <li><strong>Divine Form Darshan:</strong> At birth, Krishna revealed his four-armed Vishnu form with conch, discus, mace, and lotus to his parents</li>
                    <li><strong>Vasudeva's Journey:</strong> Miraculously, Krishna's chains broke, prison doors opened, and guards fell asleep</li>
                    <li><strong>Crossing Yamuna:</strong> The turbulent Yamuna River parted to let Vasudeva cross with baby Krishna</li>
                    <li><strong>Adishesha Protection:</strong> The serpent Adishesha protected baby Krishna from rain with his hood</li>
                    <li><strong>Exchange at Gokul:</strong> Vasudeva exchanged Krishna with Yashoda's newborn daughter (Yoga Maya)</li>
                </ul>

                <p class="info-note"><strong>Symbolic Meaning:</strong> Krishna's birth in prison symbolizes the soul trapped in material existence, and his escape represents liberation through divine grace.</p>
            </div>
        </section>

        <!-- Krishna Leelas and Teachings -->
        <section class="festival-detail-section">
            <h2>Krishna's Divine Plays (Leelas)</h2>
            <div class="info-card">
                <h3>Famous Leelas from Krishna's Life:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Childhood Leelas</h4>
                        <p><strong>Makhan Chor:</strong> Stealing butter from gopis' homes</p>
                        <p><strong>Govardhan Lifting:</strong> Lifted mountain to protect villagers</p>
                        <p><strong>Kaliya Daman:</strong> Subdued the serpent Kaliya</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Youth and Love</h4>
                        <p><strong>Raas Leela:</strong> Divine dance with gopis</p>
                        <p><strong>Radha Krishna:</strong> Eternal divine love</p>
                        <p><strong>Flute Music:</strong> Enchanting all with divine melody</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Later Life</h4>
                        <p><strong>Bhagavad Gita:</strong> Teaching dharma to Arjuna</p>
                        <p><strong>Mahabharata:</strong> Guiding Pandavas</p>
                        <p><strong>Vishwarupa:</strong> Showing cosmic form</p>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Key Teachings of Krishna:</h3>
                <ul class="significance-list">
                    <li><strong>Karma Yoga:</strong> Perform your duty without attachment to results</li>
                    <li><strong>Bhakti:</strong> Pure devotion is the highest path to realization</li>
                    <li><strong>Dharma:</strong> Always choose righteousness over personal gain</li>
                    <li><strong>Detachment:</strong> Be in the world but not of it</li>
                    <li><strong>Surrender:</strong> Complete surrender to divine will brings peace</li>
                </ul>
            </div>
        </section>

        <!-- Dahi Handi Celebration -->
        <section class="festival-detail-section">
            <h2>Dahi Handi - The Joyous Tradition</h2>
            <div class="info-card">
                <p>Dahi Handi is celebrated especially in Maharashtra on the day after Janmashtami, commemorating Krishna's love for butter and curd.</p>

                <h3>The Celebration:</h3>
                <ul class="celebration-list">
                    <li><strong>Pot Preparation:</strong> Clay pots (handi) filled with curd, butter, dry fruits, and coins are hung at heights</li>
                    <li><strong>Human Pyramid:</strong> Teams called "Govindas" form human pyramids to reach and break the pot</li>
                    <li><strong>Competition:</strong> Various teams compete with music, dance, and enthusiasm</li>
                    <li><strong>Prizes:</strong> Winning team receives cash prizes and recognition</li>
                    <li><strong>Community Spirit:</strong> Brings communities together in joyous celebration</li>
                </ul>

                <p class="info-note"><strong>Symbolism:</strong> Dahi Handi represents teamwork, determination, and the reward that comes from united effort - reflecting Krishna's message of cooperation in the Bhagavad Gita.</p>
            </div>
        </section>
    `,

    'vinayaka-chavithi': `
        <!-- Vinayaka Chavithi Panchangam -->
        <section class="festival-detail-section">
            <h2>Vinayaka Chavithi 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Vinayaka Chavithi 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Chaturthi Tithi Begins</span>
                        <span class="info-value">August 28, 2026 at 12:38 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Chaturthi Tithi Ends</span>
                        <span class="info-value">August 29, 2026 at 02:15 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Madhyahna Puja Time</span>
                        <span class="info-value">11:12 AM - 01:40 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Moon Rise (Avoid Viewing)</span>
                        <span class="info-value">07:45 PM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Important:</strong> Avoid looking at the moon on Chavithi day as it's believed to bring false accusations (based on the story of Krishna and Syamantaka jewel). Madhyahna Kala (midday) is most auspicious for Ganesh puja.</p>
            </div>
        </section>

        <!-- Ganesh Sthapana Procedure -->
        <section class="festival-detail-section">
            <h2>Ganesh Sthapana Vidhanam</h2>
            <div class="info-card">
                <h3>Complete Installation Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Choosing the Idol:</strong>
                        <ul>
                            <li>Select eco-friendly clay idol (avoid plaster of paris)</li>
                            <li>Choose appropriate size for your home/pandal</li>
                            <li>Traditionally, odd numbers (1, 3, 5, 7, 11 days) are chosen for worship duration</li>
                        </ul>
                    </li>

                    <li><strong>Preparing Puja Space:</strong>
                        <ul>
                            <li>Clean the area thoroughly</li>
                            <li>Create a raised platform (peetham) with decorative cloth</li>
                            <li>Draw auspicious symbols and rangoli</li>
                            <li>Arrange flowers, lights, and decorations</li>
                        </ul>
                    </li>

                    <li><strong>Pranapratishtha (Invoking Life):</strong>
                        <ul>
                            <li>Place Ganesha idol on the platform</li>
                            <li>Chant Ganapati Atharvashirsha or Ganesh mantras</li>
                            <li>Invoke Lord Ganesha to reside in the idol</li>
                            <li>Perform Shodashopachar puja (16-step worship)</li>
                        </ul>
                    </li>

                    <li><strong>Abhishekam:</strong> Bathe the idol with panchamritam (milk, curd, ghee, honey, sugar), then with water, followed by coconut water.</li>

                    <li><strong>Alankaram:</strong>
                        <ul>
                            <li>Dress Ganesha with red/yellow cloth</li>
                            <li>Apply chandan and kumkum</li>
                            <li>Offer fresh flowers, especially durva grass</li>
                            <li>Decorate with ornaments and jewelry</li>
                        </ul>
                    </li>

                    <li><strong>Naivedyam (Food Offering):</strong>
                        <ul>
                            <li>Modakam (sweet dumplings - Ganesha's favorite)</li>
                            <li>Undrallu (steamed rice flour balls)</li>
                            <li>Fruits, especially bananas</li>
                            <li>Laddus and other sweets</li>
                        </ul>
                    </li>

                    <li><strong>Daily Puja:</strong> Perform morning and evening aarti daily, offering fresh flowers and favorite foods.</li>

                    <li><strong>Ekavimshati Patram:</strong> Offer 21 types of leaves/flowers while chanting respective mantras - considered highly auspicious.</li>
                </ol>
            </div>
        </section>

        <!-- Ganesha Birth Story -->
        <section class="festival-detail-section">
            <h2>The Story of Ganesha's Birth</h2>
            <div class="info-card">
                <h3>How Ganesha Got His Elephant Head:</h3>
                <p>The most popular legend describes how young Ganesha was created by Goddess Parvati from sandalwood paste to guard her chambers while she bathed.</p>

                <h3>The Divine Sequence:</h3>
                <ul class="significance-list">
                    <li><strong>Creation:</strong> Parvati created a boy from turmeric/sandalwood paste and gave him life</li>
                    <li><strong>The Guard:</strong> She asked him to guard the door and not let anyone enter</li>
                    <li><strong>Shiva's Arrival:</strong> Lord Shiva returned and the boy, not knowing him, stopped him from entering</li>
                    <li><strong>The Battle:</strong> Enraged, Shiva severed the boy's head in the ensuing battle</li>
                    <li><strong>Parvati's Grief:</strong> Parvati was heartbroken and demanded her son's return</li>
                    <li><strong>Divine Solution:</strong> Shiva sent his ganas to bring the head of the first creature they found</li>
                    <li><strong>Elephant Head:</strong> They returned with an elephant's head, which Shiva placed on the boy</li>
                    <li><strong>Blessings:</strong> Shiva blessed him as Ganapati (leader of ganas) and declared he'd be worshipped first in all rituals</li>
                </ul>

                <p class="info-note"><strong>Symbolic Meaning:</strong> The elephant head represents wisdom, the large ears symbolize listening ability, small eyes denote concentration, and the trunk signifies adaptability.</p>
            </div>
        </section>

        <!-- Modakam Significance -->
        <section class="festival-detail-section">
            <h2>Modakam - Ganesha's Favorite Offering</h2>
            <div class="info-card">
                <p>Modakam (modak) is the sweet dumpling that Lord Ganesha loves most. It's traditionally offered in groups of 21.</p>

                <h3>Types of Modakam:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Ukadiche Modak</h4>
                        <p><strong>Type:</strong> Steamed</p>
                        <p>Rice flour covering with coconut-jaggery filling. Considered most traditional and auspicious.</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Fried Modak</h4>
                        <p><strong>Type:</strong> Deep-fried</p>
                        <p>Crispy outer shell with sweet filling. Popular for its longer shelf life.</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Chocolate Modak</h4>
                        <p><strong>Type:</strong> Modern</p>
                        <p>Contemporary version using chocolate. Popular among children and youngsters.</p>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Spiritual Significance:</h3>
                <p>The modak's shape represents the ultimate sweet reward (moksha) of spiritual practice. The outer covering (maya/illusion) must be broken to reach the sweet core (divine bliss).</p>

                <p class="info-note"><strong>Offering Practice:</strong> Offer 21 modaks to Ganesha while chanting "Modakam Satatam Devam" - this brings prosperity, wisdom, and removes obstacles.</p>
            </div>
        </section>

        <!-- Visarjan Procedure -->
        <section class="festival-detail-section">
            <h2>Ganesh Visarjan (Immersion Ceremony)</h2>
            <div class="info-card">
                <h3>The Farewell Ritual:</h3>
                <p>On the final day of worship (1st, 3rd, 5th, 7th, or 11th day), the idol is taken in procession for immersion in a water body.</p>

                <h3>Visarjan Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Final Puja:</strong> Perform elaborate puja with all offerings one last time</li>
                    <li><strong>Seek Forgiveness:</strong> Ask Ganesha's forgiveness for any mistakes in worship</li>
                    <li><strong>Request Return:</strong> Pray for his return next year: "Ganapati Bappa Morya, Purchya Varshi Lavkar Ya"</li>
                    <li><strong>Procession:</strong> Take the idol in procession with music, dance, and drums</li>
                    <li><strong>Immersion:</strong> Immerse the idol in river, lake, or sea while chanting mantras</li>
                    <li><strong>Eco-Friendly Practice:</strong> Use eco-friendly idols that dissolve easily without harming aquatic life</li>
                    <li><strong>Home Immersion:</strong> For those unable to reach water bodies, immerse in a bucket and use the water for plants</li>
                </ol>

                <p class="info-note"><strong>Symbolism:</strong> Visarjan represents the cycle of creation and dissolution, reminding us that everything in the material world is temporary, and we should focus on the eternal spiritual reality.</p>
            </div>
        </section>
    `,

    'dasara': `
        <!-- Dasara Panchangam -->
        <section class="festival-detail-section">
            <h2>Dasara 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Vijayadashami 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Dashami Tithi Begins</span>
                        <span class="info-value">October 12, 2026 at 02:18 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Dashami Tithi Ends</span>
                        <span class="info-value">October 13, 2026 at 12:47 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Vijay Muhurat</span>
                        <span class="info-value">02:05 PM - 02:51 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Aparahna Puja Time</span>
                        <span class="info-value">01:22 PM - 03:38 PM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Special:</strong> Vijay Muhurat on Dashami is extremely auspicious for starting new ventures, learning, and important decisions. The afternoon time (Aparahna Kala) is best for Saraswati and Ayudha puja.</p>
            </div>
        </section>

        <!-- Ayudha Puja Procedure -->
        <section class="festival-detail-section">
            <h2>Ayudha Puja - Worshipping Tools and Instruments</h2>
            <div class="info-card">
                <p>Ayudha Puja is the worship of all instruments, tools, vehicles, and implements that help us in our daily work and livelihood.</p>

                <h3>Items to Worship:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Tools & Equipment</h4>
                        <p>Hammers, saws, agricultural implements, cooking utensils, computers, machines</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Vehicles</h4>
                        <p>Cars, bikes, buses, trucks, tractors, and all modes of transport</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Books & Learning</h4>
                        <p>Books, musical instruments, art supplies, educational materials</p>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Puja Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Cleaning:</strong> Thoroughly clean all tools, vehicles, and equipment early morning</li>
                    <li><strong>Decoration:</strong> Decorate with flowers, mango leaves, and kumkum</li>
                    <li><strong>Gandham & Kumkum:</strong> Apply chandan and kumkum to tools</li>
                    <li><strong>Flower Offering:</strong> Offer fresh flowers while chanting mantras</li>
                    <li><strong>Aarti:</strong> Perform aarti to all implements</li>
                    <li><strong>Rest Day:</strong> Traditionally, tools are given rest on this day - no work is done using them</li>
                    <li><strong>Gratitude:</strong> Express gratitude for how these tools support your livelihood</li>
                </ol>

                <p class="info-note"><strong>Philosophy:</strong> Ayudha Puja teaches us to see divinity in all things that serve us. Every tool is an extension of divine energy helping us fulfill our dharma.</p>
            </div>
        </section>

        <!-- Saraswati Puja -->
        <section class="festival-detail-section">
            <h2>Saraswati Puja on Dasara</h2>
            <div class="info-card">
                <p>Dasara is highly auspicious for worshipping Goddess Saraswati, the deity of knowledge, arts, and learning.</p>

                <h3>Puja Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Book Arrangement:</strong> Gather all books, notebooks, and learning materials in puja room</li>
                    <li><strong>Cleaning:</strong> Clean books with a soft cloth respectfully</li>
                    <li><strong>Decoration:</strong> Arrange books neatly, decorate with flowers and turmeric-kumkum</li>
                    <li><strong>Saraswati Invocation:</strong> Invoke Goddess Saraswati with mantras</li>
                    <li><strong>Offerings:</strong> Offer white flowers, fruits, and sweets to Saraswati</li>
                    <li><strong>No Study Rule:</strong> Books are worshipped but not opened for study on this day</li>
                </ol>

                <h3>Vidyarambham Ceremony:</h3>
                <p>Vijayadashami is the most auspicious day to initiate children into learning (Aksharabhyasam/Vidyarambham).</p>
                <ul class="significance-list">
                    <li><strong>Age:</strong> Children aged 3-5 years are initiated</li>
                    <li><strong>Procedure:</strong> Guru/parent holds child's hand and helps write first letters</li>
                    <li><strong>Material:</strong> Writing is done on rice/sand spread on a plate</li>
                    <li><strong>Mantra:</strong> "Om Namah Shivaya" or "Om" is traditionally the first writing</li>
                    <li><strong>Blessing:</strong> Elders and teachers bless the child for successful learning journey</li>
                </ul>
            </div>
        </section>

        <!-- Navratri Connection -->
        <section class="festival-detail-section">
            <h2>Dasara - Culmination of Navratri</h2>
            <div class="info-card">
                <p>Dasara is the tenth day following nine nights of Navratri, during which Goddess Durga's nine forms are worshipped.</p>

                <h3>The Nine Days of Navratri:</h3>
                <div class="info-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 1:</strong> Shailaputri
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 2:</strong> Brahmacharini
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 3:</strong> Chandraghanta
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 4:</strong> Kushmanda
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 5:</strong> Skandamata
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 6:</strong> Katyayani
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 7:</strong> Kalaratri
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 8:</strong> Mahagauri
                    </div>
                    <div class="info-item" style="display: block; padding: 15px;">
                        <strong>Day 9:</strong> Siddhidatri
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Dasara Significance:</h3>
                <ul class="significance-list">
                    <li><strong>Victory of Durga:</strong> Celebrates Goddess Durga's victory over demon Mahishasura after 9 days of battle</li>
                    <li><strong>Rama's Victory:</strong> Commemorates Lord Rama's defeat of Ravana</li>
                    <li><strong>Pandavas' Weapons:</strong> Day Pandavas retrieved weapons from Shami tree after exile</li>
                    <li><strong>Symbol of Good Over Evil:</strong> Universal message that truth and righteousness always triumph</li>
                </ul>
            </div>
        </section>

        <!-- Apta Leaves Exchange -->
        <section class="festival-detail-section">
            <h2>Apta Leaves - The Gold Exchange Tradition</h2>
            <div class="info-card">
                <p>In Maharashtra and some regions, exchanging Apta (Bauhinia) leaves is a unique Dasara tradition.</p>

                <h3>The Legend:</h3>
                <p>It's believed that when Lord Rama needed gold for a ritual after defeating Ravana, he was given Apta leaves by a poor devotee. Rama blessed these leaves to be equivalent to gold.</p>

                <h3>The Practice:</h3>
                <ul class="celebration-list">
                    <li>Friends and family exchange Apta leaves symbolizing gold</li>
                    <li>While giving, people say "Sone ki Apati lelo" (Accept this gold Apta)</li>
                    <li>Represents wishing prosperity and good fortune</li>
                    <li>Symbolizes that true wealth lies in relationships, not material possessions</li>
                </ul>

                <h3>Shami Tree Worship:</h3>
                <p>The Shami tree (Prosopis cineraria) is worshipped on Dasara as it's believed to have sheltered the Pandavas' weapons during exile. Leaves and flowers from Shami tree are offered to Goddess Durga.</p>
            </div>
        </section>
    `,

    'dussehra': `
        <!-- Dussehra Panchangam (Same as Dasara) -->
        <section class="festival-detail-section">
            <h2>Dussehra 2026 Panchangam</h2>
            <div class="info-card">
                <p>Dussehra and Dasara are the same festival celebrated on Vijayadashami. Detailed Panchangam for 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Dashami Tithi Begins</span>
                        <span class="info-value">October 12, 2026 at 02:18 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Dashami Tithi Ends</span>
                        <span class="info-value">October 13, 2026 at 12:47 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Ravana Dahan Time</span>
                        <span class="info-value">After 6:00 PM (Sunset)</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Shami Tree Puja</span>
                        <span class="info-value">11:00 AM - 02:00 PM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Note:</strong> Ravana Dahan (burning of Ravana effigy) is traditionally performed in the evening after sunset, symbolizing the destruction of evil.</p>
            </div>
        </section>

        <!-- Ramayana Connection -->
        <section class="festival-detail-section">
            <h2>Dussehra - Celebrating Rama's Victory</h2>
            <div class="info-card">
                <p>Dussehra primarily celebrates Lord Rama's victory over the demon king Ravana, marking the triumph of dharma over adharma.</p>

                <h3>The Battle Story:</h3>
                <ul class="significance-list">
                    <li><strong>Sita's Abduction:</strong> Ravana kidnapped Sita from the forest and took her to Lanka</li>
                    <li><strong>Search and Discovery:</strong> Hanuman discovered Sita in Ashoka Vatika in Lanka</li>
                    <li><strong>Bridge to Lanka:</strong> Rama's army built a bridge (Ram Setu) across the ocean</li>
                    <li><strong>Epic Battle:</strong> Fierce 10-day battle between Rama's army and Ravana's forces</li>
                    <li><strong>Ravana's Death:</strong> Rama killed Ravana on Dashami day with a divine arrow</li>
                    <li><strong>Sita's Rescue:</strong> Sita was finally reunited with Rama</li>
                    <li><strong>Victory Celebration:</strong> The day came to be celebrated as Vijayadashami (Day of Victory)</li>
                </ul>

                <h3>Why Ravana Despite Being Learned Was Defeated:</h3>
                <ul class="significance-list">
                    <li><strong>Pride and Ego:</strong> Ravana's enormous ego led to his downfall</li>
                    <li><strong>Disrespect of Women:</strong> Abducting another man's wife was grave adharma</li>
                    <li><strong>Ignoring Good Counsel:</strong> Rejected advice from brother Vibhishana and wife Mandodari</li>
                    <li><strong>Knowledge Without Virtue:</strong> Possessed great learning but lacked moral character</li>
                </ul>

                <p class="info-note"><strong>Lesson:</strong> Dussehra teaches that no matter how powerful or learned evil may be, righteousness always prevails in the end. Knowledge without virtue leads to destruction.</p>
            </div>
        </section>

        <!-- Ram Leela Tradition -->
        <section class="festival-detail-section">
            <h2>Ram Leela - The Divine Drama</h2>
            <div class="info-card">
                <p>Ram Leela is a dramatic reenactment of Lord Rama's life story from the Ramayana, performed during the nine days of Navratri leading to Dussehra.</p>

                <h3>Ram Leela Performances:</h3>
                <ul class="celebration-list">
                    <li><strong>Duration:</strong> Typically performed for 9-10 days before Dussehra</li>
                    <li><strong>Venues:</strong> Open grounds, temples, and community spaces</li>
                    <li><strong>Participants:</strong> Local actors and artists volunteer to play roles</li>
                    <li><strong>Dialogues:</strong> Based on Ramayana, often using Ramcharitmanas verses</li>
                    <li><strong>Music:</strong> Traditional devotional songs and classical music accompany performances</li>
                    <li><strong>Finale:</strong> Culminates on Dussehra with Ravana Dahan scene</li>
                </ul>

                <h3>Major Ram Leela Centers in India:</h3>
                <ul class="significance-list">
                    <li><strong>Ramlila Maidan, Delhi:</strong> One of the largest and most famous Ram Leela venues</li>
                    <li><strong>Ramnagar, Varanasi:</strong> Month-long Ram Leela sponsored by Maharaja of Kashi</li>
                    <li><strong>Ayodhya:</strong> Special significance as birthplace of Lord Rama</li>
                    <li><strong>Various Cities:</strong> Every city and town has local Ram Leela performances</li>
                </ul>

                <p class="info-note"><strong>Cultural Impact:</strong> Ram Leela is not just entertainment but a powerful medium of moral education, teaching dharma, devotion, and righteous conduct through dramatic storytelling.</p>
            </div>
        </section>

        <!-- Ravana Dahan Ceremony -->
        <section class="festival-detail-section">
            <h2>Ravana Dahan - The Spectacular Finale</h2>
            <div class="info-card">
                <p>Ravana Dahan is the burning of large effigies of Ravana, his brother Kumbhakarna, and son Meghnad (Indrajit), marking the climax of Dussehra celebrations.</p>

                <h3>The Ceremony:</h3>
                <ol class="puja-steps">
                    <li><strong>Effigy Construction:</strong>
                        <ul>
                            <li>Large effigies (40-100 feet tall) built from bamboo and paper</li>
                            <li>Ravana depicted with 10 heads symbolizing his mastery of 10 directions</li>
                            <li>Filled with firecrackers for spectacular effect</li>
                        </ul>
                    </li>

                    <li><strong>The Procession:</strong>
                        <ul>
                            <li>Actor portraying Rama arrives with bow and arrow</li>
                            <li>Accompanied by Sita, Lakshmana, and Hanuman characters</li>
                            <li>Huge crowds gather to witness the event</li>
                        </ul>
                    </li>

                    <li><strong>The Burning:</strong>
                        <ul>
                            <li>Rama shoots a fire arrow at Ravana's effigy</li>
                            <li>Effigies burst into flames with loud crackers</li>
                            <li>Crowd cheers celebrating victory of good over evil</li>
                            <li>Symbolizes burning of evil tendencies within ourselves</li>
                        </ul>
                    </li>
                </ol>

                <h3>Inner Significance:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Ravana's 10 Heads</h4>
                        <p>Represent 10 vices: Kama (lust), Krodha (anger), Lobha (greed), Moha (attachment), Mada (pride), Matsarya (jealousy), Swartha (selfishness), Anyaya (injustice), Amanavta (cruelty), Ahankara (ego)</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Symbolic Burning</h4>
                        <p>Burning Ravana represents destroying these negative qualities within ourselves. External ritual reminds us of internal spiritual work.</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Victory Message</h4>
                        <p>No matter how strong evil appears, dharma and truth always triumph. Patience and righteousness lead to ultimate victory.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Dussehra Celebrations Across India -->
        <section class="festival-detail-section">
            <h2>Regional Dussehra Celebrations</h2>
            <div class="info-card">
                <h3>Diverse Celebrations Across India:</h3>
                <ul class="celebration-list">
                    <li><strong>Mysore Dasara (Karnataka):</strong> Grand celebration with procession of decorated elephants, cultural programs, and illumination of Mysore Palace. The royal sword is worshipped in special ceremony.</li>

                    <li><strong>Kullu Dussehra (Himachal Pradesh):</strong> Week-long celebration starting on Vijayadashami (opposite to rest of India). Procession of local deities and folk performances.</li>

                    <li><strong>Bastar Dussehra (Chhattisgarh):</strong> 75-day long festival with unique tribal traditions. Focus on Goddess Danteshwari rather than Rama-Ravana story.</li>

                    <li><strong>Kolkata (West Bengal):</strong> Culmination of Durga Puja celebrations. Immersion of Durga idols in river Hooghly with grand processions.</li>

                    <li><strong>Gujarat:</strong> Garba and Dandiya Raas dance performances for nine nights, ending with Dussehra celebrations.</li>

                    <li><strong>North India:</strong> Ram Leela performances and Ravana Dahan are the main features.</li>
                </ul>

                <p class="info-note"><strong>Unity in Diversity:</strong> Though celebrated differently across regions, Dussehra's core message of good triumphing over evil unites all of India in celebration.</p>
            </div>
        </section>
    `,

    'deepavali': `
        <!-- Deepavali Panchangam -->
        <section class="festival-detail-section">
            <h2>Deepavali 2026 Panchangam</h2>
            <div class="info-card">
                <p>Detailed Panchangam for Deepavali 2026:</p>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Amavasya Tithi Begins</span>
                        <span class="info-value">October 30, 2026 at 06:23 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Amavasya Tithi Ends</span>
                        <span class="info-value">October 31, 2026 at 05:17 PM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Abhyanga Snan Muhurat</span>
                        <span class="info-value">05:45 AM - 07:30 AM</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Lakshmi Puja Muhurat</span>
                        <span class="info-value">06:15 PM - 08:10 PM</span>
                    </div>
                </div>
                <p class="info-note"><strong>Important:</strong> The early morning oil bath (Abhyanga Snanam) before sunrise is extremely auspicious. Lakshmi Puja should be performed during Pradosh Kala (evening twilight) when both Amavasya and Sthira Lagna prevail.</p>
            </div>
        </section>

        <!-- Five Days of Deepavali -->
        <section class="festival-detail-section">
            <h2>Deepavali - The Five-Day Celebration</h2>
            <div class="info-card">
                <p>Deepavali is celebrated over five days, each with its own significance and rituals:</p>

                <h3>Day 1: Dhanteras (October 29)</h3>
                <ul class="significance-list">
                    <li><strong>Significance:</strong> Worship of Lord Dhanvantari (God of Ayurveda) and Goddess Lakshmi</li>
                    <li><strong>Rituals:</strong> Buying gold, silver, utensils, or new items is considered auspicious</li>
                    <li><strong>Traditions:</strong> Lighting diyas at entrance to ward off evil and invite prosperity</li>
                    <li><strong>Story:</strong> Commemorates emergence of Dhanvantari with pot of amrita during Samudra Manthan</li>
                </ul>

                <h3>Day 2: Naraka Chaturdashi / Choti Diwali (October 30)</h3>
                <ul class="significance-list">
                    <li><strong>Significance:</strong> Celebrates Krishna's victory over demon Narakasura</li>
                    <li><strong>Rituals:</strong> Early morning oil bath, lighting lamps in evening</li>
                    <li><strong>Traditions:</strong> Preparing sweets and savories for main Deepavali</li>
                    <li><strong>Abhyanga Snan:</strong> Special oil bath to purify body and mind</li>
                </ul>

                <h3>Day 3: Deepavali / Lakshmi Puja (October 31)</h3>
                <ul class="significance-list">
                    <li><strong>Significance:</strong> Main day celebrating Rama's return to Ayodhya, Lakshmi Puja</li>
                    <li><strong>Rituals:</strong> Lakshmi-Ganesha puja, lighting countless diyas, bursting crackers</li>
                    <li><strong>Traditions:</strong> Wearing new clothes, exchanging gifts and sweets</li>
                    <li><strong>Business:</strong> Starting new account books, closing old ledgers</li>
                </ul>

                <h3>Day 4: Govardhan Puja / Padwa (November 1)</h3>
                <ul class="significance-list">
                    <li><strong>Significance:</strong> Krishna lifting Govardhan mountain to protect villagers</li>
                    <li><strong>Rituals:</strong> Creating cow dung Govardhan mountain, offering food</li>
                    <li><strong>Traditions:</strong> Husband-wife exchange gifts, wife prays for husband's long life</li>
                    <li><strong>North India:</strong> Annakut (mountain of food) offered to Krishna</li>
                </ul>

                <h3>Day 5: Bhai Dooj (November 2)</h3>
                <ul class="significance-list">
                    <li><strong>Significance:</strong> Celebrating brother-sister bond</li>
                    <li><strong>Rituals:</strong> Sister applies tilak on brother's forehead, prays for his well-being</li>
                    <li><strong>Traditions:</strong> Brother gives gifts to sister, they share festive meal</li>
                    <li><strong>Legend:</strong> Yama (death god) visited his sister Yamuna on this day</li>
                </ul>
            </div>
        </section>

        <!-- Lakshmi Puja Procedure -->
        <section class="festival-detail-section">
            <h2>Lakshmi Puja Vidhanam</h2>
            <div class="info-card">
                <h3>Complete Puja Procedure:</h3>
                <ol class="puja-steps">
                    <li><strong>Preparation:</strong>
                        <ul>
                            <li>Clean house thoroughly, especially puja room</li>
                            <li>Decorate entrance with rangoli</li>
                            <li>Light diyas throughout the house</li>
                            <li>Keep all doors and windows open for Lakshmi's entry</li>
                        </ul>
                    </li>

                    <li><strong>Puja Setup:</strong>
                        <ul>
                            <li>Place new red cloth on puja platform</li>
                            <li>Install Lakshmi and Ganesha idols/pictures</li>
                            <li>Arrange coins, jewelry, account books</li>
                            <li>Keep kalash with water, mango leaves, and coconut</li>
                        </ul>
                    </li>

                    <li><strong>Ganesh Puja:</strong> First worship Lord Ganesha for obstacle-free puja</li>

                    <li><strong>Lakshmi Invocation:</strong>
                        <ul>
                            <li>Invoke Goddess Lakshmi with mantras</li>
                            <li>Offer lotus flowers (if available) or red flowers</li>
                            <li>Light incense and camphor</li>
                        </ul>
                    </li>

                    <li><strong>Wealth Worship:</strong>
                        <ul>
                            <li>Place gold/silver coins on puja plate</li>
                            <li>If doing business, place account books for blessing</li>
                            <li>Worship jewelry and valuables</li>
                        </ul>
                    </li>

                    <li><strong>Offerings:</strong>
                        <ul>
                            <li>Offer sweets (especially kheer and laddu)</li>
                            <li>Offer fruits and coconut</li>
                            <li>Offer betel leaves and nuts</li>
                        </ul>
                    </li>

                    <li><strong>Lakshmi Mantra Chanting:</strong>
                        <div class="mantra-box">
                            <p><strong>Mahalakshmi Mantra:</strong></p>
                            <p class="mantra-transliteration">Om Shreem Mahalakshmyai Namah</p>
                            <p>Chant 108 times for prosperity and abundance</p>
                        </div>
                    </li>

                    <li><strong>Aarti:</strong> Perform Lakshmi aarti with ghee lamp</li>

                    <li><strong>Prasadam Distribution:</strong> Distribute prasadam to family and visitors</li>

                    <li><strong>Keep Lights On:</strong> Keep at least one diya burning entire night</li>
                </ol>
            </div>
        </section>

        <!-- Significance of Lighting Diyas -->
        <section class="festival-detail-section">
            <h2>The Significance of Lighting Diyas</h2>
            <div class="info-card">
                <p>The lighting of diyas (oil lamps) is the most iconic symbol of Deepavali, giving the festival its name (Deepa = lamp, Avali = row).</p>

                <h3>Why We Light Diyas:</h3>
                <ul class="significance-list">
                    <li><strong>Victory of Light Over Darkness:</strong> Symbolizes knowledge dispelling ignorance</li>
                    <li><strong>Welcoming Lakshmi:</strong> Lights guide Goddess Lakshmi to homes</li>
                    <li><strong>Rama's Return:</strong> Ayodhya lit lamps to welcome Rama after 14-year exile</li>
                    <li><strong>Driving Away Evil:</strong> Light is believed to ward off negative energies</li>
                    <li><strong>Inner Light:</strong> Reminds us to kindle our inner spiritual light</li>
                </ul>

                <h3>Traditional Diya Lighting Practice:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Entrances</h4>
                        <p>Place diyas at main door, gates, and all entry points to welcome prosperity</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Tulsi Plant</h4>
                        <p>Light diyas around Tulsi plant in courtyard as it's sacred to Lakshmi</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Windows</h4>
                        <p>Place diyas on window sills to illuminate the home from outside</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Puja Room</h4>
                        <p>Keep maximum lights in puja room where Lakshmi is worshipped</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Pathways</h4>
                        <p>Line pathways with diyas creating beautiful illuminated walks</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Rooftop</h4>
                        <p>Light diyas on terrace to be visible from distance</p>
                    </div>
                </div>

                <p class="info-note"><strong>Eco-Friendly Tip:</strong> Use clay diyas with cotton wicks and ghee/oil. Avoid plastic decorations. The traditional earthen diyas support potters' livelihood and are environmentally friendly.</p>
            </div>
        </section>

        <!-- Deepavali Sweets and Foods -->
        <section class="festival-detail-section">
            <h2>Traditional Deepavali Delicacies</h2>
            <div class="info-card">
                <h3>Must-Have Sweets:</h3>
                <ul class="celebration-list">
                    <li><strong>Laddu:</strong> Various types - Boondi, Rava, Til laddu offered to Lakshmi</li>
                    <li><strong>Ariselu:</strong> Rice flour and jaggery deep-fried delicacy, signature Telugu sweet</li>
                    <li><strong>Bobbatlu (Puran Poli):</strong> Sweet flatbread with lentil-jaggery filling</li>
                    <li><strong>Kajjikayalu (Gujiya):</strong> Crescent-shaped sweet dumpling with coconut filling</li>
                    <li><strong>Mysore Pak:</strong> Rich gram flour sweet with ghee</li>
                    <li><strong>Kaju Katli:</strong> Diamond-shaped cashew fudge</li>
                    <li><strong>Badam Halwa:</strong> Almond pudding rich with ghee</li>
                </ul>

                <h3>Savory Snacks:</h3>
                <ul class="celebration-list">
                    <li><strong>Murukku:</strong> Spiral-shaped crunchy snack</li>
                    <li><strong>Chakli:</strong> Coiled crispy snack</li>
                    <li><strong>Sev:</strong> Thin crispy noodle-like snack</li>
                    <li><strong>Mixture:</strong> Mix of various crunchy items with spices</li>
                    <li><strong>Kara Boondhi:</strong> Spicy chickpea flour pearls</li>
                </ul>

                <h3>Special Dishes:</h3>
                <ul class="celebration-list">
                    <li><strong>Pulihora:</strong> Tamarind rice offered to deity</li>
                    <li><strong>Paayasam:</strong> Sweet rice pudding with milk</li>
                    <li><strong>Palathalikalu:</strong> Diamond-cut sweet made with rice flour</li>
                </ul>

                <p class="info-note"><strong>Sharing Tradition:</strong> Exchanging sweets with neighbors, friends, and relatives is an integral part of Deepavali, strengthening community bonds and spreading joy.</p>
            </div>
        </section>

        <!-- Environmental Deepavali -->
        <section class="festival-detail-section">
            <h2>Celebrating Eco-Friendly Deepavali</h2>
            <div class="info-card">
                <p>While celebrating Deepavali joyously, we can also be mindful of our environment and community.</p>

                <h3>Green Deepavali Practices:</h3>
                <ul class="significance-list">
                    <li><strong>Say No to Loud Crackers:</strong> Reduce noise pollution; consider celebrating without crackers or use eco-friendly alternatives</li>
                    <li><strong>Clay Diyas:</strong> Use traditional clay diyas supporting local potters instead of electric lights only</li>
                    <li><strong>Organic Rangoli:</strong> Use natural colors - turmeric, kumkum, rice flour, flower petals</li>
                    <li><strong>Reduce Waste:</strong> Avoid plastic decorations, use reusable items</li>
                    <li><strong>Share with Less Fortunate:</strong> Donate clothes, food to those in need</li>
                    <li><strong>Animal Safety:</strong> Be mindful that loud crackers terrify pets and street animals</li>
                    <li><strong>Air Quality:</strong> Reduce air pollution by minimizing firecracker usage</li>
                </ul>

                <p class="info-note"><strong>True Spirit:</strong> Remember, Deepavali's essence is spreading light and joy, not creating pollution. The inner light of compassion, wisdom, and kindness is what truly matters.</p>
            </div>
        </section>
    `,

    'karthika-masam': `
        <!-- Karthika Masam Overview -->
        <section class="festival-detail-section">
            <h2>Karthika Masam - The Most Sacred Month</h2>
            <div class="info-card">
                <p>Karthika Masam (approximately November-December) is considered the most sacred month in the Telugu calendar, beloved by both Lord Shiva and Lord Vishnu.</p>

                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Month Duration</span>
                        <span class="info-value">30 Days (Full Lunar Month)</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Gregorian Calendar</span>
                        <span class="info-value">October/November to November/December</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Primary Deity</span>
                        <span class="info-value">Lord Vishnu and Lord Shiva</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Main Practice</span>
                        <span class="info-value">Lighting Deepams Daily</span>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Why Karthika Masam is Special:</h3>
                <ul class="significance-list">
                    <li><strong>Vishnu's Favorite Month:</strong> Scriptures declare this as the month most dear to Lord Vishnu</li>
                    <li><strong>Shiva's Sacred Time:</strong> Highly auspicious for Shiva worship, culminating in Karthika Purnima</li>
                    <li><strong>Multiplied Merit:</strong> Good deeds performed during this month yield manifold results</li>
                    <li><strong>Spiritual Elevation:</strong> Considered ideal time for spiritual practices and vratas</li>
                    <li><strong>Removing Sins:</strong> Bathing in sacred rivers during Karthika Masam cleanses past sins</li>
                </ul>
            </div>
        </section>

        <!-- Daily Rituals and Practices -->
        <section class="festival-detail-section">
            <h2>Daily Rituals During Karthika Masam</h2>
            <div class="info-card">
                <h3>Essential Daily Practices:</h3>
                <ol class="puja-steps">
                    <li><strong>Brahma Muhurta Rising:</strong>
                        <ul>
                            <li>Wake up during Brahma Muhurta (1.5 hours before sunrise)</li>
                            <li>Considered most auspicious time for spiritual practices</li>
                            <li>Chant "Om Namo Narayanaya" or "Om Namah Shivaya"</li>
                        </ul>
                    </li>

                    <li><strong>Holy Bath:</strong>
                        <ul>
                            <li>Take bath preferably in sacred rivers (Godavari, Krishna)</li>
                            <li>If not possible, add Ganga water or tulsi to bathing water</li>
                            <li>Chant mantras while bathing</li>
                        </ul>
                    </li>

                    <li><strong>Tulsi Puja:</strong>
                        <ul>
                            <li>Worship Tulsi plant daily with water, flowers, kumkum</li>
                            <li>Circumambulate Tulsi plant 4 or 108 times</li>
                            <li>Tulsi is considered manifestation of Goddess Lakshmi</li>
                            <li>Light lamps around Tulsi in evening</li>
                        </ul>
                    </li>

                    <li><strong>Temple Visit:</strong>
                        <ul>
                            <li>Visit Vishnu or Shiva temples daily if possible</li>
                            <li>Offer flowers, coconut, and perform archana</li>
                            <li>Participate in special month-long pujas and celebrations</li>
                        </ul>
                    </li>

                    <li><strong>Lighting Deepams (Most Important):</strong>
                        <ul>
                            <li>Light oil lamps (preferably with ghee or sesame oil) at dusk</li>
                            <li>Place lamps at home entrance, puja room, and around Tulsi</li>
                            <li>Lighting lamps during Karthika is said to remove darkness of ignorance</li>
                            <li>Brings prosperity, health, and spiritual merit</li>
                        </ul>
                    </li>

                    <li><strong>Sattvic Food:</strong>
                        <ul>
                            <li>Many observe dietary restrictions</li>
                            <li>Avoid non-vegetarian food, onion, garlic</li>
                            <li>Consume simple, pure (sattvic) meals</li>
                            <li>Some observe fasting on specific days</li>
                        </ul>
                    </li>

                    <li><strong>Sacred Texts Reading:</strong>
                        <ul>
                            <li>Read Bhagavata Purana, especially 10th canto (Krishna's life)</li>
                            <li>Recite Vishnu Sahasranama</li>
                            <li>Read Shiva Purana for Shiva devotees</li>
                        </ul>
                    </li>

                    <li><strong>Charity (Danam):</strong>
                        <ul>
                            <li>Daily charity is highly meritorious</li>
                            <li>Feed the poor, donate to temples</li>
                            <li>Provide food and water to cows</li>
                            <li>Give sesame oil, lamps, blankets to needy</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>

        <!-- Special Vratas and Observances -->
        <section class="festival-detail-section">
            <h2>Special Vratas During Karthika Masam</h2>
            <div class="info-card">
                <h3>Important Observances:</h3>

                <div class="pachadi-item" style="margin-bottom: 25px;">
                    <h4>1. Karthika Somavaram (Mondays)</h4>
                    <ul class="significance-list">
                        <li><strong>Dedicated To:</strong> Lord Shiva</li>
                        <li><strong>Fasting:</strong> Many women observe fast for family welfare</li>
                        <li><strong>Puja:</strong> Special Shiva puja with bilva leaves</li>
                        <li><strong>Benefits:</strong> Removes obstacles, grants wishes</li>
                    </ul>
                </div>

                <div class="pachadi-item" style="margin-bottom: 25px;">
                    <h4>2. Karthika Ekadashi</h4>
                    <ul class="significance-list">
                        <li><strong>Date:</strong> 11th day of both bright and dark fortnights</li>
                        <li><strong>Importance:</strong> Most powerful Ekadashi of the year</li>
                        <li><strong>Fasting:</strong> Complete fast or fruit/milk diet</li>
                        <li><strong>Worship:</strong> Special Vishnu puja, reading Bhagavata Purana</li>
                        <li><strong>Benefits:</strong> Removes all sins, grants moksha</li>
                    </ul>
                </div>

                <div class="pachadi-item" style="margin-bottom: 25px;">
                    <h4>3. Karthika Purnima (Full Moon)</h4>
                    <ul class="significance-list">
                        <li><strong>Significance:</strong> Most auspicious day of Karthika Masam</li>
                        <li><strong>Tripurari Purnima:</strong> Celebrates Shiva's destruction of three demon cities</li>
                        <li><strong>Rituals:</strong> Holy bath in rivers, lighting countless lamps</li>
                        <li><strong>Kartika Deepam:</strong> Grand lighting of lamp atop temple towers (especially Tirupati)</li>
                        <li><strong>Benefits:</strong> Liberation from cycle of birth and death</li>
                    </ul>
                </div>

                <div class="pachadi-item">
                    <h4>4. Tulsi Vivah</h4>
                    <ul class="significance-list">
                        <li><strong>Timing:</strong> Usually on Ekadashi or Purnima of Karthika</li>
                        <li><strong>Event:</strong> Ceremonial wedding of Tulsi plant with Lord Vishnu</li>
                        <li><strong>Ritual:</strong> Tulsi plant decorated as bride, married to Shaligram</li>
                        <li><strong>Significance:</strong> Marks beginning of Hindu wedding season</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Karthika Deepam Significance -->
        <section class="festival-detail-section">
            <h2>Karthika Deepam - The Sacred Lamp</h2>
            <div class="info-card">
                <p>Lighting lamps (deepam) during Karthika Masam is the most important practice, bringing immense spiritual and material benefits.</p>

                <h3>Benefits of Lighting Lamps:</h3>
                <ul class="significance-list">
                    <li><strong>Removes Darkness:</strong> Symbolically removes ignorance and brings knowledge</li>
                    <li><strong>Pleases Deities:</strong> Both Shiva and Vishnu are pleased by lamp offerings</li>
                    <li><strong>Prosperity:</strong> Brings wealth and removes financial difficulties</li>
                    <li><strong>Health:</strong> Wards off diseases and promotes well-being</li>
                    <li><strong>Spiritual Merit:</strong> Accumulates punya (merit) equivalent to grand yagnas</li>
                    <li><strong>Ancestors' Peace:</strong> Helps departed ancestors attain peace</li>
                    <li><strong>Family Harmony:</strong> Brings peace and unity in family</li>
                </ul>

                <h3>How to Light Karthika Deepam:</h3>
                <div class="mantra-box">
                    <ol>
                        <li>Use clay lamps (diyas) with cotton wicks</li>
                        <li>Fill with sesame oil or ghee (cow's ghee is best)</li>
                        <li>Light at sandhya kala (dusk) daily</li>
                        <li>Offer to deities, place at entrance, around Tulsi</li>
                        <li>Chant: "Shubham Karoti Kalyanam, Arogyam Dhana Sampadah"</li>
                        <li>Let lamp burn for as long as possible</li>
                    </ol>
                </div>

                <h3>Special Lamp Offering:</h3>
                <p>On Karthika Purnima, offering a lamp with 365 wicks (representing 365 days) or lighting 365 small lamps is considered extremely auspicious and grants all wishes.</p>
            </div>
        </section>

        <!-- Karthika Masam Stories -->
        <section class="festival-detail-section">
            <h2>Sacred Stories of Karthika Masam</h2>
            <div class="info-card">
                <h3>Damodara Leela:</h3>
                <p>The month is also called Damodara month, commemorating when Mother Yashoda tied baby Krishna to a mortar with a rope (dama) around his belly (udara).</p>
                <ul class="celebration-list">
                    <li><strong>Story:</strong> Krishna was caught stealing butter, so Yashoda tried to tie him up</li>
                    <li><strong>Divine Play:</strong> The rope was always two fingers short, no matter how much she added</li>
                    <li><strong>Submission:</strong> The Supreme Lord submitted to his mother's love</li>
                    <li><strong>Teaching:</strong> God is bound only by pure devotion and love</li>
                </ul>

                <h3>Tripurari Story:</h3>
                <p>On Karthika Purnima, Lord Shiva destroyed three demon cities (Tripura) built by demon architects for demons who were terrorizing the universe.</p>
                <ul class="celebration-list">
                    <li>The three cities were made of gold, silver, and iron</li>
                    <li>Shiva aligned them with a single arrow shot at the auspicious moment</li>
                    <li>Celebrated as Tripurari Purnima or Tripura Purnima</li>
                    <li>Symbolizes destruction of three types of ego: physical, mental, and intellectual</li>
                </ul>
            </div>
        </section>

        <!-- Karthika Masam Benefits -->
        <section class="festival-detail-section">
            <h2>Spiritual Benefits of Karthika Observances</h2>
            <div class="info-card">
                <p>Scriptures elaborate the immense benefits of observing Karthika Masam rituals with devotion:</p>

                <h3>Material Benefits:</h3>
                <ul class="celebration-list">
                    <li><strong>Wealth:</strong> Attracts Goddess Lakshmi's blessings and prosperity</li>
                    <li><strong>Health:</strong> Promotes physical and mental well-being</li>
                    <li><strong>Family:</strong> Ensures family harmony and children's welfare</li>
                    <li><strong>Success:</strong> Brings success in endeavors and removes obstacles</li>
                    <li><strong>Protection:</strong> Divine protection from negative energies</li>
                </ul>

                <h3>Spiritual Benefits:</h3>
                <ul class="celebration-list">
                    <li><strong>Purification:</strong> Cleanses past sins and negative karma</li>
                    <li><strong>Knowledge:</strong> Removes ignorance, grants spiritual wisdom</li>
                    <li><strong>Devotion:</strong> Deepens devotion and connection with divine</li>
                    <li><strong>Liberation:</strong> Paves path towards moksha (liberation)</li>
                    <li><strong>Divine Grace:</strong> Earns special grace of Lord Vishnu and Shiva</li>
                </ul>

                <p class="info-note"><strong>Scriptural Declaration:</strong> The Padma Purana states that one who observes Karthika Masam with devotion attains the results of all pilgrimages, charities, and yagnas combined.</p>
            </div>
        </section>
    `,

    'christmas': `
        <!-- Christmas in India -->
        <section class="festival-detail-section">
            <h2>Christmas in India - A Secular Celebration</h2>
            <div class="info-card">
                <p>Christmas in India, while primarily a Christian religious festival, is celebrated across communities with great enthusiasm. In Telugu states, it's a public holiday and a time for spreading joy, love, and goodwill.</p>

                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        <span class="info-value">December 25</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Celebrates</span>
                        <span class="info-value">Birth of Jesus Christ</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Holiday</span>
                        <span class="info-value">Public Holiday in India</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Theme</span>
                        <span class="info-value">Love, Peace, and Giving</span>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Indian Christmas Traditions:</h3>
                <ul class="significance-list">
                    <li><strong>Secular Celebration:</strong> Celebrated by people of all faiths in India</li>
                    <li><strong>Christmas Trees:</strong> Decorated trees in homes, malls, and public spaces</li>
                    <li><strong>Santa Claus:</strong> Popular figure, children eagerly wait for gifts</li>
                    <li><strong>Carols:</strong> Christmas carols sung in churches and public gatherings</li>
                    <li><strong>Midnight Mass:</strong> Christians attend special church services on Christmas Eve</li>
                    <li><strong>Feasting:</strong> Special meals with family and friends</li>
                    <li><strong>Gift Exchange:</strong> Exchanging presents with loved ones</li>
                    <li><strong>Charity:</strong> Helping the poor and spreading joy</li>
                </ul>
            </div>
        </section>

        <!-- The Christmas Story -->
        <section class="festival-detail-section">
            <h2>The Story of Jesus Christ's Birth</h2>
            <div class="info-card">
                <p>Christmas celebrates the birth of Jesus Christ in Bethlehem over 2000 years ago, as described in the Bible.</p>

                <h3>The Nativity Story:</h3>
                <ul class="significance-list">
                    <li><strong>Divine Conception:</strong> Angel Gabriel announced to Mary that she would bear God's son</li>
                    <li><strong>Journey to Bethlehem:</strong> Mary and Joseph traveled to Bethlehem for census</li>
                    <li><strong>No Room at Inn:</strong> Finding no place to stay, they took shelter in a stable</li>
                    <li><strong>Birth in Manger:</strong> Jesus was born and laid in a manger (feeding trough)</li>
                    <li><strong>Shepherds' Visit:</strong> Angels announced the birth to shepherds who came to worship</li>
                    <li><strong>Star of Bethlehem:</strong> A bright star appeared in the sky, guiding wise men</li>
                    <li><strong>Three Wise Men:</strong> Magi from the East brought gifts of gold, frankincense, and myrrh</li>
                    <li><strong>Divine Message:</strong> The birth brought hope and salvation to humanity</li>
                </ul>

                <h3>Symbolism in the Story:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Humble Birth</h4>
                        <p>Born in a stable, teaching that true greatness lies in humility, not worldly status</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Manger</h4>
                        <p>The feeding trough symbolizes Jesus as spiritual food for humanity</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Star</h4>
                        <p>Represents divine light guiding seekers to truth</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Gifts</h4>
                        <p>Gold (kingship), Frankincense (divinity), Myrrh (sacrifice) - symbolizing Jesus's life mission</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Christmas Celebrations -->
        <section class="festival-detail-section">
            <h2>How Christmas is Celebrated</h2>
            <div class="info-card">
                <h3>Church Services:</h3>
                <ul class="celebration-list">
                    <li><strong>Midnight Mass:</strong> Special service at 12 AM on Christmas Eve, most important church service</li>
                    <li><strong>Christmas Carols:</strong> Singing traditional hymns praising Jesus's birth</li>
                    <li><strong>Nativity Scenes:</strong> Churches display cribs depicting Jesus's birth scene</li>
                    <li><strong>Bible Readings:</strong> Reading the nativity story from Gospel of Luke and Matthew</li>
                    <li><strong>Holy Communion:</strong> Special communion service</li>
                    <li><strong>Decorations:</strong> Churches beautifully decorated with lights, stars, and flowers</li>
                </ul>

                <h3>Home Celebrations:</h3>
                <ul class="celebration-list">
                    <li><strong>Christmas Tree:</strong> Decorating evergreen tree with ornaments, lights, and star on top</li>
                    <li><strong>Crib/Nativity Scene:</strong> Setting up miniature scene of Jesus's birth</li>
                    <li><strong>Hanging Stockings:</strong> Children hang stockings for Santa to fill with gifts</li>
                    <li><strong>Home Decorations:</strong> Lights, wreaths, bells, and Christmas-themed decorations</li>
                    <li><strong>Christmas Eve Dinner:</strong> Special festive meal with family</li>
                    <li><strong>Gift Opening:</strong> Opening presents on Christmas morning</li>
                    <li><strong>Family Time:</strong> Spending quality time with loved ones</li>
                </ul>

                <h3>Community Celebrations:</h3>
                <ul class="celebration-list">
                    <li><strong>Carol Singing:</strong> Groups going door-to-door singing Christmas carols</li>
                    <li><strong>Community Meals:</strong> Churches organizing special meals for all</li>
                    <li><strong>Charity Drives:</strong> Distributing food, clothes to the underprivileged</li>
                    <li><strong>Christmas Programs:</strong> Cultural events, plays depicting nativity story</li>
                    <li><strong>Public Decorations:</strong> Cities and towns beautifully lit and decorated</li>
                </ul>
            </div>
        </section>

        <!-- Christmas Food -->
        <section class="festival-detail-section">
            <h2>Christmas Delicacies</h2>
            <div class="info-card">
                <h3>Traditional Christmas Foods in India:</h3>

                <h4>Sweets and Desserts:</h4>
                <ul class="celebration-list">
                    <li><strong>Christmas Cake:</strong> Rich fruit cake with dry fruits soaked in rum/juice</li>
                    <li><strong>Plum Cake:</strong> Dense, moist cake with candied fruits and spices</li>
                    <li><strong>Kulkuls:</strong> Traditional Goan sweet, small deep-fried dumplings</li>
                    <li><strong>Rose Cookies:</strong> Delicate flower-shaped fried cookies</li>
                    <li><strong>Guava Cheese:</strong> Sweet guava preserve (popular in Goa)</li>
                    <li><strong>Dodol:</strong> Sweet toffee-like candy from Mangalore</li>
                    <li><strong>Marshmallows:</strong> Soft candy popular during Christmas</li>
                </ul>

                <h4>Main Course:</h4>
                <ul class="celebration-list">
                    <li><strong>Roast Chicken/Turkey:</strong> Traditional roasted bird as centerpiece</li>
                    <li><strong>Biryani:</strong> Special chicken or mutton biryani</li>
                    <li><strong>Vindaloo:</strong> Spicy Goan curry (especially in Goa, Mangalore)</li>
                    <li><strong>Sorpotel:</strong> Spicy pork curry popular in coastal regions</li>
                    <li><strong>Roast Pork:</strong> Traditional Christmas meat dish</li>
                </ul>

                <h4>Beverages:</h4>
                <ul class="celebration-list">
                    <li><strong>Mulled Wine:</strong> Spiced wine (in some communities)</li>
                    <li><strong>Hot Chocolate:</strong> Rich cocoa drink</li>
                    <li><strong>Rose Milk:</strong> Flavored milk drink</li>
                </ul>

                <p class="info-note"><strong>Regional Varieties:</strong> Christmas foods vary across India - Goa has Portuguese influence, Kerala has Syrian Christian traditions, and each region adds local flavors to celebrations.</p>
            </div>
        </section>

        <!-- Christmas Spirit and Values -->
        <section class="festival-detail-section">
            <h2>The Spirit of Christmas - Universal Values</h2>
            <div class="info-card">
                <p>Beyond religious significance, Christmas embodies universal values that resonate with all cultures and faiths.</p>

                <h3>Core Christmas Values:</h3>
                <div class="pachadi-grid">
                    <div class="pachadi-item">
                        <h4>Love</h4>
                        <p>Unconditional love for all humanity, as Jesus taught to love your neighbor as yourself</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Peace</h4>
                        <p>Message of peace on earth and goodwill toward all people</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Giving</h4>
                        <p>Spirit of selfless giving without expecting anything in return</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Forgiveness</h4>
                        <p>Letting go of grudges and forgiving those who wronged us</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Hope</h4>
                        <p>Bringing hope to the hopeless and light to darkness</p>
                    </div>
                    <div class="pachadi-item">
                        <h4>Family</h4>
                        <p>Strengthening family bonds and spending quality time together</p>
                    </div>
                </div>

                <h3 style="margin-top: 30px;">Practicing Christmas Spirit:</h3>
                <ul class="significance-list">
                    <li><strong>Help the Needy:</strong> Donate to charities, feed the hungry, clothe the poor</li>
                    <li><strong>Visit Orphanages:</strong> Spend time with underprivileged children, share joy</li>
                    <li><strong>Forgive Others:</strong> Let go of grudges and reconcile with estranged relationships</li>
                    <li><strong>Spread Kindness:</strong> Small acts of kindness to strangers</li>
                    <li><strong>Environmental Care:</strong> Use eco-friendly decorations, minimize waste</li>
                    <li><strong>Inclusive Celebration:</strong> Include everyone regardless of faith or background</li>
                    <li><strong>Gratitude:</strong> Count blessings and express thankfulness</li>
                </ul>

                <p class="info-note"><strong>Universal Message:</strong> Christmas reminds us that regardless of our religion or background, we can all embrace values of love, kindness, and compassion. The festival is a beautiful example of India's secular fabric where people of all faiths come together in celebration.</p>
            </div>
        </section>

        <!-- Christmas Around the World vs India -->
        <section class="festival-detail-section">
            <h2>Indian Christmas - Unique Characteristics</h2>
            <div class="info-card">
                <h3>What Makes Indian Christmas Special:</h3>
                <ul class="celebration-list">
                    <li><strong>Tropical Christmas:</strong> Unlike snowy western Christmas, India celebrates in warm tropical weather</li>
                    <li><strong>Multi-faith Celebration:</strong> Hindus, Muslims, and people of all faiths join Christmas celebrations</li>
                    <li><strong>Indian Flavors:</strong> Christmas cakes and meals incorporate Indian spices and local ingredients</li>
                    <li><strong>Banana/Mango Trees:</strong> In some regions, these substitute for pine trees</li>
                    <li><strong>Oil Lamps:</strong> Along with candles, traditional oil diyas are lit</li>
                    <li><strong>Rangoli:</strong> Some homes make Christmas-themed rangoli designs</li>
                    <li><strong>Bollywood Influence:</strong> Christmas songs in Hindi and regional languages</li>
                    <li><strong>Shopping Festivals:</strong> Major sales and shopping events around Christmas</li>
                </ul>

                <h3>Regional Variations in India:</h3>
                <ul class="celebration-list">
                    <li><strong>Goa:</strong> Most elaborate celebrations with midnight mass, Portuguese-influenced traditions</li>
                    <li><strong>Kerala:</strong> Large Christian population, traditional customs mixed with local culture</li>
                    <li><strong>Tamil Nadu:</strong> Unique Christmas sweets like adhirasam served alongside cake</li>
                    <li><strong>Northeast:</strong> Biggest Christian population, grand celebrations with bamboo stars</li>
                    <li><strong>Mumbai/Delhi:</strong> Cosmopolitan celebrations with grand decorations in commercial areas</li>
                </ul>
            </div>
        </section>
    `
};

// Main function to load all festival content
async function loadFestivalDetails() {
    const festivalId = getQueryParam('festival');

    if (!festivalId) {
        document.getElementById('festival-content').innerHTML = '<p>No festival specified.</p>';
        return;
    }

    // Load basic festival data first
    const festival = await loadBasicFestivalData(festivalId);

    if (!festival) {
        return; // Error already handled in loadBasicFestivalData
    }

    // Add detailed content if available for this festival
    if (festivalDetailedContent[festivalId]) {
        const festivalContent = document.getElementById('festival-content');
        const backLinkContainer = festivalContent.querySelector('.back-link-container');

        if (backLinkContainer) {
            // Insert detailed content before the back link
            backLinkContainer.insertAdjacentHTML('beforebegin', festivalDetailedContent[festivalId]);
        }
    }
}

// Load festival details when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFestivalDetails);
} else {
    loadFestivalDetails();
}
