import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import Navbar from "./Navbar.jsx";

class App extends Component {
 constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    this.onNewPost = this.onNewPost.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");
  }

  onNewPost(content) {
    this.setState({messages: this.state.messages.concat({ username: "Bob", content: content })});
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
