const playerTick = require('./playerTick');
const bulletTick = require('./bulletTick');
const asteroidTick = require('./asteroidTick');

//This should really be called 'stateController'
function tickCombine(state, gameTime) {
    const player1 = playerTick(state.player1, state.gameTime, gameTime);
    const asteroid1 = asteroidTick(state.asteroids[0], state.gameTime, gameTime);
    //
    // const bullets = state.bullets.map((bullet) => {
    //   const bullet = bulletTick(bullet, state.gameTime, gameTime);
    //   return bullet;
    // });
    return { ...state, gameTime, player1, asteroids: [asteroid1]};
}

module.exports = tickCombine;
