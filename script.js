// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe individual elements for animations
document.querySelectorAll('.project-card, .skill-category, .contact-method').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        }
    });
}

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission
        showNotification('Mensagem enviada com sucesso!', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            
            .notification-success {
                background: linear-gradient(135deg, #00d4ff, #0099cc);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .notification.show {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating particles background
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.innerHTML = `
        <style>
            .particles {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            }
            
            .particle {
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(0, 212, 255, 0.3);
                border-radius: 50%;
                animation: float 6s infinite ease-in-out;
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                    opacity: 0.3;
                }
                50% {
                    transform: translateY(-20px);
                    opacity: 0.8;
                }
            }
        </style>
    `;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
}

// Initialize PROFESSIONAL visual effects
createParticles();
initProfessionalEffects();
initInteractiveParticles();
initAdvancedAnimations();
initElegantBackground();
initFloatingElements();

// Theme toggle functionality (optional)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        z-index: 1000;
        background: var(--bg-card);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--transition);
    `;
    
    document.body.appendChild(themeToggle);
}

// Scroll to top button
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        background: var(--gradient-primary);
        border: none;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: var(--transition);
        opacity: 0;
        transform: translateY(100px);
        box-shadow: var(--shadow-glow);
    `;
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'translateY(0)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'translateY(100px)';
        }
    });
    
    document.body.appendChild(scrollBtn);
}

// Initialize scroll to top button
createScrollToTop();

