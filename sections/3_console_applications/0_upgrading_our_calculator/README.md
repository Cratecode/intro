# Upgrading our Calculator

Adding two numbers together is great, but it isn't very useful if we always add the same two numbers. Let's make it more useful by letting the user choose which numbers to add.

This is called taking user-input, and it lets our programs interact with the user. Instead of doing the same things all the time, we can ask the person running the program for input, which changes the behavior of the program (such as adding different numbers together).

Before we get started, we need to understand a pretty important concept in programming: libraries. Libraries are basically pieces of code that someone else wrote, which we can incorporate into our programs. They help us to avoid re-writing code when someone else has already written the same thing. We'll be using the `prompts` library, which helps us get input from the user. Before we can use a library, we need to install it. In order to do this, type the following command in your terminal:

```shell
yarn add prompts
```
(other package managers are available, but yarn uses the least disk space)

You only need to install a library once per-project, and you can verify that it's installed by looking at the `package.json` file. The next thing we need to do is to import the library into our program. We can do this by adding the following line to our program:

```js
const prompts = require("prompts");
```

`require` is a special function which lets us access installed libraries in our program. After that, we put the library inside a variable called `prompts`, which we can later use to actually use the library. We could call the variable name anything we want (although it's clearer to someone reading the code if we use the library's name), but the name inside the quotes has to be `prompts`, because that's the name of the library.

Now, we have our library inside the program, but how do we actually use it? The best way to figure out how a library works is to look at its examples and documentation, which in this case can be found at [https://www.npmjs.com/package/prompts](https://www.npmjs.com/package/prompts). If you scroll down a bit, you should see something that looks a bit like this (I've removed a few things that we don't need to use right now):

```js
const prompts = require("prompts");

async function runProgram() {
    const response = await prompts({
        type: "number",
        name: "value",
        message: "How old are you?",
    });

    console.log(response.value); // 24
}

runProgram();
```

Don't worry about the `async` and `await` stuff for now, we'll get to that later. Just keep in mind that you need to use `await` when using this library and that `await` needs to be inside an `async` function, or else you'll get an error.

Try putting this into your program and see what happens. You should be prompted to enter a number, and then you should the number you put in get spit back out. In order to get the actual number, we need to do `response.value` instead of just `response`.

Now it's your turn. Try using the prompts library to ask the user for two numbers, and then add them together and output them to the console. Good luck!
