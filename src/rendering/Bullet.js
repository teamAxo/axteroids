function createBullet({ x, y }, direction, velocity) {
    const radius = 3;
    const circle = new Path.Circle(new Point(x, y), radius);
    circle.fillColor = 'red';
    return circle;
}

module.exports = createBullet;
