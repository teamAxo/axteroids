const tickCombine = require('../ticks/tickCombine');


function collisionShipReducer(state, gameTime){
    let newState = tickCombine(state, gameTime);
    const ship = newState.player1;
    let shipCollision = newState.shipCollision;
    
    if (ship.position.x <= 20){
        shipCollision = true;
    }

    if (ship.position.x >= 700){
        shipCollision = true;
    }

    if (ship.position.y <= 20){
        shipCollision = true;
    }

    if (ship.position.y >= 520){
        shipCollision = true;
    }

    return {...state, shipCollision};
    
}

module.exports = collisionShipReducer;