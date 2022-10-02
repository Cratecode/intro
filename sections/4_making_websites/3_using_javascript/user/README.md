# Using JavaScript
We've taken a little break from JavaScript so far, but moving forward we're going to keep working with it. JavaScript is instrumental to almost every modern website, and allows a website to change its content. This could mean having a profile settings dropdown or a toolbox that allows users to change what's being displayed, or even a button that changes the text shown on a webpage. JavaScript allows websites to move from fancy text document to full-fledged programs. So, let's take a look at how we can use it.

Before we can start writing our code, we first need to have a place where we can put it. There are a few ways to put JavaScript into a webpage, but right now we'll just stick it in directly. Here's how it works:
```html
<script>
    console.log("JavaScript code here!");
</script>
```

All you have to do is create a `script` tag, then put your JavaScript code inside it. Also, your `script` tag should only go inside the `head` or `body`, since it isn't actually shown to the user.

---

Now, having JavaScript in our pages is good and all, but we can't expect users to go into the console (press F12 -> Console to see all of the `console.log`s that have happened) in order to interact with our site. Luckily, we have a solution to that as well. We can dynamically create and modify HTML elements with our JavaScript code. This means that we can change the text shown inside a paragraph, or even add a new one altogether. In order to do this though, we first need a way to "get" the element that we want to change. For that, we use IDs:
```html
<p id="paragraph-1">
    I have an ID!
</p>
```

IDs let us "look up" certain elements, which we'll then use to modify them. Here's another example:
```html
<script>
    function changeText() {
        document.getElementById("paragraph-1").innerHtml = "New text";
    }
</script>
```

Let's look at the two most important things here: `document.getElementById("paragraph-1")` and `innerHtml`. The first one is how we "look up" HTML elements by their IDs, which gives us something representing the HTML element. Then, we can get the `innerHtml` (the stuff inside the element, for example, `I have an ID!` is the `innerHtml` of the element above) and set it to whatever we want. Doing this changes the content of the paragraph and what's shown on the page. Now, let's make it useful!

We have our `changeText` function available, but the only way to use it is through the console, which isn't very user-friendly. Luckily, we have one more trick to save the day: buttons! Buttons are pretty simple: you click them, something happens. In our case, this something could be running `changeText` and changing the contents of `paragraph-1`. Here's how that might look:
```html
<input type="button" value="Click me!" onClick="changeText()">
```

Let's look at how this works. The tag we're using is `input`, which is a general tag for many kinds of user-input. Next, we set the `type` attribute to `button` in order to tell the browser that this input is a button, and the `value` to `Click me!` (which makes `Click me!` appear inside the button). One weird this with `input` is that you can't put anything inside it, and so it doesn't actually have a closing tag like other elements. In order to set the text, you use the `value` attribute. Finally, we set the `onClick` attribute to `changeText()`, which is a piece of JavaScript which runs when the button is clicked. In this case, it calls our function from above, changing the paragraph text. Let's put it all together:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Test</title>
    </head>

    <body>
        <p id="paragraph-1">
            I have an ID!
        </p>
        <input type="button" value="Click me!" onClick="changeText()">

        <script>
            function changeText() {
                document.getElementById("paragraph-1").innerHtml = "New text";
            }
        </script>
    </body>
</html>
```

Now you try. Create an HTML document inside of `index.html` which does something similar to what we just did, with a small difference. Instead of just setting it to some text every time, make the paragraph count up. So, when you first load the page, it should say something like `Press the button below`, then `1` once you press the button, `2` once you press it again, and so on. Good luck!

 [HTML Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)