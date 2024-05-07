const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const clearButton = document.querySelector(".clear-button")

let {height, width} = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;
const LINE_INCREASE = 25;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = LINE_INCREASE;
reset()


function reset() {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function changePosition(e) {
    const {key} = e
    hue += 2
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case ("ArrowUp"):
            y -= LINE_INCREASE;
            break;
        case ("ArrowDown"):
            y += LINE_INCREASE;
            break;
        case ("ArrowRight"):
            x += LINE_INCREASE;
            break;
        case ("ArrowLeft"):
            x -= LINE_INCREASE;
            break;
    };
        
        ctx.lineTo(x, y);
        ctx.stroke();
};

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    hue = 0
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    reset()
};

window.addEventListener("keydown", changePosition);
clearButton.addEventListener("click", clearCanvas)