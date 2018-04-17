function asteroidReducer(state) {
    let newAsteroidPos = state.asteroids[0];

    newAsteroidPos.position.x += .5;
    newAsteroidPos.position.y += .5;

    // console.log("Compare asteroids: ",newAsteroidPos, state.asteroids[0]);

    return {...state, asteroids: [newAsteroidPos]};

}

module.exports = asteroidReducer;