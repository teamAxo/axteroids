const tick = require('./tick')

function reducer(state, action) {
    switch (action.type) {
        case 'start moving':
            return updatePlayer(action, 'isMoving', true, state)

        case 'stop moving':
            return updatePlayer(action, 'isMoving', false, state)

        case 'start turning':
            return updatePlayer(action, 'turnDirection', action.direction, state)

        case 'stop turning':
            return updatePlayer(action, 'turnDirection', null, state)

        default: return state
    }
}


function updatePlayer(action, prop, value, state) {
    const updatedPositions = tick(state, action.atServerTime);
    const nextPlayer = updateProperty(updatedPositions.player1, prop, value);
    const updatedPlayer = updateProperty(updatedPositions, action.player, nextPlayer);
    return { ...updatedPlayer, action };
}

function updateProperty(obj, prop, value) {
    return { ...obj, [prop]: value }
}

module.exports = {
    reducer
}