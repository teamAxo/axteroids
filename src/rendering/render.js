const createShip = require('./Ship')

function redraw(state, layer) {
    layer.remove()
    new Layer()
    const player1Ship = createShip(state.player1.position, state.player1.direction, 'cyan')
    // const player2Ship = createShip(state.player2.position, state.player2.direction, 'red')
    // const asteroid1 = createAsteroid(state.asteroids[0].position, state.asteroid1[0].direction, 'red');
}

module.exports = {
    redraw
}