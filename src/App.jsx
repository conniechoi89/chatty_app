import React, {Component} from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import Navbar from "./Navbar.jsx";

class App extends Component {
 constructor(props) {
    super(props);
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
    }
    this.onNewPost = this.onNewPost.bind(this);
  }

  onNewPost(content) {

    var tempMessages = this.state.messages;
    var newMessage = {
      username:"Bob",
      content: content
    };
    tempMessages.push(newMessage);

    this.setState({
      messages: tempMessages
    });

    // this.setState({messages: this.state.messages.concat({ username: "Bob", content: content })});
    //console.log(this.state.messages);
  }


  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({messages: messages})
  //   }, 3000);
  // }

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
