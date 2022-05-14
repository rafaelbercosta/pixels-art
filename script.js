function createColor() {
  let fator = parseInt(Math.random() * 255);
  return fator;
} 

window.onload = function () {
  let color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  for (let i = 1; i < color.length; i += 1) {
    color[i].style.backgroundColor = `rgb(${createColor()}, ${createColor()}, ${createColor()})`;
  }
}

let select = document.createElement('input');
select.type = 'number';
select.id = 'board-size';
select.min ='1';

let pixelBoard = document.getElementById('pixel-board');
let span = document.createElement('span');

let body = document.getElementsByTagName('body')[0];
body.insertBefore(span, pixelBoard);
span.appendChild(select);

let btnCreator = document.createElement('button');
btnCreator.innerText ='VQV';
btnCreator.id = 'generate-board';
span.appendChild(btnCreator);
btnCreator.addEventListener('click', changeSize);
let number = 5;
  
function changeSize() {
  let input = document.getElementById('board-size').value;
  let value = input;
  if (parseInt(value) < 5) {
    number = 5;
    alert('Mínimo de pixels é 5');
  } else if (parseInt(value) > 50) {
    number = 50;
    alert('Máximo de pixels é 50')
  } else if (value === ''){
      alert('Board Inválido!');
      number = 5;
  } else {
      number = parseInt(value);
  }
  document.getElementById('pixel-board').innerHTML = '';
  createPixel();
  paintPixel();
  console.log(number);
}

function createPixel () {
  let pixelBoard = document.getElementById('pixel-board');

  for (let i = 1; i <= number; i += 1) {
    for (j = 1; j <= number; j += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.display = 'inline-block';
      pixelBoard.appendChild(pixel);
      let width = getComputedStyle(pixel).height;
      let height = getComputedStyle(pixel).width;
      let border = getComputedStyle(pixel).border;
      pixelBoard.style.width =  parseInt(width) * number + (parseInt(border)* 2) * number + 'px';
      pixelBoard.style.height =  parseInt(height) * number +  (parseInt(border)* 2) * number + 'px';
    }
  }    
}

createPixel();

function changeClass(e) {
  document.getElementsByClassName('selected')[0].className = 'color';
  e.className += ' selected';
}

function selectColor() {
  let option = document.getElementsByClassName('color');
  for (let color of option) {
    color.addEventListener('click', function() {changeClass(this)});
  }
}

selectColor();

function paintPixel() {

  function paint (event) {
    let color = document.querySelector('.selected');
    let colorBrush = getComputedStyle(color).backgroundColor;
    event.target.style.backgroundColor = colorBrush;
  }
  let pixels = document.getElementsByClassName('pixel');
  for (i of pixels){
    i.addEventListener('click', paint);
  }
}

paintPixel();

function createClearBt() {
  let button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  let pixelBoard = document.getElementById('pixel-board');
  let span = document.querySelector('span');
  span.appendChild(button);
  button.addEventListener('click', clear);

  function clear () {
    let pixels = document.getElementsByClassName('pixel');
    for (let i of pixels) {
      i.style.backgroundColor = 'white';
    }
  }
}

createClearBt(); 
