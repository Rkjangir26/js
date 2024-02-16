
// let name=["ravi", "harsh", "deepak" ,"jatin"]

// // for(i=0; i<name.length;i++){
// //     console.log(name[i]);
// // }
// // let i=0;

// // while(i<name.length){
// //     console.log(name[i]);
// //     i++;
 

// // }

// for(let bhai of name){

//     console.log(bhai.toUpperCase());
// }
// let i=0;
// let sum=0;

// let marks=[85,97,44,37,76,60];
// for(i=0;i<marks.length;i++){
//     sum = sum+ marks[i]/marks.length
// }
// console.log(sum)

// while(i<marks.length){
//     sum= sum + marks[i]/marks.length;
//     i++;



// }
// console.log(sum);
 

// let price = [250,645,300,900,50];
// let offer;

// for(i=0;i<price.length;i++){
//     let offer = price[i]/10;

//     price[i]= price[i]-offer;
// }
// console.log(price)

// let i=0;


// while(i<price.length){
//      let offer= price[i]/10;
//      price[i]=price[i]-offer;

//      i++;

// }
// console.log(price)

// let i=0;

// for(let val of price){
//     console.log(`vaule at index ${i} =${val}`)

//     let offer= price[i]/10;
//           price[i]=price[i]-offer;

//           console.log(`vale after offer= ${price[i]}`)
//           i++;

// }
// console.log(price);


// let price = [250,645,300,900,50];
// let name =["ravi","kumar"];

// // price.push(56,48,78);

// // price.pop()
//    let rk = name.unshift("kumar");

//    console.log(price.splice(1,2,45,45));

//    console.log(price)

// console.log(price.toString());


let com =["bloom","mic","uber","google","ibm","net"];
com2 = com.shift("bloom");
console.log(com);

com2= com.splice(1,1,"ola");

console.log(com);

com2 = com.push("amazon")
console.log(com)

console.log(com.toUpperCase());
console.log(com);

