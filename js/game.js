// console.log('game.js here!');

class Game {
  constructor(invasionSpeed, invasionInterval, invaderArmy) {
    this.invasionSpeed = invasionSpeed;
    this.invasionInterval = invasionInterval;
    this.invasionProgress = 0;
    this.invadersDestroyed = 0;
    this.invaderArmy = invaderArmy;
  }

  destroyInvader(invaderArmy, value) {
    let invader = document.querySelector(`${value}`);
    invaderArmy.removeChild(invader);
  }

  invadersDescend() {
    let descend = setInterval(function () {
      this.invasionProgress += this.invasionSpeed;
      // console.log(endGame());
      console.log(endGame());
      if (this.invasionProgress <= this.invaderArmy.offsetHeight - 120) {
        this.invaderArmy.style.paddingTop = this.invasionProgress + "px";
      }
      if (this.invasionProgress >= this.invaderArmy.offsetHeight - 120) {
        clearInterval(descend);
      }
    }.bind(this), this.invasionInterval);
  }

  endGame() {
    if (this.invasionProgress < 100) {
      return true;
    }
    return false;
  }
}