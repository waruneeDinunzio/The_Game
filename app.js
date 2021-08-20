
const ul = document.querySelector('#show_result_list')  
// create class Game for game
class Game {
    constructor(win, ties, loss, rounds){
        this.win = 0
        this.ties = 0
        this.loss = 0
        this.rounds = 0
    }
// create startGame function
    startGame(){
        // hide first page and show game page
        const hideOverlay = document.getElementById('overlay');
        hideOverlay.style.display = 'none';
        const hideGame = document.getElementById('gamePlaying');
        hideGame.style.display = 'block';
        const rock = 1
        const paper = 2
        const scissors = 3
        // Add eventlistener when user click rock button
        document.getElementById("btn_rock").addEventListener("click",function(){
            // opponent use ramdom to choose rock paper or scissers
            const opponentChoose = Math.floor(Math.random() * 3) + 1
            // You choose rock = 1
            const youChoose= rock
            // Increment rounds by 1 when click
            game.rounds += 1 
            document.getElementById("rock").style.display = 'block'
            document.getElementById("paper").style.display = 'none'
            document.getElementById("scissors").style.display= 'none'
            // call gameResults function
            game.gameResults(opponentChoose)
            if (opponentChoose == rock){
                game.ties +=1
                document.getElementById("opponent_rock").style.display = 'block'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == paper){
                game.loss += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'block'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == scissors){
                game.win += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'block'
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })

        document.getElementById("btn_paper").addEventListener("click",function(){
            const opponentChoose = Math.floor(Math.random() * 3) + 1
            game.rounds += 1
            const youChoose = paper
            document.getElementById("rock").style.display = 'none'
            document.getElementById("paper").style.display = 'block'
            document.getElementById("scissors").style.display= 'none'
            game.gameResults(opponentChoose,youChoose)
            if (opponentChoose == rock){
                game.win +=1
                document.getElementById("opponent_rock").style.display = 'block'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == paper){
                game.ties += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'block'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == scissors){
                game.loss += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'block'
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })

        document.getElementById("btn_scissors").addEventListener("click",function(){
            const opponentChoose = Math.floor(Math.random() * 3) + 1
            game.rounds += 1
            const youChoose = scissors
            // Show scissors's picture
            document.getElementById("rock").style.display = 'none'
            document.getElementById("paper").style.display = 'none'
            document.getElementById("scissors").style.display= 'block'
            game.gameResults(opponentChoose,youChoose)
            if (opponentChoose == rock){
                game.loss +=1
                document.getElementById("opponent_rock").style.display = 'block'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == paper){
                game.win += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'block'
                document.getElementById("opponent_scissors").style.display= 'none'
            }
            if (opponentChoose == scissors){
                game.ties += 1
                document.getElementById("opponent_rock").style.display = 'none'
                document.getElementById("opponent_paper").style.display = 'none'
                document.getElementById("opponent_scissors").style.display= 'block'
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss

        })    
    }

    // Start to play with Patric who is a star fish. His hand can't not do scissor so he just do rock and paper
    startPatrickGame(){
        const hideOverlay = document.getElementById('overlay');
        hideOverlay.style.display = 'none';
        const hideGame = document.getElementById('gamePlaying');
        hideGame.style.display = 'block';
        const rock = 1
        const paper = 2
        const scissors = 3
        
        document.getElementById("btn_rock").addEventListener("click",function(){
            // opponent(Patric) use ramdom to choose rock or paper
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            // you choose rock = 2
            let youChoose= rock
            // Increment rounds by 1 when click
            game.rounds += 1 
            // call gameResults functon
            game.gameResults(opponentChoose,youChoose)
            if (opponentChoose == rock){
                game.ties +=1
            }
            if (opponentChoose == paper){
                game.loss += 1
            }

            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })

        document.getElementById("btn_paper").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            game.rounds += 1
            let youChoose = paper
            game.gameResults(opponentChoose,youChoose)
            if (opponentChoose == rock){
                game.win +=1
            }
            if (opponentChoose == paper){
                game.ties += 1
            }
        
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })
        document.getElementById("btn_scissors").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            game.rounds += 1
            let youChoose = scissors
            game.gameResults(opponentChoose,youChoose)
            if (opponentChoose == rock){
                game.loss +=1
            }
            if (opponentChoose == paper){
                game.win += 1
            }
            
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })
    }
 
    gameResults(opponentChoose,youChoose){
        const rock = 1
        const paper = 2
        const scissors = 3
        let ul = document.getElementById("show_result_list")
        let li = document.createElement("li")
        if (youChoose == rock && opponentChoose==rock) {
            youChoose = "<img src = 'picture/greenRock.jpg'>"
            opponentChoose = "<img src = 'picture/greenRock.jpg'>"  
        }
        if (youChoose == paper && opponentChoose==rock){
            youChoose = "<img src = 'picture/greenPaper.jpg'>"
            opponentChoose = "<img src = 'picture/redRock.jpg'>"
        }
        if (youChoose == scissors && opponentChoose==rock){
            youChoose = "<img src = 'picture/redScissor.jpg'>"
            opponentChoose = "<img src = 'picture/greenRock.jpg'>"
        }
        if (youChoose == rock  && opponentChoose==paper){
            youChoose = "<img src = 'picture/redRock.jpg'>"
            opponentChoose = "<img src = 'picture/greenPaper.jpg'>"
        }
        if (youChoose == paper && opponentChoose==paper){
            youChoose = "<img src = 'picture/greenPaper.jpg'>"
            opponentChoose = "<img src = 'picture/greenPaper.jpg'>"
        }
        if (youChoose == scissors && opponentChoose==paper){
            youChoose = "<img src = 'picture/greenScissor.jpg'>"
            opponentChoose = "<img src = 'picture/redPaper.jpg'>"
        }
        if (youChoose == rock  && opponentChoose==scissors){
            youChoose = "<img src = 'picture/greenRock.jpg'>"
            opponentChoose = "<img src = 'picture/redScissor.jpg'>"
        }
        if (youChoose == paper && opponentChoose==scissors){
            youChoose = "<img src = 'picture/redPaper.jpg'>"
            opponentChoose = "<img src = 'picture/greenScissor.jpg'>"
        }
        if (youChoose == scissors && opponentChoose==scissors){
            youChoose = "<img src = 'picture/greenScissor.jpg'>"
            opponentChoose = "<img src = 'picture/greenScissor.jpg'>"
        }
            li.innerHTML = "  "+youChoose + "     "+game.rounds + "     "+opponentChoose
            ul.appendChild(li)
    }

    /* Not set the end game button yet (new idea: click end game to go back to strating page with spongebob or patrick button) 
    Just want to test gameReset() when click spongebob or click patrick to strat the new game. it'll call 
    gameReset() so it should be reset all game object property. ???
    gameReset() {
        //document.getElementById("endGame").addEventListener("click",function(){
            //let ul = document.querySelector('#show_result_list').children;
            
            console.log(game)
            this.rounds = 0
            this.win = 0
            this.ties = 0
            this.loss = 0
            //console.log("you click to end game")

            document.getElementById("rounds").innerHTML = "ROUNDS: "+ this.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ this.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ this.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ this.loss 
            ul.innerHTML = "";       
      } 

// I will work on this in the future to make it show as Modal to show result of the whole game and make one button 
//to go back to first page
    endGame() {
        this.gameStarted = false;
        const hideOverlay = document.getElementById('overlay');
        hideOverlay.style.display = 'block';
        const hideGame = document.getElementById('gamePlaying');
        hideGame.style.display = 'none';
        const showEndGameMessage = document.getElementById('game-over-message')
        showEndGameMessage.style.display = 'block'
        showEndGameMessage.innerHTML = 'You play: '+game.rounds+' rounds with '+ game.win+' win '+game.ties+ ' ties and '+
         game.loss + ' loss! Would you like to play again!'    
    }*/
}
// Start the game by create new Game when user click spongebob or patrick
game = new Game()
document.querySelector("#patrick").addEventListener ("click", function () {
    game.startPatrickGame()   
    
})
document.querySelector("#spongebob").addEventListener ("click", function (){
    game.startGame()
})
// end game by reload the page
document.getElementById("endGame").addEventListener("click",function(){
    //game.endGame()
    //game.gameReset()
    window.location.reload()    
})