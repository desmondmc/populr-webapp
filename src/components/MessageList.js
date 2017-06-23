import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
    render() {
        let messages = this.props.messages
        return (
        <div>
            {messages.map(message => (
                <Message key={message.id} text={message.message} />
            ))}
        </div>
        );
    }
}

export default MessageList