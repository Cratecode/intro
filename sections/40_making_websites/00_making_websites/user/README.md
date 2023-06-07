# Making Websites

We're going to take a deep dive through the ways that websites work. Every website (even this one) is built using a language called HTML (Hyper Text Markup Language). HTML is more for creating rich text documents (websites are super, super fancy text documents) than for programming, but it's essential to know for anything related to the web, even if you don't end up using it all that often.

That being said, we haven't separated from JavaScript quite yet. JavaScript runs on websites and makes things interactive, which turns websites from fancy text documents to actual applications. To start off, we're just going to look at making simple websites, but I promise we'll soon fan out to many (and super fun!) topics about web development.

The basic idea behind HTML is that it's organized into a tree of tags. The most basic HTML document looks like this:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>

    <body>
    </body>
</html>
```

The first line `<!DOCTYPE html>` is different from pretty much everything else, and just lets browsers know that something is an HTML file (if it starts with `<!DOCTYPE html>`, then it's HTML). Because of that, I'm not going to focus on it too much, but keep in mind that you should be adding it to the beginning of every HTML document you create.

The next line is `<html>`. This is the main HTML element that every element lives inside. Inside it is `<head>` and `<body>`, which store different types of elements inside them. The `<head>` element holds information that the user doesn't see on the webpage, but that the browser might want to know (like what text to display in the browser tab), and the `<body>` tag holds the actual stuff on the webpage. You probably also noticed that each element is paired with a corresponding closing element `<body>` has `</body>`. The first tag tells the browser that the body element exists, then after it any number of elements (text, images, etc) can appear. After all of that, the `</body>` tag tells the browser that the body tag is over, and that everything in between the two tags is inside the body. Almost every HTML element must be closed like this, but luckily, they all follow the same format of adding a `/` before the name.

We're going to take a look into how HTML works in a bit more detail later on, but right now, I'd like you go through the example document and see how it works (and how you might be able to change it to do different things). Good luck (and make sure to click the run button every time you make a change)!
