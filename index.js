function getComputerChoice(){
const randomNumber=Math.floor((Math.random()*3))+1
if(randomNumber==1){
    return "Rock";
}
else if(randomNumber==2){
    return "Paper";
}
else{
    return "Scissors"
}
}
function getHumanChoice(){
    let humanChoice=Number(prompt(`Choose a Number:
        1:ROCK
        2:PAPER
        3:SCISSORS`))
        if(humanChoice<1 || humanChoice >3)
            humanChoice=getHumanChoice();
        
        if(humanChoice===1)
            humanChoice="Rock";
        else if(humanChoice===2)
            humanChoice="Paper"
        else
           humanChoice="Scissors"
    return humanChoice;
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    function playRound(human,computer){
        if(human===computer){
            console.log("Draw!")
        }
        else if(human==="Rock" && computer==="Scissors"){
            console.log("You won! Rock beats scissors.")
            humanScore+=10
        }
        else if(human==="Paper" && computer==="Rock"){
            console.log("You won! Paper beats rock.")
            humanScore+=10
        }
        else if(human=="Scissors" && computer==="Paper"){
            console.log("You won! Scissors beats Paper.")
            humanScore+=10
        }
        else{
            console.log(`You lose! ${computer} beats ${human}.`)
            computerScore+=10
        }
        
        }
        for(let i=0;i<5;i++){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection,computerSelection)
            }
if(humanScore>computerScore)
    console.log(`You won the series with scores of: You ${humanScore}-${computerScore} Computer`)
else if(humanScore<computerScore)
    console.log(`You lost the series with scores of: You ${humanScore}-${computerScore} Computer`)
else 
 console.log(`Series Draw! with scores of: You ${humanScore}-${computerScore} Computer`)
       
}

