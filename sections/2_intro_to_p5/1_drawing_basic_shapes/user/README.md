# Drawing Basic Shapes

Before we get started, let's get familiar with the basics of p5.js. When we want to do something with p5, we start with a `setup()` function which has some info about the canvas (also called a sketch or an image). This function is called at the start of our program. After that, the `draw()` function is called each frame (think of a still image from a movie) and changes the canvas.

Here was our example before:

```js
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    ellipse(mouseX, mouseY, 50, 50);
}
```

We start by creating a canvas with the width and height of 400. Then, each time the draw function is called, we clear the canvas (set it to one color) and draw a circle at the mouse's position. You'll probably have a similar setup function to the one above in most of your sketches, but the draw function is the one where most of the magic happens.

The background function can take in a color as an argument. The color can be a lot of things. Here are some of the most common ones:

```js
background(100); // grayscale color.
background(255, 100, 50); // RGB color, which mixes different amounts (0 to 255) of red, green, and blue together to create a color. For example, the color red is (255, 0, 0), and the color green is (0, 255, 0).
background("red"); // named color.
background("#12ef12"); // hex color, a more compact way to write an RGB color.
```

The ellipse function is used to draw an ellipse (a circle is just an ellipse with the same width and height). The first two arguments are the x and y position for the ellipse, and the third and fourth are the width and height. Try experimenting with these functions and see what you can make!

Finally, here's a quick reference for some of the basics of p5.js. Remember, programming is about solving problems (not memorization), and you're expected to use a resource like this. This will be included in each p5.js lesson:
[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/).
