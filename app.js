let game
    document.querySelector("#spongebob").addEventListener ("click", function () {
        if(game){//if already has game object
           game.gameReset() //reset game
           game.startGame() //start to play game
           console.log(game)//for test if it already has game object
        } else{ //if not game object
        game = new Game() //create new game
        //game.gameReset();
        game.startGame()
        //console.log(game)
        }
        
    })
    
    // for Patric mode
    document.querySelector("#patrick").addEventListener ("click", function () {
        game = new Game()
        game.gameReset()
        game.startPatrickGame()
        //gameReset()
    })
    //try to put gameReset() outside of Class game but still not working
    /*gameReset=()=> {
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
            ul.innerHTML = "";
            //console.log(ulChil) 
      })
      //console.log("you click to end game")
    }*/

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

    // Start to play with Patric who is a star fish. His hand can't not do scissor so he just do rock and paper
    startPatrickGame(){
        
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
        //game.gameReset();
    }

    gameResults(opponentChoose,youChoose,rounds){
        //game.gameReset()
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

    /* Not set the end game button yet (new idea: click end game to go back to strating page with spongebob or patrick button) 
    Just want to test gameReset() when click spongebob or click patrick to strat the new game. it'll call 
    gameReset() so it should be reset all game object property. ???*/
    gameReset() {
        //document.getElementById("endGame").addEventListener("click",function(){
            //let ul = document.querySelector('#show_result_list').children;
            let ul = document.querySelector('#show_result_list')
            console.log(game)
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
      } //)
      //console.log("you click to end game")
    }
//}