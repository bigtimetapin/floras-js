let img;
let imgMask;
let imgBuffer;
let xSize = 800;
let ySize = 600;

function preload() {
    let colorMask;
    img = createImage(xSize, ySize);
    imgMask = createGraphics(xSize, ySize);
    imgBuffer = createImage(xSize, ySize);
    img.loadPixels();
    imgMask.loadPixels();
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            img.set(i, j, color(4, i / 30, j / 40));
        }
    }
    img.updatePixels();
    imgMask.updatePixels();
}

function setup() {
    createCanvas(xSize, ySize);
    imgMask.background(0, 0, 0, 0);
    imgMask.noStroke();
    for (let i = 100; i >= 0; i--) {
        imgMask.fill(25, 255, 255, (255 * i) / 1000);
        imgMask.ellipse(
            imgMask.width / 2,
            imgMask.height / 2,
            imgMask.width - i,
            imgMask.height - i
        );
    }
    img.mask(imgMask);
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            imgMask.set(i, j, color(10, 10, 10));
        }
    }
    imageMode(CENTER);
    background(0);
    image(img, width / 2, height / 2);
    //blendMode(LIGHTEST);
}

function draw() {
    imgBuffer = get();
    let imgTemp = get();
    imageMode(CENTER);
    push();
    translate(0, 100);
    rotate(0.3);
    //rect(xSize/10, ySize/10, xSize*0.8, ySize*0.8);
    /*imgTemp.blend(
    imgMask,
    0,
    0,
    xSize,
    ySize,
    0,
    0,
    xSize,
    ySize,
    SOFT_LIGHT
    );*/

    imgTemp.blend(
        imgBuffer,
        0,
        0,
        xSize,
        ySize,
        0,
        0,
        xSize * 0.85,
        ySize * 0.85,
        ADD
    );
    image(imgTemp, xSize / 2, ySize / 4, xSize * 0.8, ySize * 0.8);
    pop();
    push();
    translate(100, 100);
    rotate(-0.95);
    //rect(xSize/10, ySize/10, xSize*0.8, ySize*0.8);
    imgTemp.blend(
        imgBuffer,
        0,
        0,
        xSize,
        ySize,
        0,
        0,
        xSize * 0.80,
        ySize * 0.80,
        ADD
    );
    image(imgTemp, xSize / 2, ySize / 2, xSize * 0.5, ySize * 0.5);
    pop();
//image(img, mouseX, mouseY);
}