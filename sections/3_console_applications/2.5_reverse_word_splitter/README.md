# Reverse Word Splitter

Let's try a little challenge. In the previous lesson, we were able to print out each word in a string. Now, let's try doing it in reverse order.

If you type in "This is a sentence!", you should see
```
sentence!
a
is
This
```
printed out.

---

For reference, JavaScript does include a function to reverse arrays, but we will not be using it. The goal of this challenge is to get you more familiar with how for loops actually work, and so we'll be doing this with only the help of for loops. First, let's break down how a for loop works. First, we declare some variable (commonly `let i = 0;`). Next, we write some condition (maybe `i < array.length;`). Finally, we write something that will happen after each iteration (most of the time `i++`). These can all be translated to a while loop, which is a simpler type of loop: as long as its condition is met, it keeps looping.

If we have a for loop that looks like this:
```js
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

It can be re-written into the following while loop:
```js
let i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}
```
(we'll talk more about while loops and how they're really useful later)

Because of this fact, we aren't very limited by what we can put into our for loops. For example, our variable doesn't need to start at zero, and we can do things other than adding one to our variable. Try changing the for loop to print out the sentence in reverse order. Good luck!

If you get stuck, think about how you would go through an array and how it translates to a for loop, then do the same for going through an array backwards. What's the first element of the array that you start at? What direction do you go in? How do you know if you're done?