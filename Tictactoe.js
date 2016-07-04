//clear Game
//1st player click set to O, set player as O
//2nd player is set to 1
//1st click 0, 2nd click 1.....
//check score after 5 steps
//continue if no winner
//check after each step
//win ---- alert player ? wins
//tie ---- alert it's a tie

var imgSrcO = "o.png";

function generateImageO() {
  var imgO = document.createElement('img')
  imgO.src = imgSrcO;

  return imgO;
}
var imgSrcX = "x.png";

function generateImageX() {
  var imgX = document.createElement('img')
  imgX.src = imgSrcX;

  return imgX;
}


var reset = document.querySelector("button");
var clickReset = function(){
  location.reload();
};
reset.addEventListener('click', clickReset);


var square1 = document.getElementById("square1");
var onClick = function(){
  if (turn%2===0){
    square1.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square1.appendChild(generateImageO());
    turn += 1;
    }
};

square1.addEventListener('click', onClick);

var square2 = document.getElementById("square2");
var onClick = function(){
  if (turn%2===0){
    square2.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square2.appendChild(generateImageO());
    turn += 1;
    }
};

square2.addEventListener('click', onClick);

var square3 = document.getElementById("square3");
var onClick = function(){
  if (turn%2===0){
    square3.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square3.appendChild(generateImageO());
    turn += 1;
    }
};

square3.addEventListener('click', onClick);

var square4 = document.getElementById("square4");
var onClick = function(){
  if (turn%2===0){
    square4.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square4.appendChild(generateImageO());
    turn += 1;
    }
};

square4.addEventListener('click', onClick);

var square5 = document.getElementById("square5");
var onClick = function(){
  if (turn%2===0){
    square5.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square5.appendChild(generateImageO());
    turn += 1;
    }
};

square5.addEventListener('click', onClick);

var square6 = document.getElementById("square6");
var onClick = function(){
  if (turn%2===0){
    square6.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square6.appendChild(generateImageO());
    turn += 1;
    }
};

square6.addEventListener('click', onClick);

var square7 = document.getElementById("square7");
var onClick = function(){
  if (turn%2===0){
    square7.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square7.appendChild(generateImageO());
    turn += 1;
    }
};

square7.addEventListener('click', onClick);

var square8 = document.getElementById("square8");
var onClick = function(){
  if (turn%2===0){
    square8.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square8.appendChild(generateImageO());
    turn += 1;
    }
};

square8.addEventListener('click', onClick);

var square9 = document.getElementById("square9");
var onClick = function(){
  if (turn%2===0){
    square9.appendChild(generateImageX());
    turn += 1;
    }
  else{
    square9.appendChild(generateImageO());
    turn += 1;
    }
};

square9.addEventListener('click', onClick);
