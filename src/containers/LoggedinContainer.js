import { connect } from 'react-redux'
import Loggedin from '../components/Loggedin'

const mapStateToProps = state => {
  	return { messages:state.messages }
}

const LoginContainer = connect(
	mapStateToProps
)(Loggedin)

export default LoginContainer