
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('game-board');
const winnerMessage = document.getElementById('winner-message');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function startGame() {
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.classList.remove('taken');
    cell.textContent = '';
    cell.addEventListener('click', handleClick, { once: true });
  });
  winnerMessage.classList.add('hidden');
  restartButton.classList.add('hidden');
}

function handleClick(e) {
  const cell = e.target;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');
  
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function swapTurns() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
  return winPatterns.some(pattern => {
    return pattern.every(index => {
      return cells[index].textContent === player;
    });
  });
}

function isDraw() {
  return [...cells].every(cell => {
    return cell.classList.contains('taken');
  });
}

function endGame(draw) {
  if (draw) {
    winnerText.textContent = 'Draw!';
  } else {
    winnerText.textContent = `${currentPlayer}`;
  }
  winnerMessage.classList.remove('hidden');
  restartButton.classList.remove('hidden');
}

restartButton.addEventListener('click', startGame);

startGame();