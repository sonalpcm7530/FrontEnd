let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const  genCompChoice=()=>{
    //rock paper scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    console.log("Draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You win!");
    msg.innerText="You Win! $(userChoice) beats $(compChoice)";
    msg.style.backgroundColor="green";
 }else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You loose!");
    msg.innerText="You loose! $(compChoice) beats $(userChoice)";
    msg.style.backgroundColor="red";
 }
}
const playGame=(userChoice)=>{
 console.log("user choice= ",userChoice);
 //generate computer Choice
 const compChoice=genCompChoice();
 console.log("comp choice= ",compChoice);
 if(userChoice===compChoice){
    drawGame();
 }else{
    let userWin=true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false:true; 
    }
    if(userChoice==="paper"){
        userWin=compChoice==="Scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }

}
choices.forEach((choice) => {
    console.log(choice);
   choice.addEventListener("click",() => {
    const userChoice=choice.getAttribute("id");
      console.log("Choice was Clicked",userChoice);
      playGame(userChoice);
   });
});

