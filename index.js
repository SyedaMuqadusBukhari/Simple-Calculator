#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ massage: "inter first number", type: "number", name: "firstnumber" },
    { massage: "inter second number", type: "number", name: "secondnumber" },
    { massage: "select one of the operators to perform actions", type: "list", name: "operator",
        choices: ["addition", "substraction", "multiplication", "division",] }]);
// conditional statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
