// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//document.createElement('span');
//document.querySelectorAll('p');

//Append child needs to have a DOM element
//main_heading.appendChild('newSpan');
//myPara.textContent = 'I am the one the one the one' //add text to an createElement
//document.body.append(myPara) //but you still need to add it to the DOM)

//STYLE CHANGING

//element.style.color //can only modify one CSS style at a time
//.cssText() //can use to set multiple styles at once
//.classList

forms = document.querySelectorAll('form');
submit_form = forms[0];
bod = document.querySelector('body');

submit_form.addEventListener('submit', function (event) {
  // Your code goes here!
console.log('yay');
bod.style.backgroundColor = 'red';
});

//document.addEventListener('click', function (event2) {
  // Your code goes here!
//console.log('document clicked');
//bod.style.backgroundColor = 'yellow';
//});


function makeGrid(evt) {
  const myCustomDiv = document.createElement('div');

  for (var i = 0; i <= 10; i++){
    const newBlock = document.createElement('p')
    newBlock.textContent = 'p '+ i;
    myCustomDiv.appendChild(newBlock);
  }

  document.body.appendChild(myCustomDiv);
}



document.addEventListener('click', makeGrid);
//

// add an event listen to the submit button for click .addEventListener('click', makeGrid())
//respond to the event
// read the grid Height
// read the grid Width

//put a nested for loop i, j where i = grid height and j = grid columns
// build same sized array
// use event delegation to reduce number of addEventListens you need to use
