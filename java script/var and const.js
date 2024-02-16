// name ="ravi";
// isFollow =true;

// console.log(isFollow);

//javascript dynamically typed language
//we ha not to specify any thing to define any thing that we what to define

// = is the assignment operator
// it is assiging value a = b a to be

// variables name are case sensitive
// a and A ex fullname or fullName are different things


//no space is allowed in variable name
// _ , $ , letters and digits are allowed
// _ $ can start variable but numbers can not start with numbers

// reserved words canot be variables names
// console is resevred but Console is not reserved https://www.w3schools.com/js/js_reserved.asp


// "fullName" camel isFollow totalPrice

// let variable cannot be redeclare but can be updated a block scope variable
// let name ="ravikumar jangir";
// console.log(name)


/*
    const  variable cannot be redeclare and updated a block scope variable
    var variable  be redeclare and  updated a global scope variable



{ block }
{
    let a =5;
    console.log(a)
}

{
    let a =56;
    console.log(a)
}


before 2015 var is used

es6 let and const ecam script/modernjs

var age =12;
var age =45;

console.log(age);
in var the last declared will be printed


let age =45;
age=47;
only one variable is updated 

in const you can not update

let a;
varible is declared but no value is assigned it will print undefine


const a;
we must have to initialize by assign it by any value

*/




 /* ****   data type in Js*****

      7 primitive data types: number, string, boolean(isFollow ) , undefined, null, bigInt(123n) , symbol

   typeOf undefined= undefined

   typeof null =obejct

   typeof bigint = bigint




   non primitive 
   objects => arrays , function
   collection of values

   age:45
   nmae:"ravi"

   we make collection 
   const is used for object


*/

// const student ={
//     fullName:"Ravi",
//     age:20,
//     cgpa:7.2,
//     // fullname the variable we are declaring is "key" and 20, 7.2 is value of key

//     // key: value

//     // to access nay key obj.key or obj["key"]
//      // console.log(student.age);


// };

// /*   ++++ here student is an constant variable as we can not change its value but we can change its keys vales by assigning new value to it ++++ */


// student["age"]= student["age"]+1;

//  console.log(student["age"]);



const product ={
     penName : "parker pen",
     rating: 15,
     Price:270,
     offer: 12,



};

console.log(product);


// "abcd"+124= 'abcd124'

const profile ={

    id:"ravikumar",
    isFollow: true,
    message:"message",
    post: "195",
    follwers: 4555558,
    following :4,

    name:"Ravikumarjangir",
    enter:" apnacollege|ex-mx,drdo"

};

console.log(typeof profile.following);



