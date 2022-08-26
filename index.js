let cells = document.querySelectorAll(".grid-items")
cells.forEach(function(cell) {
    cell.addEventListener('click', clicked, {once : true} )
    function clicked (e) {
            console.log ('clicked')
            cell.innerText += 'x'
            cell.classList.add('x')
    }
})