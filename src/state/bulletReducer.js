function bulletReducer(state) {
  let newBulletPos = {
    position: {x: 0, y: 0},
    direction: {x: 0, y: 0},
    velocity: {x: 0, y: 0},
    speed: .2,
  };

  if (state.bullets.length > 0) {
    state.bullets.forEach((bullet) => {
      let newBulletPos = bullet;
      if (bullet.direction.x > 0 && bullet.direction.y > 0) {
        newBulletPos.position.x += newBulletPos.velocity.x;
        newBulletPos.position.y += newBulletPos.velocity.y;
      } else if (bullet.direction.x > 0 && bullet.direction.y < 0) {
        newBulletPos.position.x += newBulletPos.velocity.x;
        newBulletPos.position.y -= newBulletPos.velocity.y;
      } else if (bullet.direction.x < 0 && bullet.direction.y > 0) {
        newBulletPos.position.x -= newBulletPos.velocity.x;
        newBulletPos.position.y += newBulletPos.velocity.y;
      } else if (bullet.direction.x < 0 && bullet.direction.y < 0) {
        newBulletPos.position.x -= newBulletPos.velocity.x;
        newBulletPos.position.y -= newBulletPos.velocity.y;
      } else {
        newBulletPos.position.y += newBulletPos.velocity.y;
      }
    })
  }

  return { ...state, bullets: [...state.bullets, newBulletPos] };

}

module.exports = bulletReducer;
