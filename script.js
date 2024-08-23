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

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
- creo una classe per il bg blue sul CSS
- Creo un event listener sulla cella
- Console log del contenuto
- Aggiungo una classe "blue" sulla cella che si attiva al click

*/





// # STAGING

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');


function createCell(content) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(content);
    return cell;
}

// # DATA GATHERING

// # EVENT HANDLING

playButton.addEventListener('click', function () {

    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(i + 1);
        grid.appendChild(cell);

        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
            console.log(i + 1);
        })
    }

    playButton.classList.add('d-none');
})


// # PROCESSING

// # OUTPUT 