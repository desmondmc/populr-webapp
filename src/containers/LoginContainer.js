import { connect } from 'react-redux'
import Login from '../Login'

const mapStateToProps = state => {
  	return { token:state.token }
}

const LoginContainer = connect(
	mapStateToProps
)(Login)

export default LoginContainer