# Basic concepts

Before we get into how to write a program, we first need to go over basic concepts in programming. Everything covered here will get more detail later, but this will give you a general idea of what a program consists of.

## Structure

First, let's talk about how a program is structured. **A program is read line-by-line, executing whatever the line says to do and moving on to the next.**

### Methods

**Programs are made up of methods (or functions)**, which are essentially **groups of lines of code.** If I wanted to do the same thing twice, I could copy and paste all of my lines, or **I could move everything into a method and run it twice.** Here's a visual example using pseudocode (code that's meant to be read by humans, not computers):

```js
print "Hello world"
print "Other message"
```

This code will print out "Hello world" on one line, then "Other message" on the next. If we want to do it more, we could copy the lines, but that's tedious and ends up with a lot of duplicate code. Instead, we can use methods.

```js
hello() {
    print "Hello world"
    print "Other message"
}

hello()
hello()
hello()
hello()
```

This code will send the hello world message four times. Check out `index.js` for real-code examples.

Another use of methods is that many **methods are built-in by the language.** This means that, for example, **instead of writing your own code for reading files, you can instead call the built-in file read method and spare yourself the extra work.** One such method that you might notice in the examples is `console.log()`, which prints whatever you put in between the parentheses. For example, if I ran `console.log("message")`, then `message` would be printed to the console.

### Comments

Comments are another integral part of code. Comments are small pieces of text meant to be read by people, in order to tell them what exactly the code is doing, and why it's doing that. Comments usually start with `//`. If something might seem unclear, comment it!

A good example of a comment might look something like this:
```js
// A is a string, so we need to convert it to a number before we can do math on it.
const aNum = Number(a)
```
This comment **explains why we're doing something**, because it might be unclear to anyone reading it (or us in the future).

An example of a bad comment might look something like this:
```js
// Add 1 to x.
x = x + 1
```
This comment is bad because it **doesn't add anything to our insights about the code.** The code itself says "add 1 to x", so **putting a comment that says the same thing is useless.**

## Constants

A constant is essentially an alias (or new name) for a value. **Programs are possible without constants, but they make some values easy to change** (if you use a number 500 times in your code, it's a lot easier to change the value of a single constant that it is to change every use of the number) and **split up code into easier-to-read segments.** Here's an example of a constant:

```js
const a = "I'm a constant"

print a
print a
```

This code will print `I'm a constant` twice. We can also use constants like this:

```js
const calculation1 = 1 + 2 + 3 + 4 + 5 + 6
const calculation2 = 5 + 2 * calculation1

print calculation2
```

This code will print `47`. Using constants this way can help us keep our lines shorter, in order to make a program more readable.

\*_Technically, constants are also variables, and they are similar in many ways, but they have different uses._

## Variables

Variables are a **super important concept for programming, and are used pretty much everywhere.** Essentially, a variable is **a place to store a value.** Variables can be changed, which will become super important in a few sections! Here's an example of a variable in action:

```
var variable = "text 1"
print variable

variable = variable + " and this text"
print variable
```

This code will print `text 1`, followed by `text 1 and this text`.

## I/O

**The goal of a program is to do something.** I/O stands for input/output, with input being something that changes what the program does (for example, a program that deletes a file might take a file name to delete as input), and output being what effect the program has (such as printing to the console, writing to a file, etc.). I/O is what makes a program useful. **If a program has no input, it can be used, but it will always do the same thing.** On the other hand, **a program with no output might do something, but after it runs, nothing will have actually changed.**

Because of this, programs must, at the very least, have output, but having input is also very useful.
