const canvas = document.getElementById("point-cloud");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

let points = [];

const numPoints = 300;

for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 3;
    points.push({ x, y, size, dx: Math.random() - 0.5, dy: Math.random() - 0.5 });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        const distanceToCursor = Math.sqrt((point.x - mouseX) ** 2 + (point.y - mouseY) ** 2);
        if (distanceToCursor < 30 * point.size) {
            point.dx += (point.x - mouseX) * 0.01;
            point.dy += (point.y - mouseY) * 0.01;
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    });

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const distance = Math.sqrt((points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2);
            if (distance < 30) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = "white";
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    requestAnimationFrame(draw);
}

let mouseX, mouseY;

canvas.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

canvas.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        const x = mouseX + (Math.random() - 0.5) * 50;
        const y = mouseY + (Math.random() - 0.5) * 50;
        const size = Math.random() * 3;
        points.push({ x, y, size, dx: Math.random() - 0.5, dy: Math.random() - 0.5 });
    }
});

draw();
