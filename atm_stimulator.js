//pin logic

let pin = prompt(" Enter your 4-digit pin")

if (pin === "1234") {

    console.log("Login Successfully")

}

let balance = 10000;

let choice = prompt("Choose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

if (choice === "1") {
    console.log(`Your balance is ${balance} `)
}

if (choice === "2") {
    let depo = prompt(`Enter amount to deposit : `)
    balance = balance + Number(depo)
    console.log(`deposit amount is ${depo} and now your total balance is ${balance}`)

}

if (choice === "3") {
    let withd = prompt(`Enter amout to withdraw : `)
    withd = Number(withd);
    if (withd <= balance) {
        balance = balance - withd;
        console.log(`You withdrew ₹${withd}. Remaining balance is ₹${balance}`);
    } else {
        console.log(`Not sufficient balance!`);
    }
}


if (choice === "4") {
    console.log("Thank you! Exiting...");
} else if (choice !== "1" && choice !== "2" && choice !== "3") {
    console.log("Invalid choice.");
}


