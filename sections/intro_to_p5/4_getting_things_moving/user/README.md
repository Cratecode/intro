# Getting Things Moving
Constants are great. They help us simplify our code, and let us change things with ease. If we want to move things around, all we need to do change the value of the constant. But what if we want the computer to move it around on its own?

In addition to constants, we have variables. They're super similar to constants, but we can change their value. Here's a little example:
```js
// We declare a variable just like a constant, but we use "let" instead of "const".
let num = 1;
console.log(num); // 1

// We can change the value of a variable with "NAME = VALUE;".
// The variable must already have been declared though. If we
// did "num1 = 2;", we'd get an error because num1 doesn't exist.
num = 2;
console.log(num); // 2

// We can even change a variable value using the variable itself. For example,
// we can add one to a variable like this. This uses the current value of num (2),
// adds 1 to it to get 3, then sets num to 3.
num = num + 1;
console.log(num) // 3
```
If we want to move our object down, we should probably have a position variable (specifically, the y position) and add one to it each time we draw the object.

One thing you should be careful of is "block-scoping", where variables only live inside of their brackets. Here's a little example:
```js
function doSomething() {
    let counter = 0;

    counter = counter + 1;
    console.log(counter);
}

doSomething(); // 1
doSomething(); // 1
```

The `doSomething()` function will always log `1` no matter how many times it's ran. This is because our counter only lives inside of the brackets, and doesn't keep it's value after multiple runs of the function. This is useful in some cases, but not so much for our counter. Luckily, there's an easy fix: move the variable outside of the brackets:
```js
let counter = 0;

function doSomething() {
    counter = counter + 1;
    console.log(counter);
}

doSomething(); // 1
doSomething(); // 2
```
Even though the counter is still added to inside of the brackets, the variable itself lives outside of them and keeps its value across multiple runs of the function. Because of that, our counter works! If your object doesn't move, make sure your position variable lives outside of the draw function.

Right now, I've included a version of the object using constants. Choose one (or multiple) of these to change into variables and make them "animated" in some way. I've given the example of moving the object downwards, but you should try changing some other values (moving it side-to-side, moving it diagonally, stretching and shrinking it, etc). Good luck!

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)