
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const toolId = params.get('id');
    const workspace = document.getElementById('tool-workspace');

    // Sidebar Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(el => el.classList.remove('active'));

    if (toolId === 'background-studio') {
        const nav = document.getElementById('nav-bg-studio');
        if (nav) nav.classList.add('active');
        initBackgroundStudio(workspace);
    } else if (toolId === 'shape-magic') {
        const nav = document.getElementById('nav-shape-magic');
        if (nav) nav.classList.add('active');
        initShapeMagic(workspace);
    } else if (toolId === 'texture-lab') {
        const nav = document.getElementById('nav-texture-lab');
        if (nav) nav.classList.add('active');
        initTextureLab(workspace);
    } else {
        workspace.innerHTML = `
            <div style="text-align: center; margin-top: 100px;">
                <h1>TOOL NOT FOUND</h1>
                <p>The requested tool ID is invalid.</p>
            </div>
        `;
    }
});

function initBackgroundStudio(container) {
    container.innerHTML = `
        <div class="tool-header">
            <div class="tool-title-wrapper">
                <div class="tool-icon">🎨</div>
                <div>
                    <h1>Background Studio</h1>
                    <p>Create stunning gradients and mesh backgrounds.</p>
                </div>
            </div>
            <div class="tool-actions">
                <button class="tool-btn secondary" id="reset-bg">Reset</button>
                <button class="tool-btn primary" id="export-bg">Export CSS</button>
            </div>
        </div>

        <div class="tool-layout">
            <div class="tool-sidebar">
                <div class="control-section">
                    <h3>Colors</h3>
                    <div class="color-list" id="bg-color-list">
                        <!-- Dynamic Color Inputs -->
                    </div>
                    <button class="add-color-btn" id="add-color">+ Add Color</button>
                </div>

                <div class="control-section">
                    <h3>Type</h3>
                    <select id="bg-type" class="tool-select">
                        <option value="linear">Linear Gradient</option>
                        <option value="radial">Radial Gradient</option>
                        <option value="conic">Conic Gradient</option>
                    </select>
                </div>

                <div class="control-section">
                    <h3>Direction <span id="bg-angle-val">45deg</span></h3>
                    <input type="range" id="bg-angle" min="0" max="360" value="45" class="tool-slider">
                </div>
                 <div class="control-section">
                    <h3>Noise</h3>
                    <div class="toggle-switch">
                        <input type="checkbox" id="bg-noise">
                        <label for="bg-noise"></label>
                    </div>
                </div>
            </div>

            <div class="tool-preview-area">
                <div class="canvas-wrapper">
                    <div id="bg-preview-canvas" class="preview-canvas"></div>
                    <div class="noise-overlay" id="noise-overlay"></div>
                </div>
            </div>
        </div>
    `;

    // LOGIC
    let colors = ['#000000', '#434343'];
    let type = 'linear';
    let angle = 45;
    let noise = false;

    const preview = document.getElementById('bg-preview-canvas');
    const colorList = document.getElementById('bg-color-list');
    const noiseOverlay = document.getElementById('noise-overlay');

    function updatePreview() {
        const colorString = colors.join(', ');
        if (type === 'linear') {
            preview.style.background = `linear-gradient(${angle}deg, ${colorString})`;
        } else if (type === 'radial') {
            preview.style.background = `radial-gradient(circle, ${colorString})`;
        } else if (type === 'conic') {
            preview.style.background = `conic-gradient(from ${angle}deg, ${colorString})`;
        }

        document.getElementById('bg-angle-val').textContent = angle + 'deg';

        if (noise) {
            noiseOverlay.style.opacity = 0.1;
        } else {
            noiseOverlay.style.opacity = 0;
        }
    }

    function renderColors() {
        colorList.innerHTML = '';
        colors.forEach((c, idx) => {
            const div = document.createElement('div');
            div.className = 'color-row';
            div.innerHTML = `
                <input type="color" value="${c}" data-index="${idx}">
                ${colors.length > 2 ? `<button class="remove-color" data-index="${idx}">x</button>` : ''}
            `;
            colorList.appendChild(div);
        });

        // Bind events
        colorList.querySelectorAll('input[type="color"]').forEach(inp => {
            inp.addEventListener('input', (e) => {
                colors[e.target.dataset.index] = e.target.value;
                updatePreview();
            });
        });

        colorList.querySelectorAll('.remove-color').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                colors.splice(idx, 1);
                renderColors();
                updatePreview();
            });
        });
    }

    // Event Listeners
    document.getElementById('add-color').addEventListener('click', () => {
        colors.push('#ffffff');
        renderColors();
        updatePreview();
    });

    document.getElementById('bg-type').addEventListener('change', (e) => {
        type = e.target.value;
        updatePreview();
    });

    document.getElementById('bg-angle').addEventListener('input', (e) => {
        angle = e.target.value;
        updatePreview();
    });

    document.getElementById('bg-noise').addEventListener('change', (e) => {
        noise = e.target.checked;
        updatePreview();
    });

    document.getElementById('export-bg').addEventListener('click', () => {
        let code = `background: ${preview.style.background};`;
        if (noise) {
            code += `\n/* Plus a noise overlay div with styling */`;
        }
        navigator.clipboard.writeText(code);
        alert('CSS Copied to Clipboard!');
    });

    renderColors();
    updatePreview();
}

