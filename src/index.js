const io = require('socket.io-client');
const actions = require('./state/actions');
const socket = io();

const paper = require('paper');

const { redraw } = require('./rendering/render');
const createGameController = require('./state/gameStateController');

//TODO: make sure Date.now() works as expected
//###########################################
socket.emit('clientInitialize', { atPlayerTime: Date.now() });

let gameController;
socket.on('serverInitialize', ({ player, atPlayerTime, atServerTime }) => {
    let currentTime = Date.now();
    const serverDelay = (currentTime - atPlayerTime) / 2;
    const serverOffset = -(currentTime - serverDelay - atServerTime);
    const startingGameTime = currentTime - serverDelay + serverOffset;
    gameController = createGameController(player, socket, null, null, null);
});

paper.install(window);

window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    paper.setup(canvas);
    let tool = new paper.Tool();

    tool.onKeyDown = function (event) {
        if (gameController) {
<<<<<<< HEAD
            if (event.key === 'up') {
                gameController.initiateAction(actions.startMoving())
            } else if (event.key === 'down') {
                gameController.initiateAction(actions.stopMoving())
            } else if (event.key === 'left') {
            } else if (event.key === 'right') {
=======
            switch (event.key) {
                case 'left':
                    gameController.initiateAction(actions.startTurning('left'));
                    break;
                case 'right':
                    gameController.initiateAction(actions.startTurning('right'));
                    break;
                case 'up':
                    gameController.initiateAction(actions.startMoving());
                    break;
            }
        }
    };

    tool.onKeyUp = function (event) {
        if (gameController) {
            switch (event.key) {
                case 'left':
                    gameController.initiateAction(actions.stopTurning());
                    break;
                case 'right':
                    gameController.initiateAction(actions.stopTurning());
                    break;
                case 'up':
                    gameController.initiateAction(actions.stopMoving());
                    break;
>>>>>>> 5eab39379b01c1bd75f52efeebad431a9bbee3cc
            }
        }
    };

    view.onFrame = function (event) {
        if (gameController) {
            const currentState = gameController.currentState();
            redraw(currentState, project.activeLayer);
        }
    }
<<<<<<< HEAD

}


function createShip({ x, y }, rotation) {
    var radius = 20;
    var angle = rotation - 30;

    var circle = new Path.Circle(new Point(x, y), radius);
    var triangle = new Path.RegularPolygon(new Point(x, y), 3, radius);
    var triangle2 = new Path.RegularPolygon(new Point(x, y), 3, radius / 2);

    triangle.insert(1, new Point(x, y));
    triangle2.insert(1, new Point(x, y));

    var ship = new CompoundPath({
        children: [
            triangle, triangle2, circle
        ],
        // selected: true
    })
    ship.strokeColor = 'cyan';
    ship.strokeWidth = 2;
    ship.rotate(angle);
    return ship
}
=======
};
>>>>>>> 5eab39379b01c1bd75f52efeebad431a9bbee3cc
