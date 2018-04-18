function asteroidReducer(state) {
    let newAsteroidPos = state.asteroids[0];

    //get the min dimension from the window, because we set the canvas to this dimension
    //We need the asteroid to know this so it can bounce off if it meets this edge
    let minWindowDimension = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    newAsteroidPos.position.y += newAsteroidPos.velocity.y;
    newAsteroidPos.position.x += newAsteroidPos.velocity.x;

    if (newAsteroidPos.position.x <= 40){
        newAsteroidPos.velocity.x *= -1;
    }

    if (newAsteroidPos.position.x >= minWindowDimension - 40){
        newAsteroidPos.velocity.x *= -1;
    }

    if (newAsteroidPos.position.y <= 40){
        newAsteroidPos.velocity.y *= -1;
    }

    if (newAsteroidPos.position.y >= minWindowDimension * .7 - 40){
        newAsteroidPos.velocity.y *= -1;
    }

    return { ...state, asteroids: [newAsteroidPos] };

}

module.exports = asteroidReducer;
