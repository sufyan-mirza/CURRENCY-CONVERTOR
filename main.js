// CURRENCY CONVERTER
import inquirer from "inquirer";
let CONVERTER = {
    PKR: {
        USD: 0.0036,
        EURO: 0.0033,
        PKR: 1
    },
    EURO: {
        PKR: 301.24,
        USD: 1.08,
        EURO: 1
    },
    USD: {
        PKR: 278.12,
        EURO: 0.92,
        USD: 1
    }
};
let currency = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        message: 'enter the currency you want to convert',
        choices: ["PKR", "EURO", "USD"]
    },
    {
        type: 'list',
        name: 'to',
        message: 'enter the currency in which you want to convert',
        choices: ["PKR", "EURO", "USD"]
    },
    {
        type: 'number',
        name: 'amount',
        message: 'enter the amount you want  to convert'
    }
]);
const { from, to, amount } = currency;
// we use if else statement to convert the currency
if (from && to && amount) {
    let answer = CONVERTER[from][to] * amount;
    console.log(`you have converted${amount} ${from} to ${to}`);
}
else {
    console.log("invalid error");
}
