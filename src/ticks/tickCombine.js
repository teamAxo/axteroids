const playerTick = require('./playerTick');
const bulletTick = require('./bulletTick');

function tickCombine(state, gameTime) {
    const player1 = playerTick(state.player1, state.gameTime, gameTime);
    // const bullet = bulletTick(state);
    // return { ...state, gameTime, player1, bullets: [bullet] };
    return { ...state, gameTime, player1 }
}

module.exports = tickCombine;
