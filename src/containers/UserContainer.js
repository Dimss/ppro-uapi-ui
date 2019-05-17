import User from '../views/user/User'
import {connect} from 'react-redux'


const mapStateToProps = (state, ownProps) => ({
    user: state.userReducer.email
});

const mapDispatchToProps = (dispatch) => ({dispatch});

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);

export default UserContainer;