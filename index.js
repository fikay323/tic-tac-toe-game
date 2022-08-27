const x_class = 'x'
const circle_class = 'o'
let circleTurn;
let x_score = document.querySelector('.x-scores')
let o_score = document.querySelector('.o-scores')
let message = document.querySelector(".Winning-message")
let name = document.querySelector(".message")
let x_turn =document.querySelector('strong')
let resetButton = document.querySelector('.btn')
let resetButton2 = document.querySelector('.btn2')
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


let cells = document.querySelectorAll(".grid-items")

startgame()
function startgame() {
    cells.forEach(function(cell) {
        cell.removeEventListener('click', clicked)
        circleTurn = false
        x_turn.innerText= 'X'
        cell.classList.remove('x')
        cell.classList.remove('o')
        message.classList.add('hide')
        cell.addEventListener('click', clicked, {once : true})
    })
}

function clicked (e) {
    let clickSound = new Audio('./sounds/sounds_click.wav')
    clickSound.play()
    const cell = e.target
    let currentClass

    if (circleTurn) {
        currentClass =  circle_class
        x_turn.innerText= 'X'
    }
    else {
        currentClass = x_class
        x_turn.innerText= 'O'
    }
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        message.classList.remove('hide')
        name.innerText = `Player ${currentClass.toUpperCase()} wins`
        incrementScore(currentClass)
    }
    swapTurns()
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
} 
function swapTurns () {
    circleTurn = !circleTurn
}

function checkWin(currentClass) {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    })
}
resetButton.addEventListener('click', startgame)
resetButton2.addEventListener('click', startgame)

function incrementScore(currentClass) {
    if (currentClass == x_class) {
        x_score.innerText = parseInt(x_score.innerText) + 1
    }
    else if (currentClass == circle_class) {
        o_score.innerText = parseInt(o_score.innerText) + 1
    }
}