import Signup from '../views/signup/Signup'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    email: state.signupReducer.email,
    password: state.signupReducer.password,
    firstName: state.signupReducer.firstName,
    lastName: state.signupReducer.lastName
});

const mapDispatchToProps = (dispatch) => ({dispatch});

const SignupContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Signup);

export default SignupContainer;