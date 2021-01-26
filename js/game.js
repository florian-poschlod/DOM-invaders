// console.log('game.js here!');

class Game {
  constructor(invasionSpeed, invasionInterval, invaderArmy) {
    // this.invaders = invaders;
    this.invasionSpeed = invasionSpeed;
    this.invasionInterval = invasionInterval;
    this.invadersDestroyed = 0;
    this.invaderArmy = invaderArmy;
    // this.remainingInvaders = this.invaderArmy.childElementCount;
  }

  destroyInvader(invaderArmy, value) {
    let invader = document.querySelector(`${value}`);
    invaderArmy.removeChild(invader);
    console.log(invaderArmy.childElementCount);
  }

  invadersDescend(invasionSpeed, interval, invaderArmy) {
    console.log(invaderArmy);
    
    // console.log(invaderArmy.childElementCount);
    let invasionProgress = 0;
    let descend = setInterval(function () {
      invasionProgress += invasionSpeed;
      console.log(invaderArmy.childElementCount);
      invaderArmy.style.paddingTop = invasionProgress + "px";
      if (invasionProgress <= invaderArmy.offsetHeight - 120 && invaderArmy.childElementCount === 0) {
        console.log('You saved our DOM!');
        clearInterval(descend);
        // return;
      }
      if (invasionProgress >= invaderArmy.offsetHeight - 120 && invaderArmy.childElementCount > 0) {
        console.log('All our DOM is lost!');
        clearInterval(descend);
        // return;
      }
    }, interval);
  }

  endGame() {

  }
}