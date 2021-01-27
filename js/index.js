const invaders = [
  // 'tyrant',
  // 'vaporizer',
  // 'slaughterer',
  // 'desolator',
  // 'silencer',
  // 'devourer',
  // 'brain-eater',
  // 'suffocator'
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a'
]

const gameContainer = document.getElementById('game');

window.addEventListener('load', () => {
  // invaders are 120px tall
  const game = new Game(60, 1000, gameContainer, invaders);
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
      console.log(input);
      input.value = '';
    }
  });
});

