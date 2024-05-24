#! /usr/bin/env node 
import inquirer from "inquirer";
console.log(" Welcome to ATM ");
let myBalance = 50000;
let myPin = 67890;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin! "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code! ");
    let optionAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select the option! ",
            choices: ["fast cash", "withdraw amount", "check balance"]
        }
    ]);
    // console.log(optionAns);
    if (optionAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount! "
            }
        ]);
        // If the user enters the amount more than the current amount:
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance! ");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully `);
            console.log(`Your remaining balance is: ${myBalance} `);
            console.log("Thank you! for using ATM ");
        }
    }
    // if the user selects the fast cash:
    if (optionAns.operation === "fast cash") {
        let fastamountAns = await inquirer.prompt([
            {
                name: "fastAmount",
                type: "list",
                message: "Enter your amount! ",
                choices: [500, 1000, 2000, 5000]
            }
        ]);
        myBalance -= fastamountAns.fastAmount;
        console.log(`${fastamountAns.fastAmount} withdraw successfully `);
        console.log(`Your remaining balance is: ${myBalance} `);
        console.log("Thank you! for using ATM ");
    }
    // If the user wants to check his current balance:
    else if (optionAns.operation === "check balance") {
        console.log(`Your Current balance is: ${myBalance} `);
    }
}
// if the user enters the incorrect pin code:
else {
    console.log("Please write correct pin! ");
}
