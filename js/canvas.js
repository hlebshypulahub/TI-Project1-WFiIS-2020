var done = false;

function drawMain() {
    if (!done) {
        drawCanvas();
        done = true;
    }
}

function drawCanvas() {
    var cnv = document.getElementById("canvas");
    cnv.style = "display: inline";
    setTimeout("draw0()", 200);
    setTimeout("draw1()", 2500);
    setTimeout("draw2()", 5500);
    setTimeout("draw3()", 8500);
    setTimeout("drawCanvas()", 60000);
}

function draw0() {
    var r_a = 0.02;
    var interval = setInterval(draw, 20);

    function draw() {
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext("2d");
        ctx.beginPath();
        ctx.rect(0, 0, cnv.width, cnv.height);
        ctx.fillStyle = "rgba(0, 162, 255, " + r_a + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 0, 0, " + r_a + ")";
        ctx.lineWidth = 10;
        ctx.stroke();
        r_a = r_a + 0.02;
        if (r_a > 1.0) {
            ctx.fillStyle = "black";
            ctx.font = "50px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillText("Tarcie", cnv.width / 2, 20);
            clearInterval(interval);
        }
    }
}

function draw1() {
    var r_a = 0.02;
    var interval = setInterval(draw, 20);

    function draw() {
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext("2d");
        ctx.beginPath();
        ctx.rect(25, 420, 200, -340);
        ctx.fillStyle = "rgba(255, 153, 0, " + r_a + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 0, 0, " + r_a + ")";
        ctx.lineWidth = 3;
        ctx.stroke();
        r_a = r_a + 0.02;
        if (r_a > 1.0) {
            ctx.fillStyle = "black";
            ctx.font = "30px Arial";
            ctx.fillText("Spoczynkowe", 125, 90);
            im1 = new Image();
            im1.src = 'img/canvas1.jpg';
            im1.onload = function () {
                ctx.drawImage(im1, 40, 130);
            }
            im11 = new Image();
            im11.src = 'img/canvas11.jpg';
            im11.onload = function () {
                ctx.drawImage(im11, 40, 230);
            }
            ctx.textAlign = "left";
            ctx.font = "15px Arial";
            ctx.fillText("Występuje między dwoma", 37, 340);
            ctx.fillText("ciałami, gdy nie przemiesz-", 37, 360);
            ctx.fillText("czają się względem siebie.", 37, 380);
            clearInterval(interval);
        }
    }
}

function draw2() {
    var r_a = 0.02;
    var interval = setInterval(draw, 20);

    function draw() {
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext("2d");
        ctx.beginPath();
        ctx.rect(250, 420, 200, -340);
        ctx.fillStyle = "rgba(255, 153, 0, " + r_a + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 0, 0, " + r_a + ")";
        ctx.lineWidth = 3;
        ctx.stroke();
        r_a = r_a + 0.02;
        if (r_a > 1.0) {
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = "black";
            ctx.font = "30px Arial";
            ctx.fillText("Ślizgowe", 350, 90);
            im2 = new Image();
            im2.src = 'img/canvas2.jpg';
            im2.onload = function () {
                ctx.drawImage(im2, 265, 130);
            }
            im22 = new Image();
            im22.src = 'img/canvas22.jpg';
            im22.onload = function () {
                ctx.drawImage(im22, 265, 230);
            }
            ctx.textAlign = "left";
            ctx.font = "15px Arial";
            ctx.fillText("Występuje, gdy powierz-", 265, 340);
            ctx.fillText("chnie ciał, przesuwają się", 265, 360);
            ctx.fillText("względem siebie.", 265, 380);
            clearInterval(interval);
        }
    }
}

function draw3() {
    var r_a = 0.02;
    var interval = setInterval(draw, 20);

    function draw() {
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext("2d");
        ctx.beginPath();
        ctx.rect(475, 420, 200, -340);
        ctx.fillStyle = "rgba(255, 153, 0, " + r_a + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 0, 0, " + r_a + ")";
        ctx.lineWidth = 3;
        ctx.stroke();
        r_a = r_a + 0.02;
        if (r_a > 1.0) {
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = "black";
            ctx.font = "30px Arial";
            ctx.fillText("Toczne", 570, 90);
            im3 = new Image();
            im3.src = 'img/canvas3.jpg';
            im3.onload = function () {
                ctx.drawImage(im3, 490, 130);
            }
            im33 = new Image();
            im33.src = 'img/canvas33.jpg';
            im33.onload = function () {
                ctx.drawImage(im33, 490, 230);
            }
            ctx.textAlign = "left";
            ctx.font = "15px Arial";
            ctx.fillText("Występuje, gdy jedno ciało", 487, 340);
            ctx.fillText("toczy się po drugim.", 487, 360);
            clearInterval(interval);
        }
    }
}
