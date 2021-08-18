let game
    document.querySelector("#spongebob").addEventListener ("click", function () {
        if(game){
           gameReset()
           game.startGame()
           console.log(game)
        } else{
        game = new Game()
        //game.gameReset();
        game.startGame()
        //console.log(game)
        }
        
    })
    document.querySelector("#patrick").addEventListener ("click", function () {
        
        game = new Game()
        //game.gameReset();
        game.startPatrickGame()
        gameReset()
    })
    gameReset=()=> {
        document.getElementById("endGame").addEventListener("click",function(){
            let ulChil = document.querySelector('#show_result_list').children;
            console.log(ulChil)
            let ul = document.querySelector('#show_result_list')
            if(ulChil.length > 0){

                ul.innerHTML =""
            }
            
            game.rounds = 0
            game.win = 0
            game.ties = 0
            game.loss = 0
            //console.log("you click to end game")
            /*document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss 
            ul.innerHTML = "";*/ 
            //console.log(ulChil) 
      })
      //console.log("you click to end game")
    }

//startGame()
class Game {
    constructor(win, ties, loss, gameStarted){
        this.win = 0
        this.ties = 0
        this.loss = 0
        this.gameStarted = false
    }
    startGame(){
        //let opponentChoose = Math.floor(Math.random() * 3) + 1
        const rock = 1
        const paper = 2
        const scissors = 3
        let rounds = 0
        //game.gameReset();
        document.getElementById("btn_rock").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            //console.log(opponentChoose)
            //console.log(rock)
            rounds += 1 
            //console.log(opponentChoose)
            //console.log(rock)
            let youChoose= rock
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.ties +=1
                //console.log(opponentChoose)
            }
            if (opponentChoose == paper){
                game.loss += 1
                //console.log(game.loss)
            }
            if (opponentChoose == scissors){
                game.win += 1
                //console.log(game.win)
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
            
        })
        document.getElementById("btn_paper").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            rounds += 1
            let youChoose = paper
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.win +=1
            }
            if (opponentChoose == paper){
                game.ties += 1
            }
            if (opponentChoose == scissors){
                game.loss += 1
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
        })
        document.getElementById("btn_scissors").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            rounds += 1
            let youChoose = scissors
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.loss +=1
            }
            if (opponentChoose == paper){
                game.win += 1
            }
            if (opponentChoose == scissors){
                game.ties += 1
            }
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss

        })
    }

    startPatrickGame(){
        //let opponentChoose = Math.floor(Math.random() * 3) + 1
        const rock = 1
        const paper = 2
        const scissors = 3
        let rounds = 0
        
        document.getElementById("btn_rock").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            //console.log(opponentChoose)
            //console.log(rock)
            rounds += 1 
            //console.log(opponentChoose)
            //console.log(rock)
            let youChoose= rock
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.ties +=1
                //console.log(opponentChoose)
            }
            if (opponentChoose == paper){
                game.loss += 1
                //console.log(game.loss)
            }
            /*if (opponentChoose == scissors){
                game.win += 1
                //console.log(game.win)
            }*/
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
            
        })
        document.getElementById("btn_paper").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            rounds += 1
            let youChoose = paper
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.win +=1
            }
            if (opponentChoose == paper){
                game.ties += 1
            }
            /*if (opponentChoose == scissors){
                game.loss += 1
            }*/
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
        })
        document.getElementById("btn_scissors").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 2) + 1
            rounds += 1
            let youChoose = scissors
            game.gameResults(opponentChoose,youChoose,rounds)
            if (opponentChoose == rock){
                game.loss +=1
            }
            if (opponentChoose == paper){
                game.win += 1
            }
            /*if (opponentChoose == scissors){
                game.ties += 1
            }*/
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss

        })
        gameReset();
    }

    gameResults(opponentChoose,youChoose,rounds){
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
            li.innerHTML = ""+youChoose + ""+rounds + ""+opponentChoose
            ul.appendChild(li)
    }

    /*gameReset() {
        document.getElementById("endGame").addEventListener("click",function(){
            //let ul = document.querySelector('#show_result_list').children;
            let ul = document.querySelector('#show_result_list')
            game.rounds = 0
            game.win = 0
            game.ties = 0
            game.loss = 0
            //console.log("you click to end game")
            document.getElementById("rounds").innerHTML = "ROUNDS: "+ game.rounds 
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss 
            ul.innerHTML = "";   
      })
      //console.log("you click to end game")
    }*/
}