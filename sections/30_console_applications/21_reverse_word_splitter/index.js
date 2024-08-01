const prompts = require("prompts");

async function runProgram() {
    const input = await prompts({
        type: "text",
        name: "value",
        message: "What's your sentence?",
    });

    const inputArray = input.split(" ");

    // TODO: Put this in reverse order.
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]);
    }
}

runProgram();
