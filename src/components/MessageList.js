import React from 'react'
import Message from './Message'

function MessageList(props) {
    const messages = props.messages

    return (
        <div>
            {messages.map((message, index) => 
                 (<Message key={message.id} text={index+1} />)
             )}
        </div>
    );
}

export default MessageList