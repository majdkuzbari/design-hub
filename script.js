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
  font-size: 4rem;
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
    thumbnailHtml: `<div class="gradient-card-demo" style="width: 100px; height: 60px;"></div>`,
    html: `<div class="gradient-card-demo"><div>CONTENT</div></div>`,
    code: `.gradient-card {
  position: relative;
  background: #000;
  border-radius: 15px;
}
.gradient-card::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
  z-index: -1;
  border-radius: 20px;
  background-size: 400%;
  animation: gradient-move 5s linear infinite;
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
    code: `import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // GSAP Logic here...
  }, []); // Dependencies

  return (
    <div ref={ref} className={className} style={{ visibility: 'hidden' }} {...props}>
      {children}
    </div>
  );
};`,
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
    thumbnailHtml: `<div style="width: 100%; height: 100px; background: #222; position: relative; overflow: hidden;"><div class="scanline" style="position: absolute; top:0; left:0;"></div></div>`,
    html: `<div style="width: 100%; height: 200px; background: #222; position: relative; overflow: hidden;"><div class="scanline" style="position: absolute; top:0; left:0;"></div><h3 style="position: relative; z-index: 2; color: white; text-align: center; top: 80px;">SCANLINE SYSTEM</h3></div>`,
    code: `.scanline {
  width: 100%; height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0,0,0,0.5) 50%
  );
  background-size: 100% 4px;
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
    thumbnailHtml: `<div style="border: 2px solid cyan; border-radius:10px; padding:10px; color:cyan; font-weight:bold; text-align:center;">ELECTRIC</div>`,
    html: `<div id="electric-border-demo"><div style="padding: 2rem; color: white;"><h3>Electric Card</h3><p>An electric border for shocking your users, the right way.</p><button class="cyber-btn" style="margin-top:20px;">Get Started</button></div></div>`,
    code: `// ... (Electric Border Code) ...`
  },
  {
    id: 10,
    name: "Glare Hover",
    type: "animations",
    thumbnailHtml: `<div style="background:#222; border-radius:10px; padding:10px; color:white; font-weight:bold; text-align:center; box-shadow: 0 0 10px rgba(255,255,255,0.2);">GLARE</div>`,
    html: `<div id="glare-hover-demo"><h2 style="font-size: 3rem; font-weight: 900; color: #333; margin: 0;">Hover Me</h2></div>`,
    code: `// GLARE HOVER COMPONENT
// Usage:
// <GlareHover glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800} playOnce={false}>
//   <h2>Hover Me</h2>
// </GlareHover>`
  },
  {
    id: 11,
    name: "Logo Loop",
    type: "animations",
    thumbnailHtml: `<div style="display:flex; gap:5px; justify-content:center; align-items:center; color:white; font-size:1.5rem;"><span>∞</span><span>⟳</span></div>`,
    html: `<div id="logo-loop-demo" style="width:100%; height:200px; display:flex; align-items:center;"></div>`,
    code: `// LOGO LOOP COMPONENT
// See usage logic below`
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
  let animParams = {
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
    return "// No usage example available";
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
      usageEl.textContent = getUsageCode();
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
      // Liquid Ether
      setTimeout(renderLiquidEther, 50);
      updateLabels();

    } else if (id === 13) {
      // Magnet Lines
      setTimeout(renderMagnetLines, 50);
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

  // Styles
  container.style.setProperty('--logoloop-gap', `${animParams.loopGap}px`);
  container.style.setProperty('--logoloop-logoHeight', `${animParams.loopHeight}px`);

  // Fake Logo Data (SVGs)
  const logos = [
    '<svg viewBox="0 0 24 24"><path fill="#61DAFB" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>', // React-ish
    '<svg viewBox="0 0 24 24"><path fill="#000000" stroke="white" stroke-width="2" d="M12 2L2 22h20L12 2z"/></svg>', // Next-ish
    '<svg viewBox="0 0 24 24"><path fill="#3178C6" d="M2 2h20v20H2z M12 6v12 M6 12h12"/></svg>', // TS
    '<svg viewBox="0 0 24 24"><path fill="#38B2AC" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>', // Tailwind
    '<svg viewBox="0 0 24 24"><path fill="#F0DB4F" d="M2 2h20v20H2z"/><path fill="#323330" d="M10 10h4v4h-4z"/></svg>', // JS
    '<svg viewBox="0 0 24 24"><path fill="#FF4154" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>', // Other
  ];

  // 2. Create Track
  const track = document.createElement('div');
  track.className = 'logoloop__track';

  // 3. Create List(s) - We need enough to fill screen + buffer
  // For simplicity in this demo, we'll create fixed 4 copies which is usually enough for desktop
  const distinctLogos = logos.length;

  for (let c = 0; c < 4; c++) {
    const list = document.createElement('ul');
    list.className = 'logoloop__list';
    logos.forEach((svgStr, i) => {
      const li = document.createElement('li');
      li.className = 'logoloop__item';
      li.innerHTML = svgStr;
      // Add fake title
      li.title = `Logo ${i + 1}`;
      list.appendChild(li);
    });
    track.appendChild(list);
  }

  container.appendChild(track);

  // 4. Animation Logic
  let lastTime = 0;
  let offset = 0;
  const speed = parseFloat(animParams.loopSpeed); // px/s
  const direction = animParams.loopDirection || 'left'; // left or right

  const loop = (time) => {
    if (!logoLoopAnimId) return; // cancelled
    if (!document.contains(track)) return;

    const dt = (time - lastTime) / 1000;
    lastTime = time;

    // Get single sequence width
    const list = track.querySelector('.logoloop__list');
    if (!list) return;
    const seqWidth = list.offsetWidth;

    if (seqWidth > 0) {
      // Move
      const move = speed * dt;

      if (direction === 'left') {
        offset += move;
        if (offset >= seqWidth) offset -= seqWidth;
      } else {
        offset -= move;
        if (offset <= 0) offset += seqWidth;
      }

      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
    }

    logoLoopAnimId = requestAnimationFrame(loop);
  };

  lastTime = performance.now();
  logoLoopAnimId = requestAnimationFrame(loop);
};

// LIQUID ETHER (THREE.JS)
let liquidAnimId = null;
const renderLiquidEther = () => {
  const container = document.getElementById('liquid-ether-demo');
  if (!container) return;

  // Load Three.js dynamically if not present
  if (!window.THREE) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => initLiquidScene(container);
    document.head.appendChild(script);
  } else {
    initLiquidScene(container);
  }
};

