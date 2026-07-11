let getHumanScore = 0;
let GetComputerscore = 0;
const humanChoice =getHumanChoice();
const computerChoice =getComputerChoice();


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
        return "Yay you win" 
    }else {
        GetComputerscore++;
        return "oh no Computer Wins";
    }

  }
  console.log(playRound( humanChoice, computerChoice));

