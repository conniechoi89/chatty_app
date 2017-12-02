import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: '',
      currentUser: props.currentUserName.name
    };
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onContent = this.onContent.bind(this);
    this.contentAreaKeyDown = this.contentAreaKeyDown.bind(this);
    this.UserAreaKeyDown = this.UserAreaKeyDown.bind(this);
  }

  //User changes his name
  onUserNameChange(event) {
    this.setState({
      currentUser: event.target.value
    });
  }
  onContent(event) {
    this.setState({
      messageContent: event.target.value
    });
  }
  contentAreaKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onNewPost(this.state);
      this.state.value = '';
    }
  }
  //When we press enter Then username change event is fire;
  UserAreaKeyDown(event) {
    if (event.key === 'Enter') {
      var newNameChangeNotification = {
        username: this.state.currentUser
      };
      this.props.newUserName(newNameChangeNotification);
      this.messageInput.focus();
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input
        className="chatbar-username"
        value={this.state.currentUser}
        onChange={this.onUserNameChange}
        onKeyDown={this.UserAreaKeyDown}
        placeholder="User Name"
        />
        <input
        className="chatbar-message"
        value={this.state.messageContent}
        onChange={this.onContent}
        placeholder="Type a message and hit ENTER"
        onKeyDown={this.contentAreaKeyDown}
        ref={(input) => { this.messageInput = input; }}
        />

      </footer>
    );
  }
}

export default ChatBar;