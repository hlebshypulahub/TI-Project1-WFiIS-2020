function drawCanvas2() {
    var cnv = document.getElementById("canvas2");
    cnv.style = "display: inline";

    drawFrame();
    drawDesk();
    setTimeout("drawDyn0()", 0);
    setTimeout("drawDyn1(); drawF();", 1500);
    setTimeout("drawCanvas2()", 4700);
}

function drawFrame() {
    var cnv = document.getElementById("canvas2");
    var ctx = cnv.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, cnv.width, cnv.height);
    ctx.strokeStyle = "brown";
    ctx.lineWidth = 5;
    ctx.stroke();
}

function drawDesk() {
    var cnv = document.getElementById("canvas2");
    var ctx = cnv.getContext("2d");
    ctx.beginPath();
    ctx.rect(400, 280, 350, -80);
    ctx.fillStyle = "lightgreen";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawDyn0() {
    var cnv = document.getElementById("canvas2");
    var ctx = cnv.getContext("2d");
    ctx.clearRect(20, 48, 590, 151);
    ctx.beginPath();
    im1 = new Image();
    im1.src = 'img/dynamometr0.png';
    im1.onload = function () {
        ctx.drawImage(im1, 248, 48);
    }
}

function drawDyn1() {
    var x = 170;
    var interval = setInterval(draw, 20);

    var cnv = document.getElementById("canvas2");
    var ctx = cnv.getContext("2d");

    im2 = new Image();
    im2.src = 'img/dynamometr1.png';
    ctx.clearRect(10, 48, 453, 150);

    function draw() {
        ctx.clearRect(x, 48, 590, 151);
        ctx.beginPath();

        ctx.drawImage(im2, x, 48);

        x = x - 1;
        if (x < 20) {
            clearInterval(interval);
        }
    }
}

function drawF() {
    var cnv = document.getElementById("canvas2");
    var ctx = cnv.getContext("2d");
    ctx.beginPath();
    imT = new Image();
    imT.src = 'img/Ft.png';
    ctx.drawImage(imT, 200, 20);
}
