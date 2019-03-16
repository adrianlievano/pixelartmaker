

//Target the relevant HTML elements to pick the color and to control the size
//of the grid

const colorPicker = document.getElementById('colorPicker');
const gridSize = document.getElementById('sizePicker');

function makeGrid() {
    const canvas = document.getElementById('pixelCanvas');
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    canvas.innerHTML = '';
    //Builds grid and adds an event listener to each table data element
    for (var i = 1; i <= gridHeight; i++) {
        const newRow = document.createElement('tr');
        canvas.appendChild(newRow);
        for (var j = 1; j <= gridWidth; j++) {
            const newCol = document.createElement('td');
            canvas.appendChild(newCol);
            newCol.addEventListener('click', function() {
                event.target.style.backgroundColor = colorPicker.value;
            })
        }
    }
}

//Adds an event listener for when the user submits the form.
gridSize.addEventListener('submit', function(event) {
    event.preventDefault(); //prevents the form from being sent to server
    makeGrid();
});
