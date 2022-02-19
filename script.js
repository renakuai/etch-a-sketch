const container = document.querySelector('.container');

//creating rows
function createRow(selectedCount) {
    for (let i = 0; i <= (selectedCount-1); i++) {
    //create row class
    const squares = document.createElement('div');
    squares.setAttribute("id", 'row');
    container.appendChild(squares);
      //create individual squares within rows
      for (let i = 0; i <= (selectedCount-1); i++) {
        const box = document.createElement('div');
        box.setAttribute('id', 'box');
        squares.appendChild(box);
        console.log('created grid');
      }
    }
  }

//initial grid
createRow(16);

//remove all child rows from container
function reset(oldgrid) {
    while (oldgrid.firstChild) {
        oldgrid.removeChild(oldgrid.firstChild);
    }
}
const oldgrid = document.querySelector('#container');

// update the current slider value (each time you drag the slider handle)
var slider = document.getElementById("slider");
var output = document.getElementById("output");
let selectedCount = slider.value;
output.textContent = selectedCount + 'x' + selectedCount;

//display slider, create grid based on slider
slider.oninput = function() {
  output.textContent = this.value + 'x' + this.value;
  selectedCount = this.value;
  reset(oldgrid);
  console.log('resetted');
  createRow(+selectedCount);
  console.log('createdRow');
  //mouseenter event listener
  const boxes = document.querySelectorAll('#box');
    boxes.forEach((box) => {
      box.addEventListener('mouseenter', e => {
      var colors = ['#8C62F5', '#BD6CD5', '#EC74BD', '#A9B1DA', '#80DDEF'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.background = random_color;  
    })
  });
}

//mouseenter event listener
const boxes = document.querySelectorAll('#box');
boxes.forEach((box) => {
  box.addEventListener('mouseenter', e => {
    var colors = ['#8C62F5', '#BD6CD5', '#EC74BD', '#A9B1DA', '#80DDEF'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.background = random_color;  
  })
});

