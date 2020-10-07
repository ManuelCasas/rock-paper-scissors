        let playerScore = 0;
        let pcScore = 0;
        let div = document.createElement('div');
        document.body.appendChild(div);
        
      

        
        
        
         function computerPlay(){
        const myArray = ["rock", "paper" , "scissors"] 
        return myArray[Math.floor(Math.random()*myArray.length)];
        }  
    
        function win(){
           
            playerScore++;
            let p = document.createElement('p');
            let divWin = document.createTextNode("Player Wins!!")
            p.appendChild(divWin)
            div.appendChild(p)
            
             let playerPoints = document.createElement('p');
            let playerContent = document.createTextNode('Player: ' + playerScore);
            playerPoints.appendChild(playerContent);
            div.appendChild(playerPoints);

            if (playerScore == 5){
                let p1 = document.createElement('p');
                let playerWins = document.createTextNode('PLAYER WINS THE GAME');
                p1.appendChild(playerWins);
                div.appendChild(p1);
                
            }
            else{
                return console.log("Player Wins!!")
            }
        }
        
        function loss(){

            pcScore++;
            let p = document.createElement('p');
            let divLoss = document.createTextNode("Player Lost!")
            p.appendChild(divLoss)
            div.appendChild(p)

            let pcPoints = document.createElement('p');
            let pContent = document.createTextNode('PC: ' + pcScore);
            pcPoints.appendChild(pContent);
            div.appendChild(pcPoints);
           
            if (pcScore == 5){
                let p1 = document.createElement('p');
                let pcWinner = document.createTextNode("PC WINS THE GAME!")
                p1.appendChild(pcWinner)
                div.appendChild(p1)
            
                
            }
            else{
                return console.log("Player Lost!")
            }
         }

        function draw(){
            let p = document.createElement('p');
            let divDraw = document.createTextNode("It's a Draw!")
            p.appendChild(divDraw)
            div.appendChild(p)
            return console.log("It's a Draw!")
            
        }
            
        function playRound(computer, player){
            let player1 = player.toLowerCase();
            let computer1 = computer.toLowerCase();
            switch (computer1 + player1){
                
                case 'rockscissors':
                case 'paperrock':
                case 'scissorspaper':
                return loss();
                break;
                case 'scissorsrock':
                case 'rockpaper':
                case 'papersccissors':
                return win();
                break;
                case 'paperpaper':
                case 'rockrock':
                case 'scissorsscissors':
                return draw();
                break;
                default:
                alert("Invalid input , Try Again!")
                break;
                
            }
        }
        function playGame(){
            for (i=0; i >=5; i++){
               let games = games + ' ' + playRound(computerPlay(), playerInput);
               return games;
            }
            
        }

        document.getElementById('rock').addEventListener('click', function(){
            playRound(computerPlay(), 'rock')
        })
        document.getElementById('paper').addEventListener('click', function(){
            playRound(computerPlay(), 'paper')
        })
        document.getElementById('scissors').addEventListener('click', function(){
            playRound(computerPlay(), 'scissors')
        })

        let playerInput = prompt("Please enter Rock , Paper , or Scissors")
        playRound(computerPlay(), playerInput)

        
        
    