const initLiquidScene = (container) => {
  // Basic Three.js Setup
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  const rect = container.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  // Dynamic glsl
  const fragmentShader = `
        uniform float time;
        uniform vec2 resolution;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float distortion;

        // Simplex Noise (Minimal)
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
            const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            vec2 i1;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            i = mod(i, 289.0);
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            float noise = snoise(uv * 3.0 + time * 0.2);
            float d = snoise(uv * distortion + noise + time * 0.1);
            
            vec3 c = mix(color1, color2, d * 0.5 + 0.5);
            gl_FragColor = vec4(c, 1.0);
        }
    `;

  const uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(rect.width, rect.height) },
    color1: { value: new THREE.Color(animParams.color1 || "#1a0b2e") },
    color2: { value: new THREE.Color(animParams.color2 || "#763bfa") },
    distortion: { value: parseFloat(animParams.distortion || 1.5) }
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragmentShader
  });

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  const animate = () => {
    if (!document.getElementById('liquid-ether-demo')) return;

    uniforms.time.value += 0.01 * parseFloat(animParams.speed || 0.5);

    // Update uniforms from params
    uniforms.color1.value.set(animParams.color1 || "#1a0b2e");
    uniforms.color2.value.set(animParams.color2 || "#763bfa");
    uniforms.distortion.value = parseFloat(animParams.distortion || 1.5);

    renderer.render(scene, camera);
    liquidAnimId = requestAnimationFrame(animate);
  };
  animate();
};

// MAGNET LINES (CANVAS)
let magnetAnimId = null;
const renderMagnetLines = () => {
  const container = document.getElementById('magnet-lines-demo');
  if (!container) return;

  container.innerHTML = '<canvas style="width:100%; height:100%;"></canvas>';
  const canvas = container.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  let rect = container.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  const rows = parseInt(animParams.rows || 10);
  const cols = parseInt(animParams.cols || 10);
  const radius = parseInt(animParams.radius || 200);
  const color = animParams.color || "#61dafb";

  const gapX = canvas.width / cols;
  const gapY = canvas.height / rows;

  // Mouse tracking
  let mx = -1000, my = -1000;
  container.addEventListener('mousemove', (e) => {
    const r = container.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  container.addEventListener('mouseleave', () => { mx = -1000; my = -1000; });

  const draw = () => {
    if (!document.getElementById('magnet-lines-demo')) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = i * gapX;
        const y = j * gapY;

        // Angle to mouse
        const dx = mx - x;
        const dy = my - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let angle = 0;
        if (dist < radius) {
          angle = Math.atan2(dy, dx);
        } else {
          // Default vertical
          angle = Math.PI / 2;
        }

        // Draw Line
        const len = 15;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-len / 2, 0);
        ctx.lineTo(len / 2, 0);
        ctx.stroke();
        ctx.restore();
      }
    }
    magnetAnimId = requestAnimationFrame(draw);
  };
  draw();
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
