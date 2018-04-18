function createAsteroid({ x, y }, direction, color) {
    var vector = new Point(direction)
    var angle = vector.angle - 30;


    var decagon = new Path.RegularPolygon(new Point(x, y), 20, 37);
    decagon.fillColor = 'blue';
    decagon.selected = false;
    decagon.rotate(angle);
    return decagon;

}

module.exports = createAsteroid;