let str1="        rk      ";
let str2="jangir";
console.log(str1.length);
console.log(str1[0]);

//template literals

let special=`rkjangirjalodiya`;
console.log(special);


let obj ={
    item: "pen",
    price: 41,
};

let output=`the cost of ${obj.item} is ${5*7+8*9} rupees`
console.log(output)
console.log("the cost \n of" ,obj.item,"is",obj.price,"ruppe");

str1.trim()

let username = prompt("enter your full name")
let size = username.length;

console.log("@" +username+size)