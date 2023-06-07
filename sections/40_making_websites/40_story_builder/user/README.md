# Story Builder

Now that we have access to JavaScript, our possibilities are infinite! But let's start a bit smaller than that first. In the past lesson, we looked at how you can insert JavaScript into your HTML pages, how you can use `document.getElementById` to access HTML elements from JavaScript, and how we can take an HTML element and use `.innerHtml` to change its content.

For this lesson, there's one more thing we need to understand: inputs.

## Inputs

Inputs are one of the easiest ways for your website to accept data of some sort from the user. If you've worked with console applications, you might be familiar with this idea. Basically, our program (website, in this case) can ask the user to give it some data, and then it can do something with that data. A great example is a login/signup form, where you give the website some data (email/username and password) and it does something with it (logs you in). That's an example of using **inputs** in a website. Specifically, **text boxes** and **buttons**.

### Text Boxes

Text boxes, as their name suggests, are boxes that hold editable text. Back to our example above, the place where you type your username/email and password are both text boxes. If we wanted to create our own text boxes, we can use
```html
<input type="text">
```

And, if you wanted to get the text out of it, you could use
```js
HTML_ELEMENT.value // replace HTML_ELEMENT with the input element, using something like document.getElementById (remember, if you use this, you'll need to give your element an ID!)
```

That's it! There's some fancy stuff we can do with text boxes, but this is how you use their core functionality.

### Buttons

We've actually already taken a look at a button in the previous lesson, where we used it to make a counter. Buttons are basically just "clickable things", that do something when you click them. In order to make them actually do something though, you'll need to stick some JavaScript into their `onClick` attribute. They look like
```html
<input type="button" value="Button Text">
```

On its own, this button won't really do anything, so make sure you add an onClick to your buttons!

## Changing Elements' Text

One really important thing to keep in mind is that `innerHtml` is not a safe way of doing things. In the past lesson, we did use `innerHtml`, but we knew exactly what we were putting in it (it was always some text, or always a number). But as soon as we start dealing with user input, we open up the risk of someone doing something malicious. The reason `innerHtml` isn't safe is because, while we've been using it to change the text content of elements, if we put HTML into it, that HTML would be stuck directly into our webpage. This is an issue because HTML can be used to run JavaScript. On its own, that isn't too big of a deal, but imagine if some malicious user were able to run some JavaScript code on this webpage (the one you're reading right now). In general, bad stuff caused by JavaScript is limited to the website it's running on, but that still means that some malicious code could steal or delete your account, or do other actions on your behalf.

Here, it probably doesn't matter because the only person who can put in input is you, and it's limited to the HTML file you create. But in the real-world, this is a very important thing to consider. And the solution is pretty easy too. Instead of `.innerHtml`, we'll use `.innerText`. The difference is that `.innerText` is just for setting the text of HTML elements, and is pretty safe to use. On the other hand, we should only use `.innerHtml` if we actually want to add HTML, and we know that the HTML we're sticking in isn't malicious.

So, if you want to set the text of an HTML element, use `.innerText`. And if you're interested in learning more about this, look up "XSS".

## Putting it all Together

Now that you know how to create input elements, I'd like you to try making a little website that takes some input from the user and uses it to build a story (think fill-in-the-blank story book, where you have a story with missing words and need to come up with something to fill them in with). The story can be anything (and doesn't even have to be a story, just something where the user can fill in the blanks).

For example, you might ask the user for three things. They'll type these into input boxes. Then press a button.

If they typed in `cat`, `dog`, and `toast`, you might write the story "I have a cat. I don't have a dog. My favorite food is toast.". You can do this similar to how we stuck some text onto a web page in the previous lesson.

The story you write doesn't have to be fancy (or, like I said, doesn't really need to be a story at all). The point of this is to learn HTML, not creative writing, after all (although your web page will be nicer with a good story).

## Fancy Stuff

There are a few things you can do to make your page a bit fancier. These aren't required, but I'd encourage you to try them out.

First off, you can add a placeholder to a text box, like this:
```html
<input type="text" id="pet" placeholder="Favorite animal">
```

Then, the text box will say the placeholder until the user types something in. This can give the user some information about what they need to put into the text box. Give it a try!

Another way to spice up your site is by using the `br` element. This element sticks bit of space between two elements, which puts them on different lines and moves them a bit farther apart. You can use it like
```html
<input type="text" id="not-pet" placeholder="Least favorite animal">

<br />

<input type="text" id="food" placeholder="Favorite food">
```
Now, these two text boxes will be on different lines, as well as a bit farther apart.

## Challenge

In addition to the things above, it might be interesting to try to add a sort of "preview" functionality to your page so the user sees the story that they're building. An easy way to do this is to just add text between your inputs. So, in the example above, you might type `. My favorite food is ` instead of `<br />`. That way, the story is actually visible on the page, between the inputs, and the user can see it. Once they click the button, they can copy-paste the generated story outside and do something with it.

## Hints

This is a fairly complicated project, so I'll give you a couple of hints in case you get stuck along the way:
* ||You'll need to set up the HTML file yourself, so that it has a html, head, and body tag. Look at how it was done in previous lessons.||
* ||Make sure you're using at least some text boxes, a button, a paragraph, and a script tag.||
* ||You can write a JavaScript function that creates your story (as a string) and sticks it into a paragraph. Then, call that function when a button is pressed.||
* ||Make sure you've given every element you want to interact with in JavaScript an ID (the button doesn't need an ID, since we don't need to look it up).||
* ||You will need to use `document.getElementById`, `.value`, and `.innerText`.||
* ||You only need one function, and only need to set `.innerText` once (per button press). But you might need to call `document.getElementById` and get `.value` multiple times.||
* ||Review the previous website lessons if you're still stuck.||