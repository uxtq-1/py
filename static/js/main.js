const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let mouse = { x: null, y: null };

// Track mouse movement
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Dot class representing each particle
class Dot {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = 2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off the canvas edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

// Create multiple dots with random positions and velocities
const dots = [];
const numDots = 100;
for (let i = 0; i < numDots; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    let vx = (Math.random() - 0.5) * 1;
    let vy = (Math.random() - 0.5) * 1;
    dots.push(new Dot(x, y, vx, vy));
}

// Connect dots with lines if they are within a threshold distance
function connectDots() {
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let dx = dots[i].x - dots[j].x;
            let dy = dots[i].y - dots[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                let opacity = 1 - distance / 100;
                ctx.strokeStyle = 'rgba(255, 255, 255,' + opacity + ')';
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }
    }
}

// Highlight dots when the mouse is nearby
function drawMouseInteraction() {
    if (mouse.x && mouse.y) {
        for (let dot of dots) {
            let dx = dot.x - mouse.x;
            let dy = dot.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 50) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        }
    }
}

// Animation loop to update and render the scene
function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let dot of dots) {
        dot.update();
        dot.draw();
    }
    connectDots();
    drawMouseInteraction();
    requestAnimationFrame(animate);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

