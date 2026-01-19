/**
 * Ported from React ColorBends component to Vanilla JS
 * Modified for Splash Screen Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    initColorBends();
});

function initColorBends() {
    const container = document.getElementById('color-bends-container');
    const overlay = document.getElementById('intro-overlay');
    const enterBtn = document.getElementById('enter-site-btn');

    // Check for skip_intro param
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skip_intro') === 'true') {
        if (overlay) {
            overlay.style.display = 'none';
            overlay.classList.add('fade-out');
        }
        return; // Skip initialization
    }

    if (!container) return;

    // --- Configuration (matching default props) ---
    const config = {
        rotation: 0,
        speed: 0.2,
        colors: ["#ff5c7a", "#8a5cff", "#00ffd1"],
        transparent: true, // While we want black bg, keeping this true allows us to control bg via CSS on overlay
        autoRotate: 0,
        scale: 1,
        frequency: 1,
        warpStrength: 1,
        mouseInfluence: 1,
        parallax: 0.5,
        noise: 0.1
    };

    // --- Shader Code ---
    const MAX_COLORS = 8;
    const vert = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
        }
    `;

    const frag = `
        #define MAX_COLORS ${MAX_COLORS}
        uniform vec2 uCanvas;
        uniform float uTime;
        uniform float uSpeed;
        uniform vec2 uRot;
        uniform int uColorCount;
        uniform vec3 uColors[MAX_COLORS];
        uniform int uTransparent;
        uniform float uScale;
        uniform float uFrequency;
        uniform float uWarpStrength;
        uniform vec2 uPointer;
        uniform float uMouseInfluence;
        uniform float uParallax;
        uniform float uNoise;
        varying vec2 vUv;

        void main() {
            float t = uTime * uSpeed;
            vec2 p = vUv * 2.0 - 1.0;
            p += uPointer * uParallax * 0.1;
            vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
            vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
            q /= max(uScale, 0.0001);
            q /= 0.5 + 0.2 * dot(q, q);
            q += 0.2 * cos(t) - 7.56;
            vec2 toward = (uPointer - rp);
            q += toward * uMouseInfluence * 0.2;

            vec3 col = vec3(0.0);
            float a = 1.0;

            if (uColorCount > 0) {
                vec2 s = q;
                vec3 sumCol = vec3(0.0);
                float cover = 0.0;
                for (int i = 0; i < MAX_COLORS; ++i) {
                    if (i >= uColorCount) break;
                    s -= 0.01;
                    vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
                    float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
                    float kBelow = clamp(uWarpStrength, 0.0, 1.0);
                    float kMix = pow(kBelow, 0.3);
                    float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
                    vec2 disp = (r - s) * kBelow;
                    vec2 warped = s + disp * gain;
                    float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
                    float m = mix(m0, m1, kMix);
                    float w = 1.0 - exp(-6.0 / exp(6.0 * m));
                    sumCol += uColors[i] * w;
                    cover = max(cover, w);
                }
                col = clamp(sumCol, 0.0, 1.0);
                a = uTransparent > 0 ? cover : 1.0;
            } else {
                vec2 s = q;
                for (int k = 0; k < 3; ++k) {
                    s -= 0.01;
                    vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
                    float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
                    float kBelow = clamp(uWarpStrength, 0.0, 1.0);
                    float kMix = pow(kBelow, 0.3);
                    float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
                    vec2 disp = (r - s) * kBelow;
                    vec2 warped = s + disp * gain;
                    float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
                    float m = mix(m0, m1, kMix);
                    col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
                }
                a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
            }

            if (uNoise > 0.0001) {
                float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
                col += (n - 0.5) * uNoise;
                col = clamp(col, 0.0, 1.0);
            }

            vec3 rgb = (uTransparent > 0) ? col * a : col;
            gl_FragColor = vec4(rgb, a);
        }
    `;

    const toVec3 = hex => {
        const h = hex.replace('#', '').trim();
        let r, g, b;
        if (h.length === 3) {
            r = parseInt(h[0] + h[0], 16);
            g = parseInt(h[1] + h[1], 16);
            b = parseInt(h[2] + h[2], 16);
        } else {
            r = parseInt(h.slice(0, 2), 16);
            g = parseInt(h.slice(2, 4), 16);
            b = parseInt(h.slice(4, 6), 16);
        }
        return new THREE.Vector3(r / 255, g / 255, b / 255);
    };

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uColorsArray = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));
    const configColorsVec = (config.colors || []).slice(0, MAX_COLORS).map(toVec3);
    for (let i = 0; i < MAX_COLORS; i++) {
        if (i < configColorsVec.length) {
            uColorsArray[i].copy(configColorsVec[i]);
        }
    }

    const uniforms = {
        uCanvas: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSpeed: { value: config.speed },
        uRot: { value: new THREE.Vector2(1, 0) },
        uColorCount: { value: configColorsVec.length },
        uColors: { value: uColorsArray },
        uTransparent: { value: config.transparent ? 1 : 0 },
        uScale: { value: config.scale },
        uFrequency: { value: config.frequency },
        uWarpStrength: { value: config.warpStrength },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uMouseInfluence: { value: config.mouseInfluence },
        uParallax: { value: config.parallax },
        uNoise: { value: config.noise }
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: uniforms,
        premultipliedAlpha: true,
        transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true
    });

    if ('outputColorSpace' in renderer) {
        renderer.outputColorSpace = THREE.SRGBColorSpace || 'srgb';
    } else {
        renderer.outputEncoding = 3001;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0); // Keep alpha 0 so we can see through if needed, but overlay is black
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();
    let currentRotation = config.rotation;
    const pointerTarget = new THREE.Vector2(0, 0);
    const pointerCurrent = new THREE.Vector2(0, 0);
    const pointerSmooth = 8;

    // Animation variable to control loop interaction
    let isRunning = true;
    let animationFrameId;

    const handleResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        uniforms.uCanvas.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handlePointerMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
        const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
        pointerTarget.set(x, y);
    };
    window.addEventListener('pointermove', handlePointerMove); // Listen on window for broader capture if needed, or container

    const loop = () => {
        if (!isRunning) return;

        const dt = clock.getDelta();
        const elapsed = clock.elapsedTime;
        uniforms.uTime.value = elapsed;

        const deg = (currentRotation % 360) + config.autoRotate * elapsed;
        const rad = (deg * Math.PI) / 180;
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        uniforms.uRot.value.set(c, s);

        const amt = Math.min(1, dt * pointerSmooth);
        pointerCurrent.lerp(pointerTarget, amt);
        uniforms.uPointer.value.copy(pointerCurrent);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    // --- Cleanup / Dismiss Logic ---
    if (enterBtn && overlay) {
        enterBtn.addEventListener('click', () => {
            overlay.classList.add('fade-out');

            // Wait for transition to end before stopping renderer
            setTimeout(() => {
                isRunning = false;
                if (animationFrameId) cancelAnimationFrame(animationFrameId);

                // Optional: dispose resources if we are sure we won't show it again
                // geometry.dispose();
                // material.dispose();
                // renderer.dispose();
            }, 1000); // 1s buffer (css transition is 0.8s)
        });
    }
}
