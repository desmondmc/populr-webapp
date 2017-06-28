import { connect } from 'react-redux'
import { dismissMessage } from '../state/Action'
import SpeedMessage from '../components/SpeedMessage'

const mapStateToProps = state => {
  	return { 
  		message:state.messageToPlay
  	}
}

const mapDispatchToProps = dispatch => {
	return {
	  	onDismissClick: () => {
        const action = dismissMessage()
        dispatch(action)
	  	}
  	}
}

const SpeedMessageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SpeedMessage)

export default SpeedMessageContainer