let num = parseInt(prompt("enter a number"))
let digit = "0123456789"
let otp = ""

for (let i = 0; i < num; i++) {
    let random_digit = Math.floor(Math.random() * 10)
    console.log(`random digit : ${random_digit}`)
    otp = otp + random_digit


}
console.log(`your otp is : ${otp}`)
