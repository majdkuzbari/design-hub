// GLOBAL ANIMATION PARAMS for all demos
let animParams = {};

const demos = [
  {
    id: 1,
    name: "Neon Glow Text",
    type: "text",
    // Optimized Thumbnail
    thumbnailHtml: `<div class="thumb-text glow-text" style="font-size: 2rem;">NEON</div>`,
    html: `<h1 class="glow-text">NEON</h1>`,
    code: `.glow-text {
  font-size: 4rem;
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;
  animation: pulse-glow 2s infinite alternate;
}

@keyframes pulse-glow {
    from { text-shadow: 0 0 5px #fff, 0 0 10px #00ffff; }
    to { text-shadow: 0 0 10px #fff, 0 0 20px #00ffff, 0 0 40px #00ffff; }
}`
  },
  {
    id: 2,
    name: "Glitch Effect",
    type: "text",
    thumbnailHtml: `<div class="glitch thumb-text" data-text="ERR" style="font-size: 2rem;">ERR</div>`,
    html: `<div class="glitch" data-text="GLITCH">GLITCH</div>`,
    code: `.glitch {
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  color: white;
}
.glitch::before, .glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00ff;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}`
  },
  {
    id: 3,
    name: "Holo Cube 3D",
    type: "3d",
    // Rotating Cube Thumbnail
    thumbnailHtml: `
        <div class="holo-cube" style="width: 60px; height: 60px; animation-duration: 5s;">
            <div class="face front" style="width: 60px; height: 60px; transform: translateZ(30px);"></div>
            <div class="face back" style="width: 60px; height: 60px; transform: rotateY(180deg) translateZ(30px);"></div>
            <div class="face right" style="width: 60px; height: 60px; transform: rotateY(90deg) translateZ(30px);"></div>
            <div class="face left" style="width: 60px; height: 60px; transform: rotateY(-90deg) translateZ(30px);"></div>
            <div class="face top" style="width: 60px; height: 60px; transform: rotateX(90deg) translateZ(30px);"></div>
            <div class="face bottom" style="width: 60px; height: 60px; transform: rotateX(-90deg) translateZ(30px);"></div>
        </div>`,
    html: `
        <div class="holo-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
        </div>`,
    code: `.holo-cube {
  position: relative;
  width: 200px; height: 200px;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
}
.face {
  position: absolute;
  width: 200px; height: 200px;
  border: 2px solid #00ffff;
  background: rgba(0, 255, 255, 0.1);
}
.front  { transform: translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

@keyframes rotate {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}`
  },
  {
    id: 4,
    name: "Gradient Border",
    type: "layout",
    thumbnailHtml: `<div class="gradient-card-demo" style="width: 200px; height: 120px; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
        <div class="card-inner" style="font-size: 0.5rem; padding: 10px;">
            <h3 style="font-size: 0.8rem; margin-bottom: 2px;">NEON</h3>
            <p style="font-size: 0.4rem;">SECURE</p>
        </div>
    </div>`,
    html: `<div class="gradient-card-demo">
  <div class="card-inner">
    <h3>DATA CARD</h3>
    <p>Secure Connection</p>
    <div style="font-size: 0.8rem; opacity: 0.7; margin-top: 10px;">ENCRYPTED // V.2.0</div>
  </div>
</div>`,
    code: `.gradient-card-demo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  isolation: isolate;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.gradient-card-demo::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: linear-gradient(135deg, #00ffff, #ff00ff, #00ffff);
  z-index: -1;
  border-radius: 15px;
  background-size: 300%;
  animation: gradient-move 2s linear infinite;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.gradient-card-demo::after {
  content: "";
  position: absolute;
  inset: -10px;
  background: linear-gradient(135deg, #00ffff, #ff00ff, #00ffff);
  z-index: -2;
  border-radius: 20px;
  background-size: 300%;
  animation: gradient-move 2s linear infinite;
  filter: blur(20px);
  opacity: 0.5;
}

.card-inner {
  background: #08081a;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-image: radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent);
}

@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`
  },
  {
    id: 5,
    name: "Animated Content",
    type: "animations",
    thumbnailHtml: `<div style="color:white; font-size:2rem; font-weight:bold;">ANIM</div>`,
    html: `<div id="anim-content-demo" style="background:var(--primary); color:black; padding:20px 40px; border-radius:10px; font-weight:bold; font-size:1.5rem; text-align:center; cursor: pointer;">
  Animate Me
</div>`,
    code: `import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
/* ... (rest of code) ... */`,
    js: `
// GSAP Logic Ported to Vanilla JS
// Assuming element with ID 'anim-content-demo'
const el = document.getElementById('anim-content-demo');

if (el) {
    gsap.set(el, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        visibility: "visible"
    });

    gsap.to(el, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
    });
}
`
  },
  {
    id: 6,
    name: "Scanline Overlay",
    type: "layout",
    thumbnailHtml: `<div class="crt-monitor" style="width: 240px; height: 150px; border-width: 3px; box-shadow: none;">
        <div class="scanline-layer" style="background-size: 100% 2px;"></div>
        <div class="crt-content" style="padding: 15px; justify-content: flex-start; text-align: left;">
            <div class="terminal-text" style="font-size: 0.6rem; margin: 2px 0;">> SYS.INIT</div>
            <div class="terminal-text" style="font-size: 0.6rem; margin: 2px 0;">> OK</div>
            <div class="blinking-cursor" style="font-size: 0.8rem;">_</div>
        </div>
        <div class="crt-overlay"></div>
    </div>`,
    html: `<div class="crt-monitor">
    <div class="scanline-layer"></div>
    <div class="crt-content">
        <h3 class="terminal-text">SYSTEM INITIALIZED...</h3>
        <p class="terminal-text">> CONNECTING TO SERVER</p>
        <p class="terminal-text">> 100% SECURE</p>
        <div class="blinking-cursor">_</div>
    </div>
    <div class="crt-overlay"></div>
</div>`,
    code: `.crt-monitor {
  position: relative;
  width: 500px;
  height: 300px;
  background: #0a0a0a;
  overflow: hidden;
  border: 4px solid #333;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
}

.scanline-layer {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%,
    rgba(0, 0, 0, 0.25)
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 5;
}

.crt-content {
  padding: 40px;
  color: #0aff00; /* Retro Green */
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 5px #0aff00;
  height: 100%;
}

.crt-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%);
  pointer-events: none;
  z-index: 10;
  box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
}`
  },
  {
    id: 7,
    name: "Black Hole Event",
    type: "3d",
    html: `
        <div class="black-hole-container">
            <div class="accretion-disk"></div>
            <div class="photon-ring"></div>
            <div class="event-horizon"></div>
        </div>`,
    thumbnailHtml: `
        <div class="black-hole-container" style="width: 100px; height: 100px; perspective: none; transform: scale(0.5);">
            <div class="accretion-disk" style="background: radial-gradient(circle, transparent 30%, #ff6600 40%, transparent 70%); box-shadow: 0 0 20px #ff6600;"></div>
            <div class="event-horizon" style="width: 30px; height: 30px; box-shadow: 0 0 10px #ff6600;"></div>
        </div>`,
    code: `.black-hole-container {
  width: 300px; height: 300px;
  transform: perspective(1000px) rotateX(60deg);
}
.accretion-disk {
  background: radial-gradient(transparent 30%, #ff6600 40%, #ffcc00 45%, transparent 70%);
  box-shadow: 0 0 50px #ff6600;
  animation: spin 2s linear infinite;
}
.event-horizon {
  width: 100px; height: 100px;
  background: #000;
  box-shadow: 0 0 20px #ff6600;
}`
  },
  {
    id: 8,
    name: "Fade Content",
    type: "animations",
    thumbnailHtml: `<div style="color:white; font-size:1.5rem; font-weight:bold; opacity: 0.5;">FADE</div>`,
    html: `<div id="fade-content-demo" style="background:transparent; border: 1px solid rgba(255,255,255,0.2); color:white; padding:40px 60px; border-radius:20px; font-weight:bold; font-size:1.2rem; text-align:center;">
  Fade
</div>`,
    code: `import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget = container || document.getElementById('snap-main-container') || null;
    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const startPct = (1 - threshold) * 100;
    const getSeconds = val => (typeof val === 'number' && val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform'
    });

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            autoAlpha: initialOpacity,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease: ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, []); // Dependencies omitted for brevity in display

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;`
  },
  {
    id: 9,
    name: "Electric Border",
    type: "animations",
    thumbnailHtml: `<div class="thumb-electric-real">
        <svg class="electric-svg" width="100%" height="100%">
            <defs>
                <filter id="electric-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch">
                        <animate attributeName="baseFrequency" values="0.8;0.85;0.75;0.8" dur="0.2s" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="8" />
                </filter>
            </defs>
            <rect class="electric-rect" x="5%" y="5%" width="90%" height="90%" rx="10" ry="10" />
        </svg>
        <div class="thumb-content-electric">
            <h4>Electric Card</h4>
            <div class="mini-btn">Get Started</div>
        </div>
    </div>`,
    html: `<div id="electric-border-demo"><div style="padding: 2rem; color: white;"><h3>Electric Card</h3><p>An electric border for shocking your users, the right way.</p><button class="cyber-btn" style="margin-top:20px;">Get Started</button></div></div>`,
    code: `/* Original Electric Border */
.electric-border {
  position: relative;
  padding: 2rem;
  border: 2px solid cyan;
  box-shadow: 0 0 10px cyan;
  /* Uses Canvas for advanced animation */
}`
  },
  {
    id: 10,
    name: "Glare Hover",
    type: "animations",
    thumbnailHtml: `<div class="thumb-glare-wrapper">
        <div class="thumb-glare-text">GLARE</div>
    </div>`,
    html: `<div id="glare-hover-demo"><h2 style="font-size: 3rem; font-weight: 900; color: #333; margin: 0;">Hover Me</h2></div>`,
    code: `.glare-hover {
  position: relative;
  overflow: hidden;
}
.glare-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(-30deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}
.glare-hover:hover::before {
  transform: translateX(100%);
}`
  },
  {
    id: 11,
    name: "Logo Loop",
    type: "animations",
    thumbnailHtml: `<div style="display:flex; gap:5px; justify-content:center; align-items:center; color:white; font-size:1.5rem;"><span>∞</span><span>⟳</span></div>`,
    html: `<div id="logo-loop-demo" style="width:100%; height:200px; display:flex; align-items:center;"></div>`,
    code: `/* LOGO LOOP */
.logoloop {
  display: flex;
  overflow: hidden;
  --logoloop-gap: 32px;
}
.logoloop__track {
  display: flex;
  animation: scroll linear infinite; /* JS handles this efficiently */
}
/* See renderLogoLoop() in script.js for full logic */`
  },
  {
    id: 12,
    name: "Interactive Cubes",
    type: "animations",
    thumbnailHtml: `<div class="thumb-cubes" style="display:grid; grid-template-columns:repeat(3,1fr); gap:4px; width:100%; height:100%; padding: 25px; box-sizing:border-box;">
      <div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div>
      <div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div>
      <div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div><div style="background:#060010; border:1px solid #fff;"></div>
    </div>`,
    html: `<div id="cubes-demo" class="default-animation" style="width: 60vmin; aspect-ratio: 1/1;"></div>`,
    code: `import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

// ... (Source code provided by user)
// See renderCubes() implementation in script.js`
  },
  {
    id: 13,
    name: "Magnet Lines",
    type: "animations",
    thumbnailHtml: `<div class="thumb-magnet" style="width:100%; height:100%; background:#111; overflow:hidden;"></div>`,
    html: `<div id="magnet-lines-demo" style="width:100%; height:300px; background: #111; overflow:hidden; border-radius:12px;"></div>`,
    code: `import { useRef, useEffect } from 'react';
import './MagnetLines.css';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span');

    const onPointerMove = pointer => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', \`\${r}deg\`);
      });
    };

    window.addEventListener('pointermove', onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        '--rotate': \`\${baseAngle}deg\`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`magnetLines-container \${className}\`}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // ROUTER LOGIC
  const path = window.location.pathname;
  const isDemoPage = path.includes("demo.html");

  if (isDemoPage) {
    initDemoPage();
  } else {
    initIndexPage();
  }
});

function initIndexPage() {
  const grid = document.getElementById("demo-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.querySelector(".search-input"); // Get Search Input

  if (!grid) return; // Safety check

  let currentFilter = "all";
  let currentSearch = "";

  function renderDemos() {
    grid.innerHTML = "";

    let filtered = demos;

    // 1. Filter by Type
    if (currentFilter !== "all") {
      filtered = filtered.filter(d => d.type === currentFilter);
    }

    // 2. Filter by Search (Name)
    if (currentSearch.trim() !== "") {
      const term = currentSearch.toLowerCase().trim();
      filtered = filtered.filter(d => d.name.toLowerCase().includes(term));
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #666; padding: 4rem;">NO COMPONENTS FOUND</div>';
      return;
    }

    filtered.forEach(demo => {
      const card = document.createElement("div");
      card.classList.add("feature-card");

      card.innerHTML = `
                <div class="card-img">
                    ${demo.thumbnailHtml}
                </div>
                <div class="card-info">
                    <div class="card-header">
                        <h3>${demo.name}</h3>
                        <span class="card-badge">${(demo.type || "ui").toUpperCase()}</span>
                    </div>
                    <div class="card-link">View Animation -></div>
                </div>
            `;

      // Click Entire Card to Navigate
      card.addEventListener("click", () => {
        window.location.href = `demo.html?id=${demo.id}`;
      });

      // 3D Tilt Effect (Outer Card)
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      });

      grid.appendChild(card);

      // Initialize Dynamic Thumbnails
      if (demo.id === 13) {
        setTimeout(() => initMagnetThumbnail(card.querySelector('.thumb-magnet')), 50);
      } else if (demo.id === 12) {
        setTimeout(() => initCubesThumbnail(card.querySelector('.thumb-cubes')), 50);
      }
    });
  }

  // Filter Logic
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderDemos();
    });
  });

  // Search Logic
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderDemos();
    });
  }

  renderDemos();
}

function initDemoPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const demo = demos.find(d => d.id === id);

  const titleEl = document.getElementById("demo-title");
  const canvasEl = document.getElementById("demo-container");
  const codeEl = document.getElementById("code-display");
  const copyBtn = document.getElementById("copy-btn");
  const reloadBtn = document.getElementById("reload-btn");

  // New Tabs
  const tabPreview = document.getElementById("tab-preview");
  const tabCode = document.getElementById("tab-code");
  const panelPreview = document.getElementById("panel-preview");
  const panelCode = document.getElementById("panel-code");

  // Customize Controls
  const customizeUI = document.getElementById("customize-ui");

  if (!demo) {
    titleEl.textContent = "ERROR: DEMO NOT FOUND";
    return;
  }

  titleEl.textContent = demo.name;

  // CONFIGURABLE CONTROLS MAPPING: [demoId]: [Array of group IDs to SHOW]
  // If not listed, defaults to empty or generic.
  const controlsConfig = {
    5: ['grp-direction', 'grp-ease', 'grp-disappear-ease', 'grp-reverse', 'grp-opacity', 'grp-distance', 'grp-duration', 'grp-delay', 'grp-init-opacity', 'grp-init-scale', 'grp-threshold', 'grp-disappear-after', 'grp-disappear-duration'],
    8: ['grp-ease', 'grp-disappear-ease', 'grp-blur', 'grp-duration', 'grp-delay', 'grp-init-opacity', 'grp-threshold', 'grp-disappear-after', 'grp-disappear-duration'],
    9: ['grp-color', 'grp-speed', 'grp-chaos', 'grp-radius'],
    10: ['grp-glare-color', 'grp-glare-opacity', 'grp-glare-size', 'grp-glare-duration', 'grp-glare-play-once'],
    11: ['grp-loop-speed', 'grp-loop-direction', 'grp-loop-gap', 'grp-loop-height', 'grp-loop-fade', 'grp-loop-scale']
  };

  // Show Customize UI only for configured demos
  if (controlsConfig[id]) {
    if (customizeUI) customizeUI.style.display = 'block';

    // Hide ALL groups first
    const allGroups = document.querySelectorAll('.control-group');
    allGroups.forEach(g => g.style.display = 'none');

    // Show specific groups for this ID
    controlsConfig[id].forEach(grpId => {
      const grp = document.getElementById(grpId);
      if (grp) grp.style.display = 'flex'; // Restore flex display
    });

  } else {
    if (customizeUI) customizeUI.style.display = 'none';
  }

  // Default Animation Params
  animParams = {
    direction: 'vertical',
    ease: 'power3.out',
    reverse: false,
    distance: 100,
    duration: 0.8,
    delay: 0,
    initOpacity: 0,
    initScale: 1,
    threshold: 0.1,
    animateOpacity: true,
    disappearAfter: 0,
    disappearDuration: 0.5,
    disappearEase: 'power3.in',
    blur: false, // New for Fade Content
    color: '#7df9ff',
    speed: 1,
    chaos: 0.12,
    radius: 24,
    // Glare Hover Defaults
    glareColor: '#ffffff',
    glareOpacity: 0.3,
    glareSize: 300,
    glareDuration: 800,
    playOnce: false,
    // Logo Loop Defaults
    loopSpeed: 100,
    loopDirection: 'left',
    loopGap: 32,
    loopHeight: 28,
    loopFade: true,
    loopScale: false
  };

  // Helper to generate Usage String
  const getUsageCode = () => {
    if (id === 5) {
      return `import AnimatedContent from './AnimatedContent'
        
<AnimatedContent
  distance={${animParams.distance}}
  direction="${animParams.direction}"
  reverse={${animParams.reverse}}
  duration={${animParams.duration}}
  ease="${animParams.ease}"
  initialOpacity={${animParams.initOpacity}}
  animateOpacity={${animParams.animateOpacity}}
  scale={${animParams.initScale}}
  threshold={${animParams.threshold}}
  delay={${animParams.delay}}  
  disappearAfter={${animParams.disappearAfter}}
  disappearDuration={${animParams.disappearDuration}}
  disappearEase="${animParams.disappearEase}"
>
  <div>Content to Animate</div>
</AnimatedContent>`;
    } else if (id === 8) {
      return `import FadeContent from './FadeContent'
  
<FadeContent 
  blur={${animParams.blur}} 
  duration={${animParams.duration * 1000}} 
  easing="${animParams.ease}" 
  initialOpacity={${animParams.initOpacity}}
  delay={${animParams.delay * 1000}}
  threshold={${animParams.threshold}}
  disappearAfter={${animParams.disappearAfter * 1000}}
  disappearDuration={${animParams.disappearDuration * 1000}}
  disappearEase="${animParams.disappearEase}"
>
  {/* Anything placed inside this container will be fade into view */}
</FadeContent>`;
    } else if (id === 9) {
      return `import ElectricBorder from './ElectricBorder'

<ElectricBorder
  color="${animParams.color}"
  speed={${animParams.speed}}
  chaos={${animParams.chaos}}
  style={{ borderRadius: ${animParams.radius} }}
>
  <div>
    Content
  </div>
</ElectricBorder>`;
    } else if (id === 10) {
      return `import GlareHover from './GlareHover'

<div style={{ height: '600px', position: 'relative' }}>
  <GlareHover
    glareColor="${animParams.glareColor}"
    glareOpacity={${animParams.glareOpacity}}
    glareAngle={-30}
    glareSize={${animParams.glareSize}}
    transitionDuration={${animParams.glareDuration}}
    playOnce={${animParams.playOnce}}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      Hover Me
    </h2>
  </GlareHover>
</div>

// --- GlareHover.jsx ---
import './GlareHover.css';

const GlareHover = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const vars = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': \`\${glareAngle}deg\`,
    '--gh-duration': \`\${transitionDuration}ms\`,
    '--gh-size': \`\${glareSize}%\`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor
  };

  return (
    <div
      className={\`glare-hover \${playOnce ? 'glare-hover--play-once' : ''} \${className}\`}
      style={{ ...vars, ...style }}
    >
      {children}
    </div>
  );
};

export default GlareHover;

// --- GlareHover.css ---
.glare-hover {
  width: var(--gh-width);
  height: var(--gh-height);
  background: var(--gh-bg);
  border-radius: var(--gh-br);
  border: 1px solid var(--gh-border);
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;
}

.glare-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--gh-angle),
    hsla(0, 0%, 0%, 0) 60%,
    var(--gh-rgba) 70%,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0) 100%
  );
  transition: var(--gh-duration) ease;
  background-size:
    var(--gh-size) var(--gh-size),
    100% 100%;
  background-repeat: no-repeat;
  background-position:
    -100% -100%,
    0 0;
}

.glare-hover:hover {
  cursor: pointer;
}

.glare-hover:hover::before {
  background-position:
    100% 100%,
    0 0;
}

.glare-hover--play-once::before {
  transition: none;
}

.glare-hover--play-once:hover::before {
  transition: var(--gh-duration) ease;
  background-position:
    100% 100%,
    0 0;
}`;
    } else if (id === 11) {
      return `import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiGraphql } from 'react-icons/si';

// Usage
<LogoLoop
  speed={${animParams.loopSpeed}}
  direction="${animParams.loopDirection}"
  width="100%"
  logoHeight={${animParams.loopHeight}}
  gap={${animParams.loopGap}}
  fadeOut={${animParams.loopFade}}
  scaleOnHover={${animParams.loopScale}}
>
   {/* In React you pass items as props or children */}
</LogoLoop>

// FULL CODE INCLUDED IN ARTIFACTS OR SEPARATE FILE`;
    }
    return null;
  };

  // Helper to update label values AND Usage Code
  const updateLabels = () => {
    // Labels
    const setLabel = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setLabel('val-distance', animParams.distance);
    setLabel('val-duration', animParams.duration);
    setLabel('val-delay', animParams.delay);
    setLabel('val-init-opacity', animParams.initOpacity);
    setLabel('val-init-scale', animParams.initScale);
    setLabel('val-threshold', animParams.threshold);
    setLabel('val-disappear-after', animParams.disappearAfter);
    setLabel('val-disappear-duration', animParams.disappearDuration);
    setLabel('val-speed', animParams.speed);
    setLabel('val-chaos', animParams.chaos);
    setLabel('val-radius', animParams.radius);

    // Glare Hover Labels
    setLabel('val-glare-opacity', animParams.glareOpacity);
    setLabel('val-glare-size', animParams.glareSize);
    setLabel('val-glare-duration', animParams.glareDuration);

    // Logo Loop
    setLabel('val-loop-speed', animParams.loopSpeed);
    setLabel('val-loop-gap', animParams.loopGap);
    setLabel('val-loop-height', animParams.loopHeight);

    setLabel('val-glare-duration', animParams.glareDuration);

    // Logo Loop
    setLabel('val-loop-speed', animParams.loopSpeed);
    setLabel('val-loop-gap', animParams.loopGap);
    setLabel('val-loop-height', animParams.loopHeight);


    // Usage Code Update
    const usageEl = document.getElementById("code-usage");
    if (usageEl) {
      const usageCode = getUsageCode();
      const parentSection = usageEl.closest('.code-section');

      if (usageCode) {
        usageEl.textContent = usageCode;
        if (parentSection) parentSection.style.display = 'block';
      } else {
        if (parentSection) parentSection.style.display = 'none';
      }
    }
  };

  // Canvas & Animation Loop Ref
  let electricAnimId = null;

  // Helper for Electric Border
  const renderElectricBorder = () => {
    if (electricAnimId) cancelAnimationFrame(electricAnimId);

    const container = document.getElementById('electric-border-demo');
    if (!container) return;

    container.className = "electric-border";
    container.style.borderRadius = `${animParams.radius}px`;
    container.innerHTML = `
             <div class="eb-canvas-container">
                <canvas class="eb-canvas"></canvas>
             </div>
             <div class="eb-layers">
                <div class="eb-glow-1" style="box-shadow: 0 0 20px ${animParams.color}, inset 0 0 20px ${animParams.color}; opacity: 0.5;"></div>
             </div>
             <div class="eb-content">${demo.html.replace('id="electric-border-demo"', '').replace('class="electric-border"', '')}</div>
        `;

    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const random = (x) => (Math.sin(x * 12.9898) * 43758.5453) % 1;
    const noise2D = (x, y) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;
      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);
      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);
      return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
    };

    const octavedNoise = (x, octaves, amplitude, frequency, time) => {
      let y = 0;
      let amp = amplitude;
      let freq = frequency;
      for (let i = 0; i < octaves; i++) {
        y += amp * noise2D(freq * x, time * freq * 0.3);
        freq *= 1.6;
        amp *= 0.7;
      }
      return y;
    };

    let time = 0;
    const borderOffset = 60;

    const loop = () => {
      if (!document.getElementById('electric-border-demo')) return; // Safety exit

      const rect = container.getBoundingClientRect();
      const w = rect.width + borderOffset * 2;
      const h = rect.height + borderOffset * 2;

      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.translate(borderOffset, borderOffset);
      ctx.strokeStyle = animParams.color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = animParams.color;
      ctx.shadowBlur = 10;

      const r = parseInt(animParams.radius);
      const innerW = rect.width;
      const innerH = rect.height;

      time += 0.01 * parseFloat(animParams.speed);
      const amp = parseFloat(animParams.chaos) * 50;

      ctx.beginPath();
      const step = 5;

      // Top
      for (let i = r; i <= innerW - r; i += step) {
        const noise = octavedNoise(i / 100, 2, amp, 1, time);
        ctx.lineTo(i, 0 + noise);
      }
      // Right
      for (let i = 0; i <= innerH; i += step) {
        const noise = octavedNoise((innerW + i) / 100, 2, amp, 1, time);
        ctx.lineTo(innerW + noise, i);
      }
      // Bottom
      for (let i = innerW; i >= 0; i -= step) {
        const noise = octavedNoise((innerW + innerH + (innerW - i)) / 100, 2, amp, 1, time);
        ctx.lineTo(i, innerH + noise);
      }
      // Left
      for (let i = innerH; i >= 0; i -= step) {
        const noise = octavedNoise((2 * innerW + innerH + (innerH - i)) / 100, 2, amp, 1, time);
        ctx.lineTo(0 - noise, i);
      }

      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      electricAnimId = requestAnimationFrame(loop);
    };
    loop();
  };

  // FAITHFUL PORT OF ELECTRIC BORDER (V2)
  const renderElectricBorderV2 = () => {
    if (electricAnimId) cancelAnimationFrame(electricAnimId);

    const container = document.getElementById('electric-border-demo');
    if (!container) return;

    // Apply Styles
    container.className = "electric-border";
    const borderRadius = parseInt(animParams.radius);
    container.style.borderRadius = `${borderRadius}px`;
    container.style.setProperty('--electric-border-color', animParams.color);

    // Inject Structure
    // Extract inner content from our data string (it was just the inner card)
    const innerContent = demo.html.replace('<div id="electric-border-demo">', '').replace(/<\/div>$/, '');

    container.innerHTML = `
             <div class="eb-canvas-container">
                <canvas class="eb-canvas"></canvas>
             </div>
             <div class="eb-layers">
                <div class="eb-glow-1"></div>
                <div class="eb-glow-2"></div>
                <div class="eb-background-glow"></div>
             </div>
             <div class="eb-content">${innerContent}</div>
        `;

    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // --- MATH FUNCTIONS ---
    const random = (x) => (Math.sin(x * 12.9898) * 43758.5453) % 1;

    const noise2D = (x, y) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);
      return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
    };

    const octavedNoise = (x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness) => {
      let y = 0;
      let amplitude = baseAmplitude;
      let frequency = baseFrequency;
      for (let i = 0; i < octaves; i++) {
        let octaveAmplitude = amplitude;
        if (i === 0) octaveAmplitude *= baseFlatness;
        y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
        frequency *= lacunarity;
        amplitude *= gain;
      }
      return y;
    };

    const getCornerPoint = (centerX, centerY, radius, startAngle, arcLength, progress) => {
      const angle = startAngle + progress * arcLength;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    };

    const getRoundedRectPoint = (t, left, top, width, height, radius) => {
      const straightWidth = width - 2 * radius;
      const straightHeight = height - 2 * radius;
      const cornerArc = (Math.PI * radius) / 2;
      const totalPerimeter = 2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
      const distance = t * totalPerimeter;
      let accumulated = 0;

      // Top edge
      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return { x: left + radius + progress * straightWidth, y: top };
      }
      accumulated += straightWidth;

      // Top-right corner
      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      // Right edge
      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return { x: left + width, y: top + radius + progress * straightHeight };
      }
      accumulated += straightHeight;

      // Bottom-right corner
      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      // Bottom edge
      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return { x: left + width - radius - progress * straightWidth, y: top + height };
      }
      accumulated += straightWidth;

      // Bottom-left corner
      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, progress);
      }
      accumulated += cornerArc;

      // Left edge
      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return { x: left, y: top + height - radius - progress * straightHeight };
      }
      accumulated += straightHeight;

      // Top-left corner
      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, progress);
    };

    // --- RENDER LOOP ---
    let lastFrameTime = performance.now();
    let time = 0;

    // Configuration Constants
    const octaves = 10;
    const lacunarity = 1.6;
    const gain = 0.7;
    const frequency = 10;
    const baseFlatnessParam = 0;
    const displacement = 60; // Scale
    const borderOffset = 60; // Padding

    const loop = (currentTime) => {
      // If canvas is removed from DOM, stop
      if (!document.contains(canvas)) return;

      const deltaTime = (currentTime - lastFrameTime) / 1000;
      lastFrameTime = currentTime;
      time += deltaTime * parseFloat(animParams.speed || 1);

      const rect = container.getBoundingClientRect();
      const width = rect.width + borderOffset * 2;
      const height = rect.height + borderOffset * 2;

      // Update Canvas Size
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      ctx.strokeStyle = animParams.color || '#5227FF';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const left = borderOffset;
      const top = borderOffset;
      const borderWidth = width - 2 * borderOffset;
      const borderHeight = height - 2 * borderOffset;
      const maxRadius = Math.min(borderWidth, borderHeight) / 2;
      const radiusVal = Math.min(parseInt(animParams.radius || 24), maxRadius);

      const approximatePerimeter = 2 * (borderWidth + borderHeight) + 2 * Math.PI * radiusVal;
      const sampleCount = Math.floor(approximatePerimeter / 2); // Sample density

      ctx.beginPath();

      const amplitude = parseFloat(animParams.chaos || 0.12);

      for (let i = 0; i <= sampleCount; i++) {
        const progress = i / sampleCount;
        const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radiusVal);

        const xNoise = octavedNoise(
          progress * 8,
          octaves,
          lacunarity,
          gain,
          amplitude,
          frequency,
          time,
          0, // seed 0
          baseFlatnessParam
        );

        const yNoise = octavedNoise(
          progress * 8,
          octaves,
          lacunarity,
          gain,
          amplitude,
          frequency,
          time,
          1, // seed 1
          baseFlatnessParam
        );

        const displacedX = point.x + xNoise * displacement;
        const displacedY = point.y + yNoise * displacement;

        if (i === 0) {
          ctx.moveTo(displacedX, displacedY);
        } else {
          ctx.lineTo(displacedX, displacedY);
        }
      }

      ctx.closePath();
      ctx.stroke();

      electricAnimId = requestAnimationFrame(loop);
    };

    electricAnimId = requestAnimationFrame(loop);
  };

  const renderGlareHover = () => {
    const container = document.getElementById('glare-hover-demo');
    if (!container) return; // wrapper

    container.className = `glare-hover ${animParams.playOnce ? 'glare-hover--play-once' : ''}`;

    // Color conversion logic (Hex to RGBA for glare)
    let glareColor = animParams.glareColor;
    const hex = glareColor.replace('#', '');
    let rgba = glareColor;
    const opacity = parseFloat(animParams.glareOpacity);

    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Set CSS Variables
    container.style.setProperty('--gh-width', '100%'); // Fit to wrapper
    container.style.setProperty('--gh-height', '100%');
    container.style.setProperty('--gh-bg', '#000');
    container.style.setProperty('--gh-br', '10px');
    container.style.setProperty('--gh-angle', '-30deg');
    container.style.setProperty('--gh-duration', `${animParams.glareDuration}ms`);
    container.style.setProperty('--gh-size', `${animParams.glareSize}%`);
    container.style.setProperty('--gh-rgba', rgba);
    container.style.setProperty('--gh-border', '#333');
  };

  // Render Function
  const renderCanvas = () => {
    canvasEl.innerHTML = `<div class="demo-element-wrapper">${demo.html}</div>`;

    // STOP Logo Loop Animation
    if (logoLoopAnimId) cancelAnimationFrame(logoLoopAnimId);

    // SPECIAL HANDLING
    if (id === 5 || id === 8) {
      setTimeout(() => {
        // Get Element based on ID
        const elId = id === 5 ? 'anim-content-demo' : 'fade-content-demo';
        const el = document.getElementById(elId);
        if (!el) return;

        if (id === 5) {
          // Animated Content GSAP Logic (Existing)
          const axis = animParams.direction === 'horizontal' ? 'x' : 'y';
          const offset = animParams.reverse ? -animParams.distance : animParams.distance;

          gsap.set(el, {
            x: 0, y: 0,
            [axis]: offset,
            scale: animParams.initScale,
            opacity: animParams.animateOpacity ? animParams.initOpacity : 1,
            visibility: "visible",
            filter: 'none'
          });

          gsap.to(el, {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            duration: parseFloat(animParams.duration),
            ease: animParams.ease,
            delay: parseFloat(animParams.delay),
            onComplete: () => {
              if (parseFloat(animParams.disappearAfter) > 0) {
                gsap.to(el, {
                  [axis]: animParams.reverse ? animParams.distance : -animParams.distance,
                  scale: 0.8,
                  opacity: 0,
                  duration: parseFloat(animParams.disappearDuration),
                  ease: animParams.disappearEase,
                  delay: parseFloat(animParams.disappearAfter)
                });
              }
            }
          });
        } else if (id === 8) {
          // Fade Content GSAP Logic (New)
          gsap.set(el, {
            opacity: animParams.initOpacity,
            filter: animParams.blur ? 'blur(10px)' : 'blur(0px)',
            visibility: 'visible',
            willChange: 'opacity, filter'
          });

          gsap.to(el, {
            opacity: 1,
            filter: 'blur(0px)',
            duration: parseFloat(animParams.duration),
            ease: animParams.ease,
            delay: parseFloat(animParams.delay),
            onComplete: () => {
              if (parseFloat(animParams.disappearAfter) > 0) {
                gsap.to(el, {
                  opacity: animParams.initOpacity,
                  filter: animParams.blur ? 'blur(10px)' : 'blur(0px)',
                  delay: parseFloat(animParams.disappearAfter),
                  duration: parseFloat(animParams.disappearDuration),
                  ease: animParams.disappearEase
                });
              }
            }
          });
        }

      }, 50);

      updateLabels();

    } else if (id === 9) {
      // Electric Border
      setTimeout(renderElectricBorderV2, 50);
      updateLabels();

    } else if (id === 10) {
      // Glare Hover
      setTimeout(renderGlareHover, 50);
      updateLabels();

    } else if (id === 11) {
      // Logo Loop
      setTimeout(renderLogoLoop, 50);
      updateLabels();

    } else if (id === 12) {
      // Interactive Cubes
      if (typeof renderCubes === 'function') {
        setTimeout(renderCubes, 50);
      }
      updateLabels();

    } else if (id === 13) {
      // Magnet Lines
      if (typeof renderMagnetLines === 'function') {
        setTimeout(renderMagnetLines, 50);
      }
      updateLabels();

    } else if (demo.js) {
      // GENERIC HANDLING
      try {
        const oldScript = document.getElementById("demo-script-exec");
        if (oldScript) oldScript.remove();
        const scriptEl = document.createElement("script");
        scriptEl.id = "demo-script-exec";
        scriptEl.textContent = demo.js;
        document.body.appendChild(scriptEl);
      } catch (e) {
        console.error("Error executing demo JS:", e);
      }
    }
  };

  // Initial Render
  renderCanvas();

  // Populate Static Source Code
  const sourceEl = document.getElementById("code-source");
  if (sourceEl) {
    sourceEl.textContent = demo.code || demo.html;
  }

  // Tab Logic
  const switchTab = (tab) => {
    if (tab === 'preview') {
      tabPreview.classList.add('active');
      tabCode.classList.remove('active');
      panelPreview.classList.add('active');
      panelCode.classList.remove('active');
    } else {
      tabCode.classList.add('active');
      tabPreview.classList.remove('active');
      panelCode.classList.add('active');
      panelPreview.classList.remove('active');
    }
  };

  tabPreview.addEventListener('click', () => switchTab('preview'));
  tabCode.addEventListener('click', () => switchTab('code'));

  // Reload Logic
  if (reloadBtn) {
    reloadBtn.addEventListener('click', () => {
      // Re-render canvas to restart animations
      canvasEl.innerHTML = ""; // Clear
      setTimeout(renderCanvas, 50);
    });
  }

  // New Multi-Copy Logic
  const copyBtns = document.querySelectorAll(".btn-copy-icon");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const textToCopy = targetEl.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = "COPIED!";
        btn.style.color = "var(--primary)";
        btn.style.borderColor = "var(--primary)";

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = "";
          btn.style.borderColor = "";
        }, 2000);
      });
    });
  });

  // Attach Listeners for Controls
  if ([5, 8, 9, 10, 11, 12, 13].includes(id)) {
    const bind = (id, key, type = 'value') => {
      const el = document.getElementById(id);
      if (!el) return;
      // Remove old listeners to avoid stacking if re-evaluating (though re-init page wipes)
      el.addEventListener('input', (e) => {
        let val = type === 'checkbox' ? e.target.checked : e.target.value;
        animParams[key] = val;
        renderCanvas();
      });
    };

    bind('ctrl-direction', 'direction');
    bind('ctrl-ease', 'ease');
    bind('ctrl-disappear-ease', 'disappearEase');
    bind('ctrl-reverse', 'reverse', 'checkbox');
    bind('ctrl-opacity', 'animateOpacity', 'checkbox');
    bind('ctrl-blur', 'blur', 'checkbox'); // BIND THE NEW TOGGLE

    bind('ctrl-distance', 'distance');
    bind('ctrl-duration', 'duration');
    bind('ctrl-delay', 'delay');
    bind('ctrl-init-opacity', 'initOpacity');
    bind('ctrl-init-scale', 'initScale');
    bind('ctrl-threshold', 'threshold');
    bind('ctrl-disappear-after', 'disappearAfter');
    bind('ctrl-disappear-duration', 'disappearDuration');

    bind('ctrl-color', 'color');
    bind('ctrl-speed', 'speed');
    bind('ctrl-chaos', 'chaos');
    bind('ctrl-radius', 'radius');

    // Glare Hover Bindings
    bind('ctrl-glare-color', 'glareColor');
    bind('ctrl-glare-opacity', 'glareOpacity');
    bind('ctrl-glare-size', 'glareSize');
    bind('ctrl-glare-duration', 'glareDuration');
    bind('ctrl-glare-play-once', 'playOnce', 'checkbox');

    // Logo Loop
    bind('ctrl-loop-speed', 'loopSpeed');
    bind('ctrl-loop-gap', 'loopGap');
    bind('ctrl-loop-height', 'loopHeight');
    bind('ctrl-loop-fade', 'loopFade', 'checkbox');
    bind('ctrl-loop-scale', 'loopScale', 'checkbox');

    // Liquid Ether
    bind('ctrl-liquid-speed', 'speed');
    bind('ctrl-liquid-distortion', 'distortion');
    bind('ctrl-liquid-color1', 'color1');
    bind('ctrl-liquid-color2', 'color2');

    // Magnet Lines
    bind('ctrl-mag-rows', 'rows');
    bind('ctrl-mag-cols', 'cols');
    bind('ctrl-mag-radius', 'radius');
    bind('ctrl-mag-color', 'color');

    // Direction Toggle for Loop
    bind('ctrl-glare-color', 'glareColor');
    bind('ctrl-glare-opacity', 'glareOpacity');
    bind('ctrl-glare-size', 'glareSize');
    bind('ctrl-glare-duration', 'glareDuration');
    bind('ctrl-glare-play-once', 'playOnce', 'checkbox');

    // Logo Loop
    bind('ctrl-loop-speed', 'loopSpeed');
    bind('ctrl-loop-gap', 'loopGap');
    bind('ctrl-loop-height', 'loopHeight');
    bind('ctrl-loop-fade', 'loopFade', 'checkbox');
    bind('ctrl-loop-scale', 'loopScale', 'checkbox');

    // Direction Toggle for Loop
    const dirContainer = document.querySelector('#grp-loop-direction .toggle-pill');
    if (dirContainer) {
      const spans = dirContainer.querySelectorAll('span');
      spans.forEach(span => {
        span.addEventListener('click', () => {
          spans.forEach(s => s.classList.remove('active'));
          span.classList.add('active');
          animParams.loopDirection = span.dataset.value;
          renderCanvas();
        });
      });
    }
  }
}

