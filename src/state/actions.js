function startMoving() {
    return {
        type: "start moving",
    }
}

function stopMoving() {
    return {
        type: "stop moving",
    }
}

function startAccelerating() {
  return {
      type: "start accelerating",
  }
}

function stopAccelerating() {
  return {
      type: "stop accelerating",
  }
}

function startTurning(direction) {
    return {
        type: "start turning",
        direction, //"left" or "right"
    }
}

function stopTurning() {
    return {
        type: "stop turning",
    }
}

function shoot() {
    return {
        type: "shoot",
    }
}

module.exports = {
    startMoving,
    stopMoving,
    startAccelerating,
    stopAccelerating,
    startTurning,
    stopTurning,
    shoot,
}