//agar apko koi particular task ya logic bar bar javascript mai use kr rhe to ap particular uska function bna k de sakte h

//--------------------------------------user-defined function--------------------------------------------------

//normal function
function safia_Ki_Duniya() {
    console.log("welcome to safia ki duniya")
}

safia_Ki_Duniya()

//-------------------------------------Function with parameter-------------------------------------------------

function add_Numbers(num1, num2) {
    console.log(num1 + num2);
}

add_Numbers(10, 20)

//---------------------------------------------- Return type function ------------------------------------------
function sub_Data(num1, num2) {
    return num1 - num2

}

sub_Data_Store = sub_Data(10, 5)
console.log(sub_Data_Store)

//----------------------------------------Arrow function--------------------------------------------------------

let arrow_fun = () => console.log("kiya jbrdst function h bhai")

arrow_fun()

//-------------------------------------Arrow function with parameter--------------------------------------------

let mul_of_two_num = (num3, num4) => num3 * num4;

let bn = mul_of_two_num(123, 567)

console.log(bn)

//--------------------------------------with return keywords--------------------------------------------------
let mul_of_two_num1 = (num3, num4) => {
    return num3 * num4
}



let ln = mul_of_two_num1(89, 567)

console.log(ln)


//-----------------------------------------default parameter-----------------------------------------------------

let adding_of_three_number = (num1, num2, num3) => {
    return num1 + num2 + num3
}

let out = adding_of_three_number(12, 45)
console.log(out) //NaN

//-----------------------------------------------------------------------------------------------------------

let adding1_of_three_number = (num1, num2, num3 = 89) => {
    return num1 + num2 + num3
}

let out1 = adding1_of_three_number(12, 45)
console.log(out1)

//---------------------------------------------------------------------------------------------------------------

let adding3_of_three_number = (num1, num2, num3 = 89) => {
    return num1 + num2 + num3
}

let out3 = adding1_of_three_number(12, 45, 45)
console.log(out3)

// DIFFRENCE  "this" KEYWORDS B/W noraml function and in arrow function
//agar aap arrow function k sath this keyword use kr rhe ho tb wo ek window object return krega 
//simple kr rhe ho tb wo us object ko hi return krega jis apne call kiya h 

let obj = {
    "name": "safia",
    "age": 24,
    "qual": "B.tech",
    adr: function () {
        console.log(this.name)
    }
}

obj.adr()
//----------------------------------------------------------

let obj1 = {
    "name": "safia",
    "age": 24,
    "qual": "B.tech",
    adr: () => {
        console.log(this)
    }
}

obj1.adr()

//----------------------------------  CALLBACK FUNCTION -------------------------------------------------------

//koi function kisi ar k function k parameter mai jakr use ho rha h

let Display_sum_D_Result = (res) => {
    return res
}


//result is a call back function
let sum_D = (num1, num2, result) => {
    return result(num1 + num2)

}

let rg = sum_D(20, 40, Display_sum_D_Result)
console.log(rg);


//------------------------------------------------ ForEach ---------------------------------------------------
//(v,i) -->call back function hai jo ki as a parameter use ho rha h
//ye existing array pr hi change kr dega 
lm = [23, 45, 78, 90, 100, 408, 123]

lm.forEach((v, i) => {
    console.log(`your value is ${v} and your index value is ${i}`)
});

//-------------------------------------- map function ------------------------------------------------------------

//existing array per koi change nhi krega new array dega
let bh = [10, 20, 30, 40, 50]

console.log(bh)

let finalAns = bh.map((v, i) => v + 5) //Array


console.log(finalAns);

//------------------------------------------------------------------------------------------------------------
let gh = [10, 20, 30, 40, 50]



let finalAns1 = bh.map((v, i) => {
    return v + 20
})


console.log(finalAns1);

//-------------------------------------- filter method ----------------------------------------------------------

let op = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

let filter_Data = op.filter((v, i) => {
    return (v % 2 == 0);


})

console.log(filter_Data)

//-------------------------------------------- Reduce Function---------------------------------------------------

//ek singal value ayegi

let u = [10, 20, 30, 40, 50]

let red_fun = u.reduce((total, v, i) => total + v)

console.log(red_fun);