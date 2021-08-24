const rock = 1
const paper = 2
const scissors = 3
const ul = document.querySelector('#show_result_list') 
const hideOverlay = document.getElementById('overlay').style
const hideGame = document.getElementById('gamePlaying').style
const rockImage = document.getElementById("rock").style
const paperImage = document.getElementById("paper").style
const scissorImage = document.getElementById("scissors").style

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
        hideOverlay.display = 'none';
        hideGame.display = 'block';
        // Add eventlistener when user click rock button
        document.getElementById("btn_rock").addEventListener("click",function(){
            // opponent use ramdom to choose rock paper or scissers
            const opponentChoose = Math.floor(Math.random() * 3) + 1
            // You choose rock = 1
            const youChoose = rock
            // Increment rounds by 1 when click
            game.rounds += 1 
            // show your choose picture    
            rockImage.display = 'block'
            paperImage.display = 'none'
            scissorImage.display = 'none'   
            // call gameResults function
            game.gameResults(opponentChoose,youChoose)
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
            rockImage.display = 'none'
            paperImage.display = 'block'
            scissorImage.display = 'none'  
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
            rockImage.display = 'none'
            paperImage.display = 'none'
            scissorImage.display = 'block'  
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
        hideOverlay.display = 'none';
        hideGame.display = 'block';
        //const patrickChoose = Math.floor(Math.random() * 2) + 1
        document.getElementById("btn_rock").addEventListener("click",function(){
            // opponent(Patric) use ramdom to choose rock or paper
            const patrickChoose = Math.floor(Math.random() * 2) + 1
            // you choose rock = 2
            const youChoose= rock
            // Increment rounds by 1 when click rock button
            game.rounds += 1   
            paperImage.display = 'none'
            scissorImage.display= 'none'
            rockImage.display = 'block'
            // call gameResults functon
            game.gameResults(patrickChoose,youChoose)
            if (patrickChoose == rock){
                game.ties +=1
            }
            if (patrickChoose == paper){
                game.loss += 1
            }

            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })

        document.getElementById("btn_paper").addEventListener("click",function(){
            const patrickChoose = Math.floor(Math.random() * 2) + 1
            game.rounds += 1
            const youChoose = paper
            rockImage.display = 'none'
            paperImage.display = 'block'
            scissorImage.display = 'none'  
            game.gameResults(patrickChoose,youChoose)
            if (patrickChoose == rock){
                game.win +=1
            }
            if (patrickChoose == paper){
                game.ties += 1
            }
        
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })
        document.getElementById("btn_scissors").addEventListener("click",function(){
            const patrickChoose = Math.floor(Math.random() * 2) + 1
            game.rounds += 1
            const youChoose = scissors
            rockImage.display = 'none'
            paperImage.display = 'none'
            scissorImage.display = 'block'  
            game.gameResults(patrickChoose,youChoose)
            if (patrickChoose == rock){
                game.loss +=1
            }
            if (patrickChoose == paper){
                game.win += 1
            }
            
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
        })
    }
 
    gameResults(opponentChoose,youChoose){
        const li = document.createElement("li")
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
        // If result shows more than 10 line, remove first list
        if (ul.childElementCount > 9) {
            ul.removeChild(ul.firstElementChild)
        }
        
        li.innerHTML = " "+ youChoose + " "+ game.rounds + " "+ opponentChoose
        ul.appendChild(li)
    }
/*
    //I want to use gameReset function to reset the game to zero and call endGame to go back to first page 
    a show user the total resule score. Then user and click spongebob or click patrick to strat the new game. 
    Then put this two function to add event listener when click end game(line 295,296). 
    When I test it, it went back to first page with endGamMessage show on page. when click spongbob or patrick
    it goes to strateGame page with reset score to 0. but when I click rock, paper or scissors, all prev score came back.
    Why?? what is wrong with the code? how to solve this? or I should just reloard the whole page.

    gameReset() {
        //document.getElementById("endGame").addEventListener("click",function(){
            //let ul = document.querySelector('#show_result_list').children;
            //console.log(game)
            this.rounds = 0
            this.win = 0
            this.ties = 0
            this.loss = 0

            document.getElementById("rounds").innerHTML = "ROUNDS: "+ this.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ this.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ this.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ this.loss 
            ul.innerHTML = "";       
      } 

    endGame() {
        this.gameStarted = false;
        const hideOverlay = document.getElementById('overlay');
        hideOverlay.style.display = 'grid';
        const hideGame = document.getElementById('gamePlaying');
        hideGame.style.display = 'none';
        const showEndGameMessage = document.getElementById('game-over-message')
        showEndGameMessage.style.display = 'block'
        showEndGameMessage.innerHTML = 'You play: '+game.rounds+' rounds with '+ game.win+' win '+game.ties+ ' ties and '+
         game.loss + ' loss! Would you like to play again!'  
    }  
// I will work on this in the future to make it show as Modal to show result of the whole game and make one button 
//to go back to first page (reload the page).  
*/
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