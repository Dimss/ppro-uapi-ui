import Login from '../views/login/Login'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    identity: state.loginReducer.identity
});

const mapDispatchToProps = (dispatch) => ({dispatch});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default LoginContainer;