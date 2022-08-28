# Advanced Data Types

Throughout the previous lessons, we've had data types in the back of our minds. There's been a distinction between numbers, strings, arrays, and other data types, but we don't always know the data type of something in our program.

For example, this function has no idea what the type of its arguments are:
```js
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
```

It expects that `num1` and `num2` are both numbers, but nothing's stopping us from doing something like this:
```js
addTwoNumbers("1", 1); // 11
```
And getting strange results because of it. Even worse, we might not know what type a function returns. Maybe we use a library which doesn't exactly tell us what one of its functions returns. We could run it and look at its output, but that's a bit tedious and the mystery function could return different types. If we think it always returns one thing but it actually returns another, it can lead to bugs that can only be solved by examining the logic of your program line-by-line. For example:
```js
// Mystery function from another library that returns a prime number.
function getNthPrime(n) {
    // ...

    // The number is turned to a string, which we aren't told about.
    return prime.toString();
}
```
```js
// Line 147 in our code.
const primePlusOne = addTwoNumbers(getNthPrime(n), 1);
```

In this example, the `getNthPrime` is returning a string, when we think it's a number. Because of this assumption, we add one to it as if it were a number, when in reality this sticks a `1` on to the end of our prime. Not only will this completely break our program, the problem could lie in someone else's code, which is a nightmare to solve. Luckily, we don't have to.

## Adding Types

In many other programming languages, things are "statically typed" (as opposed to "dynamically typed", which is what JavaScript does). All this means is that we include our data types in our code in places where it might be uncertain (like what arguments are valid input for a certain function). Here's an example with our `addTwoNumbers` function:
```ts
function addTwoNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
```

All we're doing here is saying that `num1` is a `number` (as is `num2`), and `addTwoNumbers` will return a `number`. Making this little change makes our code a little smarter and it will give an error if we try to put a string (or anything else that isn't a number) into `addTwoNumbers`. Now, let's see our other functions:
```ts
// Mystery function from another library that returns a prime number.
function getNthPrime(n: number): string {
    // ...

    // The number is turned to a string, which we aren't told about.
    return prime.toString();
}
```
```ts
// Line 147 in our code.
const primePlusOne = addTwoNumbers(getNthPrime(n), 1);
```

And instead of creating a bug that wastes hours of our time, we just get an error saying that `addTwoNumbers` requires a `number`, but `getNthPrime` return a `string`. Also, keep in mind that our variable `primePlusOne` can have a type (we'd write `const primePlusOne: number = ...`), but it isn't needed because `addTwoNumbers` has a type, and that gets carried over to `primePlusOne`.

## Installing TypeScript

All of this "typing" is handled by a language called TypeScript (you can think of it as a more advanced JavaScript). Unlike JavaScript, which we can simply run, TypeScript needs to be compiled. This means that the TypeScript compiler will look at our TypeScript code, look for errors in our code (like the example above), and if there aren't, convert our code into JavaScript. It makes running our code a bit more complicated (as in one command becomes two), but I promise it's worth it for the time saved debugging and the assurance that functions really work the way you think they do.

To install TypeScript, we need to run `yarn add --dev typescript @types/node` in our console. The `--dev` means that this is a "dev dependency", something which we only need when developing our program, but anyone running it won't need it. `@types/node` is a library that gives types to the built-in functions in order to make things a bit easier for us. After that, typescript is installed, but we have a bit more configuration to do.

The last thing we need to do is create a `tsconfig.json`. A basic one that should suit your needs is included in this project.

## Using TypeScript

The last thing to do is to actually use TypeScript. In order to turn our TypeScript into JavaScript, we just need to run the `tsc` command, which will output code into the `dist` directory. Next, we can run `node dist/index.js` to test our code. In order to make this easier, we can create a "script" in our `package.json` file. Take a look at `package.json`, then try `yarn dev` for a quicker run command.

Now, try to add types the `index.ts` file (in the `src`) directory. Good luck!