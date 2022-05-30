# Making Things Stop
In our last (p5.js) lesson, we made our object go down to the bottom of the screen. That's pretty cool, but the object also goes right outside of the screen. What if we wanted to make it stop as soon as it hit the bottom, or loop back around, or really, anything else? Let's take a look at if statements!

The basic idea behind if statements is that they let you choose if you want to run some piece of code or not. That means that we can choose to run the code that moves the object down, but only when it's not already at the bottom.

If statements look like this:
```js
if (CONDITION) {
    CODE;
}
```

Conditions can be pretty complex, but to keep things simply, we'll start off with comparisons. With comparisons, we can compare some value to another (like checking if a variable is equal to one, for example). Here's an example of it:
```js
// Comparisons follow the format "VALUE1 OPERATOR VALUE2".
// They work a lot like math equations.
if(a > 1) {
    console.log("BIG A");
}
```

Here's a little list of all of the comparison operators that you can use:
* `===` - equals operator to check if two things are the same.
* `!==` - not equals operator to check if two things are different.
* `>` - greater than operator.
* `<` - less than operator.
* `>=` - greater than or equal to operator.
* `<=` - less than or equal to operator.

You can use all of these operators in your if statements, but right now, try making one that can check if the y position is inside of the screen, and if it is, add (remember, the y position increases when you go down, and you can find the height of the screen in the setup function).

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)