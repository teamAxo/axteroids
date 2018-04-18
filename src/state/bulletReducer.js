function bulletReducer(state) {
  let newBulletPos = {
    position: {x: 0, y: 0},
    direction: {x: 0, y: 0},
    velocity: {x: 0, y: 0},
    speed: .2,
  };

  const newBulletArr = [];
  if (state.bullets.length > 0) {
    state.bullets.forEach((bullet) => {
      let bulletVector = new Point(bullet.direction);
      bulletVector = bulletVector.normalize(bullet.speed);
      const bulletPosition = new Point(bullet.position);
      const newBulletPosition = bulletPosition.add(bulletVector);
      const { x, y } = newBulletPosition;
      newBulletArr.push({ ...bullet, position: { x, y } });
      // let newBulletPos = bullet;
      // if (bullet.direction.x > 0 && bullet.direction.y > 0) {
      //   newBulletPos.position.x += newBulletPos.velocity.x;
      //   newBulletPos.position.y += newBulletPos.velocity.y;
      // } else if (bullet.direction.x > 0 && bullet.direction.y < 0) {
      //   newBulletPos.position.x += newBulletPos.velocity.x;
      //   newBulletPos.position.y -= newBulletPos.velocity.y;
      // } else if (bullet.direction.x < 0 && bullet.direction.y > 0) {
      //   newBulletPos.position.x -= newBulletPos.velocity.x;
      //   newBulletPos.position.y += newBulletPos.velocity.y;
      // } else if (bullet.direction.x < 0 && bullet.direction.y < 0) {
      //   newBulletPos.position.x -= newBulletPos.velocity.x;
      //   newBulletPos.position.y -= newBulletPos.velocity.y;
      // } else {
      //   newBulletPos.position.y += newBulletPos.velocity.y;
      // }
    })
  }
  return { ...state, bullets: newBulletArr };


}

module.exports = bulletReducer;
