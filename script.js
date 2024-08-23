// PLANNING

/* 
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
- Recupero gli elementi dal DOM
- Creo una funzione che mi genera le celle
- Creo l'evento sul bottone
- Richiamo la funzione con un ciclo for

*/

// # STAGING

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');

function createCells() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.append(cell);
}

// # DATA GATHERING

// # EVENT HANDLING



// # PROCESSING

// # OUTPUT 