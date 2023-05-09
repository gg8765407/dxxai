const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const images = [];
let currentImageIndex = 0;

for (let i = 1; i <= 219; i++) {
    const img = new Image();
    img.src = "png/a (" + i + ").png";
    images.push(img);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.min(canvas.width / images[currentImageIndex].width, canvas.height / images[currentImageIndex].height);
    const width = images[currentImageIndex].width * scale;
    const height = images[currentImageIndex].height * scale;
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;
    ctx.drawImage(images[currentImageIndex], x, y, width, height);
}

function changeImage(index) {
    currentImageIndex = index;
    draw();
}

document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 37:
            if (currentImageIndex > 0) {
                changeImage(currentImageIndex - 1);
            }
            break;
        case 39:
            if (currentImageIndex < images.length - 1) {
                changeImage(currentImageIndex + 1);
            }
            break;
    }
});

images[0].onload = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setInterval(() => {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        draw();
    }, 50);
};

// 添加第二个canvas元素
const canvas2 = document.getElementById("myCanvas2");
const ctx2 = canvas2.getContext("2d");

const circles = [];
const circleRadius = 50;
const maxSpeed = 5;
const minSpeed = 1;
const circleCount = 30;

for (let i = 0; i < circleCount; i++) {
    const circle = {
        x: Math.random() * canvas2.width,
        y: Math.random() * canvas2.height,
        vx: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        vy: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        color: getRandomColor(),
    };
    circles.push(circle);
}

function getRandomColor() {
    const colors = ["#FF6138", "#FFFF9D", "#BEEB9
function drawCircles() {
ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
for (let i = 0; i < circles.length; i++) {
const circle = circles[i];
circle.x += circle.vx;
circle.y += circle.vy;
if (circle.x > canvas2.width + circleRadius) {
circle.x = -circleRadius;
}
if (circle.y > canvas2.height + circleRadius) {
circle.y = -circleRadius;
}
if (circle.x < -circleRadius) {
circle.x = canvas2.width + circleRadius;
}
if (circle.y < -circleRadius) {
circle.y = canvas2.height + circleRadius;
}
ctx2.beginPath();
ctx2.arc(circle.x, circle.y, circleRadius, 0, 2 * Math.PI);
ctx2.fillStyle = circle.color;
ctx2.fill();
}
}

function animate() {
drawCircles();
requestAnimationFrame(animate);
}

animate();
function drawCircles() {
ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
circles.forEach((circle) => {
ctx2.beginPath();
ctx2.arc(circle.x, circle.y, circleRadius, 0, 2 * Math.PI);
ctx2.fillStyle = circle.color;
ctx2.fill();
});
}

function updateCircles() {
circles.forEach((circle) => {
circle.x += circle.vx;
circle.y += circle.vy;
    if (circle.x < circleRadius || circle.x > canvas2.width - circleRadius) {
        circle.vx *= -1;
    }

    if (circle.y < circleRadius || circle.y > canvas2.height - circleRadius) {
        circle.vy *= -1;
    }
});
}

function animate() {
requestAnimationFrame(animate);
updateCircles();
drawCircles();
}

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

animate();
