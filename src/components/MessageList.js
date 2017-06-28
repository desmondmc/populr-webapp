import React from 'react'
import Message from './Message'

const MessageList = ({ messages, onMessageClick }) => {
    return (
        <div>
            {messages.map((message, index) => 
                (
                    <Message 
                        key={message.id} 
                        number={index+1} 
                        message={message.message}
                        onMessageClick={() => onMessageClick(message.message)}
                    />
                )
             )}
        </div>
    );
}

export default MessageList