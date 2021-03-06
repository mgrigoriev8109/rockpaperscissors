let computerSelection = 0;
let playerSelection = "";
let resultOfRound = "";
let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} 
/* function that uses .random to generate number from 0-1, multiply it by 
parameter, and round that number down using .floor, so getRandomInt(3) would
yield either 0, 1, or 2 */

function computerPlay(randomInt) {
        switch (randomInt){
            case 0: return 'rock'; break;
            case 1: return 'paper'; break;
            case 2: return 'scissors'; break;
        }
    } 
// function that inputs randomly generated number and yields computer choice

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock': resultOfRound = "tie"; return "You have tied! Rock ties with rock!"; break;
                case 'paper': computerScore++; resultOfRound = "loss"; return "You have lost! Rock loses to paper!"; break;
                case 'scissors': playerScore++; resultOfRound = "win"; return "You have won! Rock beats scissors!"; break;
            }
            break;
        case 'paper':
        switch(computerSelection){
                case 'paper': resultOfRound = "tie"; return "You have tied! Paper ties with paper!"; break;
                case 'scissors': computerScore++; resultOfRound = "loss"; return "You have lost! Paper loses to scissors!"; break;
                case 'rock': playerScore++; resultOfRound = "win"; return "You have won! Paper beats rock!"; break;
            }
            break;
        case 'scissors':
        switch(computerSelection){
                case 'scissors': resultOfRound = "tie"; return "You have tied! Scissors ties with scissors!"; break;
                case 'rock': computerScore++; resultOfRound = "loss"; return "You have lost! Scissors loses to rock!"; break;
                case 'paper': playerScore++; resultOfRound = "win"; return "You have won! Scissors beats paper!"; break;
            }
            break;
    }
} 

const results = document.querySelector('#results');
const runningScorePlayer = document.querySelector('#runningScorePlayer');
const runningScoreComputer = document.querySelector('#runningScoreComputer');
const rockPlayerBtn = document.querySelector('#rockPlayerBtn');
const paperPlayerBtn = document.querySelector('#paperPlayerBtn');
const scissorsPlayerBtn = document.querySelector('#scissorsPlayerBtn');
const finalWinner = document.querySelector('#finalWinner');

rockPlayerBtn.addEventListener('click', () => {
    computerSelection = computerPlay(getRandomInt(3));
    results.textContent = 'And this round... : ' + playRound('rock', computerSelection);
    
    if (resultOfRound=="win" && playerScore<5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
    } else if (resultOfRound=="loss" && computerScore<5) {
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
    } else if (playerScore==5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
        finalWinner.textContent = "You have won after five rounds!";
    } else if (computerScore==5) { 
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
        finalWinner.textContent = "The Computer has won after five rounds!";
    }
});

paperPlayerBtn.addEventListener('click', () => {
    computerSelection = computerPlay(getRandomInt(3));
    results.textContent = 'And this round... : ' + playRound('paper', computerSelection);
    
    if (resultOfRound=="win" && playerScore<5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
    } else if (resultOfRound=="loss" && computerScore<5) {
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
    } else if (playerScore==5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
        finalWinner.textContent = "You have won after five rounds!";
    } else if (computerScore==5){ 
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
        finalWinner.textContent = "The Computer has won after five rounds!";
    }
});        

scissorsPlayerBtn.addEventListener('click', () => {
    computerSelection = computerPlay(getRandomInt(3));
    results.textContent = 'And this round... : ' + playRound('scissors', computerSelection);
    
    if (resultOfRound=="win" && playerScore<5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
    } else if (resultOfRound=="loss" && computerScore<5) {
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
    } else if (playerScore==5) {
        runningScorePlayer.textContent = 'Your Score: ' + playerScore;
        finalWinner.textContent = "You have won after five rounds!";
    } else if (computerScore==5) { 
        runningScoreComputer.textContent = 'Computer Score: ' +computerScore;
        finalWinner.textContent = "The Computer has won after five rounds!";
    }
});

