const { Point } = require('paper');
const tickCombine = require('../ticks/tickCombine');

function reducer(state, action) {
    let updatedPositions;
    let nextPlayer;
    let updatedPlayer;
    let nextBullet;
    let updatedBullet;

    switch (action.type) {
        case 'start moving':
            // updatedPositions = state;
            updatedPositions = tickCombine(state, action.atServerTime);
            nextPlayer = updateProperty(updatedPositions.player1, 'isMoving', true);
            updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
            return { ...updatedPlayer, action };

        case 'stop moving':
            updatedPositions = tickCombine(state, action.atServerTime);
            nextPlayer = updateProperty(updatedPositions.player1, 'isMoving', false);
            updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
            return { ...updatedPlayer, action };

        case 'start accelerating':
        // updatedPositions = state; 
          updatedPositions = tickCombine(state, action.atServerTime);
          nextPlayer = updateProperty(updatedPositions.player1, 'isAccelerating', true);
          updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
          return { ...updatedPlayer, action };

        case 'stop accelerating':
            updatedPositions = tickCombine(state, action.atServerTime);
            nextPlayer = updateProperty(updatedPositions.player1, 'isAccelerating', false);
            updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
            return { ...updatedPlayer, action };

        case 'start turning':
            updatedPositions = tickCombine(state, action.atServerTime);
            nextPlayer = updateProperty(updatedPositions.player1, 'turnDirection', action.direction);
            updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
            return { ...updatedPlayer, action };

        case 'stop turning':
            updatedPositions = tickCombine(state, action.atServerTime);
            nextPlayer = updateProperty(updatedPositions.player1, 'turnDirection', null);
            updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
            return { ...updatedPlayer, action };
        case 'shoot':
            updatedPositions = tickCombine(state, action.atServerTime);
            const newBullet = {
              position: state.player1.position,
              direction: state.player1.direction,
            };
            const bullets = [...state.bullets, newBullet];
            const newState = { ...updatedPositions, bullets };
            // console.log(newState);
            return newState;

        default: return state;
    }
}


function updateProperty(obj, prop, value) {
    return { ...obj, [prop]: value }
}

module.exports = reducer;
