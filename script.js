const containerDiv = document.querySelector("#divContainer");

function createGrid(size){
    // svuoto il container
    containerDiv.innerHTML = '';
    const cellDimension = 960 / size;
    // creo i div della griglia e li appendo alla lista
    for(let i = 0; i < size * size; i++){
        const divCell = document.createElement('div');
        divCell.classList.add('cell');
        divCell.style.height = cellDimension + 'px';
        divCell.style.width = cellDimension + 'px';
        containerDiv.appendChild(divCell);
    }
}

let gridSize = prompt("Inserisci la dimensione della griglia(max 100): ");
// validity check
gridSize = Number.parseInt(gridSize, 10);

if(Number.isNaN(gridSize)){
    alert("Inserisci un valore numerico");
}

if(gridSize <= 0 || gridSize > 100){
    alert("Inserisci un valore compreso tra 0 e 100.");
}

console.log(gridSize);

createGrid(gridSize);

const allCells = document.querySelectorAll('.cell');

allCells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });    
});
