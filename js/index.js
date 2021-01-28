const gameContainer = document.getElementById('game');

window.addEventListener('load', () => {
  // invaders are 120px tall
  const game = new Game(3, 1000, gameContainer, 16);
  game.newGame();

  const input = document.getElementById('code-input');  
  const submitCodeBtn = document.getElementById('submit');
    
  // submit code btn
  submitCodeBtn.addEventListener('click', () => {
    game.destroyInvader(input.value);
  });
  
  // input
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      game.destroyInvader(input.value);
      input.value = '';
    }
  });
});

