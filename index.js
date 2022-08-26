const x_class = 'x'
const circle_class = 'circle'
let circleTurn = false;
let message = document.querySelector(".Winning-message")
let name = document.querySelector(".message")

let first = document.getElementById("one")
let second = one.nextElementSibling
let third = second.nextElementSibling
let fourth = third.nextElementSibling
let fifth = fourth.nextElementSibling
let sixth = fifth.nextElementSibling
let seventh = sixth.nextElementSibling
let eighth = seventh.nextElementSibling
let ninth = eighth.nextElementSibling

let cells = document.querySelectorAll(".grid-items")
cells.forEach(function(cell) {
    cell.addEventListener('click', clicked, {once : true} )
})
function clicked (e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class
    // let currentClass
    // if (circleTurn) {
    //     currentClass =  circle_class
    // }
    // else {
    //     currentClass = x_class
    // }
    placeMark(cell, currentClass)
    swapTurns()
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
} 
function swapTurns () {
    circleTurn = !circleTurn
}

if(cells != '') {
    name.textContent = 'Player O Wins!'
    message.style.display = 'fex'
}