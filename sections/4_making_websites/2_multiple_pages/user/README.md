# Multiple Pages
One of the big ideas when HTML was first created was Hyperlinks, which allow one document (page) to reference another, and this idea remains just as big today. When you go on a website, you might click a link that takes you to a login page. This is a Hyperlink.

 Creating a Hyperlink is pretty easy, but before we can do that, we need to understand how "links" actually work. We've been working with an `index.html` file for the past few lessons, and this is actually a pretty special file. When your browser goes to your webpage, it uses a URL that looks something like `example.com/` and asks our webserver for the webpage. Our webserver "sees" `/` (even if we went to `example.com`, it would still see `/`) and figures out what file to send back. When it sees something like `/` or `/login`, it'll look for the file `index.html` or `login/index.html`, which is what makes `index.html` so special. We could also ask for a file with something like `example.com/README.md`, which will send `/README.md` to our webserver and our webserver will look for `README.md` (you can try this by putting `README.md` into the mini web browser below). Because of this, `/` and `/index.html` mean pretty much the same thing.

 Just to recap, if the browser asks for a specific file (like `/README.md`), the webserver will look for that file. Otherwise, if it asks for a folder (like `/` or `/login`), the webserver will look for an `index.html` file inside that folder.

 Now that that's over, let's get to the core of this lesson: Hyperlinks. Like I said, Hyperlinks are actually pretty easy. Here's an example of one:
 ```html
 <a href="/page">Click Me!</a>
 ```

 We create links using the `a` tag, and we also use something called an attribute. An attribute is a way to change the way a tag works. For example, the `href` (which stands for Hypertext (an HTML file) REFerence) attribute tells the `a` tag to bring people to `/page` when they click on it (which means the file `page/index.html`). Then, if they click on anything inside it (in this case the text `Click Me!`, but we could make something like an image or paragraph clickable), their browser will send them to the link.

 So, let's put this to use. Try making a little file that links to the `index.html` file inside the `login` directory. Good luck!

 [HTML Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)