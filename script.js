const containerDiv = document.querySelector("#divContainer");

function createGrid(size){
    // svuoto il container
    containerDiv.innerHTML = '';
    // creo i div della griglia e li appendo alla lista
    for(let i = 0; i < size * size; i++){
        const divCell = document.createElement('div');
        divCell.classList.add('cell');
        containerDiv.appendChild(divCell);
    }
}
createGrid(16);

const allCells = document.querySelectorAll('.cell');

allCells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });    
});
