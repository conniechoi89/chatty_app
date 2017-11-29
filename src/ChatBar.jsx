import React, {Component} from 'react';

class ChatBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this.onContent = this.onContent.bind(this);
    this.contentAreaKeyDown = this.contentAreaKeyDown.bind(this);
  }

  onContent(event) {
    this.setState({
      value: event.target.value
    });
  }

  contentAreaKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.onNewPost(this.state.value);
      this.state.value = '';
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUserName.name}/>
        <input className="chatbar-message" onChange={this.onContent} placeholder="Type a message and hit ENTER"
          onKeyDown={this.contentAreaKeyDown} value={this.state.value}/>
      </footer>
    );
  }
}

export default ChatBar;