const prompts = require("prompts");

async function runProgram() {
    const numA = await prompts({
        type: "number",
        name: "value",
        message: "What should the first number be?",
    });

    const numB = await prompts({
        type: "number",
        name: "value",
        message: "What should the second number be?",
    });

    // TODO: Support addition, subtraction, multiplication, and division.
    console.log(numA.value + numA.value);
}

runProgram();