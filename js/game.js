class Game {
  constructor(invasionSpeed, interval, gameContainer, invaderAmt) {
    this.invasionSpeed = invasionSpeed;
    this.interval = interval;
    this.invasionProgress = 0;
    this.gameContainer = gameContainer;
    this.invaderAmt = invaderAmt;
    this.remainingInvaders;
    this.criticalInvasionProgress;
    this.invaderWrapper;
  }

  generateInvaders() {
    const invaderWrapper = document.createElement('div');
    invaderWrapper.classList.add('invader-wrapper');
    this.invaderWrapper = invaderWrapper;
    // console.log(this.invaderWrapper);
    this.gameContainer.appendChild(this.invaderWrapper);
    const newInvader = new Invader();
    for(let i = 0; i < this.invaderAmt; i++) {
      this.invaderWrapper.appendChild(newInvader.assemble());
    }
    this.criticalInvasionProgress = this.gameContainer.offsetHeight - this.gameContainer.firstChild.offsetHeight;
  }

  destroyInvader(value) {
    let invader = this.invaderWrapper.querySelector(`${value}`);
    this.invaderWrapper.removeChild(invader);
  }

  moveInvaders() {
    let descent = setInterval(function () {
      this.remainingInvaders = this.invaderWrapper.childElementCount;
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