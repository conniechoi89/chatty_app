import React, {Component} from 'react';
import Messages from "./Messages.jsx";

class MessageList extends Component {
  render() {

    const messages = this.props.messages.map((message, index) => {
      return <Messages
        key={index}
        user={ message.username }
        content={ message.content }
         />
    });
    return (
        <main className="messages">
          { messages }
        </main>
    )
  }
}

export default MessageList;