// Enhanced Loading Animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'advanced-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loading-animation">
                <div class="code-lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="spinner-ring">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
            </div>
            <h3>EDUARDO.DEV</h3>
            <p data-translate="loading_text">Inicializando portfólio...</p>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>
        <style>
            .advanced-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, #000000, #001122, #000000);
                background-size: 400% 400%;
                animation: gradientMove 3s ease infinite;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .loader-content {
                text-align: center;
                color: #ffffff;
            }
            
            .loading-animation {
                position: relative;
                width: 80px;
                height: 80px;
                margin: 0 auto 2rem;
            }
            
            .code-lines {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            
            .line {
                position: absolute;
                background: #0066ff;
                border-radius: 2px;
            }
            
            .line:nth-child(1) {
                width: 30px;
                height: 3px;
                top: 20px;
                left: 10px;
                animation: codeLine1 2s ease-in-out infinite;
            }
            
            .line:nth-child(2) {
                width: 40px;
                height: 3px;
                top: 30px;
                left: 20px;
                animation: codeLine2 2s ease-in-out infinite 0.2s;
            }
            
            .line:nth-child(3) {
                width: 25px;
                height: 3px;
                top: 40px;
                left: 15px;
                animation: codeLine3 2s ease-in-out infinite 0.4s;
            }
            
            .line:nth-child(4) {
                width: 35px;
                height: 3px;
                top: 50px;
                left: 25px;
                animation: codeLine4 2s ease-in-out infinite 0.6s;
            }
            
            .spinner-ring {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            
            .ring {
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid transparent;
                border-radius: 50%;
            }
            
            .ring:nth-child(1) {
                border-top: 2px solid #0066ff;
                animation: rotate 2s linear infinite;
            }
            
            .ring:nth-child(2) {
                border-right: 2px solid #ffffff;
                animation: rotate 2s linear infinite reverse;
            }
            
            .ring:nth-child(3) {
                border-bottom: 2px solid #0066ff;
                animation: rotate 3s linear infinite;
            }
            
            .loader-content h3 {
                font-size: 2rem;
                font-weight: bold;
                margin-bottom: 0.5rem;
                text-shadow: 0 0 10px #0066ff;
                animation: neonPulse 2s ease-in-out infinite;
            }
            
            .progress-bar {
                width: 200px;
                height: 4px;
                background: rgba(0, 102, 255, 0.2);
                border-radius: 2px;
                margin: 1rem auto 0;
                overflow: hidden;
            }
            
            .progress-fill {
                width: 0%;
                height: 100%;
                background: linear-gradient(90deg, #0066ff, #ffffff, #0066ff);
                background-size: 200% 100%;
                border-radius: 2px;
                animation: progressLoad 3s ease-out forwards, progressShimmer 1.5s ease-in-out infinite;
            }
            
            @keyframes gradientMove {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            @keyframes codeLine1 {
                0%, 100% { opacity: 0.3; transform: translateX(0); }
                50% { opacity: 1; transform: translateX(5px); }
            }
            
            @keyframes codeLine2 {
                0%, 100% { opacity: 0.3; transform: translateX(0); }
                50% { opacity: 1; transform: translateX(-3px); }
            }
            
            @keyframes codeLine3 {
                0%, 100% { opacity: 0.3; transform: translateX(0); }
                50% { opacity: 1; transform: translateX(7px); }
            }
            
            @keyframes codeLine4 {
                0%, 100% { opacity: 0.3; transform: translateX(0); }
                50% { opacity: 1; transform: translateX(-2px); }
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes neonPulse {
                0%, 100% { text-shadow: 0 0 10px #0066ff; }
                50% { text-shadow: 0 0 20px #0066ff, 0 0 30px #0066ff; }
            }
            
            @keyframes progressLoad {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            
            @keyframes progressShimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
        </style>
    `;
    
    document.body.appendChild(loader);
    
    // Hide loader with advanced animation
    setTimeout(() => {
        loader.style.transform = 'scale(0.8)';
        loader.style.opacity = '0';
        loader.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            document.body.removeChild(loader);
            
            // Trigger entrance animations
            document.body.style.opacity = '0';
            document.body.style.transform = 'scale(1.05)';
            document.body.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
                document.body.style.transform = 'scale(1)';
            }, 100);
        }, 800);
    }, 2500);
});

// Professional Floating Elements
function initProfessionalEffects() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const elements = [];
    const symbols = ['{ }', '< />', '( )', '[ ]', '=>', '++', '--', '===', '!=='];
    
    // Create floating code symbols
    for(let i = 0; i < 20; i++) {
        elements.push({
            text: symbols[Math.floor(Math.random() * symbols.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.3 + 0.1,
            size: Math.random() * 16 + 12
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        elements.forEach(element => {
            // Update position
            element.x += element.vx;
            element.y += element.vy;
            
            // Bounce off edges
            if(element.x < 0 || element.x > canvas.width) element.vx *= -1;
            if(element.y < 0 || element.y > canvas.height) element.vy *= -1;
            
            // Draw element
            ctx.font = `${element.size}px 'Fira Code', monospace`;
            ctx.fillStyle = `rgba(0, 102, 255, ${element.opacity})`;
            ctx.fillText(element.text, element.x, element.y);
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Advanced Interactive Particles System
function initInteractiveParticles() {
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 120;
    let mouse = { x: 0, y: 0 };
    
    class AdvancedParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1.5;
            this.vy = (Math.random() - 0.5) * 1.5;
            this.radius = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.originalOpacity = this.opacity;
            this.color = this.getRandomBlueShade();
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.connectionStrength = 0;
        }
        
        getRandomBlueShade() {
            const blueShades = [
                'rgba(0, 102, 255, ',
                'rgba(0, 153, 255, ',
                'rgba(51, 153, 255, ',
                'rgba(102, 178, 255, ',
                'rgba(255, 255, 255, '
            ];
            return blueShades[Math.floor(Math.random() * blueShades.length)];
        }
        
        update() {
            // Floating movement
            this.x += this.vx;
            this.y += this.vy;
            
            // Boundary bouncing with dampening
            if(this.x < 0 || this.x > canvas.width) {
                this.vx *= -0.8;
                this.x = Math.max(0, Math.min(canvas.width, this.x));
            }
            if(this.y < 0 || this.y > canvas.height) {
                this.vy *= -0.8;
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }
            
            // Mouse interaction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if(distance < 150) {
                const force = (150 - distance) / 150;
                this.vx -= (dx / distance) * force * 0.5;
                this.vy -= (dy / distance) * force * 0.5;
                this.opacity = this.originalOpacity + force * 0.5;
                this.connectionStrength = force;
            } else {
                this.opacity += (this.originalOpacity - this.opacity) * 0.1;
                this.connectionStrength *= 0.9;
            }
            
            // Pulsing effect
            this.pulsePhase += 0.02;
            const pulse = Math.sin(this.pulsePhase) * 0.2;
            this.opacity += pulse;
        }
        
        draw() {
            // Main particle with gradient
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius * 3
            );
            gradient.addColorStop(0, this.color + (this.opacity) + ')');
            gradient.addColorStop(0.5, this.color + (this.opacity * 0.5) + ')');
            gradient.addColorStop(1, this.color + '0)');
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Additional glow for interactive particles
            if(this.connectionStrength > 0.3) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 102, 255, ${this.connectionStrength * 0.3})`;
                ctx.fill();
            }
        }
    }
    
    // Create advanced particles
    for(let i = 0; i < particleCount; i++) {
        particles.push(new AdvancedParticle());
    }
    
    function drawConnections() {
        for(let i = 0; i < particles.length; i++) {
            for(let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if(distance < 150) {
                    const opacity = 0.15 * (1 - distance / 150);
                    const connectionStrength = (particles[i].connectionStrength + particles[j].connectionStrength) / 2;
                    
                    // Dynamic line width based on connection strength
                    const lineWidth = 1 + connectionStrength * 2;
                    
                    // Create gradient line
                    const gradient = ctx.createLinearGradient(
                        particles[i].x, particles[i].y,
                        particles[j].x, particles[j].y
                    );
                    gradient.addColorStop(0, `rgba(0, 102, 255, ${opacity + connectionStrength * 0.3})`);
                    gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
                    gradient.addColorStop(1, `rgba(0, 102, 255, ${opacity + connectionStrength * 0.3})`);
                    
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = lineWidth;
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawConnections();
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Enhanced mouse interaction
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = canvas.width / 2;
        mouse.y = canvas.height / 2;
    });
    
    // Touch support for mobile
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    });
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Advanced Animations
function initAdvancedAnimations() {
    // Glitch effect for title
    const title = document.querySelector('.hero-title');
    if (title) {
        setInterval(() => {
            title.style.textShadow = `
                ${Math.random() * 2 - 1}px ${Math.random() * 2 - 1}px 0px #0066ff,
                ${Math.random() * 2 - 1}px ${Math.random() * 2 - 1}px 0px #ffffff
            `;
            setTimeout(() => {
                title.style.textShadow = 'none';
            }, 50);
        }, 3000 + Math.random() * 2000);
    }
    
    // Floating animation for code block
    const codeBlock = document.querySelector('.code-block');
    if (codeBlock) {
        let floatDirection = 1;
        setInterval(() => {
            floatDirection *= -1;
            codeBlock.style.transform = `translateY(${floatDirection * 10}px)`;
        }, 3000);
    }
    
    // Enhanced pulse animation for skills bars
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.boxShadow = '0 0 15px rgba(0, 102, 255, 0.6)';
            bar.style.animation = 'pulse 2s ease-in-out infinite';
        }, index * 200);
    });
    
    // Achievement cards particle effects
    initAchievementParticles();
    
    // Tech cards hover effects
    initTechCardEffects();
    
    // Interactive about card effects
    initAboutCardEffects();
}

// Achievement Cards Particle Effects
function initAchievementParticles() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        const particleContainer = card.querySelector('.achievement-particles');
        if (!particleContainer) return;
        
        // Create floating particles for each achievement
        for(let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #0066ff;
                border-radius: 50%;
                opacity: 0;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: achievementFloat ${3 + Math.random() * 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
            `;
            particleContainer.appendChild(particle);
        }
        
        // Add particle animation styles
        if (!document.querySelector('#achievement-particles-style')) {
            const style = document.createElement('style');
            style.id = 'achievement-particles-style';
            style.textContent = `
                .achievement-particles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    overflow: hidden;
                    border-radius: 20px;
                }
                
                @keyframes achievementFloat {
                    0%, 100% {
                        opacity: 0;
                        transform: translateY(0px) scale(1);
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-20px) scale(1.2);
                        opacity: 0.8;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Tech Cards Enhanced Effects
function initTechCardEffects() {
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach((card, index) => {
        // Stagger the initial animation
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add ripple effect on click
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(0, 102, 255, 0.3), transparent);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleEffect {
                0% {
                    transform: scale(0);
                    opacity: 0.6;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Interactive About Card Effects
function initAboutCardEffects() {
    const aboutCard = document.querySelector('.about-card-3d');
    if (!aboutCard) return;
    
    // Add click interaction to flip the card
    aboutCard.addEventListener('click', () => {
        aboutCard.classList.toggle('flipped');
    });
    
    // Add floating particles around about section
    const aboutVisual = document.querySelector('.about-visual');
    if (aboutVisual) {
        for(let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(0, 102, 255, 0.6);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: aboutFloat ${5 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 1;
            `;
            aboutVisual.appendChild(particle);
        }
    }
    
    // Add about animation styles
    if (!document.querySelector('#about-effects-style')) {
        const style = document.createElement('style');
        style.id = 'about-effects-style';
        style.textContent = `
            .about-visual {
                position: relative;
            }
            
            @keyframes aboutFloat {
                0%, 100% {
                    opacity: 0.4;
                    transform: translate(0, 0) scale(1);
                }
                25% {
                    opacity: 0.8;
                    transform: translate(15px, -20px) scale(1.3);
                }
                50% {
                    opacity: 0.6;
                    transform: translate(-10px, -25px) scale(0.7);
                }
                75% {
                    opacity: 0.9;
                    transform: translate(-15px, 10px) scale(1.1);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Badge hover effects
    const badges = document.querySelectorAll('.badge-3d');
    badges.forEach((badge, index) => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = `translateY(-5px) scale(1.1)`;
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = `translateY(0) scale(1)`;
        });
        
        // Add click animation
        badge.addEventListener('click', () => {
            badge.style.animation = 'none';
            badge.offsetHeight; // Trigger reflow
            badge.style.animation = `badgeClick 0.6s ease-out, badgeFloat 3s ease-in-out infinite ${index}s`;
        });
    });
    
    // Add badge click animation
    if (!document.querySelector('#badge-click-style')) {
        const style = document.createElement('style');
        style.id = 'badge-click-style';
        style.textContent = `
            @keyframes badgeClick {
                0% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.2) rotate(5deg); }
                100% { transform: scale(1) rotate(0deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Eduardo\'s Advanced Portfolio - Loaded successfully! 🚀✨');
    
    // Add smooth reveal animations with enhanced effects
    const revealElements = document.querySelectorAll('.hero-content > *, .about-text > *, .contact-info > *');
    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.9)';
        element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }, index * 150);
    });
    
    // Add glow effects to interactive elements
    document.querySelectorAll('.btn, .nav-link, .social-link').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.textShadow = '0 0 10px rgba(0, 102, 255, 0.8)';
            element.style.boxShadow = '0 0 20px rgba(0, 102, 255, 0.4)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.textShadow = 'none';
            element.style.boxShadow = 'none';
        });
    });
});

// Performance optimization
let ticking = false;

function updateScrollEffects() {
    // Update scroll-based animations here
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Elegant Background Effects
function initElegantBackground() {
    // Create elegant floating shapes
    const geometryContainer = document.createElement('div');
    geometryContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
    `;
    
    // Create elegant geometric shapes
    for(let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        const shapeTypes = ['circle', 'square', 'diamond'];
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const size = Math.random() * 80 + 40;
        
        let shapeCSS = '';
        switch(shapeType) {
            case 'circle':
                shapeCSS = `
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0, 102, 255, 0.05), transparent);
                `;
                break;
            case 'square':
                shapeCSS = `
                    border-radius: 15px;
                    background: linear-gradient(45deg, rgba(0, 102, 255, 0.03), rgba(255, 255, 255, 0.01));
                `;
                break;
            case 'diamond':
                shapeCSS = `
                    border-radius: 15px;
                    background: conic-gradient(from 45deg, rgba(0, 102, 255, 0.04), transparent, rgba(0, 102, 255, 0.04));
                    transform: rotate(45deg);
                `;
                break;
        }
        
        shape.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            ${shapeCSS}
            border: 1px solid rgba(255, 255, 255, 0.05);
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: elegantFloat ${8 + Math.random() * 12}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        geometryContainer.appendChild(shape);
    }
    
    document.body.appendChild(geometryContainer);
    
    // Add elegant float animation
    if (!document.querySelector('#elegant-float-style')) {
        const style = document.createElement('style');
        style.id = 'elegant-float-style';
        style.textContent = `
            @keyframes elegantFloat {
                0%, 100% {
                    transform: translate(0, 0) rotate(0deg) scale(1);
                    opacity: 0.6;
                }
                25% {
                    transform: translate(20px, -30px) rotate(90deg) scale(1.1);
                    opacity: 0.8;
                }
                50% {
                    transform: translate(-15px, -60px) rotate(180deg) scale(0.9);
                    opacity: 1;
                }
                75% {
                    transform: translate(-25px, -30px) rotate(270deg) scale(1.05);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Floating Elements System
function initFloatingElements() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, sectionIndex) => {
        // Create floating elements for each section
        for(let i = 0; i < 3; i++) {
            const floatElement = document.createElement('div');
            floatElement.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(0, 102, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: sectionFloat ${8 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${sectionIndex * 0.5 + Math.random() * 2}s;
                pointer-events: none;
                z-index: 1;
            `;
            
            section.style.position = 'relative';
            section.appendChild(floatElement);
        }
    });
    
    // Add section float animation
    if (!document.querySelector('#section-float-style')) {
        const style = document.createElement('style');
        style.id = 'section-float-style';
        style.textContent = `
            @keyframes sectionFloat {
                0%, 100% {
                    transform: translateY(0px) translateX(0px);
                    opacity: 0.4;
                }
                25% {
                    transform: translateY(-15px) translateX(10px);
                    opacity: 0.8;
                }
                50% {
                    transform: translateY(-30px) translateX(-5px);
                    opacity: 1;
                }
                75% {
                    transform: translateY(-15px) translateX(-10px);
                    opacity: 0.6;
                }
            }
        `;
        document.head.appendChild(style);
    }
}