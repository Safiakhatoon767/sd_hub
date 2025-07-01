//---------------------------collection of data types store in single variable is called array-------------------
let l = [10, 20, 30, 40]

console.log(l);
console.log(l[3]);

//--------------------------------------------secound type to declare array---------------------------------
let m = Array("hello", "safia", 23, 57)
console.log(m[0])

//-----------------------------------------------------third type to declare array-------------------------

const v = new Array("hii", "byee", "tata")
console.log(v[0])

//----------------------------------------------------multidimensional array---------------------------------

let g = [23, 45, 67, 89, 45, [23, 67, 45, 78, 34]]

console.log(g[5][2])

//-----------------------------------------------------------itirate--------------------------------------
let p = [23, 56, 78, 90, 45, 10, 67]

for (let i = 0; i < p.length; i++) {
    console.log(i, p[i])
}

//--------------------------------------------reverse array to print number-------------------------------

let c = [23, 56, 78, 90, 45, 10, 67]

for (let i = c.length; i >= 0; i--) {
    console.log(i, c[i])
}

//--------------------------for of (string,array mai kam krega)and for in(index) loop ----------------------
let h = [12, 78, 65, 43, 56, 78, 9, 34]

for (let value of h) {
    console.log(value)
}

let d = [12, 67, 89, 54, 36, 78, 90]

for (let value in d) {
    console.log(value, d[value])
}

//-----------------------------------------------array methods---------------------------------------------------

//push methods -> last mai element mai add krega

let k = [12, 45, 67, 89, 90, 20]

l.push(11) //1 value v push kr sakte ho and more then one v kr sakte ho
l.push(89, 67)

console.log(l)

let o = [...k]; //copy

console.log(o)

o.push(123);
console.log(o)

//unshif methods - shuru mai value add kr dega

let mi = [89, 67, 90, 45, 678, 453]

mi.unshift(12)

console.log(mi)

//pop -  last mai se value delete kr deta ar ar jo delete krta hai wo return v kr deta hai

let vi = [12, 34, 56, 78, 56, 89]

const ki = vi.pop()

console.log(vi)

console.log(ki)

//shift method - > shuru mai se value delete krta h ar return krta h

let bn = [12, 45, 68, 908, 675]

let rt = bn.shift()

console.log(bn)
console.log(rt)

//to string method(convert your string array to string)
let pn = ["safia", "amir", "najiya", "puja"]

let vh = pn.toString()
console.log(vh, typeof (vh))


//join methods ->ye v string return krta hi but ye option de deta hai apko value kiske sath seprate krna h

let dataJoin = pn.join("|")
console.log(dataJoin, typeof (dataJoin))

//includes methods -> ye basically ye btata h k jo memeber aap dhundh rhe ho wo array mai h ya nhi aur ye boolean value return krta h

let jk = [12, 45, 67, 89, 45, 201]

console.log(jk.includes(23))
console.log(jk.includes(89))


//concat methods

let nm = ["safia", "shakti,", "ayesha", "hyderabad"]
let yu = [12, 56, 78, 90, 123]

let nep = nm.concat(yu)
console.log(nep, typeof (nep));

let bnh = nm + yu
console.log(bnh, typeof (bnh))

//splice --> delete v kr sakte ho add v kr sakte ho aur add mtlb koi element aap beech mai vdal sakte ho
let vgh = [123, 56, 88, 90, 34, 46, 78, 100, 30, 12, 678]

vgh.splice(2, 4) //88, 90, 34, 46

console.log(vgh);

//add beech m using splice

vgh.splice(2, 0, 45, 67, 89) // 2- is a index 0 - means maine koi element delete nhi kiya ar bad baki ko secound index se add kiya 

console.log(vgh)

vgh.splice(1, 2, 1000, 2000)
console.log(vgh)

//slice - > (start,end) -->start value chota hga end value bada hga 

let yup = [12, 4, 5, 67, 89, 10, 456]

let newArray = yup.slice(0, 5)

console.log(newArray)

//flat methods --> mtlb andar ki multidimensional arra ko hata kr ek single array bnata hai

let lo = [1, 4, 6, 7, 80, 34, [23, 67, 45], 33, 77, 99, [123, 456, 789]]

let ol = lo.flat();

console.log(ol)