// LOGO LOOP LOGIC
let logoLoopAnimId = null;

const renderLogoLoop = () => {
  const container = document.getElementById('logo-loop-demo');
  if (!container) return;

  // 1. Setup Container
  container.innerHTML = ''; // Clear previous
  container.className = `logoloop ${animParams.loopFade ? 'logoloop--fade' : ''} ${animParams.loopScale ? 'logoloop--scale-hover' : ''}`;

  // Apply styles dynamically
  container.style.width = '100%';
  container.style.height = '200px';
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'flex-start'; // Start from left usually
  container.style.setProperty('--logoloop-gap', `${animParams.loopGap}px`);
  container.style.setProperty('--logoloop-logoHeight', `${animParams.loopHeight}px`);

  // Fake Logo Data (SVGs)
  const logos = [
    `<svg viewBox="0 0 24 24"><path fill="#61DAFB" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path fill="#ffffff" stroke="white" stroke-width="2" d="M12 2L2 22h20L12 2z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path fill="#3178C6" d="M2 2h20v20H2z M12 6v12 M6 12h12"/></svg>`,
    `<svg viewBox="0 0 24 24"><path fill="#38B2AC" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path fill="#F0DB4F" d="M2 2h20v20H2z"/><path fill="#323330" d="M10 10h4v4h-4z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path fill="#FF4154" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`,
  ];

  // 2. Create Track
  const track = document.createElement('div');
  track.className = 'logoloop__track';

  // 3. Create List(s)
  // Fill screen logic: simplistic here, just 6 copies
  for (let c = 0; c < 6; c++) {
    const list = document.createElement('ul');
    list.className = 'logoloop__list';
    logos.forEach((svgStr, i) => {
      const li = document.createElement('li');
      li.className = 'logoloop__item';
      li.innerHTML = svgStr;
      list.appendChild(li);
    });
    track.appendChild(list);
  }

  container.appendChild(track);

  // 4. Animation Logic
  let lastTime = performance.now();
  let offset = 0;
  const speed = parseFloat(animParams.loopSpeed);
  const direction = animParams.loopDirection || 'left';

  const loop = (time) => {
    if (!logoLoopAnimId) return;
    if (!document.contains(track)) return;

    const dt = (time - lastTime) / 1000;
    lastTime = time;

    // Sanity check dt
    if (dt > 0.1) {
      // Tab inactive or lag spike, skip frame drift
      logoLoopAnimId = requestAnimationFrame(loop);
      return;
    }

    const list = track.querySelector('.logoloop__list');
    if (!list) {
      logoLoopAnimId = requestAnimationFrame(loop);
      return;
    }

    const seqWidth = list.offsetWidth;

    if (seqWidth > 0) {
      const move = speed * dt;

      if (direction === 'left') {
        offset += move;
        if (offset >= seqWidth) offset %= seqWidth;
      } else {
        offset -= move;
        if (offset <= 0) {
          offset = (offset % seqWidth) + seqWidth;
        }
      }

      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
    }

    logoLoopAnimId = requestAnimationFrame(loop);
  };

  logoLoopAnimId = requestAnimationFrame(loop);
};

