import React, {Component} from 'react';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      messageContent: '',
      currentUser:''
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
      // this.setState({
      //   currentUser: event.target.value
      // });
      //console.log(this.currentUser);

      var newNameChangeNotification = {
        username: this.state.currentUser
      };

      //this.props.newUserName(this.state.currentUser);
      this.props.newUserName(newNameChangeNotification);


    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username"
        onChange={this.onUserNameChange} onKeyDown={this.UserAreaKeyDown} placeholder={this.props.currentUserName.name} />

        <input className="chatbar-message" onChange={this.onContent} placeholder="Type a message and hit ENTER"
          onKeyDown={this.contentAreaKeyDown} />
      </footer>
    );
  }
}

export default ChatBar;