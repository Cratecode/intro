// This is a function that counts from 1 to num.
// For example, if num is 5, then it will return
// 1 + 2 + 3 + 4 + 5 = 15.
// Instead of using a loop, it uses recursion.
function countRecursive(num) {
    // This is called a base case. We'll see what that means later,
    // but if you removed this (try it!), the function would call itself forever
    // and crash.
    if (num === 0) return 0;

    // This is where the recursion comes into play.
    // Notice that, each time this function runs, num is one smaller.
    // Eventually, it will hit 0, and because of that if statement above,
    // the function will stop calling itself.
    return num + countRecursive(num - 1);
}

// Let's break down how this works. Imagine we're trying to find
// countRecursive(3).
// The computer will evaluate it like this:
// countRecursive(3) = 3 + countRecursive(3 - 1) = 3 + (2 + countRecursive(2 - 1)) = 3 + (2 + (1 + countRecursive(1 - 1)))
// = 3 + 2 + 1 + 0 = 6.

// Keep in mind that if you wanted to write this function in the real-world, you
// probably wouldn't want to use recursion.
// That's because there are easier and faster ways to do the same thing.
// Consider: a for loop.
function countFor(num) {
    let counter = 0;

    for (let i = 0; i <= num; i++) {
        counter += i;
    }

    return counter;
}

// Recursion is pretty slow (we'll prove it in a bit), so it's good to look for other ways to do this.
// It's also worth noting that, for this problem, there's an even simpler (and faster) way to write it: math.
function countMath(num) {
    // https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
    return (num * (num + 1)) / 2;
}

// Let's give these functions a try!
console.log(countRecursive(1000));
console.log(countFor(1000));
console.log(countMath(1000));
