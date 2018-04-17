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
        case 'start shooting':
            const vector = new Point(100, 100);
            const radius = 1000;
            const circle = new Path.Circle(new Point(100, 200), radius);
            circle.fillColor = 'red';
            console.log('Shootin');
            return tickCombine(state, action.atServerTime);

            // updatedPositions = tickCombine(state, action.atServerTime);
            // nextBullet = updateProperty(updatedPositions.bullet, '', action.direction);
            // updatedBullet = updateProperty(updatedPositions, action.player, nextBullet);
            // return { ...updatedBullet, action};
        case 'stop shooting':
            // updatedPositions = tickCombine(state, action.atServerTime);
            // nextBullet = updateProperty(updatedPositions.bullet, '', null);
            // updatedBullet = updateProperty(updatedPositions, action.player, nextBullet);
            // return { ...updatedBullet, action};

        default: return state;
    }
}


function updateProperty(obj, prop, value) {
    return { ...obj, [prop]: value }
}

module.exports = reducer;
