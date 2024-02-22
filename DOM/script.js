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


// let divs =document.querySelectorAll("div");
// // console.log(div)

// // div[0].innerText ="hii";

// let i=0;

// for(let div of divs ){

//     div.innerText =`rkjangir = ${i}`;
//     i++;
    
// }


// let div = document.querySelector("div");
// console.log(div);


// let id =div.getAttribute("id");

// console.log(id);

// let para =document.querySelector("p");

// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","1256"))



// let div = document.querySelector("div");

// console.log(div);
// div.style.backgroundColor ="red";


// div.style.fontSize="50px";


// div.innerText="Rkjangir";

// div.style.visibility="hidden";
// div.style.visibility="hidden";


// let newButton = document.createElement("Button")

// newButton.innertext= "click here";
// console.log(newButton);


// let div = document.querySelector("div");

// div.after(newButton);

// let b = document.querySelector("Button");


// Button.style.width="20px";

// console.log(b);


// let newHeading = document.createElement("heading");

// newHeading.innerText ="Rkjangir is on way";

// document.querySelector("body").prepend(newHeading);

// let bod= document.querySelector("newHeading")
// newHeading.style.fontSize="50px";


// document.querySelector("p").remove();

// let name= document.createElement("div");

// name.innerText="jalodiya";
// document.querySelector("div")

// console.log(name)






// let content = document.querySelector("p");


// let btn = document.querySelector("#btn");
// btn.onclick = (e) =>{

//     console.log(e);
//     console.log(e.target);
//     // console.log("btn was clicked" );

//     // let a=45;
//     // a++;
//     // console.log(a)

// }

// const har3=()=>{
//     console.log("button was clicked 3")
// };
// btn.addEventListener("click",()=>{
//     console.log("button was clicked 1")
// });
// btn.addEventListener("click",()=>{
//     console.log("button was clicked 2")
// });
// btn.addEventListener("click",har3);

// btn.addEventListener("click",()=>{
//     console.log("button was clicked 4")
// });

// btn.removeEventListener("click",har3)

// let btn = document.querySelector("#btn");
// let currMode="light";


// btn.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor="white";


//     }

//     console.log(currMode);




// })
let mode=document.querySelector("#btn")

let current ="light";
let body =document.querySelector("body");

mode.addEventListener("click", ()=>{
    if(current ==="light"){
        current="dark";
        body.classList.add("black");
        body.classList.remove("white");
       


    }else{
        current="light";
        body.classList.add("white");
        body.classList.remove("black");



    }
    
    

});
console.log(current);










