# Palindromes

A palindrome is a word or phrase that is the same forwards and backwards. For example, "racecar" is a palindrome, but "hello" is not. In the previous lesson, we saw how we can use arrays to make our program go through lists. In this program, we'll want to take in a word (or sentence), and figure out if its reverse is the same as the original.

One big difference with this lesson is we're just going to write the palindrome checker code. I've included a stub method for you to put your code into. Make sure you don't change the method name.

Along with this, I'd like to get us started writing JSDoc comments. These are a great way to document your code, and they make it easier for others to understand what your code is doing. They work by prefixing functions, and let you tell others what the method does and what it takes in. Here's an example:

```js
/**
 * Checks if a word is a palindrome.
 * @param word {string} - is the word to check.
 */
function isPalindrome(word) {
    // Your code here
}
```

Right now they aren't all that useful, but when you deal with larger projects they'll be incredibly useful to help you understand what's going on and how things fit together, not to mention that they're essential when you're working on code that other people will see (which hopefully is something that you'll be doing a lot of).

This lesson is also different from the previous lessons because in this one, we'll really need to think about how to solve the problem. Because of that, I'll give you a few hints:

-   You can use the `.reverse` function to reverse an array. It's a bit weird, so I'd recommend you use it like `.split(...).reverse()` and not `array.reverse()` (we'll talk about this later).
-   You might want to keep a count of all of the letters which are the same in both arrays. If this number is the length of the array, then every letter is the same in both arrays and so it's a palindrome.
-   You'll need to use a `for` loop to go through the arrays. You will only need one for loop, although you'll want to go access both arrays inside of it.

Try completing the `isPalindrome` method so that it returns `true` if the word is a palindrome, and `false` otherwise. Good luck!
