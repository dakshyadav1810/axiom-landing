// High-quality canvas-based noise generator
// Creates fine grain texture that looks like modern film grain

export function createNoiseTexture(size = 1024) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Create fine grain noise with per-pixel variation
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // Random grayscale value for each pixel
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 255;   // A (fully opaque)
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL('image/png');
}

// Creates and applies noise overlay to the page
// grainScale controls how small the grains appear (smaller = finer grain)
export function applyNoiseOverlay(opacity = 0.08, grainScale = 0.1) {
    // Generate large texture (512px) for more detail
    const noiseDataUrl = createNoiseTexture(1024);

    // Create or update the noise overlay element
    let noiseElement = document.getElementById('canvas-noise-overlay');

    if (!noiseElement) {
        noiseElement = document.createElement('div');
        noiseElement.id = 'canvas-noise-overlay';
        document.body.appendChild(noiseElement);
    }

    // Scale determines grain size: 
    // 0.2 means 512px texture displays at 102px, making each grain very fine
    const displaySize = Math.round(1024 * grainScale);

    noiseElement.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: ${opacity};
    background-image: url(${noiseDataUrl});
    background-repeat: repeat;
    background-size: ${displaySize}px ${displaySize}px;
    mix-blend-mode: overlay;
  `;

    return noiseElement;
}

// Animated grain effect for subtle movement
// opacity: 0.02-0.08 recommended
// fps: 4-10, lower = more subtle
// grainScale: 0.1-0.3, smaller = finer grain
export function applyAnimatedGrain(opacity = 0.08, fps = 6, grainScale = 0.15) {
    const noiseElement = applyNoiseOverlay(opacity, grainScale);

    // Pre-generate textures for animation (reduces CPU usage)
    const textures = [];
    for (let i = 0; i < 4; i++) {
        textures.push(createNoiseTexture(1024));
    }

    let frame = 0;
    const displaySize = Math.round(1024 * grainScale);

    setInterval(() => {
        frame = (frame + 1) % textures.length;
        noiseElement.style.backgroundImage = `url(${textures[frame]})`;
        noiseElement.style.backgroundSize = `${displaySize}px ${displaySize}px`;
    }, 1000 / fps);

    return noiseElement;
}
