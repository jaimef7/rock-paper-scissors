let getHumanScore = 0;
let GetComputerscore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random()* 3);

    switch (choice) {
        case 0:
            return "rock";
        
        case 1: 
            return "paper";

        case 2:
            return "scissors";   
        default:
            return null;
    }
}
  function getHumanChoice (){
    let answer = prompt("Choose Rock, Paper, or Scissors! ")
    let choice = answer.toLowerCase()
    switch(choice) {
        case "rock":
        case "paper":
        case "scissors":
            return choice; 
        
    }
  }

  function playRound (humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "its a tie!";
    } else if ((humanChoice ==="rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice ==="rock") || (humanChoice ==="scissors" && computerChoice === "paper")){
        getHumanScore++ ;
        return `Yay you win ${humanChoice} beats ${computerChoice}`;
    }else {
        GetComputerscore++;
        return `oh no Computer Wins ${computerChoice} beats ${humanChoice}`;
    }

  }

  function playGame(){

    for(let i=0; i<=4;i++){
        const humanChoice =getHumanChoice();
        const computerChoice =getComputerChoice();

        const result = playRound(humanChoice,computerChoice);
        console.log(result);
    }
    console.log(`Human: ${getHumanScore}`);
    console.log(`Computer: ${GetComputerscore}`);

    if(GetComputerscore > getHumanScore){
        return "you lost!";
    }else if(GetComputerscore < getHumanScore){
        return "you won!";
    }else{
        return "you lost";
    }

  }
  console.log(playGame());

