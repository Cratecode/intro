// Another common example of recursion is with the Fibonacci numbers.
// If you aren't familiar, the Fibonacci numbers are a list of numbers that looks like:
// 1, 1, 2, 3, 5, 8, 13, ...
//
// To figure out the next number in the list, all you have to do is add the previous two.
// For example, if we want to find the next number, we just need to add 8 + 13 = 21.
function fibonacciRecursive(num) {
    // The first and second (index 0 and 1) are both 1, so we don't
    // need to do any computation.
    // This is our base case, and like before, prevents the function from
    // calling itself forever (see what happens if you modify it!).
    if (num === 0 || num === 1) {
        return 1;
    }

    // And then, to get the next number in the sequence, just add the last two!
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

// This feels a bit like magic, but let's take a moment to think over how the function works.
// fibonacciRecursive(3) = fibonacciRecursive(3 - 1) + fibonacciRecursive(3 - 2)
//                       = (fibonacciRecursive(2 - 1) + fibonacciRecursive(2 - 2)) + fibonacciRecursive(1)
//                       = (1 + 1) + 1
//                       = 3
//
// It turns out that, if you do this with any number, the computer adds ones together a bunch of times
// to get the right result.
// If you're finding this difficult to wrap your head around, try the function out with different numbers,
// and see how it's able to compute it.
//
// Unfortunately, just like before, this is super slow.
// If we tried to calculate the 100th Fibonacci number, we'd run into some problems.
// That's because that number is 354224848179261915075.
// That's a crazy number, but nothing a computer can't handle.
//
// The problem here is that the function adds ones together to get to the number.
// So, it'll calculate the number like:
// 1 + 1 + 1 + 1 + 1 + ...
// |_____________________|
//            |
// With 354224848179261915075 ones in the calculation.
// Computers are powerful, but not that powerful.

// Luckily, we can solve it a different way: like before, with a for loop!
function fibonacciFor(num) {
    // Even though there's no recursion, we'll still use this
    // if statement because it makes the code much easier to write.
    if (num === 0 || num === 1) {
        return 1;
    }

    let firstNumber = 1;
    let secondNumber = 1;
    // This algorithm starts at 2 because zero and one are handled by the if statement above.
    for (let i = 2; i <= num; i++) {
        let nextNumber = firstNumber + secondNumber;

        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }

    return secondNumber;
}

// This for loop runs as many times as the number you put in it.
// That means, instead of 354,224,848,179,261,915,075 computations like before, we're down to 100.
// That's around 300,000,000,000,000,000,000% less work that the computer has to do!
// This isn't just a meaningless number either. Let's see how much slower the recursive version is.

console.time("recursive");
// We'll run it a bunch of times to get good data.
for (let i = 0; i < 200; i++) {
    // 100 will take a ridiculously long time to compute, so let's use a smaller number.
    fibonacciRecursive(30);
}
console.timeEnd("recursive");

console.time("for");
// We'll run it a bunch of times to get good data.
for (let i = 0; i < 200; i++) {
    // 100 will take a ridiculously long time to compute, so let's use a smaller number.
    fibonacciFor(30);
}
console.timeEnd("for");

// The for version takes a split second, but the recursive version takes so much time to complete that you can feel it.
// If we wanted to get even faster, there is a formula for Fibonacci numbers.
// If you're up for a challenge, try implementing it and seeing if it's faster than the for version.
// You can find the equation here: https://en.wikipedia.org/wiki/Fibonacci_sequence#Closed-form_expression.