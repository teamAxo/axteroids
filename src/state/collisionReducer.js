const tickCombine = require('../ticks/tickCombine');

function collisionReducer(state, gameTime) {
  const newState = tickCombine(state, gameTime);
  let asteroidCollision = newState.asteroidCollision;
  const asteroidRadius = 37; // TODO: Get from asteroids state or code
  const playerRadius = 20;
  let asteroidPos = newState.asteroids[0].position;
  let playerPos = newState.player1.position;
  const playerLeft = playerPos.x - playerRadius;
  const playerRight = playerPos.x + playerRadius;
  const playerTop = playerPos.y + playerRadius;
  const playerBottom = playerPos.y - playerRadius;
  const asteroidLeft = asteroidPos.x - asteroidRadius;
  const asteroidRight = asteroidPos.x + asteroidRadius;
  const asteroidTop = asteroidPos.y + asteroidRadius;
  const asteroidBottom = asteroidPos.y - asteroidRadius;

  const rightInAst = asteroidLeft < playerRight && playerRight < asteroidRight;
  const leftInAst = asteroidLeft < playerLeft && playerLeft < asteroidRight;
  const topInAst = asteroidBottom < playerTop && playerTop < asteroidTop;
  const bottomInAst = asteroidBottom < playerBottom && playerBottom < asteroidTop;
  if ((rightInAst && topInAst)
  || (rightInAst && bottomInAst)
  || (leftInAst && topInAst)
  || (leftInAst && bottomInAst)
  ) asteroidCollision = true;
  
  return {...state, asteroidCollision};
}

module.exports = collisionReducer;