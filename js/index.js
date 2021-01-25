const invaders = [
  'existence-tyrant',
  'globe-vaporizer',
  'slaughterer-of-epochs',
  'corrupt-desolator',
  'silencer-of-planets',
  'colossal-devourer',
  'cosmos-vaporize',
  'frozen-suffocator'
]

const invadersContainer = document.getElementById('invaders-container');
const input = document.getElementById('code-input');

const game = new Game;
game.invadersDescend(120, 1000);
// console.log(invadersContainer);



window.addEventListener('load', () => {
  // generate invaders
  invaders.forEach(invader => {
    const newInvader = document.createElement('div');
    newInvader.classList.add(`${ invader }`);
    newInvader.innerText = `class: </br> ${invader}`;
    invadersContainer.appendChild(newInvader);
  });

  // let remain = document.getElementById('invaders-container').childElementCount;
  // console.log('remain', remain);

  
  // submit code btn
  const submitCodeBtn = document.getElementById('submit');
  submitCodeBtn.addEventListener('click', () => {
    console.log(invadersContainer, input.value);
    game.destroyInvader(invadersContainer, input.value);
  });
});



// local storage

