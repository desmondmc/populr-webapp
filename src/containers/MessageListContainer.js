import { connect } from 'react-redux'
import { playMessage } from '../state/Action'
import MessageList from '../components/MessageList'

const mapStateToProps = state => {
  	return { 
  		messages:state.messages
  	}
}

const mapDispatchToProps = dispatch => {
  return {
      onMessageClick: message => {
      const action = playMessage(message)
        dispatch(action)
      }
    }
}

const MessageListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageList)

export default MessageListContainer