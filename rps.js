  
var playerWin = 0;
var computerWin = 0;
​
function playGame(player1, computer2, playUntil){
    
    
    while(playerWin < playUntil && computerWin < playUntil){
        // choice[0] = 'rock', choice[1] = 'paper', choice[2] = 'scissors'
        var choice = ['rock', 'paper', 'scissors']; 
​
        function getChoice() {
​
            let rand = Math.random();
​
            if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
        }
​
        var computerChoice = getChoice();
        var userChoice = getChoice();
​
        console.log(player1 + ' you have ' + playerWin)
        console.log(computer2 + ' you have ' + computerWin)
​
        function compare() {
            if(computerChoice == userChoice){
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
            }
​
            if(computerChoice == 'rock'){
                if(userChoice == 'scissors'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
            if(computerChoice == 'paper'){
                if(userChoice == 'rock'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
​
            if(computerChoice == 'scissors'){
                if(userChoice == 'paper'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
        }
​
        console.log(compare());
    }
​
    console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
}
​
playGame('Rich', 'Computer', 5);
​
// console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
















