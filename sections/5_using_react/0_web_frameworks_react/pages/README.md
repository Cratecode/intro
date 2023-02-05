# Web Frameworks

When making big websites, it can be **really difficult** to just use JavaScript and HTML. Code gets **messy**, HTML gets **copied and duplicated** everywhere, and bugs become nearly **impossible to solve**. There are some libraries that help make web development easier for developers (most notably of which might be jQuery), but they just provide tools to make things easier instead of **tackling the underlying problem**.

However, that doesn't mean there aren't any good solutions that exist. An interesting idea that has come up is to treat HTML as a language for computers and not people, and create **languages that "compile" to HTML**. There are a few reasons for doing this, but the short and simple explanation is that it lets developers **improve their experience without changing how browsers work**. We'll look at a popular framework called React, which brings a "JavaScript-first" mentality to web development. It uses a language called **JSX**, which is JavaScript + some syntax that looks a lot like HTML.

## Components

A big idea in React is that of **components**. They're basically like **custom HTML elements made by you**. Also, all of their code is contained within their own JSX file (and not laying around somewhere like it might in a pure HTML + JS project). A big selling point of components is that **they can be re-used**. Maybe you create a "Card" component that on the page creates a square with an image at the top, and some text below it. We can do this with HTML and CSS, but instead of copy-and-pasting our code every time, we can write all the structure and styling styling in a file like `Card.jsx`, then just write `<Card image={...} text="Text" />` whenever we need it.

```jsx
const Card = ({image, text}) => {
    return (
        <div style={{width: "50px", height: "50px"}}>
            <img src={image} style={{width: "50px", height: "40px"}} />

            <p style={{width: "50px", height: "10px"}}>{text}</p>
        </div>
    );
};

export default Card;
```
*There are some ways to make this easier to write and more responsive, but we'll get to those later*

In that way, **components act a lot like functions**. All of their complex behavior is hidden away, and they can be re-used with just one line of code. In fact, React components can be defined as functions (as shown above)!

## Syntax

### Export/Import

Let's take a look at the actual way that we write React components. Before we go any further, we need to first understand that we're using a slightly different version of JavaScript here. In order to make our experience as nice as possible, many React projects make use of "transpiling". **Transpiling is basically the process of taking newer and nicer-to-use JavaScript and converting it into the kind that browsers accept**. For us, that means we have access to statements that start with `export` and `import`, and we use `import` instead of `require`.

For example, the `export default Card;` means that the `Card` component will be the default export and import. Then, if we want to use the `Card` component in another file (let's say `index.jsx`, in the same directory as `Card.jsx`), we can use `import Card from "./Card";`.

There's also non-default exports, and we can mix them together. We won't worry about them right now, but just keep in mind that there are a few ways to export code from one of your files so that it can be accessed from another file.

### JSX

Now, there's the stuff that JSX adds. This is the HTML-like syntax. If we want to return some HTML, we can put it directly in our code (and even **store HTML inside of variables**). However, there are a couple of rules:
* If you want to set an attribute to something that **isn't a string literal**, you'll have to **surround it with curly brackets**. For example, `<Rectangle size=1 />` doesn't work, but `<Rectangle size={1} />` does. This can also be used for expressions, like `<Text content={isLoggedIn ? "Welcome user!" : "Please sign up."} />`. Finally, if you want to pass `true` to an attribute, you can do it like `<SpecialButton show={true} />` or like `<SpecialButton show />`.
* **You always need to close a tag**. You can't write something like `<Rectangle>`. This can either mean self-closing tags like `<Rectangle />`, or using a closing tag like `<Rectangle></Rectangle>`. Just like with HTML, **if you want to put any elements within another element, you need to use a closing tag** like: `<Rectangle><ChildComponent /></Rectangle>`.
* **You can only have one "top-level" element**. For example, `<Text content="aaa" />` is valid, but `<Text content="aaa" /><Text content="bbb" />` isn't. In order to do this, we need to **use "React fragments"**, which are tags with no names (just the brackets): `<><Text content="aaa" /><Text content="bbb" /></>`. This is just for parsing and doesn't do anything special.
* If you want to do things on multiple lines (like above), it's a good idea to **wrap everything in parentheses**. This is because of parsing issues, just like the above rule.
* On **HTML components** (ones that are actual HTML elements, like `div`, `input`, and `p`), you can use the `style` object to set the element's styling.

Also, when making components, these **attributes are all passed down as a single object** and appears in the **function's first argument**. This means that you can use **object destructing** like above (which lets you easily extract/"destructure" certain keys from an object and store them as variables), or you can **create a parameter** called something like `props`, then do `props.image` and `props.text`. Both of these approaches do the same thing, but object destructing looks a bit cleaner.

All that aside, everything works pretty much like HTML. The real benefit though, is that you can **create your own components and use them like HTML elements**. For example, if we had an `index.jsx` file next to `Card.jsx`, and we wanted to use `Card`, we could do this:
```jsx
import Card from "./Card";

const Index = () => {
    return (
        <Card image="image url" text="Custom Card Component!!" />
    );
};

export default Index;
```

I've gone ahead and made another example (open up `index.jsx` and `UpdatingButton.jsx`). This one shows how React can help integrate JavaScript and HTML to create dynamic content. It features a button that displays the number of times its been counted. It uses React hooks (which we'll get into later) to accomplish this. Take a look at it and see if you can change how it works (maybe count in 2s, or count downwards). Good luck!