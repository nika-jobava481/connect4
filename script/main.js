const tbody = document.querySelector("table>tbody");
const gameBoard = Array(7).fill(null).map(() => Array(6).fill(" "));
setBoard()
var tdArr = document.querySelectorAll("td")
var count=0
var pla="magenta"


function setBoard() {
    tbody.innerHTML = "";
    for (let i = 0; i < gameBoard[i].length; i++) {
        let rows = ""
        for (let j = 0; j < gameBoard.length; j++) {
            rows += `<td><div class="player ${gameBoard[j][i]}""></div></td>`
        }
        tbody.innerHTML += `<tr>${rows}</tr>`
    }
    tdArr = document.querySelectorAll("td")


    for (let i = 0; i < tdArr.length; i++) {
        tdArr[i].addEventListener("click", function () {
            putChip((i) % 7)
            console.log(this)
        });
    }
}





function isEmpty() {
    return gameBoard.some(row => row.includes(" "))
}

function checkWin() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            if (gameBoard[i][j] != " " && gameBoard[i][j] == gameBoard[i + 1][j] && gameBoard[i + 1][j] == gameBoard[i + 2][j] && gameBoard[i + 2][j] == gameBoard[i + 3][j]) {
                return true
            }
        }
    }
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] != " " && gameBoard[i][j] == gameBoard[i][j + 1] && gameBoard[i][j + 1] == gameBoard[i][j + 2] && gameBoard[i][j + 2] == gameBoard[i][j + 3]) {
                return true
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameBoard[i][j] != " " && gameBoard[i][j] == gameBoard[i + 1][j + 1] && gameBoard[i + 1][j + 1] == gameBoard[i + 2][j + 2] && gameBoard[i + 2][j + 2] == gameBoard[i + 3][j + 3]) {
                return true
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j < 6; j++) {
            if (gameBoard[i][j] != " " && gameBoard[i][j] == gameBoard[i + 1][j - 1] && gameBoard[i + 1][j - 1] == gameBoard[i + 2][j - 2] && gameBoard[i + 2][j - 2] == gameBoard[i + 3][j - 3]) {
                return true
            }
        }
    }
    return false
}

function putChip(y) {
    let ind = 0
    for(let i=gameBoard[y].length-1;i>=0;i--){
        if(gameBoard[y][i]==" "){
            ind=i
            break
        }
    }
    if(count%2==1){
        pla="cyan"
    }else{
        pla="magenta"
    }
    gameBoard[y][ind]=pla
    setBoard()
    count++
    setTimeout(function(){
        if(checkWin()){
            alert(`player ${pla} won!`)
        }
    },100)
}

setBoard()