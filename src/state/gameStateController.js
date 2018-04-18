const reducer = require('./reducer');
const { initialState } = require('./initialState');
const actions = require('./actions');

const asteroidReducer = require('./asteroidReducer');
const collisionReducer = require('./collisionReducer');
const collisionShipReducer = require('./collisionShipReducer');

const tickCombine = require('../ticks/tickCombine');

function createGameController(player, socket, serverDelay, serverOffset, startingGameTime) {
    console.log('sever delay: ', serverDelay, 'serverOffset: ', serverOffset)
    console.log(`${player} has joined the game`)  
    let actionID = 0;
    initialState.gameTime = startingGameTime;
    let history = [initialState];

    socket.on('serverAction', (action) => {
        const currentTime = Date.now();
        if (action.player === player) {
            serverDelay = (currentTime - action.atPlayerTime) / 2;
            history = history;
        } else {
          history = insertAction(history, action)
          console.log('inject action ', action, 'into ', history.map(({ action }) => action))
        }
    })
    
    function decorateAction(action, time) {
        return {...action, atPlayerTime: time, player, id: actionID += 1};
    }

    return {
        initiateAction(action) {
            action.player = player;
            let currentTime = Date.now();
            action = decorateAction(action, currentTime);
            socket.emit('clientAction', action);
            action.atServerTime = currentTime - serverDelay + serverOffset;
            const nextState = reducer(history[history.length - 1], action);
            history.push(nextState);
        },

        moveAsteroids() {
            //const nextState = asteroidReducer(history[history.length - 1]);
            //history.push(nextState);
        },

        currentState(){
            //move asteroids even when there are no user actions 
            //this.moveAsteroids();
            let gameTime = Date.now() - serverDelay + serverOffset;
            if (collisionReducer(history[history.length - 1], gameTime).asteroidCollision) {
              history = [initialState];
            }

            if (collisionShipReducer(history[history.length - 1], gameTime).shipCollision){
                history = [initialState];
            }
            
            // console.log('Inside currentState (gameController): State: ', history[history.length - 1], gameTime);
            return tickCombine(history[history.length - 1], gameTime);
        }
    }
}

function insertAction(history, newAction) {
  for (let i = history.length - 1; i >= 0; i--) {
      if (history[i].gameTime < newAction.atServerTime) {
          const previousHistory = history.slice(0, i + 1)
          const newHistory = recomputeWithAction(
            history.slice(i + 1), 
            newAction,
            previousHistory[previousHistory.length - 1]
          )
          return previousHistory.concat(newHistory)
      }
  }
}

function recomputeWithAction(history, action, startingState) {
  const actionList = history.map(({ action }) => action)
  actionList.unshift(action)
  return actionList.reduce(
      (state, action) => {
          const nextState = reducer(state[state.length - 1], action)
          state.push(nextState)
          return state
      }
      , [startingState]
  ).slice(1)
}

module.exports = createGameController;