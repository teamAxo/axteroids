const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'))

//we first initiate an empty object
//where we will hold all our players
const players = {}

//this will fire whenever a player connect to our server
io.on('connection', (socket) => {
    console.log('a user connected')
    //save connection for player 1 or 2 individual sockets
    if (!players.player1) {
        players.player1 = socket
        socket.player = 'player1'
    } else if (!players.player2) {
        players.player2 = socket
        socket.player = 'player2'
    }

    //Setting listeners for client side actions
    if (socket.player) {
        //this is a custom action coming from the client side
        //located at index.js
        socket.on('clientInitialize', (timeStamp) => {
            timeStamp.player = socket.player
            timeStamp.atServerTime = Date.now()
            socket.emit('serverInitialize', timeStamp)
        })

        //Anytime the user does something,
        //we catch that action here and then emit
        //that action back all the clients
        socket.on('clientAction', (action) => {
            action.atServerTime = Date.now()
            io.emit('serverAction', action)
        })

        //This is not custom. Socket.io disconnect
        //built in function that handles user leaving the page
        socket.on('disconnect', () => {
            delete players[socket.player]
            console.log('a user disconnected')
        })
    }
})

const PORT = 3002;
http.listen(process.env.PORT || PORT, () => console.log(`Listening on PORT: ${PORT}`));
