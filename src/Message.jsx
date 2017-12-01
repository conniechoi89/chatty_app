import React, {Component} from 'react';

class Message extends Component {
  constructor() {
    super();
  //   this.state = {
  //     messageContent: '',
  //     currentUser:''
  //   };
  // }
      this.state = {
      currentUser: {name: "bob"},
      messages: []
    };
  }

  render() {
    // const username = this.state.currentUser;
    // const oldUserName = this.state.currentUser.name;


    console.log("props!", this.props);
    if (this.props.type === 'postNotification') {

     return( <div className="message system">
            <span className="message-username">{ this.props.user }</span>
          <div className="message system">
            <span className="message-content">{ this.props.content }</span>
          </div>
          </div>
          )

    } else {
    return (
          <div className="message">
            <span className="message-username">{ this.props.user }</span>
            <span className="message-content">{ this.props.content }</span>
          </div>

    );
  }
  }
}


export default Message;