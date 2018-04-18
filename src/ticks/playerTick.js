function playerTick(player, oldTime, newTime) {
  const direction = player.turnDirection ? nextDirection(player, newTime - oldTime) : player.direction;

  const velocity = player.isAccelerating? newDrift(player, newTime): currentVelocity(player,newTime);
  // const position = player.isMoving ? nextPosition(player, newTime - oldTime) : player.position;
  const position = nextDriftPosition(player, newTime);
  return { ...player, position, direction, velocity};
}

function newDrift(player, gameTime) {
  const powerFactor = 0.000001;
  return {
    x: player.velocity.x + player.direction.x * powerFactor,
    y: player.velocity.y + player.direction.y * powerFactor,
    time: gameTime
  };
}

function nextPosition(player, timeDelta) {
  //Create a new point in paper.js with the next x, y coordinates
  startPosition = new Point(player.position.x, player.position.y);
  //Set the new point (direction) for player to head toward
  direction = new Point(player.direction.x, player.direction.y);
  //Calculate speed times mspf which equals distance traveled
  const distance = player.speed * timeDelta;
  //Calculate distance based on speed in a particular direction
  direction = direction.normalize(distance);
  //Caluclate new position based on the previous direction
  const newPosition = startPosition.add(direction);

  //return our new position
  return { x: newPosition.x, y: newPosition.y };
}

function currentVelocity(player, newTime) {
  const tS = newTime-player.velocity.time; // time since acceleration
  const dC = 0.9; // Drift coefficient
  const decay = Math.pow(dC, tS)*Math.log(dC)/(dC-1);
  driftDirection = new Point(player.velocity.x, player.velocity.y);
  driftDirection = driftDirection.normalize(decay);
  return {
    x: player.velocity.x * decay,
    y: player.velocity.y * decay,
    time: newTime,
  };
}

function nextDriftPosition(player, newTime) {
  const tS = newTime-player.velocity.time; // time since acceleration
  const dC = 0.9998; // Drift coefficient
  //Create a new point in paper.js with the next x, y coordinates
  startPosition = new Point(player.position.x, player.position.y);
  //Set the new point (direction) for player to head toward
  driftDirection = new Point(player.velocity.x, player.velocity.y);
  //Calculate speed times mspf which equals distance traveled
  const distance = (1 - Math.pow(dC, tS))/(1 - dC)*0.2;
  //Calculate distance based on speed in a particular direction
  driftDirection = driftDirection.normalize(distance);
  //Caluclate new position based on the previous direction
  const newPosition = startPosition.add(driftDirection);

  return {
    x: newPosition.x,
    y: newPosition.y,
  }
}

function nextDirection(player, timeDelta) {
  //Calculate how much we actually rotate
  const rotation = player.rotation * timeDelta;
  //The initial direction we are pointed at
  startVector = new Point(player.direction.x, player.direction.y);
  //Calculate the new vector we need to rotate towards
  const nextVector = startVector.rotate(player.turnDirection === "right" ? rotation : -rotation);
  //return the new direction to point to
  return { x: nextVector.x, y: nextVector.y };
}

module.exports = playerTick;
