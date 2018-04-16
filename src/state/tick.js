const { Point } = require('paper');

const playerSpeed = 0.15;
const playerRotateSpeed = 0.5;

function tick(state, gameTime) {
    const player1 = moveAndRotate(state.player1, state.gameTime, gameTime);
    return { ...state, gameTime, player1 };
}

function moveAndRotate(player, oldTime, newTime) {
    const position = player.isMoving ? nextPosition(player.position, player.direction, playerSpeed, newTime - oldTime) : player.position

    const direction = player.turnDirection ? nextDirection(player.direction, player.turnDirection, playerRotateSpeed, newTime - oldTime) : player.direction; 

    return { ...player, position, direction };
}

function nextPosition(startPosition, direction, speed, timeDelta) {
    //Create a new point in paper.js with the next x, y coordinates 
    startPosition = new Point(startPosition.x, startPosition.y);
    //Set the new point (direction) for player to head toward
    direction = new Point(direction.x, direction.y);
    //Calculate speed times mspf which equals distance traveled 
    const distance = speed * timeDelta;
    //Calculate distance based on speed in a particular direction 
    direction = direction.normalize(distance);
    //Caluclate new position based on the previous direction
    const newPosition = startPosition.add(direction);

    //return our new position
    return {x: newPosition.x, y: newPosition.y };
}

function nextDirection(startVector, turnDirection, rotateSpeed, timeDelta) {
    //Calculate how much we actually rotate
    const rotation = rotateSpeed * timeDelta;
    //The initial direction we are pointed at 
    startVector = new Point(startVector.x, startVector.y);
    //Calculate the new vector we need to rotate towards
    const nextVector = startVector.rotate(turnDirection === "right" ? rotation : -rotation);
    //return the new direction to point to 
    return { x: nextVector.x, y: nextVector.y };
}

module.exports = tick