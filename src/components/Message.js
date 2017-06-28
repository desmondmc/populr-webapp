import React from 'react'

function Message(props) {
	const message = props.message
	return (
		<div className="MessageCircleContainer" onClick={() => props.onMessageClick(message)}>
			<div className="MessageCircle">{props.number}</div>
		</div>
	)
}

export default Message