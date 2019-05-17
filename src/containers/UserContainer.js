import User from '../views/user/User'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    email: state.userReducer.email,
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
});

const mapDispatchToProps = (dispatch) => ({dispatch});

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);

export default UserContainer;