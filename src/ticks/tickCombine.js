const playerTick = require('./playerTick');


function tickCombine(state, gameTime) {
    const player1 = playerTick(state.player1, state.gameTime, gameTime);
    return { ...state, gameTime, player1 };
}

module.exports = tickCombine;