function initShapeMagic(container) {
    container.innerHTML = `
        <div class="tool-header">
            <div class="tool-title-wrapper">
                <div class="tool-icon">▵</div>
                <div>
                    <h1>Shape Magic</h1>
                    <p>Generate complex CSS shapes and clip-paths.</p>
                </div>
            </div>
             <div class="tool-actions">
                <button class="tool-btn primary" id="export-shape">Copy CSS</button>
            </div>
        </div>

        <div class="tool-layout">
            <div class="tool-sidebar">
                <div class="control-section">
                    <h3>Dimensions</h3>
                     <label>Width</label>
                    <input type="range" id="shp-width" min="50" max="400" value="200" class="tool-slider">
                    <label>Height</label>
                    <input type="range" id="shp-height" min="50" max="400" value="200" class="tool-slider">
                </div>

                 <div class="control-section">
                    <h3>Border Radius</h3>
                    <input type="range" id="shp-radius" min="0" max="50" value="0" class="tool-slider">
                </div>
                
                <div class="control-section">
                    <h3>Clip Path</h3>
                    <select id="shp-clip" class="tool-select">
                        <option value="none">None (Rectangle)</option>
                        <option value="circle">Circle</option>
                        <option value="polygon">Polygon (Hexagon)</option>
                        <option value="triangle">Triangle</option>
                        <option value="message">Message Bubble</option>
                    </select>
                </div>

                 <div class="control-section">
                    <h3>Color</h3>
                    <input type="color" id="shp-color" value="#00ffff" style="width:100%; height:40px;">
                </div>
            </div>

            <div class="tool-preview-area grid-bg">
                <div id="shape-preview" class="shape-object"></div>
            </div>
        </div>
    `;

    const preview = document.getElementById('shape-preview');
    let width = 200;
    let height = 200;
    let radius = 0;
    let clip = 'none';
    let color = '#00ffff';

    function updateShape() {
        preview.style.width = width + 'px';
        preview.style.height = height + 'px';
        preview.style.backgroundColor = color;
        preview.style.borderRadius = radius + '%';

        if (clip === 'none') {
            preview.style.clipPath = 'none';
        } else if (clip === 'circle') {
            preview.style.clipPath = 'circle(50% at 50% 50%)';
            preview.style.borderRadius = '0'; // reset border radius often conflicts with clip
        } else if (clip === 'polygon') {
            preview.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            preview.style.borderRadius = '0';
        } else if (clip === 'triangle') {
            preview.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            preview.style.borderRadius = '0';
        } else if (clip === 'message') {
            preview.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)';
            preview.style.borderRadius = '0';
        }
    }

    document.getElementById('shp-width').addEventListener('input', (e) => { width = e.target.value; updateShape(); });
    document.getElementById('shp-height').addEventListener('input', (e) => { height = e.target.value; updateShape(); });
    document.getElementById('shp-radius').addEventListener('input', (e) => { radius = e.target.value; updateShape(); });
    document.getElementById('shp-clip').addEventListener('change', (e) => { clip = e.target.value; updateShape(); });
    document.getElementById('shp-color').addEventListener('input', (e) => { color = e.target.value; updateShape(); });

    document.getElementById('export-shape').addEventListener('click', () => {
        let css = `width: ${width}px;\nheight: ${height}px;\nbackground-color: ${color};\n`;
        if (radius > 0 && clip === 'none') css += `border-radius: ${radius}%;\n`;
        if (clip !== 'none') css += `clip-path: ${preview.style.clipPath};\n`;
        navigator.clipboard.writeText(css);
        alert('CSS Copied to Clipboard!');
    });

    updateShape();
}

