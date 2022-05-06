const container = document.querySelector("#pixel-board");
function createPixel(q) {
    for (let i = 0; i < q; i ++) {
        const unit = document.createElement('div');
        unit.classList.add("pixel");
        unit.style.backgroundColor = "white";
        container.appendChild(unit);
    }
}
createPixel(25);

const boardPixel = document.querySelectorAll('.pixel');
const paletteColor = document.querySelectorAll('.color');
const clearButton = document.getElementById('clear-board');

function paintPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const CSSprop = window.getComputedStyle(selectedColor, null);
  const colorBrush = CSSprop.getPropertyValue('background-color');

  const clickedPixel = event.target;
  clickedPixel.style.backgroundColor = colorBrush;
}

function painting() {
  for (let i = 0; i < boardPixel.length; i += 1) {
    boardPixel[i].addEventListener('click', paintPixel);
  }
}
painting();

function removeColor() {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
}

function chooseColor(event) {
  const corClicada = event.target;
  removeColor();
  corClicada.classList.add('selected');
}

function paintBrush() {
  for (let i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].addEventListener('click', chooseColor);
  }
}
paintBrush();

function clearBoard() {
  const board = document.querySelectorAll('.pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);
