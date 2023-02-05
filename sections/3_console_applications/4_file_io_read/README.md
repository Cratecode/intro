# File Input/Output

Now that we know how to do some basic operations on strings and arrays, let's look at how to read and write data from a file. This is a big topic, and so we'll just be looking at the basics.

The first thing we need to look at is the `fs` library. It's actually built in to NodeJS, so we can use it right away, without needing to install anything. It has a bunch of methods to help us read and write files.

Even though it's built in, we still need to require it in order to use it. We can do this by writing `const fs = require("fs");` at the top of our file.

Once we've done that, we'll want to look at the `fs.readFileSync` method. There is a `readFile` method, but it's a little more complicated, so we'll stay away from it until later.

`readFileSync` takes in two arguments: the path to the file, and an object with some options. We'll just be using the `encoding` option, which determines how the file should be read. We'll be setting it to `"utf8"` (a very common encoding scheme, and the one that your files are probably using). Here's an example of how it looks in code (after we've imported fs, of course):

```js
const data = fs.readFileSync("./data.txt", { encoding: "utf8" });
```

This will read the `data.txt` file in the same directory as our `js` file and store it as a string in the `data` variable.

Let's try writing a few lines of code to read in a file. I've included a `data.txt` file in this project for you to read. Try reading it in, then printing it to the console. Good luck!