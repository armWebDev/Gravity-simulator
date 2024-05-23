"use strict";
const canvas = document.getElementById("myCanvas");
const startScreen = document.getElementById("startScreen");
const playButton = document.getElementById("playButton");
const resetGame = document.getElementById("resetButton");
if (!canvas) {
    throw new Error("Canvas element is not found");
}
let ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("2D context not available");
}
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const gravity = 1;
const friction = 0.85;
let radius = 30;
let ballArray = [];
class CircleObject {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
    update() {
        if (this.y + this.radius + this.dy > canvasHeight) {
            this.dy = -this.dy * friction;
            this.dx = this.dx * friction;
        }
        else {
            this.dy += gravity;
        }
        if (this.x + this.radius + this.dx > canvasWidth || this.x - this.radius <= 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    draw() {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
}
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor() {
    return Math.floor(Math.random() * 255);
}
canvas.addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    const dx = randomIntFromRange(-2, 2);
    const dy = randomIntFromRange(-2, 2);
    let ball = new CircleObject(x, y, dx, dy, radius, `rgb(${r}, ${g}, ${b})`);
    ballArray.push(ball);
});
function init() {
    ballArray = [];
    for (let i = 0; i < 15; i++) {
        const x = randomIntFromRange(radius, canvasWidth - radius);
        const y = randomIntFromRange(radius, canvasHeight - radius);
        const dx = randomIntFromRange(-2, 2);
        const dy = randomIntFromRange(-2, 2);
        let r = randomColor();
        let g = randomColor();
        let b = randomColor();
        ballArray.push(new CircleObject(x, y, dx, dy, radius, `rgb(${r}, ${g}, ${b})`));
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let ball of ballArray) {
        ball.update();
    }
}
console.log(resetGame);
function startGame() {
    startScreen.style.display = "none";
    canvas.style.display = "block";
    resetGame.style.display = "block";
    init();
    animate();
}
playButton.addEventListener("click", startGame);
resetGame.addEventListener("click", init);
