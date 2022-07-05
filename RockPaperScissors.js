
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 0;
container.appendChild(content);

const containerComputer = document.querySelector('#containerComputer');
const content2 = document.createElement('div');
content2.classList.add('content2');
content2.textContent = 0;
containerComputer.appendChild(content2);

const resultContainer = document.querySelector('#resultContainer');
const contentResult = document.createElement('div');
contentResult.classList.add('contentResult');

resultContainer.appendChild(contentResult);
// resultContainer.appendChild(contentResult);

let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;


function computerPlay(){
    const RPC = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
     let computerAnswer = RPC[randomNumber];
    return computerAnswer;
}

function caseInsensitive(userInput){
    
    let firstUpperCase = userInput.toUpperCase();
    let firstChar = firstUpperCase.substring(0,1);
    let restOfInput = firstUpperCase.substring(1).toLowerCase();
    firstUpperCase = firstChar + restOfInput;
    
    return firstUpperCase;

}
function playRound(playerSelection, computerInput){
    let playerSelect = caseInsensitive(playerSelection);
    let winner;
    
    let computerSelection = computerInput;
    
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
        contentResult.textContent = 'You win! Rock crushes Scissors';
      
        return 'You win! Rock crushes Scissors';
    }   else if (compSelect === 'Rock'){
        contentResult.textContent = 'Tie';
        return 'Tie';
    }   else if (compSelect == 'Paper'){
        contentResult.textContent = 'You lose! Paper covers Rock';
        return 'You lose! Paper covers Rock';
    }   else return 'No es bueno';
    
}
function paperPlay(compSelect){
    if (compSelect === 'Rock'){
        contentResult.textContent = 'You win! Paper covers Rock';
    return 'You win! Paper covers Rock';
}   else if (compSelect === 'Paper'){
    contentResult.textContent = 'Tie';
    return 'Tie';
}   else if (compSelect === 'Scissors'){
    contentResult.textContent = 'You lose! Scissors cut Paper';
    return 'You lose! Scissors cut Paper';
}   else return 'No es bueno';

}
function scissorsPlay(compSelect){
    if (compSelect === 'Paper'){
        contentResult.textContent = 'You win! Scissors cut Paper';
    return 'You win! Scissors cut Paper';
}   else if (compSelect === 'Scissors'){
    contentResult.textContent = 'Tie';
    return 'Tie';
}   else if ((compSelect === 'Rock')){
    contentResult.textContent = 'You lose! Rock crushes Scissors';
    return 'You lose! Rock crushes Scissors';
}   else return 'No es bueno';
}

function startGame(playerInputStart){

    if (playerInputStart === undefined){

    let allButtons = document.querySelectorAll('button[class^=btn]');
    // console.log("Found", allButtons.length, "div which class starts with “btn”.");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
        console.clear();
        // console.log("You clicked:", this.innerHTML);
        let playerInput = this.innerHTML;               
             });
         }
    if (playerInput === undefined){

        // console.log("Player input undefined:", playerInputStart);
        firstToFiveWins(playerInput);
    }

}   else{
        // console.log("Player input defined:", playerInputStart);
        firstToFiveWins(playerInputStart);
    }


}

function firstToFiveWins(playerInputClick){
    // console.log('Player input click from start game: ' + playerInputClick);
    contentResult.style.color = 'black';
        let computerInput = computerPlay();
        // console.log('Computer input: ' + computerInput);
        let checkWins = checkWinnerOfRound(playRound(playerInputClick,computerInput));
        if (checkWins === 0){
            numberOfPlayerWins++;
        }   else if (checkWins === 2){
            numberOfComputerWins ++;
        }
        content.textContent = numberOfPlayerWins;
        content2.textContent = numberOfComputerWins;
        // console.log('number of player wins: ',numberOfPlayerWins )
        // console.log('number of computer wins: ',numberOfComputerWins )
        checkWinner(numberOfPlayerWins,numberOfComputerWins);
    }

function checkWinner(numberOfPlayerWins,numberOfComputerWins){
    if (numberOfPlayerWins === 5){
        contentResult.style.color = 'green';
        contentResult.textContent = 'Congratulations you won the game';
       restart();
        
    }else if (numberOfComputerWins === 5){
        contentResult.style.color = 'red';
        contentResult.textContent = 'You lost the game to a computer';
        restart();
    }
}
function restart(){
    numberOfComputerWins = 0;
    numberOfPlayerWins = 0;
    content.textContent = 0;
    content2.textContent = 0;
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
