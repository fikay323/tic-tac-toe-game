const x_class = 'x'
const circle_class = 'o'
let circleTurn;
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

// let first = document.getElementById("one")
// let second = one.nextElementSibling
// let third = second.nextElementSibling
// let fourth = third.nextElementSibling
// let fifth = fourth.nextElementSibling
// let sixth = fifth.nextElementSibling
// let seventh = sixth.nextElementSibling
// let eighth = seventh.nextElementSibling
// let ninth = eighth.nextElementSibling


let cells = document.querySelectorAll(".grid-items")

startgame()
function startgame() {
    // circleTurn = false
    // x_turn.innerText= 'X'
    // message.classList.add('hide')
    // cells.forEach(cell => {
    //     if (cell.classList.contains('x')) {
    //         cell.classList.remove('x')
    //     }
    //     else if (cell.classList.contains('o')) {
    //         cell.classList.remove('o')
    //     }
    // })
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