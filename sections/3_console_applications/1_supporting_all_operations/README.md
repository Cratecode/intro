# Supporting All Operations

Now that we've gotten a calculator that can take in any numbers that we choose, let's try making it accept different operations. Taking in user input changes the behavior of our program, but it still does basically the same thing: it adds two numbers together. We're not limited to just that, though. We can make our program do entirely different things based on what the user enters (for example, we can add if the user enters a plus sign and subtract if a user enters a negative sign). To do this, we'll use if statements.

If statements are basically a way to run certain parts of our code based on some condition. For example, if we want to make our program do something different based on whether the user enters a plus sign or a minus sign, we can use if statements. Here's a little example of them:

```js
if (CONDITION) {
    CODE;
}
```

Conditions can be pretty complex, but to keep things simply, we'll start off with comparisons. With comparisons, we can compare some value to another (like checking if a variable is equal to one, for example). Here's an example of it:

```js
// Comparisons follow the format "VALUE1 OPERATOR VALUE2".
// They work a lot like math equations.
if (a === 1) {
    console.log("BIG A");
}
```

Here's a little list of all the comparison operators that you can use:

-   `===` - equals operator to check if two things are the same.
-   `!==` - not equals operator to check if two things are different.
-   `>` - greater than operator.
-   `<` - less than operator.
-   `>=` - greater than or equal to operator.
-   `<=` - less than or equal to operator.

You can use any of the operations in your if statements, but we're dealing with symbols, so try sticking with the equals operator for now.

---

Before we can continue, we also need to take a look at elses and else ifs. If statements let us run code under certain conditions, and else statements let us run code if our if statement didn't run. Here's a little example:

```js
const a = 0;

if (a === 0) {
    // A is zero, so this runs and nothing else does.
    console.log("Condition 1");
} else if (a === 1) {
    console.log("Condition 2");
} else if (a === 2) {
    console.log("Condition 3");
} else {
    console.log("Invalid A");
}
```

In this example, we'll see `Condition 1` in our console. If we set `a` to 1, then we'd see `Condition 2`, and if we set it to 15, then we'd see `Invalid A`. These statements can be chained together, but they need to always look like:

-   An if statement.
-   Zero or more else if statements.
-   Zero or one else statements.

For our calculator, you can use these to check which operation the user entered, and run certain code based on that operation. Try adding support for `+`, `-`, `*`, and `/`, and if you want, try making a little error message if the user entered an invalid operation. Good luck!
