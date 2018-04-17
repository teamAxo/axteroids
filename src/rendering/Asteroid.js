function createAsteroid({ x, y }, direction, color) {
    var decagon = new Path.RegularPolygon(new Point(x, y), 20, 37);
    decagon.fillColor = 'blue';
    decagon.selected = false;
    return decagon;

}

module.exports = createAsteroid;