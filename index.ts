#! /usr/bin/env  node

import inquirer from "inquirer";

// amount of bankbalance
let moneyBalance: number = 100000; // Dollars
console.log("Your current bank balance is: " + moneyBalance);

// pin code for safety
const pinNumber: number = 247786;

//entering pin code 
let bankATM = await inquirer.prompt([
    {
    message: "Plz type your correct pin:",
    name: "pincode",
    type: "number",
    },
]);

//checking if pin code is correct or incorrect?????
if (bankATM.pincode === pinNumber) {
    console.log("Correct pin code");

    //account type
    let bankingSystem = await inquirer.prompt([
    {
        message: "Select your account type",
        name: "features",
        type: "list",
        choices: ["Current Account", "Saving Account"],
    },
    ]);
    //transaction method
    if (bankingSystem.features == "Current Account") {
    let currentAccountsystem = await inquirer.prompt([
        {
        message: "select your trsnsaction method",
        name: "currentAccount",
        type: "list",
        choices: ["Withdrawl Amount", "Fastcash"],
        },
    ]);
    //taking how much amount did user wants to withdraw
    if (currentAccountsystem.currentAccount === "Withdrawl Amount") {
        let withdrawAmount = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter the amount you want to withdraw:",
            type: "number",
        },
        ]);
        console.log(
        "Succesfully withdrawl the amount your current bank balance is :)",
        `${moneyBalance - withdrawAmount.amount}`
        );
    }
        //fastcah amount withdraw
    else {
        let fastCash = await inquirer.prompt([
        {
            name: "fashcashamount",
            type: "list",
            message: "select the amount to withdraw",
            choices: [100, 500, 1000, 5000],
        },
        ]);
        console.log(
        "Succesfully withdraw the amount and reamaining balancec is:",
        `${moneyBalance - fastCash.fashcashamount}`
        );
    }
    } else {
    let savingAccountsystem = await inquirer.prompt([
        {
        name: "savingAmount",
        type: "number",
        message: "How much amount do you want to add in youe saving amount",
        },
    ]);
    console.log(
        "Succesfully added to your saving account :)",
        `${moneyBalance + savingAccountsystem.savingAmount}`
    );
    }
} else {
    console.log("incorrect pin");
}
