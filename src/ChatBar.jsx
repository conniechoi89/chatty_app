import React, {Component} from 'react';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      valueUser:''
    };
    this.onContentUser = this.onContentUser.bind(this);
    this.onContent = this.onContent.bind(this);
    this.contentAreaKeyDown = this.contentAreaKeyDown.bind(this);
  }


  onContentUser(event) {
    this.setState({
      valueUser: event.target.value
    });
  }


  onContent(event) {
    this.setState({
      value: event.target.value
    });

  }

  contentAreaKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onNewPost(this.state);
      this.state.value = '';
    }

  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" onChange={this.onContentUser} onKeyDown={this.contentAreaKeyDown} placeholder={this.props.currentUserName.name} />
        <input className="chatbar-message" onChange={this.onContent} placeholder="Type a message and hit ENTER"
          onKeyDown={this.contentAreaKeyDown} value={this.state.value}/>
      </footer>
    );
  }
}

export default ChatBar;