// INTERACTIVE CUBES (GSAP)
const renderCubes = () => {
  const container = document.getElementById('cubes-demo');
  if (!container) return;

  // Use params/defaults
  // "gridSize={8} maxAngle={45} radius={3} borderStyle='2px dashed #B19EEF' faceColor='#1a1a2e' rippleColor='#ff6b6b' rippleSpeed={1.5} autoAnimate rippleOnClick"
  const gridSize = 8;
  const maxAngle = 45;
  const radius = 3;
  const borderStyle = '2px dashed #B19EEF';
  const faceColor = '#1a1a2e';
  const rippleColor = '#ff6b6b';
  const rippleSpeed = 1.5;
  const autoAnimate = true;
  const rippleOnClick = true;

  // Build the grid HTML
  // We need <div class="default-animation--scene"><div class="cube"><faces...></div></div>
  const scene = document.createElement('div');
  scene.className = 'default-animation--scene';
  Object.assign(scene.style, {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  });

  // Generate cubes
  const cells = gridSize * gridSize;
  for (let i = 0; i < cells; i++) {
    const r = Math.floor(i / gridSize);
    const c = i % gridSize;
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.dataset.row = r;
    cube.dataset.col = c;

    ['top', 'bottom', 'left', 'right', 'front', 'back'].forEach(faceName => {
      const face = document.createElement('div');
      face.className = `cube-face cube-face--${faceName}`;
      // Styles from wrapperStyle
      face.style.border = borderStyle;
      face.style.background = faceColor;
      cube.appendChild(face);
    });

    scene.appendChild(cube);
  }
  container.innerHTML = '';
  container.appendChild(scene);

  // LOGIC Ported from React
  let rafId = null;
  let idleTimer = null;
  // let userActive = false; // We can use a simple flag

  const tiltAt = (rowCenter, colCenter) => {
    const cubes = scene.querySelectorAll('.cube');
    cubes.forEach(cube => {
      const r = +cube.dataset.row;
      const c = +cube.dataset.col;
      const dist = Math.hypot(r - rowCenter, c - colCenter);
      if (dist <= radius) {
        const pct = 1 - dist / radius;
        const angle = pct * maxAngle;
        gsap.to(cube, {
          duration: 0.3, // enter
          ease: 'power3.out',
          overwrite: true,
          rotateX: -angle,
          rotateY: angle
        });
      } else {
        gsap.to(cube, {
          duration: 0.6, // leave
          ease: 'power3.out', // easing
          overwrite: true,
          rotateX: 0,
          rotateY: 0
        });
      }
    });
  };

  // Mouse Interaction
  const onPointerMove = (e) => {
    // userActive = true;
    // if(idleTimer) clearTimeout(idleTimer);

    const rect = scene.getBoundingClientRect();
    const cellW = rect.width / gridSize;
    const cellH = rect.height / gridSize;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colCenter = x / cellW;
    const rowCenter = y / cellH;

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

    // idleTimer = setTimeout(() => userActive = false, 3000); // Resume auto
  };

  // Click Ripple
  const onClick = (e) => {
    if (!rippleOnClick) return;
    const rect = scene.getBoundingClientRect();
    const cellW = rect.width / gridSize;
    const cellH = rect.height / gridSize;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colHit = Math.floor(x / cellW);
    const rowHit = Math.floor(y / cellH);

    const baseRingDelay = 0.15;
    const baseAnimDur = 0.3;
    const baseHold = 0.6;

    const spreadDelay = baseRingDelay / rippleSpeed;
    const animDuration = baseAnimDur / rippleSpeed;
    const holdTime = baseHold / rippleSpeed;

    const rings = {};
    const cubes = scene.querySelectorAll('.cube');
    cubes.forEach(cube => {
      const r = +cube.dataset.row;
      const c = +cube.dataset.col;
      const dist = Math.hypot(r - rowHit, c - colHit);
      const ring = Math.round(dist);
      if (!rings[ring]) rings[ring] = [];
      rings[ring].push(cube);
    });

    Object.keys(rings).map(Number).sort((a, b) => a - b).forEach(ring => {
      const delay = ring * spreadDelay;
      const faces = [];
      rings[ring].forEach(cube => {
        faces.push(...cube.querySelectorAll('.cube-face'));
      });

      // Flash color
      gsap.to(faces, {
        backgroundColor: rippleColor,
        duration: animDuration,
        delay: delay,
        ease: 'power3.out'
      });
      // Revert
      gsap.to(faces, {
        backgroundColor: faceColor,
        duration: animDuration,
        delay: delay + animDuration + holdTime,
        ease: 'power3.out'
      });
    });
  };

  const resetAll = () => {
    const cubes = scene.querySelectorAll('.cube');
    gsap.to(cubes, {
      duration: 0.6,
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out'
    });
  };

  scene.addEventListener('pointermove', onPointerMove);
  scene.addEventListener('mouseleave', resetAll);
  scene.addEventListener('click', onClick);

  // Initial random shimmy
  tiltAt(gridSize / 2, gridSize / 2);
  setTimeout(resetAll, 500);

};

