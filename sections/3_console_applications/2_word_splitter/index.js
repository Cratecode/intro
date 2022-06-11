const prompts = require("prompts");

async function runProgram() {
    const input = await prompts({
        type: "string",
        name: "value",
        message: "What's your sentence?",
    });

    // TODO: Mess around with arrays, for loops, splits, and output each word with console.log.
}

runProgram();
