# Data types

In programming, we have the concept of a data type. When we think about things in our head like sentences and numbers, we imagine them in fundamentally different ways. For example, a sentence can't be multiplied by 100, and a number can't be made up of different words.

In programming, we also have this distinction between different things. There are many data types, but here we'll look at the most fundamental.

## Numbers

Numbers are, well, numbers. They can be added to, subtracted from, multiplied, and divided. If I have a program that runs `1 + 2`, it will give me `3`. In Javascript, numbers are written as numbers—`1` is a number, and so is `57.87`, and even `-95.01`, but there are some important rules for how numbers work (in Javascript). One important thing to keep in mind is that numbers cannot contain commas, so `1,000,000` isn't a valid number (however, you can use `_`, so `1_000_000` is the same as `1000000`). Finally, number literals (a literal is a number written in our code, so `10` is a literal, while `(10)` and `a` (where `a` is `const a = 9;`) are not) cannot have functions ran directly on them. We'll get into this more later, but keep in mind that `10.toString()` is not valid, while `(10).toString()` is.

## Strings

Strings are essentially text. They're made up of anything and can hold any number of characters (letters, numbers, or symbols). In fact, this document is being stored as a string.

Strings are defined using either a `"`, `'`, or `` ` ``. For example, I can write a string as `"Hello world!"`, `'Hello world!'`, or `` `Hello world!` ``. As a rule of thumb, don't include the enclosing character (`"`, `'`, or `` ` ``) inside of the string itself (so `'Don't do this'` is invalid). We'll get into ways to get around this in a bit though.

## Booleans

Booleans essentially store yes or no. You can create a boolean using either `true` (yes) or `false` (no). Right now, booleans won't be all that useful, but later on they'll become extremely important.

# Conversions

In many cases, we'll need to convert between the data types listed above. For example, if I have some user input, it'll be a string, because the user can type any text value on their keyboard. However, if I want it to be a number (maybe I want to divide it by 20), I'll need to convert it from a string to a number.

## Anything -> String

Almost anything can be converted to a string using the `toString()` method. For example, if I wanted to convert `42` to a string, I could use `(42).toString()` (note that `42` is in parentheses because certain types, including number, need parentheses around them to have methods called on them).

## String -> Number

To convert a string to a number, we can use the `Number()` methods. Check out the code example to see the difference more highlighted.
