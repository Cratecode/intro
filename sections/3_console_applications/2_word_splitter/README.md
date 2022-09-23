# Word Splitter

When we're writing programs, there are situations where we might want to run a piece of code many times. For example, we're going to take a look at going through a sentence and printing out each word individually.

The first main concept we need to take a look at are arrays. Arrays are lists. For example, I could have the list of numbers 1, 2, and 3, and I would be able to interact with it through my program. Here's how that might look:

```js
const numbers = [1, 2, 3];

console.log(numbers[0]); // 1
```

The most tricky thing to wrap your head around is that arrays are zero-based. This means that we use zero to access the first element, one to access the second, and so on.

Arrays have some built-in methods that we can use to interact with them. For example, we can use the `.length` method to get the length of an array:

```js
console.log(numbers.length); // 3
```

---

Now that we know how to do some basic operations on arrays, let's look at how to go through them. We use something called a `for` loop. A for loop lets us do some pretty complex things, but for right now, we're going to use it to go from zero (remember, that's the first item in the array) to the length of the array minus one (that's the last item in the array). Here's an example:

```js
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/*
 * 1
 * 2
 * 3
 */
```
(`i++` means add 1 to `i`, we can also do `i--` to subtract 1 from i, `i+=2` to add 2 to i, or `i-=2` to subtract 2 from i)

The last thing we're going to look at is the `split` method. This method lets us take a string (a piece of text) and split it up into different parts based on a separator. For example, if I wanted to split up the string "hello world" into an array of "hello" and "world", I could do this:

```js
"hello world".split(" "); // ["hello", "world"]
```

I'd like you to try to apply this new info to a little project. This is a bit to take in, so I'd recommend you take a look over what we've just learned and try messing around with it. Then, try making a piece of code which prints out each word in a sentence. Good luck!
