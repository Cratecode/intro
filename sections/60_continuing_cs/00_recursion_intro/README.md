# Recursion

Recursion is a way of structuring your code that can be incredibly useful, but only in specific circumstances.
Recursion is when a function calls itself. For computers, there's no difference between a recursive and a non-recursive
function, but it's important to understand the difference so that you can know when and how to use them.

There are a few ways to think about recursion, and it's a tricky topic, so we'll cover a couple of them.
We're going to take a look at different examples of recursion, and it's important to understand that not all of these are
good uses of recursion. We'll talk about when you should use recursion (and when you shouldn't), but it's a good idea
to think about ways to solve a problem without using recursion before reaching for it.

## A Function Calling Itself

The easiest way to think about recursion is that it's when a function calls itself. As we'll see later, there's a bit
more to it than that, but it's a good starting point.

[Click here to take a look at an example of this](./counting.js).

---

Let's take a look at a similar example. [Click here to see how we can use recursion to calculate Fibonacci Numbers](./fibonacci.js).

---

Seeing these examples, you might think that recursion is useless. Fear not!
We'll take a look at some of the real-world use-cases for recursion later.
Now that you understand the basics of what recursion is (and why it isn't always the best), let's get a bit more complicated!

## "Calling Upwards"

Normally when you write code, your functions "call downwards":
![A graph of functions only pointing downwards](https://raw.githubusercontent.com/Cratecode/intro/eba39b4607ea1d3872c782c00f92756a9e933d9f/images/Recursion-Call-Down.svg)
```js
function main() {
    readData();
}

function readData() {
    // ...
    setup();
}

function setup() {
    setupServer();
    setupDatabase();
}

function setupServer() {
    // ...
}

function setupDatabase() {
    // ...
}
```

The idea of "calling downwards" is a little bit abstract, so let's see something that doesn't "call downwards":
![A graph of functions with a loop between some of the functions](https://raw.githubusercontent.com/Cratecode/intro/eba39b4607ea1d3872c782c00f92756a9e933d9f/images/Recursion-Call-Up.svg)
```js
function main() {
    readData();
}

function readData() {
    // ...
    setup();
}

function setup() {
    setupServer();
    setupDatabase();
}

function setupServer() {
    // ...
    readData();
    // ...
}

function setupDatabase() {
    // ...
}
```

The only thing that's changed is that the `setupServer` function can call `readData`, but this has made the program immensely more
complicated. The reason for this is that `readData` can cause itself to be called again. If it calls `readData`, then
`readData` will call `setup`, which will call `setupServer`.

This is a bit more complicated than a function calling itself, but it still is recursion, just with a bit more complexity.
This type of recursion is one that you will actually see in the real-world. It's immensely helpful when representing complicated states
and behaviors. For example, if you wanted to write a program that takes in a math expression (`5 * 2 + 1`) and computes it,
you might end up needing to use this sort of recursion.

Unlike with our examples above (counting and fibonacci), this type of recursion usually isn't inefficient.
Getting to the bottom of what makes things fast is a little bit complicated, but in programs which use this type of
recursion, they're already doing so many different things that a bit of recursion won't cause any issues.
Additionally, they don't recurse that much, unlike some of our examples (like Fibonacci, which recursed trillions of times).

Usually you only want to use recursion in a select few cases:
* Your problem is much more complicated without recursion (i.e. there isn't a better way).
* You don't recurse many times.
* You're dealing with a type of problem where recursion is the best way to do it (we'll see an example of this later).

## Trees ("the most significant use-case")

Now that we've seen what recursion is and what its limits are, I want to introduce one of the most important places where
recursion is used: trees.

Trees are really similar to what we just talked about above. They're a way of organizing data so that things
point to other things, and they only point downwards. Sound familiar?

![A graph of functions only pointing downwards](https://raw.githubusercontent.com/Cratecode/intro/eba39b4607ea1d3872c782c00f92756a9e933d9f/images/Recursion-Call-Down.svg)

That first example we looked at is actually a tree. As soon as there start being loops though, it's no longer a tree.

So, our non-recursive function example is a tree, and our recursive example isn't. Even without any code or algorithms, trees
and recursion are connected!

But, let's take a look at some code. Imagine that you wanted to write a program to print out every item in the tree.

```js
function printTree(tree) {
    // ...
}
```

We can start by going through every "node" at the top of the tree.
```js
function printTree(tree) {
    for (const node of tree) {
        // ... do something
    }
}
```

The point of the program is to print out the names of the nodes, so let's do that:
```js
function printTree(tree) {
    for (const node of tree) {
        console.log(node.name);
    }
}
```

This program will work, but it's still missing something. If we gave it our tree from above, it would only print out
`main`. That's because we're only asking it to print out nodes at the top of the tree.

A neat thing about trees is that we can can split them up into pieces. Now that we've printed `main`, let's chop it off!

![The same graph as above with the top node removed](https://raw.githubusercontent.com/Cratecode/intro/eba39b4607ea1d3872c782c00f92756a9e933d9f/images/Recursion-Call-Down-No-Main.svg)

Now, if we stick this into our function, it'll print out `readData`. As it turns out, this is exactly what we need to
do to solve the problem. This chopping off and re-running the function can all be written in code, and we'll use recursion
to do it!
```js
function printTree(tree) {
    for (const node of tree) {
        console.log(node.name);
        printTree(node);
    }
    
    // The reason there's no base case here is that, when we get to a node
    // with nothing under it, the for loop won't run, so the function won't
    // call itself again.
    // You don't always need a base case!
}
```

That's it! Our function will now print every item in the tree out, all on its own. This is all a bit abstract, so
[click here to try out a real-world example with trees and recursion](./files.js).

Here are some hints if you get stuck (click to reveal):
* ||LOCATION 1: You can think about a file as being your base case. There's no need to recurse further when you hit a file, just print it out.||
* ||LOCATION 2: Take a look at the code above. The problem you're working on is a bit more complicated, but the recursive part is exactly the same.||
* ||LOCATION 1: `console.log(fileName + ": " + fileData);`||
* ||LOCATION 2: `printFilesInFolder(fileData);`||

Good luck!