function initTextureLab(container) {
    container.innerHTML = `
        <div class="tool-header">
            <div class="tool-title-wrapper">
                <div class="tool-icon">🖼️</div>
                <div>
                    <h1>Texture Lab</h1>
                    <p>Apply filters and effects to images.</p>
                </div>
            </div>
            <div class="tool-actions">
                 <button class="tool-btn primary" id="export-filter">Copy Filters</button>
            </div>
        </div>

         <div class="tool-layout">
            <div class="tool-sidebar">
                <div class="control-section">
                    <h3>Source</h3>
                    <button class="tool-btn secondary full-width" id="load-sample">Load Sample Image</button>
                    <!-- <input type="file" id="upload-img" style="margin-top:10px;"> -->
                </div>

                <div class="control-section">
                    <h3>Filters</h3>
                    <label>Blur <span id="val-blur">0</span>px</label>
                    <input type="range" id="flt-blur" min="0" max="20" value="0" class="tool-slider">
                    
                    <label>Brightness <span id="val-bright">100</span>%</label>
                    <input type="range" id="flt-bright" min="0" max="200" value="100" class="tool-slider">
                    
                    <label>Contrast <span id="val-contrast">100</span>%</label>
                    <input type="range" id="flt-contrast" min="0" max="200" value="100" class="tool-slider">
                    
                    <label>Grayscale <span id="val-gray">0</span>%</label>
                    <input type="range" id="flt-gray" min="0" max="100" value="0" class="tool-slider">
                    
                    <label>Sepia <span id="val-sepia">0</span>%</label>
                    <input type="range" id="flt-sepia" min="0" max="100" value="0" class="tool-slider">

                     <label>Hue Configure <span id="val-hue">0</span>deg</label>
                    <input type="range" id="flt-hue" min="0" max="360" value="0" class="tool-slider">
                </div>
                 <div class="control-section">
                    <h3>Blend Mode</h3>
                     <select id="flt-blend" class="tool-select">
                        <option value="normal">Normal</option>
                        <option value="screen">Screen</option>
                        <option value="overlay">Overlay</option>
                        <option value="multiply">Multiply</option>
                        <option value="difference">Difference</option>
                    </select>
                 </div>
            </div>

            <div class="tool-preview-area">
                <div class="texture-container" id="texture-wrap">
                    <img id="texture-img" src="" alt="Preview" style="display:none; max-width:100%; max-height:100%;">
                    <div class="texture-placeholder">Select an image</div>
                </div>
            </div>
        </div>
    `;

    const img = document.getElementById('texture-img');
    const wrap = document.getElementById('texture-wrap');
    const placeholder = wrap.querySelector('.texture-placeholder');

    let filters = {
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        sepia: 0,
        hue: 0
    };
    let blend = 'normal';

    function updateFilters() {
        const fStr = `blur(${filters.blur}px) brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) hue-rotate(${filters.hue}deg)`;
        img.style.filter = fStr;
        img.style.mixBlendMode = blend;

        // Update labels
        document.getElementById('val-blur').textContent = filters.blur;
        document.getElementById('val-bright').textContent = filters.brightness;
        document.getElementById('val-contrast').textContent = filters.contrast;
        document.getElementById('val-gray').textContent = filters.grayscale;
        document.getElementById('val-sepia').textContent = filters.sepia;
        document.getElementById('val-hue').textContent = filters.hue;
    }

    // Bindings
    document.getElementById('load-sample').addEventListener('click', () => {
        img.src = 'https://picsum.photos/600/400'; // Random sample
        img.style.display = 'block';
        placeholder.style.display = 'none';
    });

    const bindSlider = (id, key) => {
        document.getElementById(id).addEventListener('input', (e) => {
            filters[key] = e.target.value;
            updateFilters();
        });
    };

    bindSlider('flt-blur', 'blur');
    bindSlider('flt-bright', 'brightness');
    bindSlider('flt-contrast', 'contrast');
    bindSlider('flt-gray', 'grayscale');
    bindSlider('flt-sepia', 'sepia');
    bindSlider('flt-hue', 'hue');

    document.getElementById('flt-blend').addEventListener('change', (e) => {
        blend = e.target.value;
        updateFilters();
    });

    document.getElementById('export-filter').addEventListener('click', () => {
        const fStr = `filter: blur(${filters.blur}px) brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) hue-rotate(${filters.hue}deg);\nmix-blend-mode: ${blend};`;
        navigator.clipboard.writeText(fStr);
        alert('CSS Filters Copied!');
    });
}
