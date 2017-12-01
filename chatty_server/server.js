const express = require('express');
const SocketServer = require('ws').Server;


const PORT = 3001;
const clients = [];

const server = express()

  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
// wss.on('connection', (ws) => {
//   ws.on('open', function open() {
//     ws.send(''received: %s', message');
//   });
//   console.log('Client connected');
//   ws.send('something');

//   // Set up a callback for when a client closes the socket. This usually means they closed their browser.
//   // ws.on('close', () => console.log('Client disconnected'));
// });


const uuidv4 = require('uuid/v4');

wss.on('connection', function connection(socket) {

  wss.broadcast = message => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === socket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

    wss.broadcast = notification => {
      wss.clients.forEach(function each(client) {
        if (client.readyState === socket.OPEN) {
        client.send(JSON.stringify(notification));
      }
    });
  }

  socket.on('message', function incoming(message) {
    const objMessage = JSON.parse(message);
    objMessage['id'] = uuidv4();
    // objMessage['type'] = 'incomingNotification';
    wss.broadcast(objMessage);
  });

  socket.on('notification', function incoming(notification) {
    const notiMessage = JSON.parse(notification);
    notiMessage['type'] = "postMessage";
    wws.broadcast(notiMessage);

  });

});



