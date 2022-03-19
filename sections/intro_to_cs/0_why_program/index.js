// Here's a basic calculator app. Of course, you can type the same thing into google and get the same result,
// but let's forget about that for a moment.

// This is our input. It's stored in a variable called input,
// which means instead of typing "5+6" everywhere, we can type
// input instead.
const input = "5+6";

// The first thing we want to do is get the 5 and the 6. In order
// to do that, we'll use Javascript's split method, which essentially
// creates a list based on a split string. For example,
// "hello_world_message_here".split("_") -> ["hello", "world", "message", "here"].
const splits = input.split("+");

// You don't need to understand this right now, but to get
// the first item in the list (our "hello" above), we need
// to use [0]. For the second, we'll use [1].
const first = splits[0];
const second = splits[1];

// Now, we have everything, but because our input above is
// text, our first and second are actually being stored
// as text (called strings) instead of numbers. This
// is a problem because we can't add or subtract text.

// To turn it into a number, we'll use parseInt().
const firstNum = parseInt(first);
const secondNum = parseInt(second);

// Now that that's done, we can add them together.
// In Javascript, all we have to do is use the "+" operator.
const output = firstNum + secondNum;

// Finally, let's output it.
console.log(output);