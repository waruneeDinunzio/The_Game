startGame = () => {
    document.querySelector("#spongebob").addEventListener ("click", function () {
        game = new Game()
        //game.gameReset();
        game.startGame()
        //console.log("you click spongebob")
    })
    document.querySelector("#patrick").addEventListener ("click", function () {
        game = new Game()
        //game.gameReset();
        game.startPatrickGame()
        //console.log("you click spongebob")
    })
}
startGame()
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
        document.getElementById("btn_rock").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            //console.log(opponentChoose)
            //console.log(rock)
            rounds += 1 
            console.log(opponentChoose)
            console.log(rock)
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
            console.log(opponentChoose)
            console.log(rock)
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
    }

    gameResults(opponentChoose,youChoose,rounds){
        const rock = 1
        const paper = 2
        const scissors = 3
        let ul = document.getElementById("show_result_list")
        let li = document.createElement("li")
        if (youChoose == rock && opponentChoose==rock) {
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == paper && opponentChoose==rock){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == scissors && opponentChoose==rock){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == rock  && opponentChoose==paper){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == paper && opponentChoose==paper){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == scissors && opponentChoose==paper){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        /*if (youChoose == rock  && opponentChoose==scissors){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == paper && opponentChoose==scissors){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }
        if (youChoose == scissors && opponentChoose==scissors){
            opponentChoose = "<img src = 'Rock.png'>"
            youChoose = "<img src = 'Rock.png'>"
        }*/
            li.innerHTML = ""+opponentChoose + ""+rounds + ""+youChoose
            ul.appendChild(li)
    }
}