function setup() {
    createCanvas(400, 400);
}

let y = 75;

function draw() {
    background(100);

    // Draw our shape.
    const x = 50;
    const width = 100;
    const height = 80;

    rect(x, y, width, height);
    rect(x - width / 4, y - height / 4, width / 2, height / 2);
    rect(x + (3 * width) / 4, y - height / 4, width / 2, height / 2);
    rect(x - width / 4, y + (3 * height) / 4, width / 2, height / 2);
    rect(x + (3 * width) / 4, y + (3 * height) / 4, width / 2, height / 2);

    // Move down. This should be changed to use an if statement.
    y = y - 1;
}
