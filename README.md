# Chatty App

This is a simple, single-page, and real time Chatty App built with *React* like Slack, Twitter and Facebook.

The major function and behaviour of this app are:
- Contains a chat log displaying messages and notifications
- Contains an input field to change your name and an input field to send a message
- The client-side app communicates with a server via WebSockets for multi-user real-time updates
- No persistent database is involved; the focus is on the client-side experience
- Display the count of connected users
- After users change their user names, focus will go message bar so that they can write their message right away
- Message bar will be empty after users enter their messages
- When a client sends a message:
  - the server determines what to do based on the message's type property
  - users get a generated unique id (a UUID)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.

## Screenchots

!["Screenshot of Chatty App"](https://github.com/conniechoi89/chatty_app/blob/master/docs/chattyApp.png?raw=true)
!["Screenshot of two Chatty App; numbers of users"](https://github.com/conniechoi89/chatty_app/blob/master/docs/chattyApp1.png?raw=true)
!["Screenshot of Anonymous's message](https://github.com/conniechoi89/chatty_app/blob/master/docs/chattyApp2.png?raw=true)
!["Screenshot of changed user name ](https://github.com/conniechoi89/chatty_app/blob/master/docs/chattyApp3.png?raw=true)

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

