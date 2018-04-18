const tickCombine = require('../ticks/tickCombine');


function collisionShipReducer(state, gameTime){
    let newState = tickCombine(state, gameTime);
    const ship = newState.player1;
    let shipCollision = newState.shipCollision;

    let minWindowDimension = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    if (ship.position.x <= 20){
        shipCollision = true;
    }

    if (ship.position.x >= minWindowDimension - 10){
        shipCollision = true;
    }

    if (ship.position.y <= 20){
        shipCollision = true;
    }

    if (ship.position.y >= minWindowDimension * .7 - 10){
        shipCollision = true;
    }

    return {...state, shipCollision};

}

module.exports = collisionShipReducer;
