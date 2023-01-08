
// La función createSquare crea el cuadrado que cambia de color.
// Color default: gris
function createSquare (square, filas) {
let pad = `${16*16/filas}px`
    square.classList.add('square');
    square.style.backgroundColor = '#48484B';
    square.style.border = '1px solid black';
    square.style.padding = pad;
}

let grid = document.querySelector("#big-grid");
grid.style.display = 'flex';
grid.style.alignItems = 'center';
grid.style.flexDirection = 'column';
//grid.style.width = '1000px'

// Creo las 16 x 16 grid dentro del div inicial (Usar CSS grid)
for (let i = 1; i <= 16; i++) {
    fila = document.createElement('div');
    fila.style.display = 'flex';
    // Por cada iteración se suma una fila de 16 squares
    for (let j = 1; j <= 16; j++) {
        let square = document.createElement('div')
        createSquare(square, 16)
        fila.appendChild(square)
    }
    grid.appendChild(fila)
    
}
    
// Después de crear el grid hay que crear el efecto Hover.
// También hay que dar la opción de cambiar la cantidad de cuadrados.