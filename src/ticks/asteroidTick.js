
function asteroidTick(asteroid, oldTime, newTime) {
    const position = newAstPosition(asteroid, newTime - oldTime);
    const direction = { x: asteroid.direction.x, y: asteroid.direction.y };

    // console.log('ASTEROID TICK', "Old: ", asteroid.position, asteroid.direction, " \n\n\n New: ", position, direction);

    return { ...asteroid, position, direction };
};

function newAstPosition(asteroid, timeDelta){
    let newX = asteroid.position.x + .02;
    let newY = asteroid.position.y + .02;
    // console.log('New position being added!')
    return {x: newX, y: newY };
};

module.exports = asteroidTick;
