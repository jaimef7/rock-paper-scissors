
let humanScore = 0;
let computerScore = 0;

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
  function playRound (humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "its a tie!";
    } else if ((humanChoice ==="rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice ==="rock") || (humanChoice ==="scissors" && computerChoice === "paper")){
        humanScore++ ;
        return `Yay you win ${humanChoice} beats ${computerChoice}`;
    }else {
        computerScore++;
        return `oh no Computer Wins ${computerChoice} beats ${humanChoice}`;
    }

  }

  function handleButtonClick(buttonId){
    let humanChoice;

    switch(buttonId) {
        case "btn1" :
            humanChoice = "rock";
            break;
        case "btn2":
            humanChoice = "paper";
            break;
        case "btn3":
            humanChoice = "scissors";
            break;
        default:
            output.textContent = "unkown button clicked "; 
    }
    const result = playRound(humanChoice, getComputerChoice());
    let play = document.getElementById("output");
    output.textContent = play;

    const output = document.createElement("div");
  output.textContent = `human score : ${humanScore} vs computer score : ${computerScore} `
  if(humanScore === 5){
    output.textContent = "you reached 5 points you won!"
  }else if (computerScore ===5 ){
    output.textContent = " computer reached 5 points!"
  }else {
  }
  document.body.appendChild(output);



  }

  document.querySelectorAll("button").forEach (btn => {
    btn.addEventListener("click", () => handleButtonClick(btn.id));
  });
