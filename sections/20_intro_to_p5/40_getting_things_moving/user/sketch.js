function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);

    // We should make one of these constants a variable, then change it each time
    // this function is ran in order to get a little animation. Also, keep in mind
    // the block-scope example when doing this.
    const x = 50;
    const y = 75;
    const width = 100;
    const height = 80;

    rect(x, y, width, height);
    rect(x - width / 4, y - height / 4, width / 2, height / 2);
    rect(x + (3 * width) / 4, y - height / 4, width / 2, height / 2);
    rect(x - width / 4, y + (3 * height) / 4, width / 2, height / 2);
    rect(x + (3 * width) / 4, y + (3 * height) / 4, width / 2, height / 2);
}
