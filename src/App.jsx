import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import Navbar from "./Navbar.jsx";

class App extends Component {

  constructor(props) {
    super(props);

    this.socket = new WebSocket("ws://localhost:3001");

    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
    this.onNewPost = this.onNewPost.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
  }

  componentWillMount() {

    this.socket.addEventListener('message', message => {
      const { messages } = this.state;
      this.setState({messages: messages.concat(JSON.parse(message.data))});
      console.log("receiveing", message.data)
    });

    // this.socket.addEventListener('notification', notification => {
    //   const { notiMessage } = this.state;


    // })
  }

  //Function pointer in App that is invoked when username changes name
  onUserNameChange(content) {
    console.log("testing "+content.username);
    var newName = content.username;
    var content = this.state.currentUser.name + " has changed name to "+newName;

    const notiMessage = { type: 'postNotification', username: newName, content: content, oldUserName: this.state.currentUser.name};
    this.setState({currentUser: {name: newName}});
    this.socket.send(JSON.stringify(notiMessage));


  }


  onNewPost(content) {
    // this.setState({messages: this.state.messages.concat({ username: "Bob", content: content })});
    // this.socket.send(JSON.stringify())
    const newMsg = { type: 'message', username: content.currentUser, content: content.messageContent};
    this.socket.send(JSON.stringify(newMsg));
    console.log("sending", JSON.stringify(newMsg));
  }
    // var tempMessages = this.state.messages;
    // var newMessage = {
    //   username:"Bob",
    //   content: content
    // };
    // tempMessages.push(newMessage);

    // this.setState({
    //   messages: tempMessages
    // });

  render() {
    console.log("Rendering <App/>");

    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar newUserName={this.onUserNameChange} currentUserName={this.state.currentUser} onNewPost={this.onNewPost} />
      </div>
    )
  }
}

export default App;
