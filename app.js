const playerOne = 'X';
const playerTwo = 'O';
const newBoard = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
const cellArray = document.querySelectorAll('.cell');
let inputField = document.getElementById('user-input');
let inputText = document.getElementById('input-text');
let errorText = document.getElementById('input-error');
let outcomeText = document.getElementById('outcome-text');
let currentPlayer = document.getElementById('current-player');
let filledTiles = [];

startGame();

// Start a new game
function startGame() {
  currentPlayer.innerText = playerOne;
  inputText.style.display = 'block';
  errorText.style.display = 'none';
  outcomeText.style.display = 'none';
  filledTiles = [];

  for (let i = 0; i < cellArray.length; i++) {
    cellArray[i].innerText = newBoard[i];
  }
}

// Check value of current user input
function checkValue() {
  let userInput = inputField.value;
  inputField.value = '';

  if (userInput < 1 || userInput > 9 || filledTiles.includes(userInput) || isNaN(userInput)) {
    errorText.style.display = 'block';
  } else {
    errorText.style.display = 'none';
    filledTiles.push(userInput);
    document.getElementById(userInput).innerText = currentPlayer.innerText;
    console.log(filledTiles.length);

    if (filledTiles.length === 9) {
      inputText.style.display = 'none';
      outcomeText.style.display = 'block';
      outcomeText.innerText = 'Cat\'s Game!';
    } else if (filledTiles.length >= 5) {
      checkWinner(currentPlayer.innerText);
    }

    changePlayerTurn();
  }
}

// Switches turn to next player
function changePlayerTurn() {
  if (currentPlayer.innerText === playerOne) {
    currentPlayer.innerText = playerTwo;
  } else {
    currentPlayer.innerText = playerOne;
  }
}

// Checks for a winner
function checkWinner(currentPlayerValue) {
  if (cellArray[0].innerText === currentPlayerValue && cellArray[1].innerText === currentPlayerValue && cellArray[2].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[3].innerText === currentPlayerValue && cellArray[4].innerText === currentPlayerValue && cellArray[5].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[6].innerText === currentPlayerValue && cellArray[7].innerText === currentPlayerValue && cellArray[8].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[0].innerText === currentPlayerValue && cellArray[3].innerText === currentPlayerValue && cellArray[6].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[1].innerText === currentPlayerValue && cellArray[4].innerText === currentPlayerValue && cellArray[7].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[2].innerText === currentPlayerValue && cellArray[5].innerText === currentPlayerValue && cellArray[8].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[0].innerText === currentPlayerValue && cellArray[4].innerText === currentPlayerValue && cellArray[8].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  } else if (cellArray[6].innerText === currentPlayerValue && cellArray[4].innerText === currentPlayerValue && cellArray[2].innerText === currentPlayerValue) {
    displayWinningOutcome(currentPlayerValue);
  }
}

// Generate winning results
function displayWinningOutcome(currentPlayerValue) {
  inputText.style.display = 'none';
  outcomeText.style.display = 'block';
  outcomeText.innerText = `Player ${currentPlayerValue} Won!`;
}
