const express = require('express');
const SocketServer = require('ws').Server;
const PORT = 3001;
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({ server });
const uuidv4 = require('uuid/v4');

function updateUserCount () {
  const userCount = wss.clients.size;
  const newUserJoin = {
    type: 'incomingUser',
    count: userCount
  }
  wss.broadcast(newUserJoin);
}



wss.on('connection', function connection(socket) {
  wss.broadcast = message => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === socket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

  socket.on('message', function incoming(message) {
    const objMessage = JSON.parse(message);
    objMessage['id'] = uuidv4();
    wss.broadcast(objMessage);
  });

  updateUserCount();


  socket.on('close', () => {
    updateUserCount();
    console.log('Client disconnected');
  });

});



