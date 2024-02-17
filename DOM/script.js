// let heading = document.getElementById("heading");
// console.dir(heading)
// console.log(heading)


//  heading=document.getElementsByClassName("heading");
//  console.dir(heading)
// console.log(heading)


// let para =document.getElementsByTagName("p");
// console.log(para);
// console.dir(para)


// let elements = document.querySelectorAll("h1");
// console.log(elements);
// console.dir(elements)



// let h2 = document.querySelector("h2");



// h2.innerText = h2.innerText + "from rkjangir";
// console.dir(h2.innerText);


let divs =document.querySelectorAll("div");
// console.log(div)

// div[0].innerText ="hii";

let i=0;

for(let div of divs ){

    div.innerText =`rkjangir = ${i}`;
    i++;
    
}

