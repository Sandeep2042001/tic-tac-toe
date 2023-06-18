const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// ... previous code ...

function makeMove(index) {
    if (!gameOver && board[index] === '') {
      board[index] = currentPlayer;
      const cell = document.getElementsByClassName('cell')[index];
      cell.innerText = currentPlayer;
      cell.classList.add(currentPlayer);
  
      if (checkWin(currentPlayer)) {
        alert(`Player ${currentPlayer} wins!`);
        gameOver = true;
      } else if (board.every(cell => cell !== '')) {
        alert("It's a draw!");
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  
  // ... remaining code ...
  

function checkWin(player) {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winCombinations) {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  board.fill('');
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
  }
  currentPlayer = 'X';
  gameOver = false;
}
