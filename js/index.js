const invaders = [
  'tyrant',
  'vaporizer',
  'slaughterer',
  'desolator',
  'silencer',
  'devourer',
  'brain-eater',
  'suffocator'
]

const invaderArmy = document.getElementById('invaders-container');

// const remainingInvaders = invadersContainer.childElementCount;
// console.log(remainingInvaders);

const game = new Game();
game.invadersDescend(1, 1000, invaderArmy);

window.addEventListener('load', () => {
  // generate invader elements
  invaders.forEach(invader => {
    const newInvader = document.createElement('div');
    newInvader.classList.add(`${ invader }`);
    newInvader.innerHTML = `class: <br> ${invader}`;
    invaderArmy.appendChild(newInvader);
  });

  const input = document.getElementById('code-input');  
  const submitCodeBtn = document.getElementById('submit');
  
  // submit code btn
  submitCodeBtn.addEventListener('click', () => {
    game.destroyInvader(invaderArmy, input.value);
  });
  
  // input
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      // const remainingInvaders = invadersContainer.childElementCount;
      game.destroyInvader(invaderArmy, input.value);
      // console.log(remainingInvaders);
      console.log(invaderArmy);
      console.log(invaderArmy.childElementCount);
    }
  });
});



// local storage

