const x_class = 'x'
const circle_class = 'circle'
let circleTurn = false;
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