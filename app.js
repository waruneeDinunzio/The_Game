startGame = () => {
    document.querySelector("#spongebob").addEventListener ("click", function () {
        game = new Game();
        //game.gameReset();
        game.startGame();
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
        document.getElementById("btn_rock").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            //console.log(opponentChoose)
            //console.log(rock)
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
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
            
        })
        document.getElementById("btn_paper").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            if (opponentChoose == rock){
                game.win +=1
            }
            if (opponentChoose == paper){
                game.ties += 1
            }
            if (opponentChoose == scissors){
                game.loss += 1
            }
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss
            //console.log(game)
        })
        document.getElementById("btn_scissors").addEventListener("click",function(){
            let opponentChoose = Math.floor(Math.random() * 3) + 1
            if (opponentChoose == rock){
                game.loss +=1
            }
            if (opponentChoose == paper){
                game.win += 1
            }
            if (opponentChoose == scissors){
                game.ties += 1
            }
            document.getElementById("youWin").innerHTML = "Win:"+ "<br>"+ game.win
            document.getElementById("ties").innerHTML = "Ties:"+ "<br>"+ game.ties
            document.getElementById("loss").innerHTML = "Win:"+ "<br>"+ game.loss

        })
        //console.log(game)
    }
    gameResults(){

    }
}