let cells = document.querySelectorAll(".grid-items")
cells.forEach(function (and) {
    and.addEventListener('click', ()=> {
        and.innerText = 'x'
    })
}
)