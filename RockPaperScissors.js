// alert('Hello');
function computerPlay(){
    const RPC = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    // console.log(randomNumber);
    let computerAnswer = RPC[randomNumber];
    // console.log(computerAnswer);
    return computerAnswer;
}
function caseInsensitive(userInput){
    // console.log(userInput);
    let firstUpperCase = userInput.toUpperCase();
    let firstChar = firstUpperCase.substring(0,1);
    let restOfInput = firstUpperCase.substring(1).toLowerCase();
    firstUpperCase = firstChar + restOfInput;
    // console.log(firstUpperCase);
    return firstUpperCase;



}
function playRound(playerSelection, computerPlay){
    let playerSelect = caseInsensitive(playerSelection);
    let winner;
    // console.log(playerSelect);
    let computerSelection = computerPlay();
    // console.log('Compute play = ' + computerSelection);
    if (playerSelect === 'Rock'){
        return winner = rockPlay(computerSelection);
    }   else if (playerSelect === 'Paper'){
        return winner = paperPlay(computerSelection);
    }   else if (playerSelect === 'Scissors'){
        return winner = scissorsPlay(computerSelection);
    }
   
}
function rockPlay(compSelect){
    if (compSelect === 'Scissors'){
        return 'You win! Rock crushes Scissors';
    }   else if (compSelect === 'Rock'){
        return 'Tie';
    }   else if (compSelect == 'Paper'){
        return 'You lose! Paper covers Rock';
    }   else return 'No es bueno';
}
function paperPlay(compSelect){
    if (compSelect === 'Rock'){
    return 'You win! Paper covers Rock';
}   else if (compSelect === 'Paper'){
    return 'Tie';
}   else if (compSelect === 'Scissors'){
    return 'You lose! Scissors cut Paper';
}   else return 'No es bueno';

}
function scissorsPlay(compSelect){
    if (compSelect === 'Paper'){
    return 'You win! Scissors cut Paper';
}   else if (compSelect === 'Scissors'){
    return 'Tie';
}   else if ((compSelect === 'Rock')){
    return 'You lose! Rock crushes Scissors';
}   else return 'No es bueno';
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerPlay());
console.log(playRound(playerSelection, computerPlay));