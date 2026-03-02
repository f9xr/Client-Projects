// Initialize Lenis smooth scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Live Counter Animation (BTC)
let btcCount = 21.45630245;
const liveCounter = document.getElementById('liveCounter');

setInterval(() => {
    const increment = (Math.random() * 0.00005000);
    btcCount += increment;
    if (liveCounter) {
        liveCounter.innerText = `${btcCount.toFixed(8)} BTC`;
        // Micro-animation for update
        liveCounter.style.color = 'var(--growth-green)';
        setTimeout(() => {
            liveCounter.style.color = 'white';
        }, 500);
    }
}, 4000);

// Audio Branding
const chime = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
document.querySelectorAll('.btn-primary, .option-btn, .faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        chime.volume = 0.1;
        chime.play().catch(e => console.log("Audio play blocked"));
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(o => o.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// JSONP News Fetcher for Blogger (NewsHub Style)
function fetchNews() {
    const script = document.createElement('script');
    script.src = 'https://cryptoradarnews.blogspot.com/feeds/posts/default?alt=json-in-script&callback=handleNews&max-results=5';
    document.body.appendChild(script);
}

function handleNews(data) {
    const featuredContainer = document.getElementById('featured-news');
    const sideGrid = document.getElementById('news-grid');
    if (!featuredContainer || !sideGrid) return;

    featuredContainer.innerHTML = '';
    sideGrid.innerHTML = '';

    const entries = data.feed.entry || [];

    entries.forEach((entry, index) => {
        const title = entry.title.$t;
        const link = entry.link.find(l => l.rel === 'alternate').href;
        const contentSnippet = entry.content ? entry.content.$t.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' : 'Dive into the latest crypto updates and market movements.';
        const published = new Date(entry.published.$t).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        const category = entry.category ? entry.category[0].term : 'Market Update';

        // Use a generic placeholder if no image found in content
        const imgMatch = entry.content ? entry.content.$t.match(/src="([^"]+)"/) : null;
        const imgUrl = imgMatch ? imgMatch[1] : 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop';

        if (index === 0) {
            // Featured Layout
            featuredContainer.innerHTML = `
                <div style="width: 100%; height: 100%; background: url('${imgUrl}') center/cover no-repeat;">
                    <div class="featured-content">
                        <span class="news-tag" style="background: var(--wealth-gold); color: black;">Trending Now</span>
                        <h3>${title}</h3>
                        <p>${contentSnippet}</p>
                        <a href="${link}" target="_blank" class="btn-primary" style="display: inline-block; text-decoration: none;">Read Featured Article</a>
                    </div>
                </div>
            `;
        } else {
            // Secondary Horizontal Layout
            const card = document.createElement('div');
            card.className = 'news-card-h reveal-active';
            card.innerHTML = `
                <img src="${imgUrl}" class="news-img" alt="News">
                <div class="news-info">
                    <span class="news-tag">${category}</span>
                    <h4>${title}</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <span style="font-size: 0.8rem; opacity: 0.4;">${published}</span>
                        <a href="${link}" target="_blank" style="color: var(--wealth-gold); text-decoration: none; font-size: 0.85rem; font-weight: 700;">View Story</a>
                    </div>
                </div>
            `;
            sideGrid.appendChild(card);
        }
    });
}

// Populate Marquee
function setupMarquee() {
    const marquee = document.querySelector('.marquee-content');
    if (!marquee) return;

    const items = [
        { icon: 'fa-bolt', text: 'New Airdrop: Starknet Phase 2' },
        { icon: 'fa-fire', text: 'Trending: L2 Summer is here' },
        { icon: 'fa-check-circle', text: 'Verified: 0% Investment Methods' },
        { icon: 'fa-gem', text: 'Premium: Zen-Tech Guide Updated' },
        { icon: 'fa-chart-line', text: 'Market: BTC Institutional Inflow' }
    ];

    // Triple the items for seamless loop
    const content = [...items, ...items, ...items].map(item => `
        <span class="marquee-item">
            <i class="fas ${item.icon} text-gold"></i> ${item.text}
        </span>
    `).join('');

    marquee.innerHTML = content;
}

// Init
setupMarquee();
fetchNews();
