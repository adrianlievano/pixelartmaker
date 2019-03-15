


const colorPicker = document.getElementById('colorPicker');
const gridSize = document.getElementById('sizePicker');

function makeGrid() {
  const canvas = document.getElementById('pixelCanvas');
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;

//Builds grid
  for (var i = 1; i <= gridHeight; i++){
    const newRow = document.createElement('tr');
    canvas.appendChild(newRow);
    for (var j = 1; j <= gridWidth; j++){
      const newCol = document.createElement('td');
      canvas.appendChild(newCol);
  newCol.addEventListener('click', function () {
    event.target.style.backgroundColor = colorPicker.value;
  })
    }
  }
}

gridSize.addEventListener('submit', function (event){
  event.preventDefault();
  makeGrid();
});
