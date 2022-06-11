# Using Constants

What we just made works, but it isn't very flexible. Let's say that we wanted to move around the object, or scale it up or down. We'd have to re do all of our calculations by hand, which is a pretty silly thing to do when we're using a computer. Luckily, there's a pretty easy way to fix this: constants.

The basic idea behind a constant is we have a "placeholder" for a number, and we use the placeholder everywhere that the number would normally go. When we change the value of the placeholder, everything that uses it changes automatically! Here's a little example:

```js
// Here's our constant. Constants are defined like "const NAME = VALUE;".
const num = 10;

// Now, we'll use the constant in a complicated expression.
// Instead of us having to stick this into a calulator each time
// we want to change the number, we'll let the computer do it for us.
console.log("First calculation:", 1 + num / 10 + (11 / 5) * num + num);
console.log("Second calculation:", (85 / num) * 17 + num - 6);
```

We can apply this to our object to make it easier to use. I've separated out the object's values into their expressions. All you have to do is replace them with constants. Try playing around with the values of your new constants and see how the object moves with them. Good luck!

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)
