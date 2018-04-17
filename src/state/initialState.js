const player1 = {
    position: { x: 400, y: 400 },
    direction: { x: 0, y: 1 },
    turnDirection: null,
    isMoving: false,
    isAccelerating: false,
    velocity: {x: 0, y: 0, time: 0},
    rotation: .3,
}

const asteroid1 = {
    position: {x: 450, y: 500},
    direction: {x: 0, y: 1}
}

const player2 = player1

const initialState = {
    player1,
    player2,
    bullets: [],
    asteroids: [asteroid1],
    action: { id: NaN },
    gameTime: 0,
}


module.exports = {
    initialState
}