// MAGNET LINES (DOM Version)
const renderMagnetLines = () => {
  const container = document.getElementById('magnet-lines-demo');
  if (!container) return;

  container.innerHTML = '';
  Object.assign(container.style, {
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden' // contain the grid
  });

  // Params
  const rows = parseInt(animParams.rows) || 9;
  const cols = parseInt(animParams.cols) || 9;
  const lineColor = animParams.color || "#efefef";
  const lineWidth = "4px"; // 1vmin approx
  const lineHeight = "24px"; // 6vmin approx
  const baseAngle = -10;

  // Create Grid Wrapper
  const grid = document.createElement('div');
  grid.className = 'magnetLines-container';
  Object.assign(grid.style, {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    width: '60vmin', // Container Size (Bigger)
    height: '60vmin',
    gap: '10px',
    transformStyle: 'preserve-3d', // Enable 3D
    transition: 'transform 0.1s ease-out'
  });

  // 3D Tilt Logic
  const handleTilt = (e) => {
    const rect = grid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 15 deg)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    grid.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    grid.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  // Attach to container (so it works even when not hovering the grid directly if we wanted, 
  // but hovering grid feels more direct). Let's attach to window or container?
  // User sent index card image -> Index card tilts when you hover IT.
  // So we attach to 'container' (the panel) or 'grid'? 
  // Attaching to 'container' gives a better feel for "outside animation".
  container.addEventListener('mousemove', handleTilt);
  container.addEventListener('mouseleave', resetTilt);

  const total = rows * cols;
  for (let i = 0; i < total; i++) {
    const span = document.createElement('span');
    Object.assign(span.style, {
      display: 'block',
      backgroundColor: lineColor,
      width: lineWidth,
      height: lineHeight,
      transform: `rotate(${baseAngle}deg)`, // Initial
      transition: 'transform 0.1s ease-out' // Smooth it slightly
    });
    // We'll update transform directly in JS for performance
    // or use CSS var if we want strict adherence, but direct transform is often smoother in vanilla loop
    // The React code uses --rotate var. Let's send that.
    span.style.transform = `rotate(var(--rotate, ${baseAngle}deg))`;

    grid.appendChild(span);
  }

  container.appendChild(grid);

  // Event Listener
  const items = grid.querySelectorAll('span');

  const onPointerMove = (e) => {
    const pointer = { x: e.clientX, y: e.clientY };
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;

      const b = pointer.x - centerX;
      const a = pointer.y - centerY;
      const c = Math.sqrt(a * a + b * b) || 1;
      const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

      item.style.setProperty('--rotate', `${r}deg`);
    });
  };

  window.addEventListener('pointermove', onPointerMove);

  // Initial trigger
  if (items.length) {
    const middleIndex = Math.floor(items.length / 2);
    const rect = items[middleIndex].getBoundingClientRect();
    onPointerMove({ clientX: rect.x + 100, clientY: rect.y + 100 });
  }

  // NOTE: In a real SPA, we'd removeEventListener. 
  // Since we don't have a clear "unmount" here, we'll bank on the page reload or overwrite.
  // Ideally, attach to container if possible, but the code uses window.
};



