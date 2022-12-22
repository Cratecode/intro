# Full-stack Web Frameworks

Previously, we took a look at React. To recap, it's a web framework that makes frontend web development a lot easier by allowing you to write websites using a component model and consolidate your scripts and HTML. Now, we'll take a look at a framework that takes this a step further: [Next.JS](https://nextjs.org/). Simply put, Next does for React what React does for traditional (bare-bones HTML, CSS, and JavaScript) web development.

## What is Next.JS?

Next.JS is a web framework that builds on top of [React](https://reactjs.org/). It's designed to make React development easier and more efficient, while also providing an easy-to-use set of tools for developers. It extends React by adding features like **server-side rendering**, **routing**, **type checking**, and **static analysis**. It also makes it easier to **organize code** and **reuse components**.

### Server-Side Rendering

Server-side rendering (SSR) is a technique that allows developers to render the HTML of the page on the server, instead of the client. This has a few benefits:

* **Faster loading times**: Since the HTML is already generated, the browser only needs to download the JavaScript and CSS for the page, instead of being required to parse the HTML, JavaScript, and CSS before it can display it.

* **Better SEO**: Since the HTML is already generated, search engine bots can crawl it more easily.

* **Improved performance**: Since the HTML is already generated, the browser can start displaying it before all the JavaScript and CSS is downloaded.

### Routing

Next.JS also adds routing capabilities. This means that you can create different pages for different URLs, and the framework will make sure that the correct page is displayed for each URL. It also allows you to create **dynamic routes**, so you can have URLs like `/users/[username]`, and the framework will let you change what the page contains based on the username in the URL.

### Type Checking

Next.JS also adds type checking capabilities, which allows you to make sure that the data you pass around your code is correct. This is especially useful when you're dealing with data coming from an API or a database, as it can help you catch errors before they happen.

This is possible with React alone, but it takes a lot more setup and doesn't come working out-of-the-box like with Next.

For type checking, Next.JS uses [TypeScript](https://www.typescriptlang.org/). TypeScript is a superset of JavaScript that adds type annotations and type checking. It's completely optional, but it can help catch a lot of bugs quickly and easily.

### Static Analysis

Finally, Next.JS also adds static analysis capabilities. This allows you to analyze your code without running it, and can be used to catch a lot of issues early in the development process. It can also be used to optimize your code and make sure that it only does what it needs to do.

## Benefits of Next.JS

Next.JS combines all the features above to provide a powerful set of tools for web developers. It allows developers to quickly and easily create web applications that are fast, secure, and easy to maintain. Plus, since it's built on top of React, developers can use the same tools and techniques they already know and love.

For right now, Next.JS can make it a lot easier to manage and set up our projects. We also get a lot of benefits built-in if we decide to start scaling up a project. Previously, React code was "magically working". In reality though, it takes a bit more time to set up a React project. Next makes this set up a lot easier (see for yourself)!

### Next.JS Projects

Next.JS projects all have a few things in common. First, they'll always depend on `next`, `react`, and `react-dom`. They'll probably also have a few scripts defined in `package.json` to easily build and run the project (this one does, open up the file and check it out!).

Structure-wise, Next.JS apps are pretty simple. They'll always have a `pages` directory where the code for each page lives. If you've ever seen how web servers handle static HTML files, this is quite similar. If we have a file called `index.tsx` (or `index.jsx` if we aren't using TypeScript), then it will be used to render the page for whatever folder it's in. If it's `pages/index.tsx`, then it will be used for `example.com`. If it's `pages/subdir/index.tsx`, then `example.com/subdir`. We can also have files that aren't named `index.tsx`. For example, if we have `pages/myfile.tsx`, it will be used for `example.com/myfile`.

There are a couple other files and directories that Next.JS uses, but we'll take a look at those later. You can, of course, create your own directories as well. In this example, there's a `components` directory. Next doesn't actually use this for anything, so we can use it as a normal directory to help organize our project. In this example, we can put components in `components`, and then import and use them in `pages`.

So, let's take a look at how we can use Next.JS to create a website. We'll use the same example as before (open up `index.jsx` and `UpdatingButton.jsx`). This time, we'll use TypeScript (which means the `.jsx` files have become `.tsx` files and a couple of lines need to be changed). Take a look at the example and see if you can change how it works (maybe count in 2s, or count downwards). Good luck!