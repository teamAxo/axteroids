const createShip = require('./Ship')
const createAsteroid =  require('./Asteroid');
const createBullet = require('./Bullet');

function redraw(state, layer) {
    layer.remove()
    new Layer()
    const player1Ship = createShip(state.player1.position, state.player1.direction, 'cyan');
    for (let i = 0; i < state.bullets.length; i += 1) {
      createBullet(state.bullets[i].position, state.player1.direction, 'red');
    }
    // const bullet = createBullet({x: 400, y: 400}, 'red');
    // const player2Ship = createShip(state.player2.position, state.player2.direction, 'red')
    const asteroid1 = createAsteroid(state.asteroids[0].position, state.asteroids[0].direction, 'red');
    // console.log("IN REDRAW asteroids:", state.asteroids[0].position, state.asteroids[0].direction)
}

module.exports = {
    redraw
}
