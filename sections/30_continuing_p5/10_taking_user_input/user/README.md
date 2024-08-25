# Taking User Input

Throughout our look at drawing with code, we've been making little animations,
but many more possibilities open up when we allow the user (you) to control the program while it's running.
We can make games, interactive art, or any number of other things that work with user input.

User input can be a lot of things, but for the most part, it's about the keyboard and mouse.
To start things off, we'll only be taking input from the keyboard.
That means we'll be doing things based on input from the user.

To start taking input, we first need to make a new function, just like `setup()` and `draw()`.
It looks like `keyPressed()`, and, like the name implies, is run whenever a key on the keyboard is pressed.
Inside the function, we can use the variable `key`, which is a string indicating which key was pressed
(for example, if I pressed the `w` key, it would be set to `"w"`).
Here's an example of it in action:

```js
function keyPressed() {
    if (key === "a") {
        // Do something.
    }
}
```

This works great if you want to have an action that runs whenever a user presses a button,
like shooting a weapon or opening a chest.
It won't work very well for something like walking around, though,
because you'll have to press the movement key a hundred times.
That's because this only runs when a key gets pressed, not while it's held.
Luckily, there's a solution!

If you want something to happen while a key is pressed down
(for example, constantly moving to the right while the D key is pressed),
you can do it in the draw function.
Just like with the `keyPressed` function,
we can use the `key` variable to figure out which key is currently being held down.
Alternatively, you can use the `keyCode` variable to handle keys that aren't used to type characters,
like the backspace or the arrow keys.
Instead of giving you a string representing the key that's pressed (like the `key` variable does), it gives a number.
Other than that, both variables work exactly the same, they just give you two different ways to access the same data.
You can find an example with a list of key codes [here](https://p5js.org/reference/p5/keyCode).

If you're up for a challenge, you can use `keyCode` with the `keyIsDown` function.
Note that this is a function that we're using, not creating ourselves, unlike the `draw` and `keyPressed` functions.
You can use it to check if multiple keys are pressed at the same time.
For example, if you want to let a user press down the "move forward"
and "jump" buttons at the same time, you can use it here.
The following code is almost equivalent, except the second example can handle multiple keys.
The first can't because variables (like `keyCode`) can only have a single value, so they can't store two keys at once.

```js
function draw() {
    // ...
    
    // This is the key code for the space button.
    // You can find others at https://keycode.info
    // It might be useful to put 32 into a constant,
    // so we can write keyCode === SPACE.
    if(keyCode === 32) {
        // Handle jump
    }
}
```

```js
function draw() {
    // ...
    
    // Check if the space is pressed.
    // keyIsDown is a function returning a boolean (true or false).
    // It will be true if the key is currently being pressed.
    // If statements just take in a boolean and run the code inside
    // them if that boolean is true, so we can put all sorts of things
    // inside them, not just comparisons.
    // When the key is pressed (so keyIsDown returns true), the code
    // inside the if statement will run.
    // Otherwise, it won't.
    if(keyIsDown(32)) {
        // Handle jump
    }
    
    // The if statements for whatever keys we're holding
    // down will run.
    // So, if we held space and right arrow, then the code
    // inside both these if statements would run.
    // If we only held right arrow, then just this if statement's
    // code would run.
    if(keyIsDown(RIGHT_ARROW)) {
        // Move right
    }
}
```

You can find more info about this function [here](https://p5js.org/reference/p5/keyIsDown).

Try making an object move when a user presses the WASD or arrow keys on their keyboard.
Remember, for arrow keys you need to use `keyCode`.
You can use a more complicated object like the ones in previous lessons, but it isn't necessary.
Good luck!

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)
