const readline = require("readline");

const rl = readline.createInterface({input: process.stdin, ouput: process.stdout});

let secretNumber;
let numAttempts = 5;

const randomNum = (min, max) => {
    return Math.round(Math.random() * (max - min))
}


const playAGame = () => {
    console.log("Hello...")
    rl.question(`Let's Play a Game: `, greeting => {
        console.log(` Would you like to play a game?`);
        
        askLimit();
    })
}



const askLimit = () => {
    function games(){
        console.log('Let me rephrase... you will play a game...');
    }
    function attempt(){
        console.log(` Your attempts: ${numAttempts}`)
    }
    function minMax(){
        console.log('Please enter a min and max number')
    }
    
    rl.question(`Enter number of attempts: `, attempts => {
        setTimeout(games, 2000)
        setTimeout(attempt, 4000);
        numAttempts = 5;
        setTimeout(minMax, 5000)
        askRange();  
    })

}


const askRange = () => {60

    rl.question(`Enter a max number: `, min => {
       
        rl.question(`Enter a min number: `, max => {
            console.log(`I'm thinking of a number between ${min} and ${max} ...`);
            secretNumber = randomNum(min, max);
            iLied();
        })
    })
}



const checkGuess = (n) => {
    if (n > secretNumber) {
        console.log(`Too high.`);
        return false;
    }
    if (n < secretNumber) {
        console.log(`Too Low.`);
        return false;
    } else {
        console.log(`Correct!`);
        return true;
    }
}




const iLied = () => {
    
    function lie(){
    console.log(`I may have lied...`)
}
function luck(){
console.log(`... good luck >:)`)
}
    rl.question(`Taunting: `, lying => {
        setTimeout(lie, 2000)
        setTimeout(luck, 4000);
        console.log(`Guess it if you can...`)
         askGuess(); 
    })
  
}











const askGuess = () => {
  
rl.question("Enter a guess", answer => {
   
    
    if (numAttempts === 1) {
        console.log('You lose!');
        // rl.close();
    }
     if (checkGuess(Number(answer))) {
        console.log('You win!')
        // rl.close();
    } else {
        askGuess();
        --numAttempts;
    }

    endOfGame();
});
}

const endOfGame = () => {

    rl.question(`Exit application: `, done => {
        console.log("Let's play again sometime!")
           rl.close()    
    })
}

playAGame();

