const containerDiv = document.querySelector("#divContainer");
const controlsDiv = document.querySelector('#controls');

function createUI(){
    const btnChangeDim = document.createElement("button");
    btnChangeDim.classList.add('changeDimension');
    btnChangeDim.textContent = 'Cambia la dimensione della griglia';
    controlsDiv.prepend(btnChangeDim);
    return {btnChangeDim};
}
const ui = createUI();

function checkInput(input){
    input = Number.parseInt(input, 10);
    if(Number.isNaN(input)){
        alert('Inserisci un numero');
        return null;
    }
    if(input <=0 || input > 100){
        alert('Inserisci un valore tra 0 e 100');
        return null;
    }
    return input;
}

function createGrid(size){
    containerDiv.innerHTML = '';
    const cellDimension = 960 / size;
    for(let i = 0; i < size * size; i++){
        const divCell = document.createElement('div');
        divCell.classList.add('cell');
        divCell.style.height = cellDimension + 'px';
        divCell.style.width = cellDimension + 'px';
        containerDiv.appendChild(divCell);
    } 
}

function aggiungiEventiCell() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });  
    });
}

function btnChangeDimension(){
    ui.btnChangeDim.addEventListener('click', () =>{
        const userPrompt = prompt('Inserisci la dimensione della griglia: ');
        const newDimension = checkInput(userPrompt);
        if (newDimension) {
            createGrid(newDimension);
            aggiungiEventiCell();
        }
    })
}

let gridSize = 16;
createGrid(gridSize);
aggiungiEventiCell();
btnChangeDimension();
