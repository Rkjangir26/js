let userscore= 0;
let computerscore =0;

const choices= document.querySelectorAll(".choice")

const msg= document.querySelector("#msg")
let userscorepara= document.querySelector("#userscore");

let compscorepara= document.querySelector("#computerscore");



const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const i = Math.floor( Math.random()* 3);
    return options[i];

};

const drawGame=( )=>{
   
    msg.innerText ="draw";
    msg.style.backgroundColor=" rgb(6, 6, 17)";

    
}

const showWinner =(userWin) =>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;

       
        msg.innerText ="you win";
        msg.style.backgroundColor="green";
        

      
    }
    else{
        computerscore++;
        compscorepara.innerText=computerscore;
        
    msg.innerText ="you loose";
    msg.style.backgroundColor="red";

   

}
}

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);


    if(userChoice === compChoice){
    //draw game
    drawGame();}

    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper"? false :true;


        }
        else if(userChoice ==="paper"){
            userWin = compChoice ==="scissors"? false:true;

        }
        else{
            userWin =compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    
    }



};



choices.forEach((choices) =>{
    choices.addEventListener("click",()=>{
      const userChoice = choices.getAttribute("id");
      playGame(userChoice);


    });
});