const playerTick = require('./playerTick');
const asteroidTick = require('./asteroidTick');

//This should really be called 'stateController'
function tickCombine(state, gameTime) {
    const player1 = playerTick(state.player1, state.gameTime, gameTime);

    const asteroid1 = asteroidTick(state.asteroids[0], state.gameTime, gameTime);
    
    return { ...state, gameTime, player1, asteroids: [asteroid1] };
}

module.exports = tickCombine;