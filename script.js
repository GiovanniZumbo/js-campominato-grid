// PLANNING

/* 
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
- Recupero gli elementi dal DOM
- Creo una funzione che mi genera le celle
- Creo l'evento sul bottone
- Richiamo la funzione con un ciclo for


#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
-Aggiungo nella funzione che la cella deve avere come content, i.
*/

// # STAGING

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');

let content = '';

function createCells() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = content;
    grid.append(cell);
}

// # DATA GATHERING

// # EVENT HANDLING

playButton.addEventListener('click', function () {

    for (let i = 0; i < totalCells; i++) {
        content = i + 1;
        createCells();
    }

    playButton.classList.add('d-none');
})

// # PROCESSING

// # OUTPUT 