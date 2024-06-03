// Canvas - Fishing Scene

// Canvas Set up
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;

// top-left corner (0,0)
// top-right corner (400,0)
// bottom-left corner (0,400)
// bottom-right corner (400,400)
// Variables
let Xripple = 0;
let Yripple = 0;
let Xripple1 = 0;
let Yripple1 = 0;
let fishDirection = -1;
let fishY = 350;
let fishTailY = 370;
let cloud1X =  95;
let cloud2X =  160;
let cloud1Y =  15;
let cloud2Y =  45;
let ripple1 = 0;
let ripple2 = 0;
let leavesY1 = 140;
let leavesX1 = 500;
let leavesX2 = 450;
let leavesX3 = 550;
let leavesY21 = 170;
let leavesX21 = 500;
let leavesX22 = 425;
let leavesX23 = 575;
let leavesX31 = 500;
let treeDirection1 = 0

let bleavesY1 = 80;
let bleavesX1 = 620;
let bleavesX2 = 570;
let bleavesX3 = 670;
let bleavesY21 = 110;
let bleavesX21 = 620;
let bleavesX22 = 545;
let bleavesX23 = 695;
let bleavesX31 = 620;
let treeDirection2 = 0;

document.addEventListener("keypress", keyboardhandler)

function keyboardhandler(event) {
    if (event.code == "KeyW"){
        treeDirection1 = 1;
    }
}




