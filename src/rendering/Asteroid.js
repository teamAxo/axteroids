function createAsteroid({ x, y }, direction, color) {
    var decagon = new Path.RegularPolygon(new Point(120, 70), 20, 37);
    decagon.fillColor = 'blue';
    decagon.selected = false;
    return decagon;

}

module.exports = createAsteroid;