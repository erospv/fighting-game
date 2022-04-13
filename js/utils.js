function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + player.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({player, enemy, timerId}) {
  clearTimeout(timerId)
  document.querySelector("#end-game-message").style.display = "flex"
  if (player.health === enemy.health) {
    document.querySelector("#end-game-message").innerHTML = "TIE"
  } else if (player.health > enemy.health) {
    document.querySelector("#end-game-message").innerHTML = "PLAYER 1 WINS"
  } else if (player.health < enemy.health) {
    document.querySelector("#end-game-message").innerHTML = "PLAYER 2 WINS"
  }
}