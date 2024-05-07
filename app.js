const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
ctx.beginPath();

let x = 0
let y = 0

function draw(endx, endy) {
    if (x > 500 || endx > 500) {
        x = 500;
        endx = 500;
    }
    if (y > 500 || endy > 500) {
        y = 500;
        endy = 500;
    }
    ctx.moveTo(x, y);
    ctx.lineTo(endx,endy);
    ctx.stroke();
    x = endx;
    y = endy;
}

function canvasMovement(e) {
    if (e.key == "ArrowRight") {
        draw(x+4, y)
    } else if (e.key == "ArrowDown") {
        draw(x, y+4)
    } else if (e.key == "ArrowLeft") {
        draw(x-4, y)
    } else if (e.key == "ArrowUp") {
        draw(x, y-4)
    }
}

window.addEventListener("keydown", canvasMovement);