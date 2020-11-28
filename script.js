let playerGuess = 0;
let playerScore = 0;
let computerScore = 0;
let round = 1;

function addNumber(){
    document.getElementById("playerGuessButtonSubstract").disabled = false;
        if(playerGuess < 9){
            playerGuess +=1;
            document.getElementById("playerGuess").innerHTML = playerGuess;
        }else if (playerGuess==9){
            playerGuess +=1;
            document.getElementById("playerGuess").innerHTML = playerGuess;
            document.getElementById("playerGuessButtonAdd").disabled = true;
        }
    console.log(playerGuess);
}

function substractNumber(){
    document.getElementById("playerGuessButtonAdd").disabled = false;
    if(playerGuess>0+1){
        playerGuess -=1;
        document.getElementById("playerGuess").innerHTML = playerGuess;
    }else if (playerGuess<1+1){
        playerGuess -=1;
        document.getElementById("playerGuess").innerHTML = playerGuess;
        document.getElementById("playerGuessButtonSubstract").disabled = true;  
    }
    console.log(playerGuess);
}

function validateGuess(playerGuess){
    console.log(`Player played ${playerGuess}`);
    document.getElementById("makeGuessButton").disabled = true;
    document.getElementById("playerGuessButtonAdd").disabled = true;
    document.getElementById("playerGuessButtonSubstract").disabled = true; 
    document.getElementById("nextRoundButton").disabled = false;
}

function generateComputerGuess(){
    let computerGuess = 0;
    computerGuess = Math.floor(Math.random()*11);
    console.log(`Computer played ${computerGuess}`);
    document.getElementById("computerGuess").innerHTML = computerGuess;
    return computerGuess;
}

function generateTargetNumber(){
    let targetNumber = Math.floor(Math.random()*11);
    console.log(`Target number is ${targetNumber}`);
    document.getElementById("targetNumber").innerHTML = `Target Number: ${targetNumber}`;
    return targetNumber;
}

function calculateWinner(){
    validateGuess(playerGuess);
    let computerGuess = generateComputerGuess();
    let targetNumber = generateTargetNumber();
    let playersDifference = Math.abs(targetNumber - playerGuess);
    console.log(`The player is ${playersDifference} steps away from target.`);
    let computerDifference = Math.abs(targetNumber - computerGuess);
    console.log(`The computer is ${computerDifference} steps away from target.`);
    if(playersDifference > computerDifference){
        console.log('Computer wins!');
        document.getElementById("computerWinsMessage").innerHTML = "Computer Wins!!"
        computerScore +=1;
        document.getElementById("computerScore").innerHTML = `Score: ${computerScore}`;
    } else if (playersDifference < computerDifference){
        console.log('Player wins!');
        document.getElementById("makeGuessButton").innerHTML = "<span style='color:red;font-size:20px;'>You Win!!</span>";
        playerScore +=1;
        document.getElementById("playerScore").innerHTML = `Score: ${playerScore}`;
    } else if (playersDifference==computerDifference){
        console.log("It's a draw!");
        document.getElementById("drawMessage").innerHTML = "It's a Draw!";
    }

}

function prepareNextRound(){
    round +=1;
    playerGuess = 0;
    computerGuess = 0;
    document.getElementById("round").innerHTML = `Round ${round}`;
    document.getElementById("playerGuess").innerHTML = playerGuess;
    document.getElementById("playerGuessButtonAdd").disabled = false;
    document.getElementById("playerGuessButtonSubstract").disabled = false;
    document.getElementById("computerGuess").innerHTML = '?'; 
    document.getElementById("targetNumber").innerHTML = "Target Number: ?";
    document.getElementById("computerWinsMessage").innerHTML = '';
    document.getElementById("makeGuessButton").innerHTML = "Make a Guess";
    document.getElementById("drawMessage").innerHTML = '';
    document.getElementById("makeGuessButton").disabled = false;
    document.getElementById("nextRoundButton").disabled = true;
}