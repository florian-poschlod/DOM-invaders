class Game {
  constructor(invasionSpeed, interval, gameContainer, invaders) {
    this.invasionSpeed = invasionSpeed;
    this.interval = interval;
    this.invasionProgress = 0;
    this.gameContainer = gameContainer;
    this.invaders = invaders;
    this.remainingInvaders;
    this.criticalInvasionProgress;
  }

  generateInvaders() {
    this.invaders.forEach(invader => {
      const newInvader = document.createElement('div');
      newInvader.classList.add(`${invader}`);
      newInvader.innerHTML = `class: <br> ${invader}`;
      this.gameContainer.appendChild(newInvader);
    });
    this.criticalInvasionProgress = this.gameContainer.offsetHeight;

  }

  destroyInvader(value) {
    let invader = document.querySelector(`${value}`);
    this.gameContainer.removeChild(invader);
  }

  moveInvaders() {
    let descent = setInterval(function () {
      this.remainingInvaders = this.gameContainer.childElementCount;
      if (this.invasionProgress < this.criticalInvasionProgress) {
        this.gameContainer.style.paddingTop = this.invasionProgress + "px";
        this.invasionProgress += this.invasionSpeed;
      }
      if (this.invasionProgress === this.criticalInvasionProgress && this.remainingInvaders > 0) {
        clearInterval(descent);
        this.playerLoses();
      }
      if (this.invasionProgress <= this.criticalInvasionProgress && this.remainingInvaders === 0) {
        clearInterval(descent);
        this.playerWins();
      }
    }.bind(this), this.interval);
  }

  playerLoses() {
    this.gameContainer.innerHTML = '';
    this.invasionProgress = 0;
    const message = this.message();
    message.classList.add('lose');
    message.innerHTML = 'OUR DOM HAS BEEN INVADED! <br> YOU LOST!'
  }

  playerWins() {
    this.gameContainer.innerHTML = '';
    this.invasionProgress = 0;
    const message = this.message();
    message.classList.add('win');
    message.innerHTML = 'OUR DOM IS SAVE FOR NOW! <br> GOOD JOB!'
  }

  newGame() {
    const message = this.message();
    const button = document.getElementsByClassName('play');
    message.classList.add('intro');
    button[0].innerText = 'Start game';
    message.innerHTML =
    `WE ARE UNDER ATACK BY EVIL ALIENS! <br><br>
    ALL OUR WEAPONS CAN'T HARM THEM,  BUT OUR HACKERS FOUND A WAY TO INJECT JAVASCRIPT INTO THEIR SYSTEMS!<br><br>
    FIGHT BACK THE INVADERS BY ENTERING THE CORRECT QUERY SELECTORS.
    `;
  }

  message() {
    const messageContainer = document.createElement('div');
    const message = document.createElement('p');
    const button = document.createElement("button");
    const gameWrapper = document.getElementById('game-wrapper');
    messageContainer.classList.add('message-container');
    message.classList.add('message');
    button.classList.add('play');
    button.innerText = 'Play again';
    button.addEventListener('click', () => {
      gameWrapper.removeChild(messageContainer);
      gameWrapper.appendChild(this.gameContainer);
      document.getElementById('code-input').focus();
      this.generateInvaders();
      this.moveInvaders();
    });
    messageContainer.appendChild(message);
    messageContainer.appendChild(button);
    gameWrapper.removeChild(this.gameContainer);
    gameWrapper.appendChild(messageContainer);
    return message;
  }
}