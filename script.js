// Set launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

// Update countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<p class="countdown-ended">We are live!</p>';
    }
}

// Update progress bar
function updateProgress() {
    const totalDays = 30;
    const now = new Date().getTime();
    const distance = launchDate - now;
    const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
    const progress = Math.min(100, Math.max(0, ((totalDays - daysRemaining) / totalDays) * 100));

    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressPercent').textContent = Math.round(progress);
}

// Initialize countdown and progress
updateCountdown();
updateProgress();
const countdownInterval = setInterval(() => {
    updateCountdown();
    updateProgress();
}, 1000);

// Handle form submission
const notifyForm = document.getElementById('notifyForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

notifyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = emailInput.value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    // In production, you would send this to your backend
    showMessage('Thank you! We will notify you when we launch.', 'success');
    emailInput.value = '';

    // Store email in localStorage (in production, send to backend)
    const emails = JSON.parse(localStorage.getItem('notifyEmails') || '[]');
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('notifyEmails', JSON.stringify(emails));
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Add smooth scroll and entrance animations
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
