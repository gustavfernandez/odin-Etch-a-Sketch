
// La función createSquare crea el cuadrado que cambia de color.
// Color default: gris
let currentNum = 16
let R = 255; let G = 255; let B = 255;
function createSquare (square, filas) {
    let pad = `${16*16/filas}px`
    square.classList.add('square');
    square.style.backgroundColor =`rgb(255, 255, 255)`;
    square.style.padding = pad;
}

divs = document.querySelectorAll('div')
divs.forEach( div => {
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
})

let body = document.querySelector('body')
body.style.backgroundColor = '#B3B4F5'
let block = document.querySelector('#block');
let grid = document.querySelector("#big-grid")
grid.style.margin = '50px'

// También hay que dar la opción de cambiar la cantidad de cuadrados.

let butonSquare = document.createElement('button')
butonSquare.textContent = 'Select number of squares'
butonSquare.onclick = () => selectNumber()
block.appendChild(butonSquare)

let butonErase = document.createElement('button')
butonErase.textContent = 'Erase Grid'
butonErase.onclick = () => eraseGrid()
block.appendChild(butonErase)

buttons = document.querySelectorAll('button');
//Un poquito de CSS a los botones
buttons.forEach( button => {
    button.style.margin = '20px 0px 0px 0px'
    button.style.padding = '10px'
    button.style.width = '200px'
    button.style.borderRadius = '10px'
    button.style.backgroundColor = '#7576D4'
    button.style.color = '#ffffff'
})

// Función que pide el nuevo número de Grid
function selectNumber() {
    let num = Number(prompt("Select the number of Squares"))
    if (num===0) {
        setGrid(currentNum)
    }
    else {
        currentNum = num
        setGrid(currentNum)
    }
}

//Función que settea el Grid
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
    // También se pone el color azar.
    let squares = document.querySelectorAll('.square')
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', (e) => {
            let rgb = e.target.style.backgroundColor
            let new_rgb = rgb.split(",")
            let casi_R = new_rgb[0].split("(")
            let casi_B = new_rgb[2].split(")")

            R = Number(casi_R[1]) - 25.5;
            G = Number(new_rgb[1]) - 25.5;
            B = Number(casi_B[0]) - 25.5;
            sqr.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        })
    })
}

//Función que limpia el Grid
function eraseGrid() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((sqr) => {
        sqr.style.backgroundColor = 'rgb(255,255,255)';
        })
    }

setGrid(currentNum)