// MAGNET LINES THUMBNAIL (For Index Page)
const initMagnetThumbnail = (container) => {
  if (!container) return;
  container.innerHTML = '';

  // Grid settings for smaller thumbnail
  const rows = 5;
  const cols = 5;
  const gap = 10;
  // Use CSS Grid
  Object.assign(container.style, {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
    padding: '20px', // padding inside card
    boxSizing: 'border-box'
  });

  const total = rows * cols;
  for (let i = 0; i < total; i++) {
    const span = document.createElement('span');
    Object.assign(span.style, {
      display: 'block',
      backgroundColor: '#efefef',
      borderRadius: '4px',
      width: '100%',
      height: '100%',
      transform: 'rotate(-10deg)',
      transition: 'transform 0.1s ease'
    });
    container.appendChild(span);
  }

  // Attach listener to the CARD (parent of container) or Window?
  // Ideally, the tracking feels best on window/document for global effect, 
  // or on the grid itself. The user demo tracks on window.
  // For the thumbnail, let's track on the container to keep it self-contained?
  // Actually, standard behavior in index is usually per-card.

  const items = container.querySelectorAll('span');
  const onMove = (e) => {
    const pointer = { x: e.clientX, y: e.clientY };
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;
      const b = pointer.x - centerX;
      const a = pointer.y - centerY;
      const c = Math.sqrt(a * a + b * b) || 1;
      const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);
      item.style.transform = `rotate(${r}deg)`;
    });
  };

  // If we want it to react even when not hovering the specific card (global feel):
  // document.addEventListener('mousemove', onMove); 
  // But that might be heavy for a thumb. Let's do it on the card container hover.
  // The 'card' element isn't directly passed here, but 'container' is inside 'card'.
  // Let's attach to 'container' for now.
  container.addEventListener('mousemove', onMove);

  // Also random initial movement
  if (items.length) {
    const rect = items[12].getBoundingClientRect(); // center one
    onMove({ clientX: rect.x + 50, clientY: rect.y - 50 });
  }
};



