let cells = document.querySelectorAll(".grid-items")
cells.style
cells.forEach(function (and) {
    and.addEventListener('click', ()=> {
        and.innerText = 'x'
        and.classList.add('x')
    })
}
)