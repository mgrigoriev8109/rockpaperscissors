           let computerSelection = 0;
        let playerSelection = "";
        playerSelection = playerSelection.toLowerCase();
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
                        case 'paper': resultOfRound = "loss"; return "You have lost! Rock loses to paper!"; break;
                        case 'scissors':resultOfRound = "win"; return "You have won! Rock beats scissors!"; break;
                    }
                    break;
                case 'paper':
                switch(computerSelection){
                        case 'paper': resultOfRound = "tie"; return "You have tied! Paper ties with paper!"; break;
                        case 'scissors': resultOfRound = "loss"; return "You have lost! Paper loses to scissors!"; break;
                        case 'rock': resultOfRound = "win"; return "You have won! Paper beats rock!"; break;
                    }
                    break;
                case 'scissors':
                switch(computerSelection){
                        case 'scissors': resultOfRound = "tie"; return "You have tied! Scissors ties with scissors!"; break;
                        case 'rock': resultOfRound = "loss"; return "You have lost! Scissors loses to rock!"; break;
                        case 'paper': resultOfRound = "win"; return "You have won! Scissors beats paper!"; break;
                    }
                    break;
            }
        } 
        /*nested switch expressions first assess the playerSelection, which will be provided
        via prompt in the game() function, and based off of player choice then assesses computerSelection
        which is randomly generated in the game() function to create a loss, tie, or win 

        function game(){
            for (let i = 0; i<5; i++){
                computerSelection = computerPlay(getRandomInt(3));
                playerSelection = prompt("Do you choose rock, paper, or scissors?");
                playRound(playerSelection, computerSelection);
                console.log(playRound(playerSelection, computerSelection));
                switch(resultOfRound){
                    case 'tie': break;
                    case 'loss': computerScore++; break;
                    case 'win': playerScore++; break;
                }
            } 
            /*game function runs a for loop 5 times using i to keep track of rounds, 
            each round determines winner (or tie) and adds to winner's score

            if (playerScore > computerScore) {
                console.log("You have won the game after playing 5 round!");
            } else if ( playerScore < computerScore){
                console.log("You have lost the game after playing 5 round!");
            } else {
                console.log("You and the computer have tied, friendship wins!");
            } 
            /*after the for loop runs 5 times if conditional compares the scores, and
            tells the player what the results of the game are after 5 rounds 
        }
        
        game()
*/

        const results = document.querySelector('#results');

        const rockPlayerBtn = document.querySelector('#rockPlayerBtn');
        rockPlayerBtn.addEventListener('click', () => {
            computerSelection = computerPlay(getRandomInt(3));
            results.textContent = 'And this round... : ' + playRound('rock', computerSelection);
        });


        