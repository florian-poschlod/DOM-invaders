// console.log('game.js here!');

class Game {
  constructor(invaders, invasionSpeed, invasionInterval) {
    this.invaders = invaders;
    this.invasionSpeed = invasionSpeed;
    this.invasionInterval = invasionInterval;
    this.invadersDestroyed = 0;
    this.remainingInvaders = invadersContainer.childElementCount;
  }

  destroyInvader(parent, value) {
    let child = document.querySelector(`${value}`);
    parent.removeChild(child);
    console.log(this.remainingInvaders);
  }

  invadersDescend(invasionSpeed, invasionInterval) {
    let invasionProgress = 0;
    setInterval(function() {
      if (invasionProgress < invadersContainer.offsetHeight - 120) {
        invasionProgress += invasionSpeed;
        console.log('invasion progress', invasionProgress);
        invadersContainer.style.paddingTop = invasionProgress + "px";
      }
      if (invasionProgress > invadersContainer.offsetHeight -120) {
        console.log('you lost');
        clearInterval();
        return;
      }
    }, invasionInterval);
  }

  endGame() {

  }
}



// var myDiv = document.getElementById("a");
// var myVar = setInterval(spostaDiv, 1000);
// var margin = 0;

// function spostaDiv() {
//   margin += 10;
//   myDiv.style.marginLeft = margin + "px";
// }