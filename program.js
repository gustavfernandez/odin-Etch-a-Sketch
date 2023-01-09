
// La función createSquare crea el cuadrado que cambia de color.
// Color default: gris
let currentNum = 16
function createSquare (square, filas) {
let pad = `${16*16/filas}px`
    square.classList.add('square');
    square.style.backgroundColor = '#48484B';
    //square.style.border = '1px solid black';
    square.style.padding = pad;
}

let block = document.querySelector('#block')
block.style.display = 'flex';
block.style.flexDirection = 'column';
block.style.alignItems = 'center';

let grid = document.querySelector("#big-grid");
grid.style.display = 'flex';
grid.style.alignItems = 'center';
grid.style.flexDirection = 'column';

// También hay que dar la opción de cambiar la cantidad de cuadrados.

let butonSquare = document.createElement('button')
butonSquare.textContent = 'Select number of squares'
butonSquare.style.margin = '20px'
butonSquare.style.padding = '10px'
butonSquare.style.width = '200px'
butonSquare.style.borderRadius = '10px'
butonSquare.style.backgroundColor = '#7576D4'
butonSquare.style.color = '#ffffff'
butonSquare.onclick = () => selectNumber()
block.appendChild(butonSquare)

let butonErase = document.createElement('button')
butonErase.textContent = 'Erase Grid'
butonErase.style.padding = '10px'
butonErase.style.width = '200px'
butonErase.style.borderRadius = '10px'
butonErase.style.backgroundColor = '#7576D4'
butonErase.style.color = '#ffffff'
butonErase.onclick = () => eraseGrid(currentNum)
block.appendChild(butonErase)

function selectNumber() {
    let num = Number(prompt("Select the number of Squares"))
    currentNum = num
    setGrid(num)

}

function setGrid(num) {
    grid.innerHTML = ''
    for (let i = 1; i <= num; i++) {
        fila = document.createElement('div');
        fila.style.display = 'flex';
        // Por cada iteración se suma una fila de 16 squares
        for (let j = 1; j <= num; j++) {
            let square = document.createElement('div')
            createSquare(square, num)
            fila.appendChild(square)
        }
        grid.appendChild(fila)
    }
    // Después de crear el grid hay que crear el efecto Hover.
    let squares = document.querySelectorAll('.square')
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.style.backgroundColor = '#7576D4';
        })
    })
}

function eraseGrid(num) {
    let squares = document.querySelectorAll('.square')
    squares.forEach((sqr) => {
        sqr.style.backgroundColor = '#48484B';
        })
    }

setGrid(currentNum)


