
function asteroidTick(asteroid, oldTime, newTime) {
    const position = newAstPosition(asteroid, newTime - oldTime);
    const direction = { x: asteroid.direction.x, y: asteroid.direction.y };

    // console.log('ASTEROID TICK', "Old: ", asteroid.position, asteroid.direction, " \n\n\n New: ", position, direction);

    return { ...asteroid, position, direction };
};

function newAstPosition(asteroid, timeDelta) {
    //borders 
    //high y = 10
    //low y = 585
    //x high = 775
    //x low = -3

    console.log('New position being added!', asteroid.position)
    return { x: asteroid.position.x, y: asteroid.position.y };


module.exports = asteroidTick;