#!/usr/bin/env node
import inquirer from 'inquirer';
const genrateNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: ("Guess Number between 1-6"),
        type: "number",
        name: 'input'
    }
]);
console.log("computer guess:" + genrateNumber);
if (genrateNumber === answer.input) {
    console.log("You Win");
}
else {
    console.log("You Lost");
}
