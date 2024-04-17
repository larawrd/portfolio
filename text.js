const textContainer = document.getElementById('textContainer');
const texts = textContainer.querySelectorAll('.text');

let position = 0;
const speed = 1.5; // Speed of the animation (adjust as needed)

function animateLoop() {
    position -= speed;
    for (const text of texts) {
        text.style.transform = `translateX(${position}px)`;
    }
    // Check if we need to reset the position
    if (position <= -textContainer.offsetWidth) {
        position = 0;
    }
    requestAnimationFrame(animateLoop);
}

animateLoop();