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

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
const containerComputer = document.querySelector('#containerComputer');

const content2 = document.createElement('div');
content.classList.add('content2');
let numberOfPlayerWins = 0;
let numberOfComputerWins = 0;

// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// startGame();

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
// function firstToFiveWins(){

//     let numberOfPlayerWins = 0;
//     let numberOfComputerWins = 0;

    
//     let allButtons = document.querySelectorAll('button[class^=btn]');
//     console.log("Found", allButtons.length, "div which class starts with “button”.");
    
//     while(numberOfComputerWins < 5 || numberOfPlayerWins < 5){
//         if (document.querySelectorAll('button[class^=btn]').clicked == true){
//             console.log("You clicked:", this.innerHTML);
    
//     let computerInput = computerPlay();
//     for (let i = 0; i < allButtons.length; i++) {
//         allButtons[i].addEventListener('click', function() {
//         console.clear();
//         // console.log("You clicked:", this.innerHTML);
//         // let playerInput = this.innerHTML;
//         console.log('Computer input: ' + computerInput);
//         // if (document.querySelectorAll('button[class^=btn]').clicked == true){
//         //     let checkWins = checkWinnerOfRound(playRound(playerInput,computerInput));
//         // if (checkWins === 0){
//         //     numberOfPlayerWins++;
//         // }   else if (checkWins === 2){
//         //     numberOfComputerWins ++;
//         // }
//         // }
        
//         console.log('Player input: ' + playerInput);
//       });
//       if (document.querySelectorAll('button[class^=btn]').clicked == true){
//         console.log("You clicked:", this.innerHTML);
//         let playerInput = this.innerHTML;
//             let checkWins = checkWinnerOfRound(playRound(playerInput,computerInput));
//         if (checkWins === 0){
//             numberOfPlayerWins++;
//         }   else if (checkWins === 2){
//             numberOfComputerWins ++;
//         }
//         }
//     }
//       content.textContent = numberOfPlayerWins;

//       container.appendChild(content);
//     }  
    
// }


// checkWinnerOfGame(numberOfPlayerWins, numberOfComputerWins);
//     console.log('Number of player wins:' + numberOfPlayerWins);
//     console.log('Number of computer wins:' + numberOfComputerWins);
// }
function startGame(playerInputStart){

    console.log("You clicked:", playerInputStart);
    console.log("Start game:");
    if (playerInputStart === undefined){

    
let allButtons = document.querySelectorAll('button[class^=btn]');
    console.log("Found", allButtons.length, "div which class starts with “btn”.");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
        console.clear();
        console.log("You clicked:", this.innerHTML);
        let playerInput = this.innerHTML;
       
            
        
    
    
        });


        
    }
    if (playerInput === undefined){

        console.log("Player input undefined:", playerInputStart);
        firstToFiveWins(playerInput);

    }

}   else{
        console.log("Player input defined:", playerInputStart);
        firstToFiveWins(playerInputStart);
    }

    // if (document.querySelectorAll('button[class^=btn]').clicked == true){
    //     console.log("first to five clicked :", this.innerHTML);
        
    //     firstToFiveWins(playerInput);
    // }
}


function firstToFiveWins(playerInputClick){
    
    

    console.log('Player input click from start game: ' + playerInputClick);
        let computerInput = computerPlay();
        console.log('Computer input: ' + computerInput);
        let checkWins = checkWinnerOfRound(playRound(playerInputClick,computerInput));
        if (checkWins === 0){
            numberOfPlayerWins++;
        }   else if (checkWins === 2){
            numberOfComputerWins ++;
        }

    
        
        
        content.textContent = numberOfPlayerWins;
        container.appendChild(content);
        content2.textContent = numberOfComputerWins;
        container.appendChild(content2);
        console.log('number of player wins: ',numberOfPlayerWins )
        console.log('number of computer wins: ',numberOfComputerWins )
        checkWinner(numberOfPlayerWins,numberOfComputerWins);
    //   if (numberOfComputerWins < 5 || numberOfPlayerWins < 5){
    //     startGame();
    //   }
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
function checkWinner(numberOfPlayerWins,numberOfComputerWins){
    if (numberOfPlayerWins === 5){
        alert('You won');
       restart();
        
    }else if (numberOfComputerWins === 5){
        alert('Computer won');
        restart();
    }
}
function restart(){
    numberOfComputerWins = 0;
    numberOfPlayerWins = 0;
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
