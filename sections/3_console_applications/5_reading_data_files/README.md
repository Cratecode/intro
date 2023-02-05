# Reading Data Files

In the previous lesson, we saw how we can read in a text file. Now, let's try reading in a data file. A data file is a file which contains some data, like numbers.

The first thing we need to do is read the file. We can do this with the `fs.readFileSync` method, just like we did before, but this time, we'll have to combine some of our prior knowledge to manipulate the text that we read. You'll read in a file exactly like how you did last time, but instead of printing it like before, try to do some extra processing to the data. Here, our `data.txt` file is a list of numbers (right now they're meaningless, but we'll work with some actual datasets later), with one number on each line. We'll keep it simple and try to turn this string into an array of numbers, then printing it out to the console. Good luck!

Hints:
* ||Make sure that each line that you process isn't empty.||
* ||Make sure you've set the encoding to "utf8".||
* ||Try turning it into an array of strings first, then figure out how to make it an array of numbers.||