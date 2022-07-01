// alert('Hello');

// const rockBtn = document.getElementsByClassName('rock');
// rockBtn.addEventListener("click", function(){ alert("Hello World!"); }); 
// rockBtn.addEventListener('click', function(e){
//     console.log(e);
// });
// const rockBtn = document.getElementById('btnRock');
// rockBtn.addEventListener("click", function(){ alert("Hello World!"); }); 


// const rockBtn = document.querySelector('.btn');
// rockBtn.addEventListener("click", function(){ alert("Hello World!"); }); 
// rockBtn.addEventListener('click', function(e){
//         console.log(e);
//      });





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
function playRound(playerSelection, computerInput){
    let playerSelect = caseInsensitive(playerSelection);
    let winner;
    // console.log(playerSelect);
    // let computerSelection = computerPlay();
    let computerSelection = computerInput;
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

function game(){
//     let allButtons = document.querySelectorAll('button[class^=btn]');
//     console.log("Found", allButtons.length, "div which class starts with “button”.");

//     for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener('click', function() {
//     console.clear();
//     console.log("You clicked:", this.innerHTML);
    
//   });
// }


    let numberOfPlayerWins = 0;
    let numberOfComputerWins = 0;
    for (let i=0; i<5; i++){
        //let playerInput = prompt("Enter: Rock, paper, scissors");  
        let computerInput = computerPlay();
        console.log('Computer input: ' + computerInput);
        let playerInput = buttonClickFunction();
        console.log('Player input: ' + playerInput);
       
        
        let checkWins = checkWinnerOfRound(playRound(playerInput,computerInput));
        if (checkWins === 0){
            numberOfPlayerWins++;
        }   else if (checkWins === 2){
            numberOfComputerWins ++;
        }
    }
    checkWinnerOfGame(numberOfPlayerWins, numberOfComputerWins);
    console.log('Number of player wins:' + numberOfPlayerWins);
    console.log('Number of computer wins:' + numberOfComputerWins);
}

    let allButtons = document.querySelectorAll('button[class^=btn]');
    console.log("Found", allButtons.length, "div which class starts with “button”.");
    let computerInput = computerPlay();
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
        console.clear();
        console.log("You clicked:", this.innerHTML);
        let playerInput = this.innerHTML;
        console.log('Computer input: ' + computerInput);
        if (document.querySelectorAll('button[class^=btn]').clicked == true){
            playRound(playerInput,computerInput);
        }
        
        console.log('Player input: ' + playerInput);
      });
     
      
      
      
    }


function buttonClickFunction(){
    
    let allButtons = document.querySelectorAll('button[class^=btn]');
    console.log("Found", allButtons.length, "div which class starts with “button”.");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
        console.clear();
        console.log("You clicked:", this.innerHTML);
        let playerInput = this.innerHTML;
      });
      return playerInput;
    }
}
function checkWinnerOfGame(numberOfPlayerWins, numberOfComputerWins){
    if (numberOfComputerWins > numberOfPlayerWins){
        alert('Computer won');
    }   else if (numberOfPlayerWins > numberOfComputerWins){
        alert('You won');
    }   else{
        alert('Its a tie');
    }
}

function checkWinnerOfRound(playRound){
    let substr = playRound.substring(4,7);
    const win = 0;
    const tie = 1;
    const lose = 2;
    if (playRound === 'Tie'){
        return tie;
    }
    else if ( substr === 'win'){
        return win;
    }else {
        return lose;
    }
}
