import { connect } from 'react-redux'
import Loggedin from '../components/Loggedin'

const mapStateToProps = state => {
  	return { messages:state.messages }
}

const LoggedinContainer = connect(
	mapStateToProps
)(Loggedin)

export default LoggedinContainer