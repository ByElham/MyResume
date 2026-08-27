const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'media', 'blog', 'switzerland-dream');
const techDir = path.join(__dirname, '..', 'public', 'media', 'blog', 'tech');

fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(techDir, { recursive: true });

const svgs = [
  {
    filename: '01-eth-zurich-main-building.svg',
    alias: 'eth-zurich.svg',
    title: 'ETH Zürich — Main Academic Building',
    subtitle: 'Dept. of Computer Science & Vision Lab',
    badge: 'ETH ZURICH • ZÜRICH',
    color1: '#1e1b4b',
    color2: '#312e81',
    accent: '#6366f1',
    symbol: `<rect x="260" y="160" width="280" height="140" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="3"/>
      <polygon points="400,90 230,165 570,165" fill="#312e81" stroke="#818cf8" stroke-width="3"/>
      <circle cx="400" cy="135" r="16" fill="#818cf8" opacity="0.8"/>
      <rect x="290" y="190" width="30" height="45" rx="4" fill="#60a5fa" opacity="0.85"/>
      <rect x="340" y="190" width="30" height="45" rx="4" fill="#60a5fa" opacity="0.85"/>
      <rect x="385" y="190" width="30" height="45" rx="4" fill="#60a5fa" opacity="0.85"/>
      <rect x="430" y="190" width="30" height="45" rx="4" fill="#60a5fa" opacity="0.85"/>
      <rect x="480" y="190" width="30" height="45" rx="4" fill="#60a5fa" opacity="0.85"/>
      <rect x="375" y="245" width="50" height="55" rx="4" fill="#e0e7ff"/>`
  },
  {
    filename: '02-epfl-lausanne-rolex-center.svg',
    alias: 'epfl-campus.svg',
    title: 'EPFL Lausanne — Rolex Learning Center',
    subtitle: 'School of Computer & Communication Sciences',
    badge: 'EPFL • LAUSANNE',
    color1: '#4c0519',
    color2: '#881337',
    accent: '#f43f5e',
    symbol: `<path d="M 180,240 Q 280,150 400,220 T 620,180 L 620,290 L 180,290 Z" fill="#9f1239" opacity="0.85" stroke="#fb7185" stroke-width="3"/>
      <circle cx="340" cy="210" r="30" fill="#1e1b4b" opacity="0.9"/>
      <circle cx="480" cy="225" r="22" fill="#1e1b4b" opacity="0.9"/>
      <circle cx="280" cy="180" r="8" fill="#fda4af"/>
      <circle cx="420" cy="160" r="10" fill="#fda4af"/>
      <circle cx="560" cy="170" r="7" fill="#fda4af"/>`
  },
  {
    filename: '03-rhine-falls-waterfall.svg',
    alias: 'rhine-falls.svg',
    title: 'The Mighty Rhine Falls (Rheinfall)',
    subtitle: 'Schaffhausen — Europe’s Largest Waterfall',
    badge: 'RHEINFALL • SCHAFFHAUSEN',
    color1: '#082f49',
    color2: '#0369a1',
    accent: '#38bdf8',
    symbol: `<polygon points="120,280 260,110 380,280" fill="#0f172a"/>
      <polygon points="420,280 540,130 680,280" fill="#0f172a"/>
      <path d="M 280,180 Q 360,200 400,280 Q 440,200 520,180 L 580,290 L 220,290 Z" fill="#38bdf8" opacity="0.9"/>
      <ellipse cx="400" cy="275" rx="190" ry="25" fill="#e0f2fe" opacity="0.8"/>
      <ellipse cx="400" cy="285" rx="240" ry="20" fill="#bae6fd" opacity="0.6"/>`
  },
  {
    filename: '04-bern-altstadt-zytglogge.svg',
    alias: 'bern-oldtown.svg',
    title: 'Bern Altstadt & Zytglogge Clock Tower',
    subtitle: 'UNESCO Medieval Heritage along River Aare',
    badge: 'BERN • UNESCO WORLD HERITAGE',
    color1: '#451a03',
    color2: '#78350f',
    accent: '#f59e0b',
    symbol: `<rect x="340" y="110" width="120" height="180" rx="4" fill="#292524" stroke="#d97706" stroke-width="3"/>
      <polygon points="400,40 330,115 470,115" fill="#b45309"/>
      <circle cx="400" cy="160" r="32" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>
      <line x1="400" y1="160" x2="400" y2="140" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
      <line x1="400" y1="160" x2="415" y2="160" stroke="#78350f" stroke-width="3" stroke-linecap="round"/>
      <path d="M 370,250 Q 400,230 430,250 L 430,290 L 370,290 Z" fill="#d97706"/>`
  },
  {
    filename: '05-swiss-alps-panoramic.svg',
    alias: 'swiss-alps.svg',
    title: 'The Majestic Swiss Alps & Matterhorn',
    subtitle: 'Alpine Summits, High-Altitude Precision',
    badge: 'ALPS • VALAIS & ZERMATT',
    color1: '#0f172a',
    color2: '#1e293b',
    accent: '#38bdf8',
    symbol: `<polygon points="400,70 260,280 540,280" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <polygon points="400,70 350,140 400,160 450,140" fill="#f8fafc"/>
      <polygon points="210,130 110,280 310,280" fill="#1e293b"/>
      <polygon points="210,130 180,180 240,180" fill="#e2e8f0" opacity="0.9"/>
      <polygon points="590,140 490,280 690,280" fill="#1e293b"/>
      <polygon points="590,140 560,190 620,190" fill="#e2e8f0" opacity="0.9"/>`
  },
  {
    filename: '06-zurich-limmat-cityscape.svg',
    alias: 'zurich-city.svg',
    title: 'Zurich Limmat River & Grossmünster',
    subtitle: 'Innovation Hub, Serene Waterfront',
    badge: 'ZÜRICH • CANTON ZÜRICH',
    color1: '#111827',
    color2: '#1f2937',
    accent: '#818cf8',
    symbol: `<rect x="310" y="120" width="60" height="160" fill="#374151" stroke="#818cf8" stroke-width="2"/>
      <polygon points="340,60 300,120 380,120" fill="#4f46e5"/>
      <rect x="430" y="120" width="60" height="160" fill="#374151" stroke="#818cf8" stroke-width="2"/>
      <polygon points="460,60 420,120 500,120" fill="#4f46e5"/>
      <path d="M 100,260 Q 400,240 700,260 L 700,300 L 100,300 Z" fill="#06b6d4" opacity="0.75"/>`
  },
  {
    filename: '07-lake-geneva-lausanne-shore.svg',
    alias: 'lake-geneva.svg',
    title: 'Lake Geneva & Lausanne Ouchy Shoreline',
    subtitle: 'Crystal Lac Léman overlooking the Savoy Alps',
    badge: 'LAC LÉMAN • LAUSANNE',
    color1: '#083344',
    color2: '#0e7490',
    accent: '#22d3ee',
    symbol: `<path d="M 80,170 Q 250,90 400,150 T 720,110 L 720,230 L 80,230 Z" fill="#155e75" opacity="0.6"/>
      <path d="M 80,210 Q 300,160 500,200 T 720,180 L 720,300 L 80,300 Z" fill="#06b6d4" opacity="0.85"/>
      <polygon points="360,190 390,130 390,190" fill="#ffffff"/>
      <polygon points="395,190 415,150 415,190" fill="#ffffff" opacity="0.8"/>
      <path d="M 350,190 Q 390,205 430,190 Z" fill="#0f172a"/>`
  },
  {
    filename: '08-lucerne-chapel-bridge.svg',
    alias: 'lucerne-bridge.svg',
    title: 'Lucerne Historic Kapellbrücke & Water Tower',
    subtitle: 'Lake Lucerne & 14th Century Covered Wooden Bridge',
    badge: 'LUZERN • VIERWALDSTÄTTERSEE',
    color1: '#2e1065',
    color2: '#581c87',
    accent: '#c084fc',
    symbol: `<rect x="360" y="110" width="80" height="170" fill="#3b0764" stroke="#c084fc" stroke-width="2"/>
      <polygon points="400,50 350,110 450,110" fill="#a855f7"/>
      <path d="M 120,230 L 680,230 L 680,250 L 120,250 Z" fill="#7e22ce"/>
      <polygon points="120,210 400,180 680,210 680,230 120,230" fill="#9333ea"/>
      <path d="M 100,260 Q 400,240 700,260 L 700,300 L 100,300 Z" fill="#38bdf8" opacity="0.6"/>`
  },
  {
    filename: '09-interlaken-jungfraujoch.svg',
    alias: 'jungfraujoch.svg',
    title: 'Jungfraujoch — Top of Europe & Glacier',
    subtitle: 'Interlaken & High Alpine Research Observatory',
    badge: 'JUNGFRAU • BERNER OBERLAND',
    color1: '#0c4a6e',
    color2: '#0369a1',
    accent: '#7dd3fc',
    symbol: `<polygon points="400,90 200,280 600,280" fill="#e0f2fe"/>
      <polygon points="300,130 150,280 450,280" fill="#bae6fd" opacity="0.8"/>
      <polygon points="500,130 350,280 650,280" fill="#bae6fd" opacity="0.8"/>
      <circle cx="400" cy="80" r="18" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
      <rect x="370" y="170" width="60" height="30" rx="4" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>`
  },
  {
    filename: '10-swiss-ai-research-lab.svg',
    alias: 'swiss-ai-lab.svg',
    title: 'Swiss AI & Computer Vision Research Lab',
    subtitle: 'Neural Architecture Search & High Performance Clusters',
    badge: 'AI LAB • NEURAL INTELLIGENCE',
    color1: '#030712',
    color2: '#111827',
    accent: '#10b981',
    symbol: `<rect x="200" y="100" width="400" height="180" rx="12" fill="#1f2937" stroke="#10b981" stroke-width="3"/>
      <circle cx="280" cy="160" r="16" fill="#10b981" opacity="0.9"/>
      <circle cx="400" cy="130" r="16" fill="#3b82f6" opacity="0.9"/>
      <circle cx="520" cy="160" r="16" fill="#ec4899" opacity="0.9"/>
      <circle cx="340" cy="220" r="16" fill="#f59e0b" opacity="0.9"/>
      <circle cx="460" cy="220" r="16" fill="#8b5cf6" opacity="0.9"/>
      <line x1="280" y1="160" x2="400" y2="130" stroke="#6ee7b7" stroke-width="2"/>
      <line x1="400" y1="130" x2="520" y2="160" stroke="#93c5fd" stroke-width="2"/>
      <line x1="280" y1="160" x2="340" y2="220" stroke="#6ee7b7" stroke-width="2"/>
      <line x1="520" y1="160" x2="460" y2="220" stroke="#f472b6" stroke-width="2"/>
      <line x1="340" y1="220" x2="460" y2="220" stroke="#fcd34d" stroke-width="2"/>`
  },
  {
    filename: '11-shiraz-to-switzerland-pathway.svg',
    alias: 'academic-pathway.svg',
    title: 'Academic Pathway: Shiraz to Switzerland',
    subtitle: 'From Rank #1 Shiraz University to Swiss Research Centers',
    badge: 'JOURNEY • SHIRAZ TO SWITZERLAND',
    color1: '#1e1b4b',
    color2: '#3730a3',
    accent: '#a855f7',
    symbol: `<circle cx="220" cy="200" r="28" fill="#4338ca" stroke="#818cf8" stroke-width="3"/>
      <text x="220" y="206" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">SU</text>
      <circle cx="580" cy="200" r="28" fill="#e11d48" stroke="#fb7185" stroke-width="3"/>
      <text x="580" y="206" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">CH</text>
      <path d="M 250,200 Q 400,100 550,200" fill="none" stroke="#f43f5e" stroke-width="4" stroke-dasharray="8,6"/>
      <polygon points="555,200 540,190 545,205" fill="#f43f5e"/>
      <circle cx="400" cy="150" r="14" fill="#fbbf24"/>
      <polygon points="400,140 405,152 417,152 407,160 411,172 400,164 389,172 393,160 383,152 395,152" fill="#ffffff"/>`
  },
  {
    filename: '12-elham-academic-vision-board.svg',
    alias: 'vision-board.svg',
    title: 'Elham Rivaz — Academic Vision & Research Milestones',
    subtitle: 'Excellence in Deep Learning, Vision & Relentless Dedication',
    badge: 'VISION BOARD • ELHAM RIVAZ',
    color1: '#4c0519',
    color2: '#1e1b4b',
    accent: '#f43f5e',
    symbol: `<rect x="180" y="90" width="440" height="200" rx="16" fill="#18181b" stroke="#f43f5e" stroke-width="3"/>
      <circle cx="400" cy="160" r="42" fill="#be123c" stroke="#fda4af" stroke-width="3"/>
      <text x="400" y="168" font-family="sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">ER</text>
      <rect x="230" y="225" width="90" height="30" rx="6" fill="#312e81"/>
      <text x="275" y="244" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">Rank 1 / GPA</text>
      <rect x="355" y="225" width="90" height="30" rx="6" fill="#831843"/>
      <text x="400" y="244" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbcfe8" text-anchor="middle">EPFL Finalist</text>
      <rect x="480" y="225" width="90" height="30" rx="6" fill="#065f46"/>
      <text x="525" y="244" font-family="sans-serif" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Harvard CS50</text>`
  }
];

