// Advanced Features for Eduardo's Portfolio
// This file contains cutting-edge web technologies and effects

// 3D Hover Effects using CSS Transform
function init3DHoverEffects() {
    const cards = document.querySelectorAll('.project-card, .skill-category');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            card.style.boxShadow = `
                ${-rotateY}px ${rotateX}px 20px rgba(0, 102, 255, 0.2),
                0 0 30px rgba(0, 102, 255, 0.1)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Advanced Particle System with WebGL
class WebGLParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl) {
            console.warn('WebGL not supported, falling back to canvas');
            return;
        }
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.particles = [];
        this.particleCount = 100;
        
        this.initShaders();
        this.initParticles();
        this.animate();
    }
    
    initShaders() {
        const vertexShaderSource = `
            attribute vec2 a_position;
            attribute float a_size;
            attribute float a_opacity;
            
            uniform vec2 u_resolution;
            uniform float u_time;
            
            varying float v_opacity;
            
            void main() {
                vec2 position = (a_position / u_resolution) * 2.0 - 1.0;
                position.y = -position.y;
                
                gl_Position = vec4(position, 0, 1);
                gl_PointSize = a_size + sin(u_time + a_position.x) * 2.0;
                v_opacity = a_opacity;
            }
        `;
        
        const fragmentShaderSource = `
            precision mediump float;
            varying float v_opacity;
            
            void main() {
                vec2 center = gl_PointCoord - vec2(0.5);
                float dist = length(center);
                
                if (dist > 0.5) discard;
                
                float alpha = (1.0 - dist * 2.0) * v_opacity;
                gl_FragColor = vec4(0.0, 0.4, 1.0, alpha);
            }
        `;
        
        this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
    }
    
    createProgram(vertexSource, fragmentSource) {
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);
        
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        
        return program;
    }
    
    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        return shader;
    }
    
    initParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 10 + 5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        
        // Update and render particles here
        requestAnimationFrame(() => this.animate());
    }
}

// Text Scramble Effect
class TextScramble {
    constructor(element) {
        this.element = element;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.element.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.getRandomChar();
                    this.queue[i].char = char;
                }
                output += char;
            } else {
                output += from;
            }
        }
        
        this.element.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    getRandomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Magnetic Cursor Effect
function initMagneticCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    cursor.innerHTML = `
        <div class="cursor-inner"></div>
        <style>
            .magnetic-cursor {
                position: fixed;
                width: 20px;
                height: 20px;
                background: #0066ff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                mix-blend-mode: difference;
                transition: transform 0.1s ease;
            }
            
            .cursor-inner {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: radial-gradient(circle, #0066ff, transparent);
                animation: cursorPulse 2s ease-in-out infinite;
            }
            
            @keyframes cursorPulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.5); opacity: 0.7; }
            }
        </style>
    `;
    
    document.body.appendChild(cursor);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    
    updateCursor();
    
    // Magnetic effect on hoverable elements
    document.querySelectorAll('a, button, .project-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.backgroundColor = '#ffffff';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = '#0066ff';
        });
    });
}

// Audio Visualizer (Optional)
class AudioVisualizer {
    constructor() {
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.canvas = null;
        this.canvasCtx = null;
    }
    
    init() {
        // Create audio context
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        
        const bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(bufferLength);
        
        // Create canvas for visualization
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.3';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        document.body.appendChild(this.canvas);
        this.canvasCtx = this.canvas.getContext('2d');
    }
    
    draw() {
        requestAnimationFrame(() => this.draw());
        
        this.analyser.getByteFrequencyData(this.dataArray);
        
        this.canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const barWidth = (this.canvas.width / this.dataArray.length) * 2.5;
        let barHeight;
        let x = 0;
        
        for (let i = 0; i < this.dataArray.length; i++) {
            barHeight = this.dataArray[i] / 2;
            
            const r = Math.floor(barHeight + 25 * (i / this.dataArray.length));
            const g = Math.floor(100 + 100 * (i / this.dataArray.length));
            const b = 255;
            
            this.canvasCtx.fillStyle = `rgb(${r},${g},${b})`;
            this.canvasCtx.fillRect(x, this.canvas.height - barHeight, barWidth, barHeight);
            
            x += barWidth + 1;
        }
    }
}

// Initialize all advanced features
function initAdvancedFeatures() {
    // Add 3D hover effects
    init3DHoverEffects();
    
    // Add magnetic cursor
    initMagneticCursor();
    
    // Add text scramble to hero title
    const heroTitle = document.querySelector('.hero-title .accent');
    if (heroTitle) {
        const scrambler = new TextScramble(heroTitle);
        
        // Periodically scramble the name
        setInterval(() => {
            scrambler.setText('EDUARDO').then(() => {
                setTimeout(() => scrambler.setText('EDUARDO'), 2000);
            });
        }, 10000);
    }
    
    // Initialize WebGL particles if supported
    if (document.getElementById('particles-bg')) {
        new WebGLParticleSystem('particles-bg');
    }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAdvancedFeatures,
        TextScramble,
        WebGLParticleSystem,
        AudioVisualizer
    };
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAdvancedFeatures);