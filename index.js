const x_class = 'x'
const circle_class = 'circle'
let circleTurn;
let cells = document.querySelectorAll(".grid-items")
cells.forEach(function(cell) {
    cell.addEventListener('click', clicked, {once : true} )
})
function clicked (e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class
    placeMark(cell, currentClass)
    swapTurns(cell)
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
} 
function swapTurns (cell) {
    circleTurn = !circleTurn
}