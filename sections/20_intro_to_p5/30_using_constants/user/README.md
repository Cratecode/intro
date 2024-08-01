# Using Constants

What we just made works, but it isn't very flexible.
Let's say that we wanted to move around the object or scale it up or down.
We'd have to redo all of our calculations by hand, which is a pretty silly thing to do when we're using a computer.
Luckily, there's a pretty easy way to fix this: constants.

The basic idea behind a constant is we have a "placeholder" for a number,
and we use the placeholder everywhere that the number would normally go.
When we change the value of the placeholder, everything that uses it changes automatically!
Here's a little example:

```js
// Here's our complicated calculation:
console.log((100 * (5 + 100)) / 2);

// We should probably put it into a calculator to make it simpler:
console.log(5250);

// But what do we do if we want to change 100 to something else?
// With how we're doing it, we'll need to use our calculator again.
// That's pretty time consuming if we're going to do this a lot.
// Instead, we can use a constant!

// Here's our constant. Constants are defined like "const NAME = VALUE;".
const num = 100;

// Now, we'll use the constant in a complicated expression.
// Instead of us having to stick this into a calulator each time
// we want to change the number, we'll let the computer do it for us.
console.log((num * (5 + num)) / 2);

// Now all we need to do to change it is update the value of our constant!
```

Constants can be super useful.
If we're trying to figure out which number to use for something, they can make trying out new options a breeze!
They can also help us assign a name to a number
(which makes our code easier to read and maintain) and allow us to update it all in one place
(you'll see an example of this here).

We can apply this to our object to make it easier to use.
I've separated out the object's values into their expressions.
All you have to do is replace them with constants.
Try playing around with the values of your new constants and see how the object moves with them.
Good luck!

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)
