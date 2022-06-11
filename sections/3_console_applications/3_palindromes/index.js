const prompts = require("prompts");
const fs = require("fs");

// Load up the file and eval it to get the function.
eval(fs.readFileSync("user/index.js", "utf8"));

async function runProgram() {
    const word = await prompts({
        type: "string",
        name: "value",
        message: "What's your potential palindrome?",
    });

    console.log(
        `Got "${word.value}" is ${
            isPalindrome(word.value) ? "a" : "not a"
        } palindrome.`,
    );

    const palindromes = [
        ["racecar", true],
        ["hello", false],
        ["hello world", false],
        ["tacocat", true],
        ["stats", true],
        ["woo", false],
    ];
    let flag = false;

    for (const palindrome of palindromes) {
        if (isPalindrome(palindrome[0]) !== palindrome[1]) {
            console.log(
                `Error: "${palindrome[0]}" is ${
                    palindrome[1] ? "not a" : "a"
                } palindrome, but is is ${
                    palindrome[1] ? "" : "not "
                }marked as one.`,
            );
            flag = true;
        }
    }

    if (!flag) {
        console.log("All palindromes are correct!");
    }
}

runProgram();
