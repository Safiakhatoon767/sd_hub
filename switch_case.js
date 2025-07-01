// const choice = Number(prompt("enter a number b/w (0-4)"))

// switch (choice) {
//     case 1:
//         console.log("RED");
//         break

//     case 2:
//         console.log("yellow");
//         break

//     case 3:
//         console.log("green");
//         break

//     default:
//         console.log("invalid number");

// }


// const light = prompt("enter the traffic light signal one color")

// switch (light) {
//     case "red":
//         console.log("stop");
//         break
//     case "green":
//         console.log("go");
//         break
//     case "yellow":
//         console.log("get ready to stop");
//         break
//     default:
//         console.log("invalid color")
// }


let num1 = Number(prompt("enter your first number "))
let num2 = Number(prompt("enter your secound number "))
let opr = prompt("enter your operater (+,-,/,*,%,**)")

switch (opr) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
    case "**":
        console.log(num1 ** num2)
        break
    case "%":
        console.log(num1 % num2)
        break
    default:
        console.log("invalid sign")
}
