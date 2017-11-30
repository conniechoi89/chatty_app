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
  }

  componentWillMount() {

    this.socket.addEventListener('message', message => {
      const { messages } = this.state;
      this.setState({messages: messages.concat(JSON.parse(message.data))});
    });

  }

  onNewPost(content) {

    // this.setState({messages: this.state.messages.concat({ username: "Bob", content: content })});
    // this.socket.send(JSON.stringify())
    const newMsg = { username: "connie", content: content};
    this.socket.send(JSON.stringify(newMsg));
    console.log(JSON.stringify(newMsg));
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
        <ChatBar currentUserName={this.state.currentUser} onNewPost={this.onNewPost} />
      </div>
    )
  }
}

export default App;
