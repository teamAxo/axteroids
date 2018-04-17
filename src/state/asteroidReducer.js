function asteroidReducer(state) {
    let newAsteroidPos = state.asteroids[0];

    newAsteroidPos.position.y += newAsteroidPos.velocity.y;
    newAsteroidPos.position.x += newAsteroidPos.velocity.x;

    if (newAsteroidPos.position.x <= 40){
        newAsteroidPos.velocity.x *= -1;
    }

    if (newAsteroidPos.position.x >= 680){
        newAsteroidPos.velocity.x *= -1;
    }

    if (newAsteroidPos.position.y <= 40){
        newAsteroidPos.velocity.y *= -1;
    }

    return { ...state, asteroids: [newAsteroidPos] };

}

module.exports = asteroidReducer;
