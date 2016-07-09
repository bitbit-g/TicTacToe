//clear Game
//1st player click set to O, set player as O
//2nd player is set to 1
//1st click 0, 2nd click 1.....
//check score after 5 steps
//continue if no winner
//check after each step
//win ---- alert player ? wins
//tie ---- alert it's a tie
//function init
//getButtonState(button.id) === null
var gameboardArray = [
    null, null, null,
    null, null, null,
    null, null, null
];

// Generate Image

var imgSrcO = "o.png";
function generateImageO() {
    var imgO = document.createElement('img');
    imgO.src = imgSrcO;
    return imgO;
}

var imgSrcX = "x.png";

function generateImageX() {
    var imgX = document.createElement('img');
    imgX.src = imgSrcX;

    return imgX;
}


var reset = document.querySelector("button");
var clickReset = function() {
    location.reload();
};
reset.addEventListener('click', clickReset);

var turn = 1;

var square = document.getElementsByClassName('square');

var event = document.getElementById(event);

var row = false;
var column = false;
var diag = false;
var tie = false;

function checkWinnerR(player) {
     if (gameboardArray[0] === player && gameboardArray[1] === player && gameboardArray[2] === player ||
       gameboardArray[3] === player && gameboardArray[4] === player && gameboardArray[5] === player ||
       gameboardArray[6] === player && gameboardArray[7] === player && gameboardArray[8] === player) {
         alert(player + " wins!");
         row = true;
     }
   }
function checkWinnerC(player) {
     if (gameboardArray[0] === player && gameboardArray[3] === player && gameboardArray[6] === player ||
        gameboardArray[1] === player && gameboardArray[4] === player && gameboardArray[7] === player ||
        gameboardArray[2] === player && gameboardArray[5] === player && gameboardArray[8] === player) {
          alert(player + " wins!");
          column = true;
      }
    }

function checkWinnerD(player) {
     if (gameboardArray[0] === player && gameboardArray[4] === player && gameboardArray[8] === player ||
        gameboardArray[2] === player && gameboardArray[4] === player && gameboardArray[6] === player) {
          alert(player + " wins!");
          diag = true;
        }
      }
function checkTie (){
     if (turn === 10) {
     if(!checkWinnerR('X') && !checkWinnerC('X') && !checkWinnerD('X')){
        alert("It's a tie!");
        tie = true;
        }
      }
    }

    // rowWins true when any row is filled with the same player

    // rowWins can be true when either of the three rows are true

    // rowOneWins   = 0 && 1 && 2
    // rowTwoWins   = 3 && 4 && 5
    // rowThreeWins = 6 && 7 && 8

    //if (rowWins(player)) {
    //  alert(player + ' wins!');
    //}

    //function rowWins(player) {
    //  return rowNumberWins(player,'first') || rowNumberWins(player,'two') || rowNumberWins(player,'three');
    //}
//
    //function rowNumberWins(player,row) {
    //  if (row === 'first') {
    //    return gameboardArray[0] === player && gameboardArray[1] === player && gameboardArray[2] === player;
    //  }
    //  else if (row === 'two') {
    //    return gameboardArray[3] === player && gameboardArray[4] === player && gameboardArray[5] === player;
    //  }
    //  else if (row === 'three') {
    //    return gameboardArray[6] === player && gameboardArray[7] === player && gameboardArray[8] === player;
    //  }
    //}

//}


for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', onClick);
}

function onClick(event) {
  if(turn <= 10 && !row && !column && !diag && !tie){
    if (turn % 2 === 0) {
        event.target.appendChild(generateImageX());
        var positionX = getSquarePosition(event.target.getAttribute('id'));
        gameboardArray[positionX] = "X";
        turn += 1;
        checkWinnerR('X');
        checkWinnerC('X');
        checkWinnerD('X');
        if (!row && !column && !diag){
          checkTie();
        }


    } else {
        event.target.appendChild(generateImageO());
        var positionO = getSquarePosition(event.target.getAttribute('id'));
        gameboardArray[positionO] = "O";
        turn += 1;
        checkWinnerR('O');
        checkWinnerC('O');
        checkWinnerD('O');
        if (!row && !column && !diag){
          checkTie();
        }

    }
  }
}


// Helper Functions
function getSquarePosition(dirtyPosition) {
  var position = dirtyPosition.charAt(6);
  return position;
}



//window.addEventListener("load", init, )