requestAnimationFrame(draw);
function draw() {
    // Sky
    ctx.fillStyle = "#032082";
    ctx.fillRect(0, 0, 700, 300);

    // Stars
    var starsImg = document.getElementById("star");
    ctx.drawImage(starsImg, 0, 0, 700, 200);

    // Cloud Image
    var cloudImg = document.getElementById("cloud1");
    ctx.drawImage(cloudImg, cloud1X, cloud1Y, 150, 70);

    // Moon
    ctx.fillStyle = "lightgray"
    ctx.beginPath();
    // ctx.arc(xPos, yPos, radius, startAngle, endAngle);
    ctx.arc(200, 60, 40, 0, 2*Math.PI);
    ctx.fill();

    // Cloud Image
    var cloudImg = document.getElementById("cloud1");
    ctx.drawImage(cloudImg, cloud2X, cloud2Y, 150, 70);

    // Mountain 1
    ctx.fillStyle = "#666565";
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.moveTo(0,230);
    ctx.lineTo(40,140);
    ctx.lineTo(130,300);
    ctx.lineTo(0, 300);
    ctx.fill();

    // Mountain 2
    ctx.fillStyle = "#666565";
    ctx.beginPath();
    ctx.moveTo(20, 300);
    ctx.lineTo(120,80);
    ctx.lineTo(220,300);
    ctx.lineTo(20, 300);
    ctx.fill()

    // Mountain 3
    ctx.fillStyle = "#666565";
    ctx.beginPath();
    ctx.moveTo(140, 300);
    ctx.lineTo(200,170);
    ctx.lineTo(270,300);
    ctx.lineTo(140, 300);
    ctx.fill();

    // Land
    ctx.fillStyle = "#015401";
    ctx.fillRect(0, 300, 700, 200);

    // Lake
    ctx.fillStyle = "#0079B6"
    ctx.fillRect(0, 300, 225, 155);

    // Still Lake
    // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    ctx.beginPath();
    ctx.ellipse(225, 350, 225, 50, Math.PI * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(230, 425, 150, 30, Math.PI * 2, 0, Math.PI * 2);
    ctx.fill();

    // fish

    // Ripples
    ctx.strokeStyle = "#0293db"
    ctx.beginPath();
    ctx.ellipse(225, 350, Xripple, Yripple, Math.PI * 2, 0, Math.PI * 2);
    ctx.lineWidth = 5
    ctx.stroke();

    // Ripples2
    ctx.strokeStyle = "#0293db"
    ctx.beginPath();
    ctx.ellipse(225, 350, Xripple1, Yripple1, Math.PI * 2, 0, Math.PI * 2);
    ctx.lineWidth = 5
    ctx.stroke();

    // // Tree 1

    // Trunk
    ctx.fillStyle = "#5c2801"
    ctx.fillRect(600, 240, 40, 150); // (120, 60)

    // Leaves
    ctx.fillStyle = "#017301";
    ctx.beginPath();
    ctx.moveTo(bleavesX1, bleavesY1);
    ctx.lineTo(bleavesX2, 180);
    ctx.lineTo(bleavesX3, 180);
    ctx.lineTo(bleavesX1, bleavesY1);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(bleavesX21, bleavesY21);
    ctx.lineTo(bleavesX22, 260);
    ctx.lineTo(bleavesX23, 260);
    ctx.lineTo(bleavesX21, bleavesY21);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(bleavesX31, 160);
    ctx.lineTo(520, 350);
    ctx.lineTo(720, 350);
    ctx.lineTo(bleavesX31, 160);
    ctx.fill();

    // Tree 2

    // Trunk
    ctx.fillStyle = "#6e3302"
    ctx.fillRect(480, 300, 40, 150);

    // Leaves
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(leavesX1, leavesY1);
    ctx.lineTo(leavesX2, 240);
    ctx.lineTo(leavesX3,240);
    ctx.lineTo(leavesX1, leavesY1);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(leavesX21, leavesY21);
    ctx.lineTo(leavesX22, 320);
    ctx.lineTo(leavesX23,320);
    ctx.lineTo(leavesX21, leavesY21);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(leavesX31, 220);
    ctx.lineTo(400, 410);
    ctx.lineTo(600,410);
    ctx.lineTo(leavesX31, 220);
    ctx.fill();

    // Text
    ctx.font = "15px Arial";
    ctx.fillStyle = "White";
    ctx.fillText(`Art by Grace.P`, 590, 490)
    requestAnimationFrame(draw);

    //Fish
    ctx.fillStyle = "green"
    ctx.beginPath();
    // ctx.arc(xPos, yPos, radius, startAngle, endAngle);
    ctx.arc(225, fishY, 7, 0, 2*Math.PI);
    ctx.fill();
    //fishTail
    ctx.beginPath()
    ctx.moveTo(225, fishY);
    ctx.lineTo(235,fishTailY);
    ctx.lineTo(215,fishTailY);
    ctx.fill();



    //Animation

    //tree1
    if (treeDirection1 == 1) {
        leavesY1 += .2;
        leavesX1 += 1;
        leavesX2 += .5;
        leavesX3 += .5;
        leavesY21 += .4;
        leavesX21 += .5;
        leavesX22 += .2;
        leavesX23 += .2;
        leavesX31 += .2;
    }

    if (treeDirection1 == -1) {
        leavesY1 += -.4;
        leavesX1 += -2;
        leavesX2 += -1;
        leavesX3 += -1;
        leavesY21 += -.8;
        leavesX21 += -1;
        leavesX22 += -.4;
        leavesX23 += -.4;
        leavesX31 += -.4;
    }
    if (leavesX31 > 515) {
        treeDirection1 = -1;
    }
    if (leavesX21 < 490) {
        treeDirection1 = 1;
    }
    if (leavesX1 == 500 && treeDirection1 == 1) {
        treeDirection1 = 0;
        treeDirection2 = 1;
    }
    if (leavesX1 == 530 && treeDirection1 == 1) {
        treeDirection2 = 1;
    }

    //tree2
    if (treeDirection2 == 1) {
        bleavesY1 += .2
        bleavesX1 += 1
        bleavesX2 += .5
        bleavesX3 += .5
        bleavesY21 += .4
        bleavesX21 += .5
        bleavesX22 +=.2
        bleavesX23 +=.2
        bleavesX31 += .2
    }

    if (treeDirection2 == -1) {
        bleavesY1 += -.4
        bleavesX1 += -2
        bleavesX2 += -1
        bleavesX3 += -1
        bleavesY21 += -.8
        bleavesX21 += -1
        bleavesX22 += -.4
        bleavesX23 += -.4
        bleavesX31 += -.4
    }
    if (bleavesX31 > 635) {
        treeDirection2 = -1
    }
    if (bleavesX21 < 610) {
        treeDirection2 = 1
    }
    if (bleavesX1 == 620 && treeDirection2 == 1) {
        treeDirection2 = 0
    }


    //clouds
    cloud1X += 1;
    cloud2X += .5;

    if (cloud1X > 700) {
        cloud1X = -150
        cloud1Y = Math.random() * 150;
    }
    if (cloud2X > 700) {
        cloud2X = -150
        cloud2Y = Math.random() * 150;
    }
    
    //fish 

    fishTailY = fishTailY + fishDirection

    fishY = fishY + fishDirection
    if (fishY < 300) {
        fishTailY -= 40
        fishDirection = 1
    }
    if (fishY == 351) {
        fishTailY = 500
        fishY = 500
        fishDirection = 6000
    }


    if (fishY > 2000000) {
        ripple1 = 0;
        ripple2 = 0;
        Xripple = 0;
        Yripple = 0;
        Xripple1 = 0;
        Yripple1 = 0;
        fishDirection = -1;
        fishY = 350;
        fishTailY = 370;
    }

    //ripples
    if (fishY == 345 && fishDirection == 1) {
        ripple1 = 1;
    }
    if (Xripple == 80) {
        ripple2 = 1;
    }

    if (ripple1 == 1) {
        Xripple += 2
        Yripple += .3
        if (Xripple > 150) {
            Xripple = 600
            Yripple = 600
        }
    }
    if (ripple2 == 1) {
        Xripple1 += 2
        Yripple1 += .3
        if (Xripple1 > 150) {
            Xripple1 = 600
            Yripple1 = 600
        }
    }
}