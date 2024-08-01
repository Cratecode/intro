# Palindromes

A palindrome is a word or phrase that is the same forwards and backwards.
For example, "racecar" is a palindrome, but "hello" is not.
In the previous lesson, we saw how we can use arrays to make our program go through lists.
In this program, we'll want to take in a word (or sentence) and figure out if its reverse is the same as the original.
If you get stuck here, try doing Reverse Word Splitter.

One big difference with this lesson is we're just going to write the palindrome checker code.
I've included a stub method (a function with its name and arguments defined but no actual code)
for you to put your code into.
Make sure you don't change the method name.

Along with this, I'd like to get us started writing JSDoc comments.
These are a great way to document your code, and they make it easier for others to understand what your code is doing.
They work by prefixing functions and let you tell others what the method does and what it takes in.
Here's an example:

```js
/**
 * Checks if a word is a palindrome.
 * @param word {string} - is the word to check.
 */
function isPalindrome(word) {
    // Your code here
}
```

Right now, they aren't all that useful,
but when you deal with larger projects,
they'll be incredibly useful to help you understand what's going on and how things fit together.
They're also essential when you're working on code that other people will see
(which hopefully is something that you'll be doing a lot of).
Also, if you hover your mouse over a method with JSDoc comments, it will show up there,
which is super helpful if you don't know what exactly a method does (or what arguments it takes in).

This lesson is also different from the previous lessons because in this one, we'll really need to think about how to solve the problem. Because of that, I'll give you a few hints:

-   Take a look at what happens when you run `.split("")` on a string.
-   You can use the `.reverse` function to reverse an array. It's a bit strange, so I'd recommend you use it like `.split(...).reverse()` and not `array.reverse()`. We'll talk about this later, but it's because `array.reverse()` will modify `array` and make it reversed. This means that after you run `array.reverse()`, `array` will also be in reverse. You can also do it the same way as we did in Reverse Word Splitter.
-   You might want to keep a count of all the letters which are the same in both arrays. If this number is the length of the array, then every letter is the same in both arrays and so it's a palindrome.
-   You'll need to use a `for` loop to go through the arrays. You will only need one for loop, although you'll want to go access both arrays inside it.

Also, keep in mind that checking if two arrays are equal won't work the way that you expect. `[1, 2, 3] === [1, 2, 3]` is actually `false`! This is because these are two separate lists. Imagine if you took out two sheets of paper and wrote the same thing on both. Sure, their contents are the same, but they're still two different sheets of paper. In the example above, there are two different arrays with the same content, and they aren't equal because they're two different arrays. That being said, this will be `true`:

```js
let a = [1, 2, 3];
let b = a;
a === b; // true
```

This is because when we set `b` to `a`, we don't copy anything or make a new array, so `a` and `b` hold the same array. This also means if we add an element (item) to `a`, it will also appear on `b`.

Try completing the `isPalindrome` method so that it returns `true` if the word is a palindrome, and `false` otherwise. Good luck!
