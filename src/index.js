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
            }
        }
    };

    view.onFrame = function (event) {
        if (gameController) {
            const currentState = gameController.currentState();
            redraw(currentState, project.activeLayer);
        }
    }
};