function generateSvgContent(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad_${item.filename.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.color1}" />
      <stop offset="60%" stop-color="${item.color2}" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <pattern id="grid_${item.filename.replace(/[^a-zA-Z0-9]/g, '')}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.04" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="480" fill="url(#bgGrad_${item.filename.replace(/[^a-zA-Z0-9]/g, '')})" />
  <rect width="800" height="480" fill="url(#grid_${item.filename.replace(/[^a-zA-Z0-9]/g, '')})" />

  <!-- Ambient Glow -->
  <circle cx="400" cy="180" r="220" fill="${item.accent}" opacity="0.18" filter="blur(40px)" />

  <!-- Central Symbol / Illustration -->
  <g transform="translate(0, -10)">
    ${item.symbol}
  </g>

  <!-- Top Badge -->
  <rect x="36" y="32" width="240" height="32" rx="16" fill="#000000" fill-opacity="0.4" stroke="${item.accent}" stroke-width="1.5"/>
  <text x="48" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#ffffff" letter-spacing="1.5">${item.badge}</text>

  <!-- Swiss Flag icon in top-right -->
  <rect x="724" y="32" width="40" height="32" rx="6" fill="#da291c" />
  <rect x="740" y="38" width="8" height="20" fill="#ffffff" />
  <rect x="734" y="44" width="20" height="8" fill="#ffffff" />

  <!-- Bottom Details Gradient Box -->
  <rect x="0" y="350" width="800" height="130" fill="url(#bgGrad_${item.filename.replace(/[^a-zA-Z0-9]/g, '')})" opacity="0.95" />
  <rect x="0" y="350" width="800" height="1" fill="#ffffff" opacity="0.1" />

  <text x="40" y="395" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="800" fill="#ffffff">${item.title}</text>
  <text x="40" y="425" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#d4d4d8">${item.subtitle}</text>
  <text x="40" y="452" font-family="monospace" font-size="12" fill="${item.accent}">/media/blog/switzerland-dream/${item.filename.replace('.svg', '.jpg')}</text>
</svg>`;
}

// Generate the 12 files
svgs.forEach((item) => {
  const content = generateSvgContent(item);
  fs.writeFileSync(path.join(targetDir, item.filename), content, 'utf8');
  if (item.alias) {
    fs.writeFileSync(path.join(targetDir, item.alias), content, 'utf8');
  }
  // Also create placeholder SVG files in root public/media/blog/
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'media', 'blog', item.filename), content, 'utf8');
});

// Tech diagrams
const techSvgs = [
  {
    name: 'cnn-accuracy-breakthrough.svg',
    title: 'CNN Accuracy Jump: 58.57% to 97.86%',
    sub: 'ResNet50 Backbone • Mish • CosineAnnealingWarmRestarts'
  },
  {
    name: 'multilingual-rag-architecture.svg',
    title: 'Multilingual RAG Architecture',
    sub: 'ChromaDB • LangChain • BAAI/bge-m3 Embeddings'
  },
  {
    name: 'cs50-puzzle-day-search.svg',
    title: 'CS50x Puzzle Day — Heuristic Search',
    sub: 'Minimax • Alpha-Beta Pruning • MRV & Forward Checking'
  }
];

techSvgs.forEach((t) => {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
    <defs>
      <linearGradient id="techGrad_${t.name}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
    </defs>
    <rect width="800" height="480" fill="url(#techGrad_${t.name})" />
    <circle cx="400" cy="200" r="180" fill="#4f46e5" opacity="0.15" filter="blur(30px)" />
    <rect x="40" y="40" width="720" height="280" rx="12" fill="#1e293b" stroke="#6366f1" stroke-width="2" opacity="0.9" />
    <text x="400" y="160" font-family="monospace" font-size="26" font-weight="bold" fill="#818cf8" text-anchor="middle">${t.title}</text>
    <text x="400" y="210" font-family="sans-serif" font-size="16" fill="#cbd5e1" text-anchor="middle">${t.sub}</text>
    <rect x="0" y="360" width="800" height="120" fill="#0f172a" />
    <text x="40" y="420" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff">${t.title}</text>
    <text x="40" y="450" font-family="monospace" font-size="13" fill="#38bdf8">/media/blog/tech/${t.name}</text>
  </svg>`;
  fs.writeFileSync(path.join(techDir, t.name), content, 'utf8');
});

console.log('Successfully generated all 12 Swiss dream blog assets + 3 tech diagrams!');
