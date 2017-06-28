import { connect } from 'react-redux'
import Login from '../components/Login'

const mapStateToProps = state => {
  	return { 
  		user: state.user,
  		messageToPlay: state.messageToPlay
  	}
}

const LoginContainer = connect(
	mapStateToProps
)(Login)

export default LoginContainer