// INTERACTIVE CUBES THUMBNAIL (For Index Page)
const initCubesThumbnail = (container) => {
  if (!container) return;
  container.innerHTML = '';

  // Mini config
  const gridSize = 6; // More detailed (6x6)
  const gap = 2; // Tighter gap

  Object.assign(container.style, {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    gap: `${gap}px`,
    padding: '15px',
    boxSizing: 'border-box'
  });

  const total = gridSize * gridSize;
  for (let i = 0; i < total; i++) {
    const cube = document.createElement('div');
    cube.className = 'cube'; // Re-use main cube CSS

    ['top', 'bottom', 'left', 'right', 'front', 'back'].forEach(faceName => {
      const face = document.createElement('div');
      face.className = `cube-face cube-face--${faceName}`;
      // Match the Demo Look: Dashed + Purple
      face.style.border = '1px dashed #B19EEF';
      face.style.background = '#060010';
      face.style.opacity = '0.7'; // Slight transparency for layering
      cube.appendChild(face);
    });

    // Add data attrs for math
    const r = Math.floor(i / gridSize);
    const c = i % gridSize;
    cube.dataset.row = r;
    cube.dataset.col = c;

    container.appendChild(cube);
  }

  // Mini interaction
  const items = container.querySelectorAll('.cube');
  const radius = 2; // smaller radius
  const maxAngle = 30;

  const onMove = (e) => {
    const rect = container.getBoundingClientRect();
    // Mouse relative to container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cellW = rect.width / gridSize;
    const cellH = rect.height / gridSize;

    const colCenter = x / cellW;
    const rowCenter = y / cellH;

    items.forEach(cube => {
      const r = +cube.dataset.row;
      const c = +cube.dataset.col;
      const dist = Math.hypot(r - rowCenter, c - colCenter);

      if (dist <= radius) {
        const pct = 1 - dist / radius;
        const angle = pct * maxAngle;
        cube.style.transform = `rotateX(${-angle}deg) rotateY(${angle}deg)`;
      } else {
        cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
    });
  };

  const onLeave = () => {
    items.forEach(cube => {
      cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  };

  // Attach to parent card for wider hit area? Or container?
  // Let's use container for the tilt logic to run precisely
  container.parentElement.parentElement.addEventListener('mousemove', (e) => {
    // We need to pass event, but also ensure coordinates are relative to the grid container
    // Actually, let's just listen on the container itself for the cubes, 
    // while the card handles the big tilt.
    // Wait, user wants "outer animation", maybe they WANT the cubes to react when hovering the CARD?
    // Using container.parentElement (the card-img) or card is better.

    // Let's stick to container for simplicity of coordinates first.
    // If we bind to card, we need to rect check the container.
  });

  // Let's bind to container:
  container.addEventListener('mousemove', onMove);
  container.addEventListener('mouseleave', onLeave);

  // Initial Shimmy
  const mid = gridSize / 2;
  // Manually trigger one update
  const rect = container.getBoundingClientRect();
  if (rect.width) {
    onMove({
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + rect.height / 2
    });
    setTimeout(onLeave, 500);
  }
};

function formatCode(code) {
  if (!code) return "";
  // Basic CSS Highlighting
  return code
    .replace(/([{}])/g, '<span class="code-val">$1</span>')
    .replace(/(color|background|width|height|position|top|left|text-shadow|animation|font-size|transform|border|z-index|box-shadow|filter):/g, '<span class="code-prop">$1</span>:')
    .replace(/(#\w+|px|%|rem|linear|infinite|deg|rgba\(.*?\)|var\(.*?\))/g, '<span class="code-keyword">$1</span>');
}

function formatHTML(html) {
  // Basic HTML Highlighting (Escaping < > first)
  // 1. Escape HTML
  let escaped = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 2. Highlight Tags & Attributes
  return escaped
    .replace(/&lt;(\/?)(\w+)(.*?)&gt;/g, (match, slash, tag, attrs) => {
      // Highlight attributes within the tag
      const formattedAttrs = attrs.replace(/(\w+)=/g, '<span class="code-prop">$1</span>=');
      return `&lt;${slash}<span class="code-keyword">${tag}</span>${formattedAttrs}&gt;`;
    })
    .replace(/"(.*?)"/g, '<span class="code-val">"$1"</span>');
}
