
function asteroidTick(asteroid, oldTime, newTime) {
  const { position, velocity, direction } = newAstPositionAndVelocity(asteroid, newTime - oldTime);
  console.log('atick', position, velocity);

  // const direction = { x: asteroid.direction.x, y: asteroid.direction.y };

  // console.log('ASTEROID TICK', "Old: ", asteroid.position, asteroid.direction, " \n\n\n New: ", position, direction);

  return { ...asteroid, position, direction, velocity };
};

function newAstPositionAndVelocity(asteroid, deltaTime) {

  if (deltaTime > 1000000) {
    return {
      position: {
        x: asteroid.position.x,
        y: asteroid.position.y
      },
      velocity: {
        x: asteroid.velocity.x,
        y: asteroid.velocity.y
      },
      direction: {
        x: asteroid.direction.x,
        y: asteroid.direction.y
      },
    };
  }

  let minWindowDimension = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

  console.log('wdim', minWindowDimension)
  let xPos = asteroid.position.x;
  let yPos = asteroid.position.y;
 
  function triangle(t, period) {
    const bend = Math.floor((2*t/period) + (1/2))
    return (4/period)*(t - (period/2)*bend)*Math.pow(-1, bend);
  }
  function direction(t, period) {
    const bend = Math.floor((2*t/period) + (1/2));
    
    return (Math.pow(-1, bend) + 1)/2;
  }
  let xDir;
  let yDir;

  function xVelo(deltaTime) {
    const frameWidth = minWindowDimension;
    const amplitude = minWindowDimension / 2;
    const period = frameWidth/asteroid.velocity.x;
    let phaseOffset = (period/4)*(asteroid.position.x - frameWidth / 2) /(frameWidth / 2);
    xDir = direction(deltaTime + phaseOffset, period);
    if (xDir === 0) {
      phaseOffset += period/2;
    };
    return amplitude*triangle(deltaTime + phaseOffset, period) + frameWidth/2;
  }
  function yVelo(deltaTime) {
    const frameWidth = minWindowDimension * .7;
    const amplitude = minWindowDimension * .7 / 2;
    const period = frameWidth/asteroid.velocity.y;
    phaseOffset = (period/4)*(asteroid.position.y - frameWidth / 2) /(frameWidth / 2);
    yDir = direction(deltaTime + phaseOffset, period);
    if (yDir === 0) {
      phaseOffset += period/2;
    };
    return amplitude*triangle(deltaTime + phaseOffset, period) + frameWidth/2;
  }

  xPos = xVelo(deltaTime);
  yPos = yVelo(deltaTime);

  console.log(deltaTime);
  return {
    position: {
      x: xPos,
      y: yPos
    },
    velocity: {
      x: asteroid.velocity.x,
      y: asteroid.velocity.y
    },
    direction: {
      x: xDir,
      y: yDir
    }
  };
}

module.exports = asteroidTick;
