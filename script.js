// Birthday date - October 8th (you can change the year)
const birthdayDate = new Date('2024-10-08T00:00:00');

// Countdown functionality
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate.getTime() - now;
    
    // Check if it's birthday time
    if (distance < 0) {
        // Redirect to birthday page if we're on the countdown page
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            window.location.href = 'birthday.html';
        }
        return;
    }
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update display
    if (document.getElementById('days')) {
        document.getElementById('days').innerHTML = String(days).padStart(2, '0');
        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    }
}

// Initialize countdown
if (document.querySelector('.countdown-page')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Birthday page functionality
if (document.querySelector('.birthday-page')) {
    // Launch confetti on page load
    window.addEventListener('load', function() {
        launchConfetti();
        initChart();
        calculateBirthdayFacts();
    });
}

// Confetti function
function launchConfetti() {
    if (typeof confetti !== 'undefined') {
        // Multiple confetti bursts
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
        }, 200);
        
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 400);
    }
}

// Memory pop-up function
function showMemories() {
    const memories = [
        {
            title: "Our First Date 💕",
            text: "Remember when we first met? That smile of yours lit up the entire room!",
            image: "💝"
        },
        {
            title: "That Rainy Day ☔",
            text: "Dancing in the rain together - one of my favorite memories with you!",
            image: "🌧️"
        },
        {
            title: "Your Cooking Adventures 👩‍🍳",
            text: "Every meal you make is made with love, and it shows in every bite!",
            image: "🍳"
        },
        {
            title: "Our Inside Jokes 😂",
            text: "The way we can make each other laugh without saying a word!",
            image: "😄"
        },
        {
            title: "Lazy Sunday Mornings 🌅",
            text: "Cuddling in bed, no rush, just us and the peaceful morning light.",
            image: "☀️"
        }
    ];
    
    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
    
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: randomMemory.title,
            text: randomMemory.text,
            icon: 'success',
            iconHtml: randomMemory.image,
            confirmButtonText: 'More Memories! 💖',
            showCancelButton: true,
            cancelButtonText: 'Close',
            customClass: {
                popup: 'memory-popup',
                confirmButton: 'memory-confirm-btn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                showMemories(); // Show another memory
            }
        });
    } else {
        alert(randomMemory.title + '\n\n' + randomMemory.text);
    }
}

// Special surprise function
function showSurprise() {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: '🎁 Special Surprise!',
            html: `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #d63384; margin-bottom: 15px;">💖 Love Letter 💖</h3>
                    <p style="font-style: italic; line-height: 1.6; color: #333;">
                        "Every day with you feels like a celebration.<br>
                        Your kindness, your laughter, your beautiful soul -<br>
                        they make every moment brighter.<br><br>
                        Happy Birthday to the most amazing person I know!<br>
                        Here's to another year of adventures together! 🌟"
                    </p>
                    <div style="margin-top: 20px;">
                        <span style="font-size: 2rem;">💕✨🎂✨💕</span>
                    </div>
                </div>
            `,
            confirmButtonText: 'Aww, I love you too! 💝',
            customClass: {
                popup: 'surprise-popup',
                confirmButton: 'surprise-confirm-btn'
            }
        });
    } else {
        alert('Special Surprise!\n\nEvery day with you feels like a celebration.\nYour kindness, your laughter, your beautiful soul - they make every moment brighter.\n\nHappy Birthday to the most amazing person I know!\nHere\'s to another year of adventures together! 🌟');
    }
}

// Initialize Chart.js bar chart
function initChart() {
    const ctx = document.getElementById('memoryChart');
    if (ctx && typeof Chart !== 'undefined') {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Photos Together', 'Dates', 'Laughs Shared', 'Hugs Given', 'Songs Sung', 'Dreams Shared'],
                datasets: [{
                    label: 'Our Journey ❤️',
                    data: [287, 156, 1892, 2341, 94, 73],
                    backgroundColor: [
                        'rgba(255, 182, 193, 0.8)',
                        'rgba(255, 218, 185, 0.8)',
                        'rgba(255, 239, 213, 0.8)',
                        'rgba(255, 240, 245, 0.8)',
                        'rgba(230, 230, 250, 0.8)',
                        'rgba(255, 228, 225, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 182, 193, 1)',
                        'rgba(255, 218, 185, 1)',
                        'rgba(255, 239, 213, 1)',
                        'rgba(255, 240, 245, 1)',
                        'rgba(230, 230, 250, 1)',
                        'rgba(255, 228, 225, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            color: '#8b5a87'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            color: '#8b5a87',
                            maxRotation: 45
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#d63384',
                            font: {
                                family: 'Poppins',
                                weight: '600'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#d63384',
                        bodyColor: '#333',
                        borderColor: '#d63384',
                        borderWidth: 2,
                        cornerRadius: 10,
                        displayColors: false
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });
    }
}

// Calculate birthday facts
function calculateBirthdayFacts() {
    // Assuming she's 25 years old (you can adjust this)
    const age = 25;
    const ageInDays = age * 365;
    const ageInHours = ageInDays * 24;
    const heartbeats = ageInDays * 100000; // Average heartbeats per day
    
    // Animate the numbers
    animateNumber('age-days', ageInDays);
    animateNumber('age-hours', ageInHours);
    animateNumber('heartbeats', heartbeats);
}

// Number animation function
function animateNumber(elementId, finalNumber) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            current = finalNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, duration / steps);
}

// Utility function to add more floating hearts
function addFloatingHeart() {
    const heartsContainer = document.querySelector('.floating-hearts');
    if (heartsContainer) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 6) + 's';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 9000);
    }
}

// Add random floating hearts periodically on birthday page
if (document.querySelector('.birthday-page')) {
    setInterval(addFloatingHeart, 3000);
}

// Add some sparkle effects on mouse movement (birthday page only)
if (document.querySelector('.birthday-page')) {
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.9) { // Only sometimes create sparkles
            createSparkle(e.clientX, e.clientY);
        }
    });
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.fontSize = '1rem';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Add CSS for sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Auto-redirect check (runs every minute)
setInterval(() => {
    const now = new Date();
    const birthday = new Date(birthdayDate);
    
    if (now.getMonth() === birthday.getMonth() && 
        now.getDate() === birthday.getDate() && 
        window.location.pathname.includes('index.html')) {
        window.location.href = 'birthday.html';
    }
}, 60000);

console.log('🎉 Birthday Countdown App Loaded! 💕'); 