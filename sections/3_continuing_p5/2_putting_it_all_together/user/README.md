# Putting It All Together

Throughout our look at p5.js, we've worked with drawing simple and complex shapes, applying gravity to objects, stopping an object from going past a certain point, and moving it based on user input. Now, let's try to put it all together and create a basic game of sorts. A lot of what it does is up to you, but here's some things that it should include:

-   Gravity (moving the player down).
-   Ground (some sort of ground that the player cannot go past).
-   Movement (moving left and right using the A and D keys).
-   Jumping (moving upwards when a user pressed the W key).

Here's some tips on jumping:

-   Make sure the player is on the ground before letting them jump (use if statements!).
-   For smooth jumping (an extra challenge, so you can just add to the user's position when they jump if you'd like), you can store a "jump value". For example, you could set this value to 10 when the user pressed the jump button, then add the jump value to the user's position and subtract 1 from the value each time that the draw function is run.

Other than those requirements, you can customize it however you like. You can add some objects to the scene (maybe a grassy ground and a little sun in the sky), change up how some of the mechanics work, and anything else you can think of. Good luck!

[p5.js cheatsheet](https://bmoren.github.io/p5js-cheat-sheet/)
