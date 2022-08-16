const grid = document.querySelector('.grid');
const label = document.querySelector('.ranges label');
const rgb = document.querySelector('.checkbox #RGB');
const resetB = document.querySelector('.reset');


function gridHandler() {
    const range = document.querySelector('.range');
    label.textContent = `${range.value} X ${range.value}`;
    let arr = '';
    grid.style['grid-template-rows'] = `repeat(${range.value}, 1fr)`;
    grid.style['grid-template-columns'] = `repeat(${range.value}, 1fr)`;
    let a = parseInt(range.value) * parseInt(range.value);
    for (a; a > 0; a--) {
        arr = arr + '<div></div>';
    }
    grid.innerHTML = arr;
}

function initializer() {
    gridHandler()
    const grids = document.querySelectorAll('.grid div')
    grids.forEach(grid => grid.addEventListener('mouseenter', sketch));
}

initializer()

function sketch(e) {
    if (!rgb.checked) {
        this.style['background-color'] = 'black'
    } else {
        this.style['background-color'] = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }
}

function reset() {
    (document.querySelectorAll('.grid div')).forEach(grid => grid.style['background-color'] = 'white');
}

range.addEventListener('input', initializer);
resetB.addEventListener('click', reset);
// grids.forEach(grid => grid.addEventListener('mouseenter', sketch));