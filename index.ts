#! /usr/bin/env  node

import inquirer from "inquirer";


let moneyBalance: number = 100000 // Dollars
console.log("Your current bank balance is: "+moneyBalance);

const pinNumber:number = 247786;

let bankATM = await inquirer.prompt([
    {
        message: "Plz type your correct pin:",
        name: "pincode",
        type: "number",
    },
])


if (bankATM.pincode === pinNumber) { 
    console.log("Correct pin code");


    let bankingSystem = await inquirer.prompt(
        [
            {
        message: "what do you like to do:",
        name: "features",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
    }
]
    );

    if (bankingSystem.features == "Withdraw") {
        let withdrawAmount = await inquirer.prompt(
            [
                {
                    message: "How much balance do you to withdraw:",
                    name: "amount",
                    type: "number",
                }
            ]
        )
        console.log("Now your current amount is:", moneyBalance - withdrawAmount.amount)
    }
    else {
        console.log("you current balance is:" + moneyBalance);
    }
}   else
        console.log("incorrect pin");
