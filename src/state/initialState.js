const player1 = {
    position: { x: 400, y: 400 },
    direction: { x: 0, y: 1 },
    turnDirection: null,
    isMoving: false,
    speed: .15,
    rotation: .5,
}

const asteroid1 = {
    position: {x: 270, y: 200},
    direction: {x: .2, y: .4},
    speed: .15,
}

const bullet = {
  position: {x: 0, y: 0},
  direction: {x: 5, y: 5},
  speed: .2,
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
