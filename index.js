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
        "Hello! 👋",
        "Servus! 😇",
        "नमस्ते! 🙏",
        "I'm an artist 🎨",
        "I'm a Robotics Engineer 🤖",
        "I'm an AI Engineer ✨",
        "I'm currently building secure AI-Agents 🧠",
    ];
    let index = 0;
    const banner = document.getElementById("banner");
    if (!banner) return;

    function showNextPhrase() {
        if (index < phrases.length) {
            hackerEffect(banner, phrases[index], 30, 10, () => {
                setTimeout(showNextPhrase, 3000);
            });
            index++;
        }
    }

    showNextPhrase();
}

document.addEventListener('DOMContentLoaded', rotatePhrases);