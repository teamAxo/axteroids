const playerTick = require('./playerTick');
const bulletTick = require('./bulletTick');
const asteroidTick = require('./asteroidTick');

//This should really be called 'stateController'
function tickCombine(state, gameTime) {
    const player1 = playerTick(state.player1, state.gameTime, gameTime);
    const asteroid1 = asteroidTick(state.asteroids[0], state.gameTime, gameTime);
    console.log('tick combine', state.asteroids[0], asteroid1);
    return { ...state, gameTime, player1, asteroids: [asteroid1] };

}

module.exports = tickCombine;
