var mode=6;
var pickedColor;
var colors =[];
var squares = document.querySelectorAll('.square');
var span = document.getElementById("colDisplay");
var mes = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtn = document.querySelectorAll('.mode');

init();

function init() {
  //mode event listener
  setupModeButtons();
  setupSquares();
  reset();
}//Fin de la funcion init()

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor==pickedColor) {
        message.textContent ="Correct!";
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent ="Play Again?";
        changeColors(clickedColor);
      }else {
        this.style.backgroundColor = "#232323";
        message.textContent ="Try again";
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function(e) {
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      this.classList.add('selected');

      //encontrar el mode
      this.textContent === 'Easy'?mode =3:mode=6;
      reset();
    });
  }
}

function reset() {
  colors =generateColors(mode);
  pickedColor = pickColor();
  span.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display ="block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display ="none";
    }
  }
  h1.style.backgroundColor ="steelblue";
  resetButton.textContent ="New Colors";
  message.textContent ="";

}

//Click listener del boton reset/play again
resetButton.addEventListener('click', function(e) {
  reset();
});//fin del click listener


function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateColors(ncol){
  var arr=[];
  for (var i = 0; i < ncol; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue =Math.floor(Math.random()*256);
return "rgb("+red+", "+green+", "+blue+")";
}

function pickColor() {
  var rndm =Math.floor(Math.random()*colors.length);
  return colors[rndm];
}
