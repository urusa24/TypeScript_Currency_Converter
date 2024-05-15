#! /usr/bin/env node
//                                      CURRENCY CONVERTER
//===================================================================================================
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t\tWelcome To Currency Converter"));
console.log(chalk.blue("=".repeat(60)));
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278.14,
    KWD: 0.30,
    QAR: 3.64,
    SAR: 3.75,
    CNY: 7.23 //Chinese Yuan Renminbi(CNY)
    //Add more currencies and their exchange rates here
};
//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: `from`,
        message: "\nEnter From Currency :",
        type: `list`,
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`, `KWD`, `QAR`, `SAR`, `CNY`]
    },
    {
        name: `to`,
        message: "\nEnter To Currency :",
        type: `list`,
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`, `KWD`, `QAR`, `SAR`, `CNY`]
    },
    {
        name: `amount`,
        message: "\nEnter Your Amount :",
        type: `number`
    }
]);
//Perform currency conversion by using formula
let from_amount = currency[user_answer.from];
let to_amount = currency[user_answer.to];
let amount = user_answer.amount;
//Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`\n\tConverted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
