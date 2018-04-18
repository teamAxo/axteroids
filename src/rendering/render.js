const createShip = require('./Ship')
const createAsteroid =  require('./Asteroid');

function redraw(state, layer) {
    layer.remove()
    new Layer()
    const player1Ship = createShip(state.player1.position, state.player1.direction, 'cyan')
    // const player2Ship = createShip(state.player2.position, state.player2.direction, 'red')
    console.log('render', state.asteroids[0])
    const asteroid1 = createAsteroid(state.asteroids[0].position, state.asteroids[0].direction, 'red');
    // console.log("IN REDRAW asteroids:", state.asteroids[0].position, state.asteroids[0].direction)
}

module.exports = {
    redraw
}