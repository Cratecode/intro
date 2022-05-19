function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);

    // This looks like a sweet spot to put a constant.

    // Here's our big rectangle.
    rect(50, 75, 100, 80);

    // Here are the smaller ones.
    //
    // Keep in mind that not all numbers need to be constants.
    // You should only make the x, y, width, and height constants.
    // Everything else (2, 3, 4) are numbers that manipulate them and can
    // stay as-is.
    rect(50 - 100 / 4, 75 - 80 / 4, 100 / 2, 80 / 2);
    rect(50 + (3 * 100) / 4, 75 - 80 / 4, 100 / 2, 80 / 2);
    rect(50 - 100 / 4, 75 + (3 * 80) / 4, 100 / 2, 80 / 2);
    rect(50 + (3 * 100) / 4, 75 + (3 * 80) / 4, 100 / 2, 80 / 2);
}