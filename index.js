function hackerEffect(element, phrase, interval = 30, steps = 10, callback) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?';
    let display = Array(phrase.length).fill('');
    let revealed = Array(phrase.length).fill(false);
    let step = 0;

    const scramble = setInterval(() => {
        for (let i = 0; i < phrase.length; i++) {
            if (!revealed[i]) {
                display[i] = chars[Math.floor(Math.random() * chars.length)];
            }
        }
        element.textContent = display.join('');
        element.style.color = "var(--accent-color)";

        if (step >= steps) {
            for (let i = 0; i < phrase.length; i++) {
                if (!revealed[i]) {
                    display[i] = phrase[i];
                    revealed[i] = true;
                    break;
                }
            }
        }

        if (revealed.every(Boolean)) {
            element.style.color = "white";
            element.textContent = phrase;
            clearInterval(scramble);
            if (typeof callback === "function") callback();
        }
        step++;
    }, interval);
}

function rotatePhrases() {
    const phrases = [
        "Hello! 👋 Servus! 😇 नमस्ते! 🙏",
        "I'm an artist 🎨",
        "A Robotics Engineer 🤖",
        "An AI Engineer ✨",
        "I'm currently building secure AI-Agents 🧠",
        "Welcome to my portfolio 🚀"
    ];
    let index = 0;
    const banner = document.getElementById("banner");
    if (!banner) return;

    function showNextPhrase() {
        if (index < phrases.length) {
            hackerEffect(banner, phrases[index], 30, 10, () => {
                setTimeout(showNextPhrase, 2000);
            });
            index++;
        }
    }

    showNextPhrase();
}

document.addEventListener('DOMContentLoaded', rotatePhrases);

document.addEventListener('wheel', function (e) {
    const container = document.querySelector('.container');
    if (!container) return;

    if (!container.contains(e.target)) {
        container.scrollTop += e.deltaY;
        e.preventDefault();
    }
}, { passive: false });

function scaleUI(baseWidth = 1440, baseHeight = 900, minScale = 0.9, maxScale = 1.2) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scaleW = w / baseWidth;
    const scaleH = h / baseHeight;
    const scale = Math.max(minScale, Math.min(Math.min(scaleW, scaleH), maxScale));
    const root = document.documentElement;
    root.style.setProperty('--scale', String(scale));
    root.style.setProperty('--vw', `${w}px`);
    root.style.setProperty('--vh', `${h}px`);
}

function initScaling() {
    scaleUI();
    window.addEventListener('resize', () => scaleUI());
    window.addEventListener('orientationchange', () => scaleUI());
}

document.addEventListener('DOMContentLoaded', initScaling);