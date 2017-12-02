import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import Navbar from "./Navbar.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001");
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      userCount: 0
    };
    this.onNewPost = this.onNewPost.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
  }

  componentWillMount() {
    this.socket.addEventListener('message', message => {
      const messageObj = JSON.parse(message.data);
      if (messageObj.type == "incomingUser") {
        this.setState({userCount: messageObj.count});
      } else {
        const { messages } = this.state;
        this.setState({messages: messages.concat(JSON.parse(message.data))});
      }
    });
  }

  //Function pointer in App that is invoked when username changes name
  onUserNameChange(content) {
    const newName = content.username;
    var content = this.state.currentUser.name + " has changed name to " + newName;
    const notiMessage = {
      type: 'postNotification',
      content: content,
      oldUserName: this.state.currentUser.name
    };
    this.setState({currentUser: {name: newName}});
    this.socket.send(JSON.stringify(notiMessage));
  }

  onNewPost(content) {
    const newMsg = {
      type: 'message',
      username: this.state.currentUser.name,
      content: content.messageContent
    };
    this.socket.send(JSON.stringify(newMsg));
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <Navbar incomingUser={this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar
        newUserName={this.onUserNameChange}
        currentUserName={this.state.currentUser}
        onNewPost={this.onNewPost}
        />
      </div>
    )
  }
}

export default App;
