const subtitle = document.querySelector('.sub-title');
const winnerBox = document.querySelector('.winnerBox');
const board = document.querySelector('.board');
const winnerTextEl = document.querySelector('.winner');
const cells = [...document.querySelectorAll('.cell')];
const randomBtn = document.getElementById('randomMove');
const restartBtn = document.getElementById('restartButton');
const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let player = 'X';
let isgameOver = false;
cells.forEach((cell, i) => {
    cell.addEventListener('click', () => {
        if (cell.innerText == "") {
            makeMove(cell);
        }
    });
});

randomBtn.addEventListener('click', randomMove);
restartBtn.addEventListener('click', restartGame);


function checkGameOver() {
    const isWin = combos.some(combo => {
        return combo.every(index => cells[index].innerText == player)
    });

    if (isWin) {
        console.log(`${player} won`);
        showPopup(`Player ${player} won!`)
        return true;
    }

    const isTie = cells.every(cell => cell.innerText != "");

    if (isTie) {
        console.log("the game is tied");
        showPopup("The game is tied");
        return true;
    }
    return false;
}


function showPopup(msg) {
    winnerTextEl.innerText = msg;
    winnerBox.style.display = 'block';

}

function disableGame() {למה
    board.style.pointerEvents = "none";
    randomBtn.disabled = true;
}

function changePlayer() {
    player = player == "X" ? "O" : "X";
    updateSubtitle();
}

function updateSubtitle() {
    subtitle.innerText = `player ${player} Turn`
}

function restartGame() {
    winnerBox.style.display = 'none';
    player = "X";
    updateSubtitle();
    cells.forEach(cell => cell.innerText = "");
    board.style.pointerEvents = 'initial';
    randomBtn.disabled = false;
}

function makeMove(cellEl) {
    cellEl.innerText = player;
    const isgameOver = checkGameOver();

    if (isgameOver) {
        disableGame();
    } else {
        changePlayer();
    }
}

function randomMove() {
    const emptyCell = cells.filter(cell => !cell.innerText);

    const index = Math.floor(Math.random() * emptyCell.length);
    const emptyCells = emptyCell[index];
    makeMove(emptyCells);
}





