const tbody = document.querySelector("table>tbody");
const gameBoard = Array(7).fill(null).map(() => Array(6).fill(" "));

function setBoard() {
    tbody.innerHTML = "";
    for (let i = 0; i < gameBoard[i].length; i++) {
        let rows = ""
        for(let j =0;j<gameBoard.length;j++){
            rows += `<td><div class="player ${gameBoard[j][i]}"></div></td>`
            console.log(rows)
        }
        tbody.innerHTML+=`<tr>${rows}</tr>`
    }
}

setBoard()

function isEmpty(){
    return gameBoard.some(row => row.includes(" "))
}

function checkWin(){
    for (let i=0;i<4;i++){
        for(let j=0;j<6;j++){
            if(gameBoard[i][j]!=" " && gameBoard[i][j]==gameBoard[i+1][j]==gameBoard[i+2][j]==gameBoard[i+3][j]){
                return true
            }
        }
    }
    for(let i=0;i<7;i++){
        for (let j=0;j<3;j++){
            if(gameBoard[i][j]!=" " && gameBoard[i][j]==gameBoard[i][j+1]==gameBoard[i][j+2]==gameBoard[i][j+3]){
                return true
            }
        }
    }
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            if(gameBoard[i][j]!=" " && gameBoard[i][j]==gameBoard[i+1][j+1]==gameBoard[i+2][j+2]==gameBoard[i+3][j+3]){
                return true
            }
        }
    }
    for(let i=0;i<4;i++){
        for(let j=3;j<6;j++){
            if(gameBoard[i][j]!=" " && gameBoard[i][j]==gameBoard[i+1][j-1]==gameBoard[i+2][j-2]==gameBoard[i+3][j-3]){
                return true
            }
        }
    }
    return false
}

function putChip(y){
    gameBoard[y][gameBoard[y].length - gameBoard[y].reverse().indexOf(" ")-1]="cyan"   
}

setBoard()