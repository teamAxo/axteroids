function playerTick(player, oldTime, newTime) {
    const position = player.isMoving ? nextPosition(player, newTime - oldTime) : player.position;
    const direction = player.turnDirection ? nextDirection(player, newTime - oldTime) : player.direction;
    return { ...player, position, direction };
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
