import React from 'react'

function Message(props) {
	return (
		<div className="MessageCircleContainer">
			<div className="MessageCircle">{props.text}</div>
		</div>
	)
}

export default Message