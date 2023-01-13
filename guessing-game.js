const readline = require("readline");

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let secretNumber;
let numAttempts;

const randomNum = (min, max) => {
    return Math.round(Math.random() * (max - min))
}


const playAGame = () => {
    
      function games(){
        console.log('Let me rephrase... you will play a game...');
    }
    rl.question(`Would you like to play a game? `, greeting => {
        
      
        setTimeout(games, 2000);
        
        setTimeout(askLimit, 3000);
    })
}



const askLimit = () => {
    
    // function attempt(){
    //     console.log(`Your attempts: ${numAttempts}`)
    // }
   
    // setTimeout(attempt, 3000)
    rl.question(`Enter Your Attempts: `, attempts => {
        
        
        numAttempts = attempts;
    
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
        console.log(`Oh no, you're too high.`);
        return false;
    }
    if (n < secretNumber) {
        console.log(`Oh no, you're too Low.`);
        return false;
    } else {
        console.log(`Correct!`);
        return true;
    }
}




const iLied = () => {
    

function luck(){
console.log(`... good luck >:)`)
}

    rl.question(`Come on, take a guess: `, lying => {
        
        console.log(`I may have lied...`)
        setTimeout(luck, 3000);
        
         setTimeout(askGuess, 4000); 
    })
  
}





const askGuess = () => {
  
rl.question("Enter a guess: ", answer => {
   
    
    if (numAttempts === 1) {
        console.log('You Lose... :(')
        // playAgain()
       
        // rl.close()
    } else if (checkGuess(Number(answer))) {
        console.log('You Win!')
        playAgain()
       
        // rl.close()
    } else {
        askGuess();
        --numAttempts;
        // playAgain()

        if(numAttempts === 0){
            
            console.log('Better luck next time!')
           playAgain()
        }
        
        
    }     
    playAgain()
});
} 

const playAgain = () => {
    
     rl.question(`Please play Again `, goodbye => {
            
                console.log('see ya!')
              rl.close()
            
        })
      
    }
  

playAGame();


