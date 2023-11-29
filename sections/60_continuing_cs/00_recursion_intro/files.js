// This represents files on a computer.
// It's stored as a JavaScript Object.
// If you haven't seen one of these before, it's a key -> value store.
// That means that, if I have an object that looks like { "a": "b" },
// and I give it the key "a", it will give me the value "b".
// We can also stick objects into objects, like we do here.
//
// If we wanted to get `secretfile.txt` (`/home/me/Documents/secretfile.txt`),
// we'd need to ask `myFiles` for the value tied to `home`.
// That would give us another object, which we can ask for the value tied to `me`.
// Eventually, we'll get the contents of `secretfile.txt`.
// This can be written in JavaScript as `myFiles["home"]["me"]["Documents"]["secretfile.txt"]`.
const myFiles = {
    "home": {
        "me": {
            "Documents": {
                "secretfile.txt": "My secret",
                "favoritenumber.txt": "1"
            },
            "Desktop": {
                "poem.txt": "Current Draft: roses are red, violets are blue"
            }
        }
    },
    "logs": {
        "systemlog.txt": "No errors detected!"
    }
};

// Now, take a moment to think about how you might write a program that prints out every file.
// If we just had a list of files, then we could use a for loop, but the way the data is structured makes
// this really tricky.

// The answer, as you probably guessed, is recursion!
// This is one of the cases where recursion is exceptionally useful.
// It helps us write programs that can navigate tricky data structures.
// Do you have any idea how to use recursion here?

// Here's some code to get you started.
// Give it a try, and if you get stuck, that's alright!
// This is a really tricky topic, so there are hints included in the lesson (click the blacked out text to reveal them).
function printFilesInFolder(filesObject) {
    // This is a for loop going through every key in `filesObject`.
    // It will look at every file/folder in the object.
    for (const fileName in filesObject) {
        const fileData = filesObject[fileName];

        // Don't worry about what this is doing.
        // This if statement is checking whether we're looking at a file
        // or a folder.
        if (typeof(fileData) === "string") {
            // It's a file!

            // LOCATION 1
            // What should we do here?
            // Remember, this function is meant to print out info
            // about the file.
            // `fileName` is the name of the file, and `fileData` is the text
            // stored inside it.
        } else {
            // It's a folder!

            // LOCATION 2
            // What should we do here?
            // Remember, `fileData` is a folder object,
            // and this function prints all the files
            // contained in a folder object.
        }
    }
}

printFilesInFolder(myFiles);

// By the way, the source code for this website actually uses a piece of code super similar to this to
// deal with files, as well as lessons.