const player1 = {
    position: { x: 450, y: 320 },
    direction: { x: 0, y: 1 },
    turnDirection: null,
    isMoving: false,
    isAccelerating: false,
    velocity: {x: 0, y: 0, time: 0},
    rotation: .3,
}

const asteroid1 = {
    position: {x: 70, y: 80},
    direction: {x: 1, y: 0},
    velocity: {x: .15, y: .15},
    speed: .15,
}

const player2 = player1

const initialState = {
    player1,
    player2,
    bullets: [],
    asteroids: [asteroid1],
    action: { id: NaN },
    gameTime: 0,
    asteroidCollision : false,
    shipCollision: false,
}


module.exports = {
    initialState
}